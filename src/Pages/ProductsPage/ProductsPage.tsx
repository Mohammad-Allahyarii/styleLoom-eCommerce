import { useState } from 'react';

import ProductSection from '@/Pages/ProductsPage/components/ProductSection';
import HEADER_IMAGE from '@/assets/images/elevate-section/Abstract Design.svg';
import FilterButtons from '@/components/FilterButtons/FilterButtons';
import HeaderMainSectionTemplate from '@/components/MainSectionTelmplate/components/HeaderMainSectionTemplate';
import DashedLine from '@/components/dashedLine/DashedLine';
import SectionContainer from '@/components/sectionContainer/SectionContainer';
import { PRODUCTS, PRODUCTS_CATEGORY } from '@/constants/constants';

const ProductsPage = () => {
  const [currentProductsCategory, setCurrentProductsCategory] =
    useState('womenswear');

  return (
    <SectionContainer>
      <HeaderMainSectionTemplate
        title="Explore the Latest Trends and Timeless Classics"
        description="Dive into the world of fashion excellence at StyleLoom. Our curated selection brings together the latest trends and timeless classics"
        imgAdress={HEADER_IMAGE}
        otherNodes={
          <FilterButtons
            value={currentProductsCategory}
            onChange={setCurrentProductsCategory}
            options={['all', ...PRODUCTS_CATEGORY]}
          />
        }
      />

      <ProductSection products={PRODUCTS.slice(0, 3)} href="" title="" />
    </SectionContainer>
  );
};

export default ProductsPage;
