import Button from '@/components/button/Button';
import type { ContactWayType } from '@/constants/constants';

const ContactWayCard = ({
  contactWayInfo,
}: {
  contactWayInfo: ContactWayType;
}) => {
  return (
    <div className="flex flex-col items-center gap-4 p-15 relative">
      <img src={contactWayInfo.mainIconAddress} alt={contactWayInfo.title} />
      <p className="font-roboto-medium text-[24px] text-absolute-white mt-8.5">
        {contactWayInfo.title}
      </p>
      <Button
        className="w-full"
        variant="cornerBordered"
        onClick={contactWayInfo.ctaFunc}
      >
        {contactWayInfo.info}
      </Button>

      <img
        className="absolute top-0 right-0"
        src={contactWayInfo.sideIconAddress}
        alt={contactWayInfo.title}
      />
    </div>
  );
};

export default ContactWayCard;
