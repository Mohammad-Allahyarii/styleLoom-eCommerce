import type { ElementType, HTMLAttributes, ReactNode } from 'react';

import type { ClassValue } from 'clsx';

import Container from '@/components/container/Container';
import DashedBox from '@/components/dashedBox/DashedBox';

type PropsType = {
  as?: ElementType;
  className?: ClassValue;
  children?: ReactNode;
  radius?: number;
  dashed?: boolean;
} & Omit<HTMLAttributes<HTMLElement>, 'as'>;

const SectionContainer = ({
  as: Element = 'section',
  className,
  children,
  radius = 16,
  dashed = true,
  ...rest
}: PropsType) => {
  if (!dashed) {
    // plain mode delegates to Container so a call site migrates from
    // Container by adding dashed={false} only
    return (
      <Container as={Element} className={className} {...rest}>
        {children}
      </Container>
    );
  }

  return (
    <DashedBox as={Element} radius={radius} className={className} {...rest}>
      {children}
    </DashedBox>
  );
};

export default SectionContainer;
