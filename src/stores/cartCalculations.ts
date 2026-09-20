import type { CartItemType } from '@/types/cart';

// Pure cart math — no React, no store imports. Kept free of side
// effects so both the store and future callers can reuse it safely.

export const QUANTITY_MIN = 1;
export const QUANTITY_MAX = 99;

// Only a percentage promo for now; values are percent off the subtotal.
export const PROMO_CODES: Record<string, number> = {
  SAVE10: 10,
};

export const roundToCents = (value: number): number =>
  Math.round(value * 100) / 100;

// A cart line is identified by product + size: the same product in a
// different size is a separate line.
export const getLineId = (productId: string, size: string): string =>
  `${productId}-${size}`;

export const getSubtotal = (items: CartItemType[]): number =>
  roundToCents(
    items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0),
  );

export const getDiscount = (
  items: CartItemType[],
  promoCode: string | null,
): number => {
  if (!promoCode) return 0;

  const percentOff = PROMO_CODES[promoCode];
  if (!percentOff) return 0;

  return roundToCents((getSubtotal(items) * percentOff) / 100);
};

export const getTotal = (
  items: CartItemType[],
  promoCode: string | null,
): number =>
  roundToCents(Math.max(getSubtotal(items) - getDiscount(items, promoCode), 0));

export const getItemCount = (items: CartItemType[]): number =>
  items.reduce((sum, item) => sum + item.quantity, 0);

// Guards numeric input coming from the UI: rejects non-finite values,
// rounds to an integer, then clamps to the configured range.
export const sanitizeQuantity = (value: number): number | null => {
  if (!Number.isFinite(value)) return null;

  const rounded = Math.round(value);
  return Math.min(Math.max(rounded, QUANTITY_MIN), QUANTITY_MAX);
};
