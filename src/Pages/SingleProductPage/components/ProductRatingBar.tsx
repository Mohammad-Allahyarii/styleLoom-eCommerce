import { Star } from 'lucide-react';

export interface ProductRatingBarProps {
  stars: number;
  percentage: number;
}

const ProductRatingBar = ({ stars, percentage }: ProductRatingBarProps) => {
  return (
    <div className="flex items-center gap-2 ">
      <Star className="fill-[#FFCE22] stroke-none" />
      <p className="font-roboto-regular text-[16px] text-grey-50">
        {String(stars).padStart(2, '0')}
      </p>
      <div className="p-1.5 w-full bg-dark-10 border border-dark-15 rounded-full">
        <span
          className="bg-brown-60 block h-full min-h-1 rounded-full"
          style={{ width: `${percentage}%` }}
        ></span>
      </div>
    </div>
  );
};

export default ProductRatingBar;
