import { motion } from 'motion/react';
import type { ReactNode } from 'react';


interface AnimatedSectionProps {
  children: ReactNode;
  index?: number;
  className?: string;
}

const AnimatedSection = ({
  children,
  className,
}: AnimatedSectionProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;