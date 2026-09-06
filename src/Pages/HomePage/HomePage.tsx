import Container from "@/components/container/Container";
import CraftingTrendsSection from "@/Pages/HomePage/components/CraftingTrendsSection";
import CTABannerSection from "@/Pages/HomePage/components/CTABannerSection/CTABannerSection";
import ElevateStyleSection from "@/Pages/HomePage/components/ElevateStyleSection";
import FaqSection from "@/Pages/HomePage/components/FaqSection/FaqSection";
import HeroSction from "@/Pages/HomePage/components/HeroSction";
import NavigatingStyleloom from "@/Pages/HomePage/components/NavigatingStyleloom";
import UserReviewsSection from "@/Pages/HomePage/components/UserReviewsSection/UserReviewsSection";


const HomePage = () => {
  return (
    <Container as="div" className={'flex flex-col gap-10 pb-10'}>
      <HeroSction />
      <CraftingTrendsSection />
      <NavigatingStyleloom />
      <ElevateStyleSection />
      <UserReviewsSection />
      <FaqSection />
      <CTABannerSection />
      
    </Container>
  );
};

export default HomePage;
