import { useState } from 'react';

import { CornerDownRight } from 'lucide-react';

interface PropsType {
  className?: string;
}

const PromoCodeField = ({ className }: PropsType) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedCode, setAppliedCode] = useState('');

  // UI only: echoes the code back, no discount logic yet
  const handleApply = () => {
    setAppliedCode(promoCode.trim());
  };

  return (
    <div className={className}>
      <form
        className="flex items-center bg-dark-10 rounded-lg py-4 px-3.5 w-full"
        onSubmit={(event) => {
          event.preventDefault();
          handleApply();
        }}
      >
        <label htmlFor="promo-code" className="sr-only">
          Promo code
        </label>
        <input
          id="promo-code"
          value={promoCode}
          onChange={(event) => setPromoCode(event.target.value)}
          className="placeholder:text-grey-40 placeholder:font-roboto-mono-regular placeholder:text-sm w-full outline-none text-absolute-white font-roboto-mono-regular text-sm"
          placeholder="Promo Code..."
        />
        <button
          type="submit"
          aria-label="Apply promo code"
          className="cursor-pointer"
        >
          <CornerDownRight className="text-brown-60" />
        </button>
      </form>

      {appliedCode && (
        <p className="font-roboto-mono-regular text-grey-50 text-sm mt-3">
          Code <span className="text-brown-60">{appliedCode}</span> applied —
          discounts are coming soon.
        </p>
      )}
    </div>
  );
};

export default PromoCodeField;
