import UserReview from '@/Pages/HomePage/components/UserReviewsSection/UserReview';
import HEADER_IMAGE from '@/assets/images/userReview-section/abstract-design-2.svg';
import MainSectionTemplate from '@/components/MainSectionTemplate/MainSectionTemplate';
import { USER_REVIEWS } from '@/constants/constants';

const UserReviewsSection = () => {
  const usersComponents = USER_REVIEWS.map((rev) => {
    return <UserReview key={rev.id} review={rev} />;
  });

  return (
    <MainSectionTemplate
      itemsElement={usersComponents}
      headerInfo={{
        description:
          'At StyleLoom, our customers are the heartbeat of our brand.',
        title: 'The StyleLoom Testimonial Collection.',
      }}
      HeaderMainSectionTemplateImage={HEADER_IMAGE}
      viewAllButton
      viewAllLink="#"
    />
  );
};

export default UserReviewsSection;
