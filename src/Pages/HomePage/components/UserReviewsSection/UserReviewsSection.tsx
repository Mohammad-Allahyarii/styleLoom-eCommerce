import HomeSectionTemplate from '@/Pages/HomePage/components/HomeSectionTemplate';
import UserReview from '@/Pages/HomePage/components/UserReviewsSection/UserReview';
import { USER_REVIEWS } from '@/constants/constants';

import HEADER_IMAGE from "@/assets/images/userReview-section/Abstract Design (1).svg"

const UserReviewsSection = () => {
  const usersComponents = USER_REVIEWS.map((rev) => {
    return <UserReview key={rev.id} review={rev} />;
  });

  return (
    <HomeSectionTemplate
      itemsElement={usersComponents}
      headerInfo={{
        description:
          'At StyleLoom, our customers are the heartbeat of our brand.',
        title: 'The StyleLoom Testimonial Collection.',
      }}
      headerHomeSectionImage={HEADER_IMAGE}
      viewAllButton
      viewAllLink='#'
    />
  );
};

export default UserReviewsSection;
