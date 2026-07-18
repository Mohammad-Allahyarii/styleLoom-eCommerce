import type { ElementType, HTMLAttributes, ReactNode } from 'react';

import type { ClassValue } from 'clsx';

import DashedBox from '@/components/dashedBox/DashedBox';

type PropsType = {
  children: ReactNode;
  as?: ElementType;
  className?: ClassValue;
} & Omit<HTMLAttributes<HTMLElement>, 'as'>;

const SectionContainer = ({
  children,
  as: Element = 'section',
  className,
}: PropsType) => {
  return (
    <DashedBox as={Element} className={className} radius={16}>
      {children}
    </DashedBox>
  );
};

export default SectionContainer;
