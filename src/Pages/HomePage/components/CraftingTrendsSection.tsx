import TrendCraftCard from '@/Pages/HomePage/components/TrendCraftCard';
import MainSectionTemplate from '@/components/MainSectionTelmplate/MainSectionTemplate';
import { CRAFTING_TREND_SECTION } from '@/constants/constants';

const CraftingTrendsSection = () => {
  // Map through the CRAFTING_TREND_SECTION array and create TrendCraftCard components for each item
  const craftItemsElement = CRAFTING_TREND_SECTION.map((item) => (
    <TrendCraftCard key={item.id} item={item} />
  ));

  return (
    <MainSectionTemplate
      itemsElement={craftItemsElement}
      headerInfo={{
        title: 'Crafting Trends, Inspiring Confidence',
        description:
          'Explore a world of fashion at StyleLoom, where trends meet affordability.',
      }}
    />
  );
};

export default CraftingTrendsSection;
