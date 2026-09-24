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
import type {
  AddToCartInput,
  CartItemType,
  CartLine,
  PromoResult,
  ResolvedCartLine,
} from '@/types/cart';
import { findProductInProducts } from '@/utils/utils';

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

// The single join point between a stored cart line and the product catalog.
// Title/image/price/category are NEVER persisted; when the catalog moves to
// an async data-access layer, only this function changes.
export const resolveCartLine = (item: CartItemType): CartLine => {
  const product = findProductInProducts(item.productId);

  if (!product) {
    return { ...item, available: false };
  }

  return {
    ...item,
    available: true,
    title: product.title,
    image: product.image,
    category: product.category,
    unitPrice: Number(product.price),
  };
};

// v1 lines baked product data in; v2 keeps only the user's decision, so the
// migration maps each old entry down to its four surviving fields and drops
// malformed entries outright.
const migrateV1Item = (item: unknown): CartItemType | null => {
  if (typeof item !== 'object' || item === null) return null;

  const { id, productId, size, quantity } = item as Record<string, unknown>;

  if (
    typeof id !== 'string' ||
    typeof productId !== 'string' ||
    typeof size !== 'string' ||
    typeof quantity !== 'number' ||
    !Number.isFinite(quantity)
  ) {
    return null;
  }

  return { id, productId, size, quantity };
};

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
      typeof item.size === 'string' &&
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
                  size: input.size,
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
        version: 2,
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
          items: state.items,
          appliedPromoCode: state.appliedPromoCode,
        }),
        migrate: (persistedState) => {
          const persisted = persistedState as Partial<CartState> | undefined;
          const items = Array.isArray(persisted?.items) ? persisted.items : [];

          return {
            items: items
              .map(migrateV1Item)
              .filter((item): item is CartItemType => item !== null),
            appliedPromoCode:
              typeof persisted?.appliedPromoCode === 'string'
                ? persisted.appliedPromoCode
                : null,
          };
        },
        merge: (persistedState, currentState) => ({
          ...currentState,
          ...mergePersistedState(persistedState as Partial<CartState>),
        }),
      },
    ),
    { name: 'cart-store', enabled: import.meta.env.DEV },
  ),
);

const resolveAvailableLines = (items: CartItemType[]): ResolvedCartLine[] =>
  // single source of resolution: the reference-keyed cache below, so the
  // numeric selectors never resolve independently
  resolveItemsCached(items).filter(
    (line): line is ResolvedCartLine => line.available,
  );

// Selectors return primitives or existing state references so that
// component subscriptions only re-render on meaningful changes.
export const selectItems = (state: CartStore): CartItemType[] => state.items;
// Memoized resolution keyed on the raw items reference. The selector MUST
// return the same array reference until state.items changes — a fresh array
// per call looks like new state to useSyncExternalStore (Object.is compare)
// and causes the "Maximum update depth exceeded" render loop.
let resolvedItemsCache: { items: CartItemType[]; resolved: CartLine[] } | null =
  null;

const resolveItemsCached = (items: CartItemType[]): CartLine[] => {
  if (resolvedItemsCache === null || resolvedItemsCache.items !== items) {
    resolvedItemsCache = {
      items,
      resolved: items.map(resolveCartLine),
    };
  }

  return resolvedItemsCache.resolved;
};

export const selectResolvedItems = (state: CartStore): CartLine[] =>
  resolveItemsCached(state.items);
export const selectAppliedPromoCode = (state: CartStore): string | null =>
  state.appliedPromoCode;
export const selectItemCount = (state: CartStore): number =>
  getItemCount(resolveAvailableLines(state.items));
// distinct cart lines: each entry in items IS one line (getLineId = product + size),
// unlike selectItemCount which sums quantities
export const selectLineCount = (state: CartStore): number => state.items.length;
export const selectSubtotal = (state: CartStore): number =>
  getSubtotal(resolveAvailableLines(state.items));
export const selectDiscount = (state: CartStore): number =>
  getDiscount(resolveAvailableLines(state.items), state.appliedPromoCode);
export const selectTotal = (state: CartStore): number =>
  getTotal(resolveAvailableLines(state.items), state.appliedPromoCode);
