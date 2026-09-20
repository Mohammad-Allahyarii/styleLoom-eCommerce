// Shared cart domain types. This is the single source of truth for the
// cart store; the page-level copy under src/Pages/ShoppintCart/types/
// is removed once the page migration repoints its imports.

export interface CartItemType {
  id: string;
  productId: string;
  title: string;
  image: string;
  category: string;
  size: string;
  unitPrice: number;
  quantity: number;
}

// Data a caller supplies to add a line; the store derives `id` from
// productId + size and applies its own quantity default/clamping.
export interface AddToCartInput {
  productId: string;
  title: string;
  image: string;
  category: string;
  size: string;
  unitPrice: number;
  quantity?: number;
}

export type PromoResult =
  | { success: true }
  | { success: false; reason: 'empty' | 'invalid' | 'empty-cart' };
