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
// product images
import product_image_1 from '@/assets/images/product/1.png';
import product_image_2 from '@/assets/images/product/2.png';
import product_image_3 from '@/assets/images/product/3.png';
import product_image_4 from '@/assets/images/product/4.png';
import product_image_5 from '@/assets/images/product/5.png';
import product_image_6 from '@/assets/images/product/6.png';
// user review profies
import user_review_profile_1 from '@/assets/images/userReview-section/prof-1.svg';
import user_review_profile_2 from '@/assets/images/userReview-section/prof-2.svg';
import user_review_profile_3 from '@/assets/images/userReview-section/prof-3.svg';
import user_review_profile_4 from '@/assets/images/userReview-section/prof-4.svg';
import user_review_profile_5 from '@/assets/images/userReview-section/prof-5.svg';
import user_review_profile_6 from '@/assets/images/userReview-section/prof-6.svg';

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
export const PRODUCTS_CATEGORY = ['womenswear', 'accessories', 'kids'] as const;

export type ProductsCategoryType = (typeof PRODUCTS_CATEGORY)[number];

export interface PRODUCT_type {
  id: number;
  image: string;
  slug: string | null;
  title: string;
  price: string;
  ClotheSize: string;
  category: ProductsCategoryType;
  desc: string;
}

export const PRODUCTS: PRODUCT_type[] = [
  {
    id: 1,
    image: product_image_1,
    slug: "1",
    title: 'Timeless A-line Evening Dress',
    price: '109.99',
    ClotheSize: 'Ankle-length',
    category: 'womenswear',
    desc: 'Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation.',
  },
  {
    id: 2,
    image: product_image_2,
    slug: "2",
    title: 'Floral Bloom Maxi Dress',
    price: '54.99',
    ClotheSize: 'Slim Fit',
    category: 'womenswear',
    desc: 'Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation.',
  },
  {
    id: 3,
    image: product_image_3,
    slug: "3",
    title: 'Elegant Evening Gown',
    price: '89.99',
    ClotheSize: 'Flowing skirt',
    category: 'womenswear',
    desc: 'Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation.',
  },
  {
    id: 4,
    image: product_image_4,
    slug: "4",
    title: 'Urban Chic Handbag',
    price: '49.99',
    ClotheSize: 'Spacious',
    category: 'accessories',
    desc: 'Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation.',
  },
  {
    id: 5,
    image: product_image_5,
    slug: "5",
    title: 'Sophisticate Sun Hat',
    price: '24.99',
    ClotheSize: 'One size fits all',
    category: 'accessories',
    desc: 'Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation.',
  },
  {
    id: 6,
    image: product_image_6,
    slug: "6",
    title: 'Boho Chic Printed Scarf',
    price: '19.99',
    ClotheSize: 'Lightweight',
    category: 'womenswear',
    desc: 'Every garment at StyleLoom is crafted with passion, reflecting our commitment to quality and innovation.',
  },
];

// USER REVIEW
export interface USER_REVIEW_TYPE {
  id: number;
  name: string;
  profileImage: string;
  rate: number;
  userLocation: string;
  review: string;
}

export const USER_REVIEWS: USER_REVIEW_TYPE[] = [
  {
    id: 1,
    name: 'Sarah Thompson',
    profileImage: user_review_profile_1,
    rate: 4.2,
    userLocation: 'New York, USA',
    review:
      "StyleLoom exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!",
  },
  {
    id: 2,
    name: 'Rajesh Patel',
    profileImage: user_review_profile_2,
    rate: 5,
    userLocation: 'Mumbai, India',
    review:
      'Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!',
  },
  {
    id: 3,
    name: 'Emily Walker',
    profileImage: user_review_profile_3,
    rate: 4.7,
    userLocation: 'London, UK',
    review:
      'Adorable and comfortable! My daughter loves her new outfit. Thank you, StyleLoom, for dressing our little fashionista.',
  },
  {
    id: 4,
    name: 'Alejandro Martinez',
    profileImage: user_review_profile_4,
    rate: 5,
    userLocation: 'Barcelona, Spain',
    review:
      "Impressed by the quality and style. These shoes turned heads at every event. StyleLoom, you've gained a loyal customer!",
  },
  {
    id: 2.5,
    name: 'Priya Sharma',
    profileImage: user_review_profile_5,
    rate: 5,
    userLocation: 'Delhi, India',
    review:
      'Perfect fit and exceptional quality. These jeans have become my go-to for casual and chic outings.',
  },
  {
    id: 6,
    name: 'Maria Rodriguez',
    profileImage: user_review_profile_6,
    rate: 1.3,
    userLocation: 'Mexico City, Mexico',
    review:
      "Stylish sneakers that don't compromise on comfort. StyleLoom knows how to balance fashion and functionality.",
  },
];

// FAQ

export const FAQ_CATEGORIES = [
  'all',
  'ordering',
  'shipping',
  'returns',
  'support',
] as const;

export type CategoriesType = (typeof FAQ_CATEGORIES)[number];

export interface FAQ_TYPE {
  id: number;
  questionType: CategoriesType;
  question: string;
  answre: string;
}
export const FAQS: FAQ_TYPE[] = [
  // ============ ORDERING (6 items) ============
  {
    id: 1,
    questionType: 'ordering',
    question: 'How can I place an order on StyleLoom?',
    answre:
      'Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.',
  },
  {
    id: 2,
    questionType: 'ordering',
    question: 'What payment methods do you accept?',
    answre:
      'We accept a variety of payment methods, including credit/debit cards, net banking, and select digital wallets. Choose the option that suits you best during checkout.',
  },
  {
    id: 3,
    questionType: 'ordering',
    question: 'Can I use multiple discount codes on a single order?',
    answre:
      'No, only one discount code can be applied per order. Choose the code that gives you the best value before proceeding to checkout.',
  },
  {
    id: 4,
    questionType: 'ordering',
    question: 'Is there a minimum order value required?',
    answre:
      'There is no minimum order value. You can place an order for any amount, but free shipping is available for orders above a certain threshold.',
  },
  {
    id: 5,
    questionType: 'ordering',
    question: 'Can I order products that are out of stock?',
    answre:
      'Unfortunately, we cannot accept orders for out-of-stock items. However, you can sign up for restock notifications to be alerted when they become available.',
  },
  {
    id: 6,
    questionType: 'ordering',
    question: 'Do I need to create an account to place an order?',
    answre:
      'No, you can checkout as a guest. However, creating an account allows you to track orders, save addresses, and earn rewards faster.',
  },

  // ============ SHIPPING (6 items) ============
  {
    id: 7,
    questionType: 'shipping',
    question: 'How can I place an order on StyleLoom?',
    answre:
      'Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase.',
  },
  {
    id: 8,
    questionType: 'shipping',
    question: 'What payment methods do you accept?',
    answre:
      'We accept a variety of payment methods, including credit/debit cards, net banking, and select digital wallets. Choose the option that suits you best during checkout.',
  },
  {
    id: 9,
    questionType: 'shipping',
    question: 'How can I modify or cancel my order after placing it?',
    answre:
      'Unfortunately, once an order is confirmed, modifications or cancellations may not be possible. Please review your order carefully before completing the purchase.',
  },
  {
    id: 10,
    questionType: 'shipping',
    question: 'How do I initiate a return?',
    answre:
      'Visit our Returns page and follow the provided instructions. Ensure your item meets our return criteria, and our team will guide you through the process.',
  },
  {
    id: 11,
    questionType: 'shipping',
    question: 'How can I track my order?',
    answre:
      "Once your order is dispatched, you'll receive a tracking number via email. Use this number to track your package in real-time on our website.",
  },
  {
    id: 12,
    questionType: 'shipping',
    question: 'Do you offer exchanges for products?',
    answre:
      "At this time, we don't offer direct product exchanges. If you'd like a different item, please initiate a return and place a new order.",
  },

  // ============ RETURNS (6 items) ============
  {
    id: 13,
    questionType: 'returns',
    question: 'What is your return policy?',
    answre:
      'We accept returns within 30 days of delivery. Items must be unused, in original packaging, and with all tags attached. Sale items are final sale.',
  },
  {
    id: 14,
    questionType: 'returns',
    question: 'How do I initiate a return?',
    answre:
      'Visit our Returns page and follow the provided instructions. Ensure your item meets our return criteria, and our team will guide you through the process.',
  },
  {
    id: 15,
    questionType: 'returns',
    question: 'How long does it take to process a return?',
    answre:
      "Returns are processed within 5-7 business days after we receive your package. You'll receive a confirmation email once your refund is initiated.",
  },
  {
    id: 16,
    questionType: 'returns',
    question: 'Will I receive a full refund for my return?',
    answre:
      "Yes, you'll receive a full refund for the product price. However, shipping fees are non-refundable unless the return is due to our error.",
  },
  {
    id: 17,
    questionType: 'returns',
    question: 'Can I return a gift item?',
    answre:
      'Yes, gift items can be returned for store credit. The original purchaser will receive a refund, or you can receive a gift card for the amount.',
  },
  {
    id: 18,
    questionType: 'returns',
    question: 'Do I have to pay for return shipping?',
    answre:
      "Return shipping costs are the customer's responsibility unless the item is defective or we made an error. We provide a prepaid label for defective items.",
  },

  // ============ SUPPORT (6 items) ============
  {
    id: 19,
    questionType: 'support',
    question: 'How can I contact customer support?',
    answre:
      "You can reach our support team via email at support@styleloom.com, live chat on our website, or by phone at 1-800-555-0199. We're available 24/7.",
  },
  {
    id: 20,
    questionType: 'support',
    question: 'What are your support hours?',
    answre:
      'Our customer support team is available 24 hours a day, 7 days a week. Feel free to reach out anytime via live chat or email for immediate assistance.',
  },
  {
    id: 21,
    questionType: 'support',
    question: 'How quickly do you respond to support tickets?',
    answre:
      'We aim to respond to all support tickets within 24 hours. Most inquiries are resolved within 2-3 business days depending on complexity.',
  },
  {
    id: 22,
    questionType: 'support',
    question: 'Do you offer phone support?',
    answre:
      'Yes, we offer phone support during business hours (9 AM - 6 PM EST, Monday to Friday). For after-hours assistance, please use our live chat or email.',
  },
  {
    id: 23,
    questionType: 'support',
    question: 'Can I get support in languages other than English?',
    answre:
      'Currently, our support team primarily operates in English. However, we can use translation tools to assist you in other languages whenever possible.',
  },
  {
    id: 24,
    questionType: 'support',
    question: 'Where can I find troubleshooting guides?',
    answre:
      "Visit our Help Center on the website where you'll find detailed troubleshooting guides, video tutorials, and step-by-step instructions for common issues.",
  },
];
