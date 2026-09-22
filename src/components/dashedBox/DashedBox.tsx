import type { ElementType, HTMLAttributes } from 'react';

import clsx, { type ClassValue } from 'clsx';

type propsType = {
  as?: ElementType;
  radius?: number;
  className?: Omit<ClassValue, 'rounded'> | undefined;
  children: React.ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, 'as'>;

const DashedBox = ({
  as: Element = 'div',
  radius = 8,
  className,
  children,
  style,
  ...rest
}: propsType) => {
  return (
    <Element
      {...rest}
      className={clsx(className)}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='${radius}' ry='${radius}' stroke='%23262626FF' stroke-width='3' stroke-dasharray='3%2c 10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
        borderRadius: `${radius}px`,
        // merge last: callers can extend style without losing the dashed frame
        ...style,
      }}
    >
      {children}
    </Element>
  );
};

export default DashedBox;
