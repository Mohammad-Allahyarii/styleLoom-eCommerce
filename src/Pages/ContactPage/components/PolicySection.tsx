import { ArrowUpRight } from 'lucide-react';

import PolicyItemCard from '@/Pages/ContactPage/components/PolicyItemCard';
import ContentMainSectionTemplate from '@/components/MainSectionTelmplate/components/ContentMainSectionTemplate';
import Button from '@/components/button/Button';
import DashedLine from '@/components/dashedLine/DashedLine';
import SectionContainer from '@/components/sectionContainer/SectionContainer';
import type { PolicyItemType } from '@/constants/constants';

interface PolicySectionProps {
  title: string;
  buttonLabel: string;
  items: PolicyItemType[];
  onReadPolicy?: () => void;
}

const PolicySection = ({
  title,
  buttonLabel,
  items,
  onReadPolicy,
}: PolicySectionProps) => {
  return (
    <SectionContainer className="p-0 overflow-hidden">
      {/* Header */}
      <div className="relative flex items-center justify-between p-15 border-dark-25">
        <h2 className="text-absolute-white font-roboto-medium text-2xl tracking-wide uppercase">
          {title}
        </h2>

        <Button
          leftIcon={false}
          variant="cornerBordered"
          icon={ArrowUpRight}
          onClick={onReadPolicy}
        >
          {buttonLabel}
        </Button>

        <DashedLine className="absolute bottom-0 left-0" />
      </div>

      {/* Items */}
      <ContentMainSectionTemplate
        items={items.map((item) => (
          <PolicyItemCard key={item.id} item={item} />
        ))}
        itemsPerRow={3}
      />
    </SectionContainer>
  );
};

export default PolicySection;
