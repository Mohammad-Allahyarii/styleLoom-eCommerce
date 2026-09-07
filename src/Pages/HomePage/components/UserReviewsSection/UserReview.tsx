import { MessageCircleMore } from 'lucide-react';

import RatingStars from '@/Pages/HomePage/components/UserReviewsSection/RatingStars';
import type { USER_REVIEW_TYPE } from '@/constants/constants';

const UserReview = ({ review }: { review: USER_REVIEW_TYPE }) => {
  return (
    <div className="p-12.5 flex flex-col gap-7.5">
      {/* user info */}
      <div className="flex items-center justify-between gap-4.5">
        <img
          className="w-15 h-15 rounded-full"
          src={review.profileImage}
          alt={review.name}
        />
        <div className="flex flex-col items-start justify-center w-full">
          <p className="text-absolute-white font-roboto-medium text-[16px] md:text-[18px]">
            {review.name}
          </p>
          <span className="font-roboto-mono-regular text-[14px] md:text-[16px] text-grey-40">
            {review.userLocation}
          </span>
        </div>

        <MessageCircleMore className="max-w-7 w-full stroke-brown-70" />
      </div>

      <RatingStars rate={review.rate} size={18} />

      <p className="text-grey-50 text-[14px] md:text-[16px]">{review.review}</p>
    </div>
  );
};

export default UserReview;
