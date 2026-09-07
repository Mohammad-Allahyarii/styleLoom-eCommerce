import type { ReactNode } from 'react';

import { Link } from 'react-router';

import { ArrowDown } from 'lucide-react';

import ContentMainSectionTemplate from '@/components/MainSectionTelmplate/components/ContentMainSectionTemplate';
import HeaderMainSectionTemplate from '@/components/MainSectionTelmplate/components/HeaderMainSectionTemplate';
import DashedLine from '@/components/dashedLine/DashedLine';
import SectionContainer from '@/components/sectionContainer/SectionContainer';
import useMediaQuery from '@/hooks/useMediaQuery';

interface PropsType {
  itemsElement: ReactNode[];
  indexedInMobile?: number;
  indexedInDesktop?: number;
  HeaderMainSectionTemplateImage?: string;
  itemsPerRow?: number;
  rowsCount?: number;
  headerInfo: { title: string; description: string };
  viewAllButton?: Boolean;
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
  const isMobile = useMediaQuery('(max-width:420px)');

  // The actual number of rows that will be created based on the displayed items

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
