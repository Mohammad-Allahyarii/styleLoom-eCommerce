import { Star } from 'lucide-react';

export interface ProductRatingsOverviewProps {
  averageRating: number;
  totalRatings: number;
}

const ProductRatingsOverview = ({ averageRating, totalRatings }: ProductRatingsOverviewProps) => {
  return (
    <div className="md:col-span-1 col-span-4 flex md:flex-col items-center md:items-start gap-5 md:gap-2 ">
      <p className="text-absolute-white font-roboto-mono-medium text-[40px] ">{averageRating}</p>
      <div className="flex items-center justify-start *:fill-[#FFCE22] *:stroke-none">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <p className="font-roboto-regular text-[16px] text-grey-40">{totalRatings} Raiting</p>
    </div>
  );
};

export default ProductRatingsOverview;