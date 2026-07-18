import clsx from 'clsx';

type DashedLineProps = {
  axis?: 'horizontal' | 'vertical';
  className?: string;
};

const DashedLine = ({ axis = 'horizontal', className }: DashedLineProps) => {
  const isHorizontal = axis === 'horizontal';

  return (
    <svg
      className={clsx(isHorizontal ? 'w-full' : 'h-full', className)}
      width={isHorizontal ? '100%' : '1'}
      height={isHorizontal ? '1' : '100%'}
      preserveAspectRatio="none"
    >
      <line
        className="stroke-dark-15"
        x1="0"
        y1="0"
        x2={isHorizontal ? '100%' : '0'}
        y2={isHorizontal ? '0' : '100%'}
        stroke="black"
        strokeWidth="3"
        strokeDasharray="10 8"
      />
    </svg>
  );
};

export default DashedLine;
