import ProductRatingBar from '@/Pages/SingleProductPage/components/ProductRatingBar';
import type { RatingBreakdownItem } from '@/Pages/SingleProductPage/types/types';

export interface ProductRatingsBreakdownProps {
  breakdown: RatingBreakdownItem[];
}

const ProductRatingsBreakdown = ({
  breakdown,
}: ProductRatingsBreakdownProps) => {
  return (
    <div className="col-span-4 md:col-span-3 flex flex-col gap-3">
      {breakdown.map((item) => (
        <ProductRatingBar
          key={item.stars}
          stars={item.stars}
          percentage={item.percentage}
        />
      ))}
    </div>
  );
};

export default ProductRatingsBreakdown;
