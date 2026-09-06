import type { ReactNode } from 'react';

import { Link } from 'react-router';

import { ArrowDown } from 'lucide-react';

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
  rowsCount?: number;
  headerInfo: { title: string; description: string };
  viewAllButton?: Boolean;
  viewAllLink?: string;
  otherHeaderNodes?: ReactNode
}

const HomeSectionTemplate = ({
  itemsElement,
  indexedInMobile = 3,
  indexedInDesktop = 6,
  headerHomeSectionImage,
  itemsPerRow = 3,
  rowsCount,
  headerInfo,
  viewAllButton = false,
  viewAllLink,
  otherHeaderNodes,
}: PropsType) => {
  const isMobile = useMediaQuery('(max-width:420px)');

  const verticalDividers = Array.from(
    { length: itemsPerRow - 1 },
    (_, i) => ((i + 1) / itemsPerRow) * 100,
  );

  // if rowsCount is provided, the number of desktop items is calculated based on it
  const desktopItemsLimit = rowsCount
    ? rowsCount * itemsPerRow
    : indexedInDesktop;

  const desktopVisibleItems = itemsElement.slice(0, desktopItemsLimit);

  // The actual number of rows that will be created based on the displayed items
  const actualDesktopRows = Math.ceil(desktopVisibleItems.length / itemsPerRow);

  const horizontalDividers = Array.from(
    { length: Math.max(actualDesktopRows - 1, 0) },
    (_, i) => ((i + 1) / actualDesktopRows) * 100,
  );

  return (
    <SectionContainer>
      <HeaderHomeSection
        title={headerInfo.title}
        description={headerInfo.description}
        imgAdress={headerHomeSectionImage}
        otherNodes={otherHeaderNodes}
      />
      <DashedLine />

      <div className={`grid grid-cols-1 ${gridColsMap[itemsPerRow]} relative`}>
        {isMobile &&
          itemsElement
            .slice(0, indexedInMobile)
            .flatMap((item, index) =>
              index === 0
                ? [item]
                : [<DashedLine key={`dash-${index}`} />, item],
            )}

        {!isMobile && desktopVisibleItems}

        {!isMobile && (
          <>
            {horizontalDividers.map((topPercent, i) => (
              <DashedLine
                key={`h-dash-${i}`}
                className="absolute left-0"
                style={{ top: `${topPercent}%` }}
              />
            ))}
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

      {viewAllButton && isMobile && (
        <Link
          to={`${viewAllLink}`}
          className="w-full text-center flex items-center justify-center gap-2.5 text-grey-70 py-7.5 text-[16px]"
        >
          <span>View More</span>
          <ArrowDown size={20} />
        </Link>
      )}
    </SectionContainer>
  );
};

export default HomeSectionTemplate;
