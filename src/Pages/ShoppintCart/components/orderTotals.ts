import type {
  CartItemType,
  CartSummaryType,
} from '@/Pages/ShoppintCart/types/cart';

export const SHIPPING_FLAT_RATE = 10;

export const calculateOrderTotals = (
  items: CartItemType[],
): CartSummaryType => {
  const subtotal = items.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0,
  );
  const shipping = items.length > 0 ? SHIPPING_FLAT_RATE : 0;
  const discount = 0;
  const total = subtotal + shipping - discount;

  return { subtotal, shipping, discount, total };
};
