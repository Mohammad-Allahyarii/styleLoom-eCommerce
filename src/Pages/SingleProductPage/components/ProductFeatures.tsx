import DashedLine from '@/components/dashedLine/DashedLine';

export interface ProductFeaturesProps {
  features: string[];
}

const ProductFeatures = ({ features }: ProductFeaturesProps) => {
  return (
    <>
      <div className="p-7.5 md:px-15 md:py-10">
        <p className="font-roboto-medium text-[24px] text-absolute-white">
          Features
        </p>
        <ul className="font-roboto-regular text-[16px] text-grey-40 list-disc pl-6 mt-10">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <DashedLine />
    </>
  );
};

export default ProductFeatures;
