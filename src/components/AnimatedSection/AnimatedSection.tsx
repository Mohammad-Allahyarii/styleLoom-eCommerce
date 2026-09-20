import type { ReactNode } from 'react';

import { useLocation } from 'react-router';

import { motion } from 'motion/react';

interface AnimatedSectionProps {
  children: ReactNode;
  index?: number;
  className?: string;
}

const AnimatedSection = ({
  children,
  className,
  index = 0,
}: AnimatedSectionProps) => {
  const { pathname } = useLocation();
  return (
    <motion.div
      key={pathname}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
        delay: index * 0.1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
