import PromoCodeField from '@/Pages/ShoppintCart/components/PromoCodeField';
import SummaryRow from '@/Pages/ShoppintCart/components/SummaryRow';
import TotalRow from '@/Pages/ShoppintCart/components/TotalRow';
import { formatPrice } from '@/Pages/ShoppintCart/components/formatPrice';
import { calculateOrderTotals } from '@/Pages/ShoppintCart/components/orderTotals';
import type { CartItemType } from '@/Pages/ShoppintCart/types/cart';
import Button from '@/components/button/Button';
import DashedLine from '@/components/dashedLine/DashedLine';

interface PropsType {
  items: CartItemType[];
}

const OrderSummary = ({ items }: PropsType) => {
  const { subtotal, shipping, discount, total } = calculateOrderTotals(items);

  return (
    <div className="p-6 md:p-8 flex flex-col gap-6">
      <h6 className="font-roboto-medium text-absolute-white text-[26px] uppercase">
        Order Summary
      </h6>

      <div className="flex flex-col gap-4">
        <SummaryRow label="Subtotal" value={formatPrice(subtotal)} />
        <SummaryRow label="Shipping" value={formatPrice(shipping)} />
        <SummaryRow label="Discount" value={`-${formatPrice(discount)}`} />
      </div>

      <DashedLine />

      <TotalRow value={formatPrice(total)} />

      <PromoCodeField />

      <Button className="w-full">Checkout</Button>

      <p className="font-roboto-regular text-grey-40 text-[14px] text-center">
        Checkout is not wired yet — this is a preview of the flow.
      </p>
    </div>
  );
};

export default OrderSummary;
