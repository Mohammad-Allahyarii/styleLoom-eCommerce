import PromoCodeField from '@/Pages/ShoppintCart/components/PromoCodeField';
import type { CartItemType } from '@/Pages/ShoppintCart/types/cart';
import Button from '@/components/button/Button';
import DashedLine from '@/components/dashedLine/DashedLine';

interface PropsType {
  items: CartItemType[];
}

const SHIPPING_FLAT_RATE = 10;

const OrderSummary = ({ items }: PropsType) => {
  const subtotal = items.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0,
  );
  const shipping = items.length > 0 ? SHIPPING_FLAT_RATE : 0;
  const discount = 0;
  const total = subtotal + shipping - discount;

  return (
    <div className="p-6 md:p-8 flex flex-col gap-6">
      <h6 className="font-roboto-medium text-absolute-white text-[26px] uppercase">
        Order Summary
      </h6>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="font-roboto-regular text-grey-50 text-[16px]">
            Subtotal
          </p>
          <p className="font-roboto-mono-medium text-absolute-white text-[16px]">
            ${subtotal.toFixed(2)}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-roboto-regular text-grey-50 text-[16px]">
            Shipping
          </p>
          <p className="font-roboto-mono-medium text-absolute-white text-[16px]">
            ${shipping.toFixed(2)}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-roboto-regular text-grey-50 text-[16px]">
            Discount
          </p>
          <p className="font-roboto-mono-medium text-absolute-white text-[16px]">
            -${discount.toFixed(2)}
          </p>
        </div>
      </div>

      <DashedLine />

      <div className="flex items-center justify-between">
        <p className="font-roboto-medium text-absolute-white text-[18px]">
          Total
        </p>
        <p className="font-roboto-mono-medium text-absolute-white text-[24px]">
          ${total.toFixed(2)}
        </p>
      </div>

      <PromoCodeField />

      <Button className="w-full">Checkout</Button>

      <p className="font-roboto-regular text-grey-40 text-[14px] text-center">
        Checkout is not wired yet — this is a preview of the flow.
      </p>
    </div>
  );
};

export default OrderSummary;
