import type { ReactNode } from 'react';

import HeaderHomeSection from '@/Pages/HomePage/components/HeaderHomeSection';
import DashedLine from '@/components/dashedLine/DashedLine';
import SectionContainer from '@/components/sectionContainer/SectionContainer';
import useMediaQuery from '@/hooks/useMediaQuery';


const gridColsMap: Record<number, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
};


interface PropsType {
  itemsElement: ReactNode[];
  indexedInMobile?: number;
  indexedInDesktop?: number;
  headerHomeSectionImage?: string;
  itemsPerRow?: number;
  headerInfo: {title: string, description: string};
}

const HomeSectionTemplate = ({
  itemsElement,
  indexedInMobile = 3,
  indexedInDesktop = 6,
  headerHomeSectionImage,
  itemsPerRow = 3,
  headerInfo
}: PropsType) => {
  const isMobile = useMediaQuery('(max-width:420px)');

  const verticalDividers = Array.from(
    { length: itemsPerRow - 1 },
    (_, i) => ((i + 1) / itemsPerRow) * 100,
  );

  return (
    <SectionContainer>
      <HeaderHomeSection
        // title="Crafting Trends, Inspiring Confidence"
        // description="Explore a world of fashion at StyleLoom, where trends meet affordability."
        title={headerInfo.title}
        description={headerInfo.description}
        imgAdress={headerHomeSectionImage}
      />
      <DashedLine />

      <div className={`grid grid-cols-1 ${gridColsMap[itemsPerRow]} relative`}>
        {isMobile &&
          itemsElement
            .slice(0, isMobile ? indexedInMobile : indexedInDesktop)
            .flatMap((item, index) =>
              index === 0
                ? [item]
                : [<DashedLine key={`dash-${index}`} />, item],
            )}

        {!isMobile &&
          itemsElement.slice(0, isMobile ? indexedInMobile : indexedInDesktop)}

        {!isMobile && (
          <>
            {itemsElement.length > itemsPerRow && (
              <DashedLine className="absolute left-0 top-1/2" />
            )}
            {verticalDividers.map((leftPercent, i) => (
              <DashedLine
                key={`v-dash-${i}`}
                className="absolute top-0"
                style={{ left: `${leftPercent}%` }}
                axis="vertical"
              />
            ))}
          </>
        )}
      </div>

      {/* <DashedLine /> */}
    </SectionContainer>
  );
};

export default HomeSectionTemplate;
