import { Link } from 'react-router';

import { SquareArrowOutUpRight } from 'lucide-react';

import heroImageDesktop from '@/assets/images/heroSectionImageDesktop.webp';
import heroImageMobile from '@/assets/images/heroSectionImageMobile.webp';
import Button from '@/components/button/Button';
import DashedBox from '@/components/dashedBox/DashedBox';
import DashedLine from '@/components/dashedLine/DashedLine';
import SectionContainer from '@/components/sectionContainer/SectionContainer';
import {
  CATEGORIES,
  HERO_SECTION_DATAS,
  HERO_SECTION_DESCRIPTION,
  HERO_SECTION_TITLE,
} from '@/constants/constants';
import useMediaQuery from '@/hooks/useMediaQuery';

const HeroSction = () => {
  const isMobile = useMediaQuery('(max-width:396px)');

  return (
    <SectionContainer className={'text-absolute-white overflow-hidden'}>
      {/* top - img container */}
      <div className="relative">
        <img
          className="w-full hidden md:block"
          src={heroImageDesktop}
          alt="hero section image"
        />
        <img
          className="w-full block md:hidden"
          src={heroImageMobile}
          alt="hero section image"
        />
        <Link to="/products">
          <Button
            className="absolute! -bottom-4 left-1/2 -translate-x-1/2  flex items-center gap-1"
            variant="cornerBordered"
          >
            <span className="font-roboto-regular text-sm">Shop Now</span>
            <SquareArrowOutUpRight size={18} />
          </Button>
        </Link>
      </div>

      {/* bottom section */}
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr]">
        {/* left side */}
        <div className="py-10 md:py-15 px-4 md:px-12 grid grid-cols-1 gap-5">
          {/* category chips */}
          <div className="flex items-center gap-2 justify-start">
            {CATEGORIES.map((category) => (
              <Link key={category.id} to={category.href} className="">
                <DashedBox className={'py-2 md:py-3 px-4 md:px-6 capitalize'}>
                  {category.title}
                </DashedBox>
              </Link>
            ))}
          </div>

          <h1 className="font-roboto-medium text-[28px] md:text-4xl uppercase">
            {HERO_SECTION_TITLE}
          </h1>
          <p className="font-roboto-regular text-[14px] md:text-[16px] text-grey-40">
            {HERO_SECTION_DESCRIPTION}
          </p>
        </div>

        {isMobile ? <DashedLine /> : <DashedLine axis="vertical" />}
        {/* right side */}
        <div className="grid grid-cols-2 grid-rows-2 relative">
          {HERO_SECTION_DATAS.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start justify-center py-6 md:py-0 px-7 md:px-10"
            >
              <h6 className="font-roboto-medium text-[30px] md:text-[40px] text-absolute-white">
                {item.title}
              </h6>
              <p className="font-roboto-regular text-sm text-grey-50">
                {item.desc}
              </p>
            </div>
          ))}

          <DashedLine className="absolute left-0 top-1/2" />
          <DashedLine className="absolute bottom-0 right-1/2" axis="vertical" />
        </div>
      </div>
    </SectionContainer>
  );
};

export default HeroSction;
