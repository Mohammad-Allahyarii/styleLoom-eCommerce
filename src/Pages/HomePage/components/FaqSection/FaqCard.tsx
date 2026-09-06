import type { FAQ_TYPE } from '@/constants/constants';

const FaqCard = ({ faq }: { faq: FAQ_TYPE }) => {
  return (
    <div className="p-7.5 md:p-12.5 flex flex-col justify-start items-start gap-3">
      <h6 className="font-roboto-medium text-[20px] text-absolute-white">
        {faq.question}
      </h6>
      <p className="font-roboto-regular text-[16px] text-grey-50">
        {faq.answre}
      </p>
    </div>
  );
};

export default FaqCard;
