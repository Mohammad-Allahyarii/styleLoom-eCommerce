import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

import {
  PROMO_CODES,
  QUANTITY_MAX,
  QUANTITY_MIN,
  getDiscount,
  getItemCount,
  getLineId,
  getSubtotal,
  getTotal,
  sanitizeQuantity,
} from '@/stores/cartCalculations';
import type { AddToCartInput, CartItemType, PromoResult } from '@/types/cart';

interface CartState {
  items: CartItemType[];
  appliedPromoCode: string | null;
}

interface CartActions {
  addItem: (input: AddToCartInput) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  applyPromoCode: (code: string) => PromoResult;
  removePromoCode: () => void;
}

export type CartStore = CartState & CartActions;

// Restoring an empty cart invalidates the persisted promo code, and
// unknown codes are dropped so a stale key can never grant a discount.
const mergePersistedState = (
  persisted: Partial<CartState> | undefined,
): Partial<CartState> => {
  if (!persisted || !Array.isArray(persisted.items)) return {};

  const validItems = persisted.items.filter(
    (item): item is CartItemType =>
      typeof item === 'object' &&
      item !== null &&
      typeof item.id === 'string' &&
      typeof item.productId === 'string' &&
      typeof item.title === 'string' &&
      typeof item.image === 'string' &&
      typeof item.category === 'string' &&
      typeof item.size === 'string' &&
      typeof item.unitPrice === 'number' &&
      Number.isFinite(item.unitPrice) &&
      typeof item.quantity === 'number' &&
      Number.isFinite(item.quantity),
  );

  const promoCode =
    typeof persisted.appliedPromoCode === 'string' &&
    persisted.appliedPromoCode in PROMO_CODES &&
    validItems.length > 0
      ? persisted.appliedPromoCode
      : null;

  return { items: validItems, appliedPromoCode: promoCode };
};

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set, get) => ({
        items: [],
        appliedPromoCode: null,

        addItem: (input) => {
          const quantity =
            sanitizeQuantity(input.quantity ?? QUANTITY_MIN) ?? QUANTITY_MIN;

          set(
            (state) => {
              const lineId = getLineId(input.productId, input.size);
              const existingItem = state.items.find(
                (item) => item.id === lineId,
              );

              if (!existingItem) {
                const newItem: CartItemType = {
                  id: lineId,
                  productId: input.productId,
                  title: input.title,
                  image: input.image,
                  category: input.category,
                  size: input.size,
                  unitPrice: input.unitPrice,
                  quantity,
                };

                return { items: [...state.items, newItem] };
              }

              return {
                items: state.items.map((item) =>
                  item.id === lineId
                    ? {
                        ...item,
                        quantity: Math.min(
                          item.quantity + quantity,
                          QUANTITY_MAX,
                        ),
                      }
                    : item,
                ),
              };
            },
            false,
            'cart/addItem',
          );
        },

        removeItem: (id) => {
          set(
            (state) => {
              const remainingItems = state.items.filter(
                (item) => item.id !== id,
              );

              return {
                items: remainingItems,
                appliedPromoCode:
                  remainingItems.length === 0 ? null : state.appliedPromoCode,
              };
            },
            false,
            'cart/removeItem',
          );
        },

        setQuantity: (id, quantity) => {
          const sanitizedQuantity = sanitizeQuantity(quantity);
          if (sanitizedQuantity === null) return;

          set(
            (state) => ({
              items: state.items.map((item) =>
                item.id === id
                  ? { ...item, quantity: sanitizedQuantity }
                  : item,
              ),
            }),
            false,
            'cart/setQuantity',
          );
        },

        clearCart: () => {
          set({ items: [], appliedPromoCode: null }, false, 'cart/clearCart');
        },

        applyPromoCode: (code) => {
          const trimmedCode = code.trim();
          if (trimmedCode === '') {
            return { success: false, reason: 'empty' };
          }

          if (get().items.length === 0) {
            return { success: false, reason: 'empty-cart' };
          }

          const matchingCode = Object.keys(PROMO_CODES).find(
            (candidate) =>
              candidate.toLowerCase() === trimmedCode.toLowerCase(),
          );
          if (!matchingCode) {
            return { success: false, reason: 'invalid' };
          }

          set({ appliedPromoCode: matchingCode }, false, 'cart/applyPromoCode');

          return { success: true };
        },

        removePromoCode: () => {
          set({ appliedPromoCode: null }, false, 'cart/removePromoCode');
        },
      }),
      {
        name: 'cart-store',
        version: 1,
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
          items: state.items,
          appliedPromoCode: state.appliedPromoCode,
        }),
        merge: (persistedState, currentState) => ({
          ...currentState,
          ...mergePersistedState(persistedState as Partial<CartState>),
        }),
      },
    ),
    { name: 'cart-store', enabled: import.meta.env.DEV },
  ),
);

// Selectors return primitives or existing state references so that
// component subscriptions only re-render on meaningful changes.
export const selectItems = (state: CartStore): CartItemType[] => state.items;
export const selectAppliedPromoCode = (state: CartStore): string | null =>
  state.appliedPromoCode;
export const selectItemCount = (state: CartStore): number =>
  getItemCount(state.items);
export const selectSubtotal = (state: CartStore): number =>
  getSubtotal(state.items);
export const selectDiscount = (state: CartStore): number =>
  getDiscount(state.items, state.appliedPromoCode);
export const selectTotal = (state: CartStore): number =>
  getTotal(state.items, state.appliedPromoCode);
