import CraftingTrendsSection from '@/Pages/HomePage/components/CraftingTrendsSection';
import ElevateStyleSection from '@/Pages/HomePage/components/ElevateStyleSection';
import HeroSction from '@/Pages/HomePage/components/HeroSction';
import NavigatingStyleloom from '@/Pages/HomePage/components/NavigatingStyleloom';
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection';

const HOME_SECTIONS = [
  CraftingTrendsSection,
  NavigatingStyleloom,
  ElevateStyleSection,
];

const HomePage = () => {
  return (
    <div className="flex flex-col gap-10">
      <HeroSction />

      {HOME_SECTIONS.map((Section, index) => (
        <AnimatedSection key={index} index={index}>
          <Section />
        </AnimatedSection>
      ))}
    </div>
  );
};

export default HomePage;
