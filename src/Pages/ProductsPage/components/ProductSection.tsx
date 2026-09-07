import BetweenMainSectionTitle from '@/components/MainSectionTelmplate/components/BetweenMainSectionTitle';
import ContentMainSectionTemplate from '@/components/MainSectionTelmplate/components/ContentMainSectionTemplate';
import ProductCard from '@/components/ProductCard/ProductCard';
import type { PRODUCT_type } from '@/constants/constants';

interface propsType {
  products: PRODUCT_type[];
  href: string;
  title: string;
}

const ProductSection = ({ products, href, title }: propsType) => {
  const PRODUCTS_ELEMENT = products.map((product) => (
    <ProductCard product={product} />
  ));

  return (
    <div>
      {/* <DashedLine /> */}
      {title && (
        <h4 className="text-[28px] text-absolute-white font-roboto-medium uppercase">
          {title}
        </h4>
      )}
      <BetweenMainSectionTitle
        title="Dress Collection"
        link={{ text: 'View All', url: `${href}` }}
      />
      <ContentMainSectionTemplate
        items={PRODUCTS_ELEMENT}
        itemsPerRow={3}
        viewAllButton
        viewAllLink={href}
      />
    </div>
  );
};

export default ProductSection;
