import { Minus, Plus } from 'lucide-react';

interface PropsType {
  value: number;
  onChange: (nextValue: number) => void;
  min?: number;
  max?: number;
}

const QuantityStepper = ({ value, onChange, min = 1, max = 99 }: PropsType) => {
  return (
    <div className="flex items-center bg-dark-10 rounded-lg">
      <button
        type="button"
        aria-label="Decrease quantity"
        disabled={value <= min}
        onClick={() => onChange(value - 1)}
        className="p-2.5 text-absolute-white cursor-pointer transition-all duration-300 ease-in-out disabled:text-grey-40 disabled:cursor-not-allowed hover:text-brown-60 disabled:hover:text-grey-40"
      >
        <Minus size={18} />
      </button>

      <span
        aria-live="polite"
        className="font-roboto-mono-medium text-absolute-white text-[16px] min-w-8 text-center"
      >
        {value}
      </span>

      <button
        type="button"
        aria-label="Increase quantity"
        disabled={value >= max}
        onClick={() => onChange(value + 1)}
        className="p-2.5 text-absolute-white cursor-pointer transition-all duration-300 ease-in-out disabled:text-grey-40 disabled:cursor-not-allowed hover:text-brown-60 disabled:hover:text-grey-40"
      >
        <Plus size={18} />
      </button>
    </div>
  );
};

export default QuantityStepper;
