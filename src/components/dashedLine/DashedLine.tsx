

const DashedLine = () => {
  return (
    <svg className={"w-full"} height="1" preserveAspectRatio="none">
      <line
        className="stroke-dark-15"
        x1="0"
        y1="0"
        x2="100%"
        y2="0"
        stroke="black"
        strokeWidth="3"
        strokeDasharray="10 8"
      />
    </svg>
  );
};

export default DashedLine;
