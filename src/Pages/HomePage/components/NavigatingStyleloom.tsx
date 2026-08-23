import HomeSectionTemplate from '@/Pages/HomePage/components/HomeSectionTemplate';
import HEADER_IMG from '@/assets/images/navigatingStyleloom/section-icon.svg';

const STEPS = [
  {
    id: 1,
    step: 1,
    title: 'Discover Trends',
    caption:
      'Explore our curated collection of over 1000 styles, spanning global fashion trends.',
  },
  {
    id: 2,
    step: 2,
    title: 'Effortless Navigation',
    caption:
      'Intuitive filters and categories help you find the perfect pieces tailored to your style.',
  },
  {
    id: 3,
    step: 3,
    title: 'Secure Checkout',
    caption:
      'Multiple payment options and encrypted transactions ensure a safe and hassle-free purchase.',
  },
  {
    id: 4,
    step: 4,
    title: 'Unbox Happiness',
    caption:
      'Unbox a fashion-forward experience delivered right to your door, ready to elevate your style.',
  },
];

interface StepProps {
  item: {
    id: number;
    step: number;
    title: string;
    caption: string;
  };
}

const Step = ({ item }: StepProps) => {
  return (
    <div className="p-10">
      <span className="text-grey-40 font-roboto-mono-regular">
        {' '}
        Step {String(item.step).padStart(2, '0')}
      </span>
      <p className="font-roboto-medium text-absolute-white text-[22px] mt-6">
        {item.title}
      </p>
      <p className="font-roboto-regular text-grey-50 mt-3">{item.caption}</p>
    </div>
  );
};

const NavigatingStyleloom = () => {
  const craftItemsElement = STEPS.map((item) => (
    <Step key={item.id} item={item} />
  ));

  return (
    <HomeSectionTemplate
      itemsElement={craftItemsElement}
      itemsPerRow={4}
      headerHomeSectionImage={HEADER_IMG}
      headerInfo={{
        title: 'Navigating the StyleLoom Fashion Journey.',
        description:
          "At StyleLoom, we've designed a straightforward shopping experience to make fashion accessible.",
      }}
    />
  );
};

export default NavigatingStyleloom;
