import { Link } from 'react-router';

import { ShoppingCart } from 'lucide-react';

import Button from '@/components/button/Button';

const EmptyCart = () => {
  return (
    <div className="py-20 px-6 flex flex-col items-center gap-6">
      <span className="p-6 rounded-full bg-dark-10 text-brown-60">
        <ShoppingCart size={40} strokeWidth={1.5} />
      </span>

      <h6 className="font-roboto-medium text-absolute-white text-[24px] uppercase text-center">
        Your cart is empty
      </h6>

      <p className="font-roboto-regular text-grey-40 text-[14px] text-center max-w-md">
        Looks like you haven't added anything yet. Explore the latest trends and
        timeless classics to fill it up.
      </p>

      <Link to="/products">
        <Button variant="cornerBordered">
          <span className="font-roboto-regular text-[14px]">
            Continue Shopping
          </span>
        </Button>
      </Link>
    </div>
  );
};

export default EmptyCart;
