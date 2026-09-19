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

export interface CartSummaryType {
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
}
