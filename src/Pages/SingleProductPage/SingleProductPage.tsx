import { useParams } from 'react-router';

import DashedLine from '@/components/dashedLine/DashedLine';
import SectionContainer from '@/components/sectionContainer/SectionContainer';
import { findProductInProducts } from '@/utils/utils';
import type { RatingBreakdownItem } from '@/Pages/SingleProductPage/types/types';
import ProductHeader from '@/Pages/SingleProductPage/components/ProductHeader';
import ProductGallery from '@/Pages/SingleProductPage/components/ProductGallery';
import ProductMaterialsCare from '@/Pages/SingleProductPage/components/ProductMaterialsCare';
import ProductFeatures from '@/Pages/SingleProductPage/components/ProductFeatures';
import ProductPrice from '@/Pages/SingleProductPage/components/ProductPrice';
import ProductSizes from '@/Pages/SingleProductPage/components/ProductSizes';
import ProductRatingsSection from '@/Pages/SingleProductPage/components/ProductRatingsSection';

// Fallbacks preserve the exact original render when the product data
// doesn't (yet) provide these fields, while letting each section become
// fully data-driven once the product model exposes them.
const DEFAULT_FEATURES: string[] = [
  'Distressed detailing for a rugged look',
  'Button-up front closure with engraved metal buttons',
  'Two chest pockets with buttoned flaps',
  'Two side pockets for added functionality',
  'Adjustable buttoned cuffs for a personalized fit',
  'Back waist tabs for customizable styling',
];

const DEFAULT_SIZES: string[] = ['S', 'M', 'L', 'XL'];

const DEFAULT_RATING_BREAKDOWN: RatingBreakdownItem[] = [
  { stars: 5, percentage: 90 },
  { stars: 4, percentage: 80 },
  { stars: 3, percentage: 70 },
  { stars: 2, percentage: 60 },
  { stars: 1, percentage: 50 },
];

const SingleProductPage = () => {
  const { productID } = useParams<{ productID: string }>();
  const product = findProductInProducts(productID);

  const images = [product.image, product.image, product.image];

  // const images = product.image?.length
  //   ? product.image
  //   : [product.image, product.image, product.image];

  return (
    <SectionContainer>
      <ProductHeader
        title={product.title ?? 'Elegant Evening Gown'}
        description={'Fitted bodice, flowing skirt'}
        inStock={true}
      />

      <DashedLine />

      <ProductGallery images={images} alt={product.title} />

      <DashedLine />

      {/* product info */}
      <section className="grid grid-cols-1 md:grid-cols-2 relative">
        <DashedLine
          axis="vertical"
          className="absolute hidden md:block top-0 left-[50%] translate-x-[-50%]"
        />

        <ProductMaterialsCare />

        <section>
          <ProductFeatures features={DEFAULT_FEATURES} />

          <ProductPrice price={product.price} />

          <ProductSizes sizes={DEFAULT_SIZES} />

          <ProductRatingsSection
            averageRating={4.8}
            totalRatings={49}
            breakdown={DEFAULT_RATING_BREAKDOWN}
          />
        </section>
      </section>
    </SectionContainer>
  );
};

export default SingleProductPage;