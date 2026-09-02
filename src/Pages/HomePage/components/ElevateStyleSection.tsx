import { useEffect, useState } from 'react';

import { MoveUpRight } from 'lucide-react';

import HomeSectionTemplate from '@/Pages/HomePage/components/HomeSectionTemplate';
import Button from '@/components/button/Button';
import DashedBox from '@/components/dashedBox/DashedBox';
import { PRODUCTS, type PRODUCT_type } from '@/constants/constants';

type currentSelectedCategoryType = 'all' | PRODUCT_type['category'];

const ElevateProductCard = ({ product }: { product: PRODUCT_type }) => {
  return (
    <div className="p-4 pb-7.5">
      <img src={product.image} alt={product.title} className="w-full h-auto" />
      {/* top info */}
      <div className="flex justify-between items-center mt-6">
        <DashedBox className="px-3 py-2 rounded-full! bg-dark-10 text-grey-70">
          {product.category}
        </DashedBox>
        <Button
          className="flex items-center justify-between gap-1"
          variant="cornerBordered"
        >
          <span>Shop Now</span>
          <MoveUpRight size={'18'} />
        </Button>
      </div>
      {/* bottom info */}
      <h6 className="text-absolute-white font-roboto-mono-medium text-[18px] mt-4">
        {product.title}
      </h6>

      <p className='flex items-center gap-4 mt-2.5'>
        <span>
          <span className="text-grey-50 font-roboto-mono-regular text-[14px]">Fit •</span>{' '}
          <span className="text-grey-80 font-roboto-mono-medium text-[16px]">
            {product.ClotheSize}
          </span>
        </span>
        <span>
          <span className="text-grey-50 font-roboto-mono-regular text-[14px]">Price •</span>{' '}
          <span className="text-grey-80 font-roboto-mono-medium text-[16px]">
            ${product.price}
          </span>
        </span>
      </p>
    </div>
  );
};

const ElevateStyleSection = () => {
  const [currentSelectedCategory, setcurrentSelectedCategory] =
    useState<currentSelectedCategoryType>('all');

  const [filteredProducts, setFilteredProducts] = useState<PRODUCT_type[]>([]);

  useEffect(() => {
    setFilteredProducts(
      currentSelectedCategory === 'all'
        ? PRODUCTS
        : PRODUCTS.filter(
            (product) => product.category === currentSelectedCategory,
          ),
    );
  }, [currentSelectedCategory]);

  const renderedProducts = filteredProducts.slice(0,6).map((product) => {
    return <ElevateProductCard product={product} />;
  });

  return (
    <HomeSectionTemplate
      itemsElement={renderedProducts}
      headerInfo={{
        title: 'Elevate Your Style with Our Latest Collection',
        description: 'Each piece is crafted to enhance your fashion statement.',
      }}
    />
  );
};

export default ElevateStyleSection;
