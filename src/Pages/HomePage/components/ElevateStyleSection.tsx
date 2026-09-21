import { useEffect, useState } from 'react';

import HEADER_IMAGE from '@/assets/images/elevate-section/Abstract Design.svg';
import MainSectionTemplate from '@/components/MainSectionTelmplate/MainSectionTemplate';
import ProductCard from '@/components/ProductCard/ProductCard';
import { PRODUCTS, type PRODUCT_type } from '@/constants/constants';

type currentSelectedCategoryType = 'all' | PRODUCT_type['category'];

const ElevateStyleSection = () => {
  // no setter: the category is fixed to 'all' for now, state kept for the later filter UI
  const [currentSelectedCategory] =
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
