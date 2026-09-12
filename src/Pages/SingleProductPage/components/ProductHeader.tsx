import { Handbag, ShoppingCart } from 'lucide-react';

import Button from '@/components/button/Button';

export interface ProductHeaderProps {
  title: string;
  description: string;
  inStock: boolean;
}

const ProductHeader = ({ title, description, inStock }: ProductHeaderProps) => {
  return (
    <section className="flex flex-col md:flex-row gap-10   justify-between items-start p-5 md:p-15">
      {/* left */}
      <div>
        <h1 className="font-roboto-medium text-absolute-white text-[28px] md:text-[38px] uppercase">
          {title}
        </h1>
        <p>
          <span className="font-roboto-regular text-[14px] md:text-[18px] text-grey-40">
            {description}
          </span>
          <span className="ml-4 text-[#8AF265] bg-[#152011] px-4 py-1.5 rounded-full font-roboto-mono-regular text-[12px] md:text-[14px] ">
            {inStock ? 'In stock' : 'Out of stock'}
          </span>
        </p>
      </div>
      {/* right */}
      <div className="flex gap-5 justify-between w-full md:w-max *:w-full">
        <Button variant="cornerBordered" icon={ShoppingCart}>
          Add to Cart
        </Button>
        <Button variant="primary" icon={Handbag}>
          Shop Now
        </Button>
      </div>
    </section>
  );
};

export default ProductHeader;