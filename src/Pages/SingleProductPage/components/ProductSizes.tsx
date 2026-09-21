import DashedLine from '@/components/dashedLine/DashedLine';

export interface ProductSizesProps {
  sizes: string[];
}

const ProductSizes = ({ sizes }: ProductSizesProps) => {
  return (
    <>
      <div className="p-7.5 md:px-15 md:py-10">
        <p className="font-roboto-medium text-[20px] text-absolute-white">
          Available Sizes
        </p>
        <div className="flex items-center justify-start gap-4 mt-4 flex-wrap">
          {sizes.map((size) => (
            <span
              key={size}
              className="bg-dark-10 rounded-full text-absolute-white font-roboto-mono-regular text-[18px] px-6 py-1.5 md:px-8.5 md:py-2"
            >
              {size}
            </span>
          ))}
        </div>
      </div>
      <DashedLine />
    </>
  );
};

export default ProductSizes;
