import clsx, { type ClassValue } from 'clsx';
import { motion } from 'motion/react';

type PropsType = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'bordered';
  className?: ClassValue;
};

const Button = ({ children, variant, className }: PropsType) => {
  const buttonClass = variant
    ? classByVariant[variant]
    : classByVariant.primary;

  return (
    <motion.button
      className={clsx(
        buttonClass,
        className,
        'max-w-max rounded-xl relative py-2 px-6 cursor-pointer transition-all duration-300 ease-in-out',
      )}
      whileHover={{ scale: 1.02 }}
    >
      {children}

      {variant === 'bordered' && (
        <>
          <span className="absolute rounded-tl-xl border-t border-l border-brown-60 w-4 h-4 -top-0.5 -left-0.5"></span>
          <span className="absolute rounded-tr-xl border-t border-r border-brown-60 w-4 h-4 -top-0.5 -right-0.5 "></span>
          <span className="absolute rounded-bl-xl border-b border-l border-brown-60 w-4 h-4 -bottom-0.5 -left-0.5"></span>
          <span className="absolute rounded-br-xl border-b border-r border-brown-60 w-4 h-4 -bottom-0.5 -right-0.5"></span>
        </>
      )}
    </motion.button>
  );
};

const classByVariant = {
  primary:
    'bg-brown-60 hover:bg-brown-65 text-dark-06 font-roboto-mono-medium text-[18px] ',
  secondary: 'bg-dark-12 text-absolute-white font-roboto-regular text-[18px]',
  bordered:
    'border-2 border-dashed border-dark-25 bg-dark-12 text-absolute-white font-roboto-regular text-[18px]',
};

export default Button;
