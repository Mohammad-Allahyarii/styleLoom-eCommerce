import { type LucideIcon, ShoppingCart } from 'lucide-react';

// Desktop nav links are hand-written in LayoutNavbar.tsx; keep the two lists in sync.
export interface NavbarMenuItemType {
  title: string;
  to: string;
  icon?: LucideIcon;
}

export const NAV_ITEMS: NavbarMenuItemType[] = [
  { title: 'Home', to: '/' },
  { title: 'Products', to: 'products' },
  { title: 'Cart', to: '/shopping-cart', icon: ShoppingCart },
  { title: 'Contact', to: 'contact-us' },
];
