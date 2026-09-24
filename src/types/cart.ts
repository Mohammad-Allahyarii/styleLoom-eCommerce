// Shared cart domain types. The persisted cart stores ONLY the user's
// decision (productId + size + quantity); product data is resolved live
// from the catalog at render/calculation time (see resolveCartLine).

export interface CartItemType {
  id: string;
  productId: string;
  size: string;
  quantity: number;
}

// Data a caller supplies to add a line; the store derives `id` from
// productId + size and applies its own quantity default/clamping.
export interface AddToCartInput {
  productId: string;
  size: string;
  quantity?: number;
}

// A cart line joined with its catalog data at read time.
export interface ResolvedCartLine extends CartItemType {
  available: true;
  title: string;
  image: string;
  category: string;
  unitPrice: number;
}

// A persisted line whose productId no longer resolves in the catalog;
// it is excluded from calculations and shows only a remove affordance.
export interface UnavailableCartLine extends CartItemType {
  available: false;
}

export type CartLine = ResolvedCartLine | UnavailableCartLine;

export type PromoResult =
  | { success: true }
  | { success: false; reason: 'empty' | 'invalid' | 'empty-cart' };
