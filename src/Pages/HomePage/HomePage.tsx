import CraftingTrendsSection from '@/Pages/HomePage/components/CraftingTrendsSection';
import ElevateStyleSection from '@/Pages/HomePage/components/ElevateStyleSection';
import HeroSction from '@/Pages/HomePage/components/HeroSction';
import NavigatingStyleloom from '@/Pages/HomePage/components/NavigatingStyleloom';
import Container from '@/components/container/Container';

const HomePage = () => {
  return (
    <Container as="div" className={'flex flex-col gap-10 pb-10'}>
      <HeroSction />
      <CraftingTrendsSection />
      <NavigatingStyleloom />
      <ElevateStyleSection />
    </Container>
  );
};

export default HomePage;
