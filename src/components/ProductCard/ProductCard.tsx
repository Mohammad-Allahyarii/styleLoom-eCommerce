import { Link } from 'react-router';

import { MoveUpRight } from 'lucide-react';

import Button from '@/components/button/Button';
import DashedBox from '@/components/dashedBox/DashedBox';
import type { PRODUCT_type } from '@/constants/constants';

const ProductCard = ({ product }: { product: PRODUCT_type }) => {
  return (
    <div className="p-4 pb-7.5">
      <img src={product.image} alt={product.title} className="w-full h-auto" />
      {/* top info */}
      <div className="flex justify-between items-center mt-6">
        <DashedBox className="px-3 py-2 rounded-full! bg-dark-10 text-grey-70">
          {product.category}
        </DashedBox>
        <Button className="" variant="cornerBordered">
          <Link
            to={product.slug ? `/products/${product.slug}` : '#'}
            className="flex items-center justify-between gap-1"
          >
            <span>Shop Now</span>
            <MoveUpRight size={'18'} />
          </Link>
        </Button>
      </div>
      {/* bottom info */}
      <h6 className="text-absolute-white font-roboto-mono-medium text-[18px] mt-4">
        {product.title}
      </h6>

      <p className="flex items-center gap-4 mt-2.5">
        <span>
          <span className="text-grey-50 font-roboto-mono-regular text-[14px]">
            Fit •
          </span>{' '}
          <span className="text-grey-80 font-roboto-mono-medium text-[16px]">
            {product.ClotheSize}
          </span>
        </span>
        <span>
          <span className="text-grey-50 font-roboto-mono-regular text-[14px]">
            Price •
          </span>{' '}
          <span className="text-grey-80 font-roboto-mono-medium text-[16px]">
            ${product.price}
          </span>
        </span>
      </p>
    </div>
  );
};

export default ProductCard;
