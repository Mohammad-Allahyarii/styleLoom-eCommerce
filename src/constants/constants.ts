import crafting_main_icon_1 from '@/assets/images/crafting-trend/1-crafting-trend-main.svg';
import crafting_icon_1 from '@/assets/images/crafting-trend/1-crafting-trend.svg';
import crafting_main_icon_2 from '@/assets/images/crafting-trend/2-crafting-trend-main.svg';
import crafting_icon_2 from '@/assets/images/crafting-trend/2-crafting-trend.svg';
import crafting_main_icon_3 from '@/assets/images/crafting-trend/3-crafting-trend-main.svg';
import crafting_icon_3 from '@/assets/images/crafting-trend/3-crafting-trend.svg';
import crafting_main_icon_4 from '@/assets/images/crafting-trend/4-crafting-trend-main.svg';
import crafting_icon_4 from '@/assets/images/crafting-trend/4-crafting-trend.svg';
import crafting_main_icon_5 from '@/assets/images/crafting-trend/5-crafting-trend-main.svg';
import crafting_icon_5 from '@/assets/images/crafting-trend/5-crafting-trend.svg';
import crafting_main_icon_6 from '@/assets/images/crafting-trend/6-crafting-trend-main.svg';
import crafting_icon_6 from '@/assets/images/crafting-trend/6-crafting-trend.svg';

export const HERO_SECTION_TITLE: string = 'Elevate your style with styleloom';

export const HERO_SECTION_DESCRIPTION: string =
  'Explore a world of fashion at StyleLoom, where trends meet affordability. Immerse yourself in the latest styles and seize exclusive promotions.';

interface CATEGORIES_type {
  id: number;
  title: string;
  href: string;
}

export const CATEGORIES: CATEGORIES_type[] = [
  { id: 1, title: 'All', href: '' },
  { id: 2, title: 'Mens', href: '' },
  { id: 3, title: 'Womens', href: '' },
  { id: 4, title: 'Kids', href: '' },
];



interface HERO_SECTION_DATAS_type {
  id: number;
  title: string;
  desc: string;
}

export const HERO_SECTION_DATAS: HERO_SECTION_DATAS_type[] = [
  { id: 1, title: '1500 +', desc: 'Fashion Products' },
  { id: 2, title: '50 +', desc: 'New arrivals every month.' },
  { id: 3, title: '30%', desc: 'OFF on select items.' },
  { id: 4, title: '95%', desc: 'Customer Satisfaction Rate' },
];



// crafting home section
export interface CRAFTING_TREND_SECTION_type {
  id: number;
  mainIcon: string;
  sideIcon: string;
  title: string;
  desc: string;
}

export const CRAFTING_TREND_SECTION: CRAFTING_TREND_SECTION_type[] = [
  {
    id: 1,
    mainIcon: crafting_main_icon_1,
    sideIcon: crafting_icon_1,
    title: 'Passionate Craftsmanship',
    desc: 'Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation.',
  },
  {
    id: 2,
    mainIcon: crafting_main_icon_2,
    sideIcon: crafting_icon_2,
    title: 'Fashion Forward',
    desc: `We're more than a brand; we're trendsetters, curating styles that empower and inspire confidence.`,
  },
  {
    id: 3,
    mainIcon: crafting_main_icon_3,
    sideIcon: crafting_icon_3,
    title: 'Customer-Centric Approach',
    desc: 'At StyleLoom, our customers are at the heart of everything we do. Your satisfaction is our measure of success.',
  },
  {
    id: 4,
    mainIcon: crafting_main_icon_4,
    sideIcon: crafting_icon_4,
    title: 'Global Inspiration',
    desc: 'Influenced by global trends, we bring you a diverse and dynamic collection, embodying the spirit of fashion from around the world.',
  },
  {
    id: 5,
    mainIcon: crafting_main_icon_5,
    sideIcon: crafting_icon_5,
    title: 'Empowering Your Style',
    desc: 'Beyond clothing, StyleLoom is a lifestyle. Join us on a journey of self-expression and empowerment through fashion.',
  },
  {
    id: 6,
    mainIcon: crafting_main_icon_6,
    sideIcon: crafting_icon_6,
    title: 'Sustainable Practices',
    desc: 'StyleLoom is committed to sustainability, integrating eco-friendly practices into our production process.',
  },
];



// navigating styleloom home section

interface NAVIGATING_STYLELOOM_SECTION_type {
  id: number;
  thumbnail: string;
  slug: string | null;
  title: string;
  price: string;
  ClotheSize: string;
  category: "womenswear" | "accessories";
  desc: string;
}

export const NAVIGATING_STYLELOOM_SECTION: NAVIGATING_STYLELOOM_SECTION_type[] = [
  {
    id: 1,
    thumbnail: "",
    slug: null,
    title: '',
    price: "",
    ClotheSize: "",
    category: "accessories",
    desc: 'Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation.',
  },
]