import ContactWayCard from '@/Pages/ContactPage/components/ContactWayCard';
import PolicySection from '@/Pages/ContactPage/components/PolicySection';
import HEADER_IMAGE from '@/assets/images/contact-us/header-image.svg';
import BetweenMainSectionTitle from '@/components/MainSectionTelmplate/components/BetweenMainSectionTitle';
import ContentMainSectionTemplate from '@/components/MainSectionTelmplate/components/ContentMainSectionTemplate';
import HeaderMainSectionTemplate from '@/components/MainSectionTelmplate/components/HeaderMainSectionTemplate';
import SectionContainer from '@/components/sectionContainer/SectionContainer';
import {
  CANCELLATION_POLICY_ITEMS,
  CONTACT_WAYS,
  RETURN_POLICY_ITEMS,
} from '@/constants/constants';

const ContactPage = () => {
  return (
    <>
      <SectionContainer>
        <HeaderMainSectionTemplate
          title="Your Partner in Every Step of Your Fashion Journey."
          description="24/7 Assistance for Seamless Shopping and Unmatched Customer Satisfaction."
          imgAdress={HEADER_IMAGE}
        />
        <BetweenMainSectionTitle title="Contact Information" />
        <ContentMainSectionTemplate
          items={CONTACT_WAYS.map((contactWay) => (
            <ContactWayCard key={contactWay.id} contactWayInfo={contactWay} />
          ))}
          itemsPerRow={3}
        />
      </SectionContainer>

      <PolicySection
        title="Return Policy"
        buttonLabel="Read Return Policy"
        items={RETURN_POLICY_ITEMS}
      />

      <PolicySection
        title="Cancellation Policy"
        buttonLabel="Read Cancellation Policy"
        items={CANCELLATION_POLICY_ITEMS}
      />
    </>
  );
};

export default ContactPage;
