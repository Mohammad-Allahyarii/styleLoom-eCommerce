import type React from 'react';
import type { ElementType, HTMLAttributes } from 'react';

import type { ClassValue } from 'clsx';
import clsx from 'clsx';

// type PropsType<E extends ElementType = 'div'> = {
//   as: E;
//   className?: ClassValue;
//   children?: React.ReactNode;
// } & Omit<HTMLAttributes<HTMLElement>, 'as'>;

type PropsType = {
  as: ElementType;
  className?: ClassValue;
  children?: React.ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, 'as'>;

const Container = ({ as: Element = 'div', className, children }: PropsType) => {
  return (
    <Element
      className={clsx('container lg:max-w-7xl mx-auto', className)}
    >
      {children}
    </Element>
  );
};

export default Container;
