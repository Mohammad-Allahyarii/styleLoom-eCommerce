import type { CRAFTING_TREND_SECTION_type } from '@/constants/constants';

const TrendCraftCard = ({ item }: { item: CRAFTING_TREND_SECTION_type }) => {
  return (
    <div className="relative px-7.5 py-7.5 flex flex-col justify-start items-start gap-6 ">
      {/* absolute image  */}
      <img
        className="absolute right-0 top-0"
        src={item.sideIcon}
        alt={item.sideIcon}
      />

      {/* main icon */}
      <img src={item.mainIcon} alt={item.title} />
      <div>
        <h6 className="font-roboto-medium text-lg text-absolute-white mb-2.5">
          {item.title}
        </h6>
        <p className="font-roboto-regular text-sm text-grey-50">{item.desc}</p>
      </div>
    </div>
  );
};

export default TrendCraftCard;
