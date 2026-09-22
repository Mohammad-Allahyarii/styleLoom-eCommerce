// Textless placeholder while a lazy route chunk loads: keeps the dark
// surfaces so the layout shift stays minimal.
const HydrateFallback = () => {
  return (
    <div
      className="animate-pulse motion-reduce:animate-none h-64 w-full rounded-2xl bg-dark-10"
      aria-hidden="true"
    />
  );
};

export default HydrateFallback;
