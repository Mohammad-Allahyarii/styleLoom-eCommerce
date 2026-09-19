import type { CartItemType } from '@/Pages/ShoppintCart/types/cart';
import product_image_1 from '@/assets/images/product/1.png';
import product_image_2 from '@/assets/images/product/2.png';
import product_image_3 from '@/assets/images/product/3.png';
import product_image_4 from '@/assets/images/product/4.png';

// Static mock data for the Shopping Cart page. A data-access layer
// (async fetch/update/remove) will replace this in a later step.
export const CART_ITEMS: CartItemType[] = [
  {
    id: 'cart-1',
    productId: '1',
    title: 'Timeless A-line Evening Dress',
    image: product_image_1,
    category: 'womenswear',
    size: 'Ankle-length',
    unitPrice: 109.99,
    quantity: 1,
  },
  {
    id: 'cart-2',
    productId: '2',
    title: 'Floral Bloom Maxi Dress',
    image: product_image_2,
    category: 'womenswear',
    size: 'Slim Fit',
    unitPrice: 54.99,
    quantity: 2,
  },
  {
    id: 'cart-3',
    productId: '4',
    title: 'Urban Chic Handbag',
    image: product_image_4,
    category: 'accessories',
    size: 'Spacious',
    unitPrice: 49.99,
    quantity: 1,
  },
  {
    id: 'cart-4',
    productId: '3',
    title: 'Elegant Evening Gown',
    image: product_image_3,
    category: 'womenswear',
    size: 'Flowing skirt',
    unitPrice: 89.99,
    quantity: 3,
  },
];
