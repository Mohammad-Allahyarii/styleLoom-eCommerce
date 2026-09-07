import { ArrowUpRight } from 'lucide-react';

import Button from '@/components/button/Button';

const BG_CLASSNAME =
  "bg-[url('/src/assets/images/home/banner.jpg')] bg-cover bg-center bg-no-repeat";

const CTABannerSection = () => {
  return (
    <div
      className={`${BG_CLASSNAME} px-7.5 py-14 md:p-20 flex md:flex-row flex-col items-center justify-between gap-10 md:gap-36 rounded-2xl`}
    >
      <div className="flex flex-col gap-3 ">
        <h4 className="uppercase font-roboto-medium text-[36px] md:text-[48px] text-dark-06 ">
          elevate your wardrobe
        </h4>
        <p className="font-roboto-regular text-[14px] md:text-[16px] text-dark-12">
          Don't miss out – experience the epitome of fashion by clicking 'Buy
          Now' and embrace a world of chic elegance delivered to your doorstep.
          Your style journey begins here.
        </p>
      </div>
      <Button
        icon={ArrowUpRight}
        variant="secondary"
        className="py-3.5 w-full md:w-max"
      >
        Shop Now
      </Button>
    </div>
  );
};

export default CTABannerSection;
