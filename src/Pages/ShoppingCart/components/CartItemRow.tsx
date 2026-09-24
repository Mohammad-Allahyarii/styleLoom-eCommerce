import { X } from 'lucide-react';

import QuantityStepper from '@/Pages/ShoppingCart/components/QuantityStepper';
import DashedBox from '@/components/dashedBox/DashedBox';
import type { CartLine } from '@/types/cart';

interface PropsType {
  item: CartLine;
  onChangeQuantity: (id: string, nextQuantity: number) => void;
  onRemove: (id: string) => void;
}

const CartItemRow = ({ item, onChangeQuantity, onRemove }: PropsType) => {
  // a persisted line whose product left the catalog: no image/price/stepper
  // to show — only the message and a remove button; it stays until the user
  // removes it (never dropped automatically on load)
  if (!item.available) {
    return (
      <div className="p-6 md:p-8 flex items-center justify-between gap-6">
        <p className="font-roboto-mono-regular text-grey-50 text-[14px]">
          This item is no longer available
        </p>
        <button
          type="button"
          aria-label="Remove item from cart"
          onClick={() => onRemove(item.id)}
          className="p-1.5 rounded-lg text-grey-50 cursor-pointer transition-all duration-300 ease-in-out hover:text-absolute-white hover:bg-dark-10 shrink-0"
        >
          <X size={18} />
        </button>
      </div>
    );
  }

  const lineTotal = item.unitPrice * item.quantity;

  return (
    <div className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center gap-6">
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 rounded-lg object-cover bg-dark-10"
      />

      {/* item info */}
      <div className="flex flex-col gap-2.5 flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4">
          <h6 className="font-roboto-mono-medium text-absolute-white text-[18px] leading-snug">
            {item.title}
          </h6>

          <button
            type="button"
            aria-label={`Remove ${item.title} from cart`}
            onClick={() => onRemove(item.id)}
            className="p-1.5 rounded-lg text-grey-50 cursor-pointer transition-all duration-300 ease-in-out hover:text-absolute-white hover:bg-dark-10 shrink-0"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <DashedBox className="px-3 py-1.5 rounded-full! bg-dark-10 text-grey-70 text-[14px]">
            {item.category}
          </DashedBox>
          <p className="flex items-center gap-2">
            <span className="text-grey-50 font-roboto-mono-regular text-[14px]">
              Size •
            </span>
            <span className="text-grey-80 font-roboto-mono-medium text-[16px]">
              {item.size}
            </span>
          </p>
        </div>

        <p className="flex items-center gap-2">
          <span className="text-grey-50 font-roboto-mono-regular text-[14px]">
            Price •
          </span>
          <span className="text-grey-80 font-roboto-mono-medium text-[16px]">
            ${item.unitPrice.toFixed(2)}
          </span>
        </p>
      </div>

      {/* quantity + line total */}
      <div className="flex items-center justify-between gap-6 sm:flex-col sm:items-end sm:justify-center">
        <QuantityStepper
          value={item.quantity}
          onChange={(nextQuantity) => onChangeQuantity(item.id, nextQuantity)}
        />
        <p className="font-roboto-mono-medium text-[24px] text-absolute-white">
          ${lineTotal.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartItemRow;
