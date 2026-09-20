import { PRODUCTS, type PRODUCT_type } from '@/constants/constants';
import type { AddToCartInput } from '@/types/cart';

export function getRandomItems<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, count);
}

export function findProductInProducts(
  productID: string | undefined,
): PRODUCT_type {
  if (productID == undefined) {
    throw Error('wrong product id - product not found');
  } else {
    const mainProduct = PRODUCTS.filter((product) => product.id == productID);

    return mainProduct[0];
  }
}

// Adapts the catalog product shape to the cart store's input contract:
// id → productId, ClotheSize → size, string price → numeric unitPrice.
export const toAddToCartInput = (
  product: PRODUCT_type,
  size: string = product.ClotheSize,
): AddToCartInput => ({
  productId: product.id,
  title: product.title,
  image: product.image,
  category: product.category,
  size,
  unitPrice: Number(product.price),
});
