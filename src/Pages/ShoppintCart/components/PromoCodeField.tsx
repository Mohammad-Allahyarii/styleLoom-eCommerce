import { useState } from 'react';

import { CornerDownRight, X } from 'lucide-react';

import type { PromoResult } from '@/types/cart';

interface PropsType {
  className?: string;
  appliedPromoCode: string | null;
  onApply: (code: string) => PromoResult;
  onRemove: () => void;
}

const FEEDBACK_TEXT = {
  empty: 'Enter a promo code.',
  invalid: 'Invalid promo code.',
  'empty-cart': 'Add items to your cart first.',
} as const;

const PromoCodeField = ({
  className,
  appliedPromoCode,
  onApply,
  onRemove,
}: PropsType) => {
  const [code, setCode] = useState('');
  const [feedback, setFeedback] = useState('');

  // The store owns promo logic; this component only surfaces its result.
  const handleApply = () => {
    const result = onApply(code);

    if (result.success) {
      setCode('');
      setFeedback('');
      return;
    }

    setFeedback(FEEDBACK_TEXT[result.reason]);
  };

  if (appliedPromoCode) {
    return (
      <div className={className}>
        <div className="flex items-center justify-between bg-dark-10 rounded-lg py-4 px-3.5 w-full">
          <p className="font-roboto-mono-regular text-grey-50 text-sm">
            Code <span className="text-brown-60">{appliedPromoCode}</span>{' '}
            applied.
          </p>
          <button
            type="button"
            aria-label={`Remove promo code ${appliedPromoCode}`}
            onClick={onRemove}
            className="p-1 rounded text-grey-50 cursor-pointer transition-all duration-300 ease-in-out hover:text-absolute-white hover:bg-dark-10 shrink-0"
          >
            <X size={16} />
          </button>
        </div>

        <p aria-live="polite" className="sr-only">
          Code {appliedPromoCode} applied.
        </p>
      </div>
    );
  }

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
          value={code}
          onChange={(event) => setCode(event.target.value)}
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

      <p
        aria-live="polite"
        className="font-roboto-mono-regular text-grey-50 text-sm mt-3 min-h-5"
      >
        {feedback}
      </p>
    </div>
  );
};

export default PromoCodeField;
