import PromoCodeField from '@/Pages/ShoppintCart/components/PromoCodeField';
import SummaryRow from '@/Pages/ShoppintCart/components/SummaryRow';
import TotalRow from '@/Pages/ShoppintCart/components/TotalRow';
import { formatPrice } from '@/Pages/ShoppintCart/components/formatPrice';
import Button from '@/components/button/Button';
import DashedLine from '@/components/dashedLine/DashedLine';
import type { PromoResult } from '@/types/cart';

interface PropsType {
  subtotal: number;
  discount: number;
  total: number;
  appliedPromoCode: string | null;
  onApplyPromoCode: (code: string) => PromoResult;
  onRemovePromoCode: () => void;
}

const OrderSummary = ({
  subtotal,
  discount,
  total,
  appliedPromoCode,
  onApplyPromoCode,
  onRemovePromoCode,
}: PropsType) => {
  return (
    <div className="p-6 md:p-8 flex flex-col gap-6">
      <h6 className="font-roboto-medium text-absolute-white text-[26px] uppercase">
        Order Summary
      </h6>

      <div className="flex flex-col gap-4">
        <SummaryRow label="Subtotal" value={formatPrice(subtotal)} />
        <SummaryRow
          label={
            appliedPromoCode ? `Discount (${appliedPromoCode})` : 'Discount'
          }
          value={`-${formatPrice(discount)}`}
        />
      </div>

      <DashedLine />

      <TotalRow value={formatPrice(total)} />

      <PromoCodeField
        appliedPromoCode={appliedPromoCode}
        onApply={onApplyPromoCode}
        onRemove={onRemovePromoCode}
      />

      <Button className="w-full">Checkout</Button>

      <p className="font-roboto-regular text-grey-40 text-[14px] text-center">
        Checkout is not wired yet — this is a preview of the flow.
      </p>
    </div>
  );
};

export default OrderSummary;
