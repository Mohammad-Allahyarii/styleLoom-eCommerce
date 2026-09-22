import ProductRatingsBreakdown from '@/Pages/SingleProductPage/components/ProductRatingsBreakdown';
import ProductRatingsOverview from '@/Pages/SingleProductPage/components/ProductRatingsOverview';
import type { RatingBreakdownItem } from '@/Pages/SingleProductPage/types/types';
import DashedLine from '@/components/dashedLine/DashedLine';

export interface ProductRatingsSectionProps {
  averageRating: number;
  totalRatings: number;
  breakdown: RatingBreakdownItem[];
}

const ProductRatingsSection = ({
  averageRating,
  totalRatings,
  breakdown,
}: ProductRatingsSectionProps) => {
  return (
    <>
      <p className="font-roboto-medium text-[18px] text-absolute-white p-7.5 md:px-15 md:py-10">
        Ratings & Review
      </p>

      <DashedLine />

      <div className="p-7.5 md:px-15 md:py-10 grid grid-cols-4 gap-10">
        <ProductRatingsOverview
          averageRating={averageRating}
          totalRatings={totalRatings}
        />
        <ProductRatingsBreakdown breakdown={breakdown} />
      </div>
    </>
  );
};

export default ProductRatingsSection;
