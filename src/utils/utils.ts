import { PRODUCTS, type PRODUCT_type } from '@/constants/constants';
import type { AddToCartInput } from '@/types/cart';

export function getRandomItems<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const itemAtI = shuffled[i];
    const itemAtJ = shuffled[j];
    // both indices are always within bounds here; the guard only satisfies
    // noUncheckedIndexedAccess and never triggers
    if (itemAtI === undefined || itemAtJ === undefined) continue;
    shuffled[i] = itemAtJ;
    shuffled[j] = itemAtI;
  }

  return shuffled.slice(0, count);
}

// Unknown ids are a normal navigation state, not an exception: the caller
// renders its own not-found UI instead of relying on a thrown error.
export function findProductInProducts(
  productID: string | undefined,
): PRODUCT_type | undefined {
  if (!productID) return undefined;

  return PRODUCTS.find((product) => product.id === productID);
}

// Adapts the catalog product shape to the cart store's input contract:
// id → productId, ClotheSize → size. The cart stores only the user's
// decision; title/image/price are resolved live by the store.
export const toAddToCartInput = (
  product: PRODUCT_type,
  size: string = product.ClotheSize,
): AddToCartInput => ({
  productId: product.id,
  size,
});
