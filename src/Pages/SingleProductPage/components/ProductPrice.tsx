import { ShoppingCart } from 'lucide-react';

import Button from '@/components/button/Button';
import DashedLine from '@/components/dashedLine/DashedLine';

export interface ProductPriceProps {
  price: number | string;
  onAddToCart?: () => void;
}

const ProductPrice = ({ price, onAddToCart }: ProductPriceProps) => {
  return (
    <>
      <div className="p-7.5 md:px-15 md:py-10 flex flex-col md:flex-row gap-4 md:gap-0 items-start md:items-end justify-between">
        <div>
          <p className="font-roboto-medium text-[18px] text-absolute-white">
            Price
          </p>
          <p className="flex items-center justify-start gap-2 mt-[22.5px]">
            <span className="font-roboto-mono-medium text-[24px] text-absolute-white">
              ${price}
            </span>
            <span className="font-roboto-regular text-[16px] text-grey-50">
              {' '}
              (MRP incl. of all taxes){' '}
            </span>
          </p>
        </div>

        <Button
          onClick={onAddToCart}
          variant="cornerBordered"
          className="md:w-auto w-full"
          icon={ShoppingCart}
        >
          Add To Cart
        </Button>
      </div>
      <DashedLine />
    </>
  );
};

export default ProductPrice;
