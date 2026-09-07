import { Outlet } from 'react-router';

import LayoutFooter from '@/Layouts/MainAppLayou/components/LayoutFooter';
import LayoutNavbar from '@/Layouts/MainAppLayou/components/LayoutNavbar';
import CTABannerSection from '@/Pages/HomePage/components/CTABannerSection/CTABannerSection';
import FaqSection from '@/Pages/HomePage/components/FaqSection/FaqSection';
import UserReviewsSection from '@/Pages/HomePage/components/UserReviewsSection/UserReviewsSection';
import Container from '@/components/container/Container';

const MainAppLayout = () => {
  return (
    <>
      <LayoutNavbar />
      <Container as="main" className="flex-1 flex flex-col gap-10 pb-10 pt-10">
        <Outlet />
        <UserReviewsSection />
        <FaqSection />
        <CTABannerSection />
      </Container>
      <LayoutFooter />
    </>
  );
};

export default MainAppLayout;
