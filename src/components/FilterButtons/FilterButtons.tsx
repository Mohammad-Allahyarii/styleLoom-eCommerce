import Button from '@/components/button/Button';

interface FilterButtonsProps<T extends string> {
  value: T;
  onChange: React.Dispatch<React.SetStateAction<T>>;
  options: T[];
  getLabel?: (option: T) => string;
}

function FilterButtons<T extends string>({
  value,
  onChange,
  options,
  getLabel,
}: FilterButtonsProps<T>) {
  console.log(options);

  return (
    <div className="flex items-center justify-start flex-nowrap overflow-x-auto gap-3.5">
      {options.map((option) => (
        <Button
          key={option}
          onClick={() => onChange(option)}
          variant={value === option ? 'primary' : 'bordered'}
          className="font-roboto-regular! shrink-0 capitalize"
        >
          {getLabel ? getLabel(option) : option}
        </Button>
      ))}
    </div>
  );
}

export default FilterButtons;
