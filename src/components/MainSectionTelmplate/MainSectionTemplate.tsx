import type { ReactNode } from 'react';

import ContentMainSectionTemplate from '@/components/MainSectionTelmplate/components/ContentMainSectionTemplate';
import HeaderMainSectionTemplate from '@/components/MainSectionTelmplate/components/HeaderMainSectionTemplate';
import DashedLine from '@/components/dashedLine/DashedLine';
import SectionContainer from '@/components/sectionContainer/SectionContainer';

interface PropsType {
  itemsElement: ReactNode[];
  indexedInMobile?: number;
  indexedInDesktop?: number;
  HeaderMainSectionTemplateImage?: string;
  itemsPerRow?: number;
  rowsCount?: number;
  headerInfo: { title: string; description: string };
  viewAllButton?: boolean;
  viewAllLink?: string;
  otherHeaderNodes?: ReactNode;
}

const MainSectionTemplate = ({
  itemsElement,
  indexedInMobile = 3,
  indexedInDesktop = 6,
  HeaderMainSectionTemplateImage,
  itemsPerRow = 3,
  rowsCount,
  headerInfo,
  viewAllButton = false,
  viewAllLink,
  otherHeaderNodes,
}: PropsType) => {
  return (
    <SectionContainer>
      <HeaderMainSectionTemplate
        title={headerInfo.title}
        description={headerInfo.description}
        imgAdress={HeaderMainSectionTemplateImage}
        otherNodes={otherHeaderNodes}
      />
      <DashedLine />

      <ContentMainSectionTemplate
        items={itemsElement}
        itemsPerRow={itemsPerRow}
        indexedInMobile={indexedInMobile}
        rowsCount={rowsCount}
        indexedInDesktop={indexedInDesktop}
        viewAllButton={viewAllButton}
        viewAllLink={viewAllLink}
      />
    </SectionContainer>
  );
};

export default MainSectionTemplate;
