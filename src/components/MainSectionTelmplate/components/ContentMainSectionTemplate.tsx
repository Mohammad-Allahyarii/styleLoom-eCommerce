import type { ReactNode } from 'react';

import { Link } from 'react-router';

import { ArrowDown } from 'lucide-react';

import DashedLine from '@/components/dashedLine/DashedLine';
import useMediaQuery from '@/hooks/useMediaQuery';

const gridColsMap: Record<number, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
};

const ContentMainSectionTemplate = ({
  items,
  itemsPerRow,
  indexedInMobile = 1,
  rowsCount,
  indexedInDesktop = 3,
  viewAllButton = false,
  viewAllLink,
}: {
  items: ReactNode[];
  itemsPerRow: number;
  indexedInMobile?: number;
  rowsCount?: number;
  indexedInDesktop?: number;
  viewAllButton?: Boolean;
  viewAllLink?: string;
}) => {
  const isMobile = useMediaQuery('(max-width:420px)');

  // if rowsCount is provided, the number of desktop items is calculated based on it
  const desktopItemsLimit = rowsCount
    ? rowsCount * itemsPerRow
    : indexedInDesktop;

  const desktopVisibleItems = items.slice(0, desktopItemsLimit);

  const actualDesktopRows = Math.ceil(desktopVisibleItems.length / itemsPerRow);

  const verticalDividers = Array.from(
    { length: itemsPerRow - 1 },
    (_, i) => ((i + 1) / itemsPerRow) * 100,
  );

  const horizontalDividers = Array.from(
    { length: Math.max(actualDesktopRows - 1, 0) },
    (_, i) => ((i + 1) / actualDesktopRows) * 100,
  );

  return (
    <>
      <div className={`grid grid-cols-1 ${gridColsMap[itemsPerRow]} relative`}>
        {isMobile &&
          items
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
        <>
          <DashedLine />
          <Link
            to={`${viewAllLink}`}
            className="w-full text-center flex items-center justify-center gap-2.5 text-grey-70 py-7.5 text-[16px]"
          >
            <span>View More</span>
            <ArrowDown size={20} />
          </Link>
        </>
      )}
    </>
  );
};

export default ContentMainSectionTemplate;
