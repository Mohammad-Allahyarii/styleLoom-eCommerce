import type { PolicyItemType } from "@/constants/constants";

interface PolicyItemCardProps {
  item: PolicyItemType;
}

const PolicyItemCard = ({ item }: PolicyItemCardProps) => {
  const { icon, title, description } = item;

  return (
    <div className="flex items-center gap-4 px-7.5 py-15">
      <img className="max-w-19" src={icon} alt={title} />

      <div className="flex flex-col gap-1">
        <h3 className="text-absolute-white font-roboto-medium text-[20px]">
          {title}
        </h3>
        <p className="text-dark-40 font-roboto-regular text-grey-50 text-[16px] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PolicyItemCard;