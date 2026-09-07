import facebook_logo from '@/assets/icons/facebook.svg';
import instagram_logo from '@/assets/icons/instagram-logo.svg';
import linkedin_logo from '@/assets/icons/linkedin.svg';
import twitter_logo from '@/assets/icons/twitter-154.svg';

type FooterItem = {
  id: number;
  title: string;
};

export const FOOTER_ITEMS: FooterItem[] = [
  { id: 1, title: 'T-SHIRT' },
  { id: 2, title: 'LONG-SLEEVE T-SHIRT' },
  { id: 3, title: 'RAGLAN SLEEVE SHIRT' },
  { id: 4, title: 'CROP TOP' },
  { id: 5, title: 'V-NECK SHIRT' },
];

export const FOOTER_SOCIALS = [
  {
    id: 1,
    title: 'Instagram',
    link: 'https://www.instagram.com/',
    icon: instagram_logo,
  },
  {
    id: 2,
    title: 'Facebook',
    link: 'https://www.facebook.com/',
    icon: facebook_logo,
  },
  { id: 3, title: 'Twitter', link: 'https://twitter.com/', icon: twitter_logo },
  {
    id: 4,
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/',
    icon: linkedin_logo,
  },
];

export const FOOTER_HOME_LINKS = [
  { id: 1, title: 'Why Us', href: '' },
  { id: 2, title: 'About Us', href: '' },
  { id: 3, title: 'Testimonials', href: '' },
  { id: 4, title: "FAQ's", href: '' },
];

export const FOOTER_PRODUCTS_LINKS = [
  { id: 1, title: 'Menswear', href: '' },
  { id: 2, title: 'Womenswear', href: '' },
  { id: 3, title: 'kidswear', href: '' },
];
