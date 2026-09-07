import { useEffect, useState } from 'react';

import { MoveUpRight } from 'lucide-react';

import HEADER_IMAGE from '@/assets/images/elevate-section/Abstract Design.svg';
import MainSectionTemplate from '@/components/MainSectionTelmplate/MainSectionTemplate';
import ProductCard from '@/components/ProductCard/ProductCard';
import Button from '@/components/button/Button';
import DashedBox from '@/components/dashedBox/DashedBox';
import { PRODUCTS, type PRODUCT_type } from '@/constants/constants';

type currentSelectedCategoryType = 'all' | PRODUCT_type['category'];

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

  const renderedProducts = filteredProducts.slice(0, 6).map((product) => {
    return <ProductCard product={product} />;
  });

  return (
    <MainSectionTemplate
      itemsElement={renderedProducts}
      headerInfo={{
        title: 'Elevate Your Style with Our Latest Collection',
        description: 'Each piece is crafted to enhance your fashion statement.',
      }}
      HeaderMainSectionTemplateImage={HEADER_IMAGE}
      viewAllButton
      viewAllLink={'/products'}
    />
  );
};

export default ElevateStyleSection;
