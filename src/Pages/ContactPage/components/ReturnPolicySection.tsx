import { ArrowUpRight } from 'lucide-react';

import ContentMainSectionTemplate from '@/components/MainSectionTelmplate/components/ContentMainSectionTemplate';
import Button from '@/components/button/Button';
import DashedLine from '@/components/dashedLine/DashedLine';
import SectionContainer from '@/components/sectionContainer/SectionContainer';
import { RETURN_POLICY_ITEMS } from '@/constants/constants';

const items = RETURN_POLICY_ITEMS.map(
  ({ id, icon: Icon, title, description }) => (
    <div key={id} className="flex items-center gap-4 px-7.5 py-15">
      <img src={Icon} />

      <div className="flex flex-col gap-1">
        <h3 className="text-absolute-white font-roboto-medium text-[20px]">
          {title}
        </h3>
        <p className="text-dark-40 font-roboto-regular text-grey-50 text-[16px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  ),
);

const ReturnPolicySection = () => {
  return (
    <SectionContainer className="p-0 overflow-hidden">
      {/* Header */}
      <div className="relative flex items-center justify-between p-15 border-dark-25">
        <h2 className="text-absolute-white font-roboto-medium text-2xl tracking-wide uppercase">
          Return Policy
        </h2>

        <Button variant="cornerBordered" icon={ArrowUpRight}>
          Read Return Policy
        </Button>

        <DashedLine className="absolute bottom-0 left-0" />
      </div>

      {/* Items */}
      <ContentMainSectionTemplate items={items} itemsPerRow={3} />
    </SectionContainer>
  );
};

export default ReturnPolicySection;
