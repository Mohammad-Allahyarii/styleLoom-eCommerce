export interface RatingBreakdownItem {
  stars: number;
  percentage: number;
}

export interface ProductRating {
  average: number;
  count: number;
  breakdown: RatingBreakdownItem[];
}

export interface Product {
  id: string;
  title: string;
  description?: string;
  inStock?: boolean;
  image: string;
  images?: string[];
  price: number | string;
  features?: string[];
  sizes?: string[];
  rating?: ProductRating;
}