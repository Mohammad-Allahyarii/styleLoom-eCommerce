import Container from "@/components/container/Container";
import CraftingTrendsSection from "@/Pages/HomePage/components/CraftingTrendsSection";
import HeroSction from "@/Pages/HomePage/components/HeroSction";
import NavigatingStyleloom from "@/Pages/HomePage/components/NavigatingStyleloom";


const HomePage = () => {
  return (
    <Container as="div" className={'flex flex-col gap-10 pb-10'}>
      <HeroSction />
      <CraftingTrendsSection />
      <NavigatingStyleloom />
      
    </Container>
  );
};

export default HomePage;
