import Button from '@/components/button/Button';
import SectionContainer from '@/components/sectionContainer/SectionContainer';

// Catches render and chunk-load failures (e.g. a stale tab after a new
// deploy): no error details are shown; reloading fetches the fresh assets.
const RouteError = () => {
  return (
    <SectionContainer className="p-10 text-center md:p-15">
      <h2 className="font-roboto-medium text-[28px] text-absolute-white uppercase">
        Something went wrong
      </h2>
      <p className="mt-2 font-roboto-regular text-[14px] text-grey-40">
        Please try again. If the problem persists, reload the page.
      </p>
      <Button
        variant="secondary"
        className="mt-6"
        onClick={() => window.location.reload()}
      >
        Reload
      </Button>
    </SectionContainer>
  );
};

export default RouteError;
