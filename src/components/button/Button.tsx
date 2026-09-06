import type { ReactNode } from 'react';

import clsx, { type ClassValue } from 'clsx';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

type PropsType = {
  children?: ReactNode;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary' | 'cornerBordered' | 'bordered';
  className?: ClassValue;
  onClick?: () => void;
};

const dashedBorderImage = `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%23262626FF' stroke-width='3' stroke-dasharray='3%2c 10' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`;

const Button = ({
  children,
  icon: Icon,
  variant,
  className,
  onClick,
}: PropsType) => {
  const buttonClass = variant
    ? classByVariant[variant]
    : classByVariant.primary;

  return (
    <motion.button
      className={clsx(
        buttonClass,
        `min-w-max rounded-xl relative py-2.5 px-5 flex justify-center items-center gap-1 cursor-pointer transition-all duration-300 ease-in-out text-[16px] lg:text-[16px] ${className}`,
      )}
      onClick={onClick}
      style={{
        backgroundImage:
          variant === 'cornerBordered' || variant === 'bordered'
            ? dashedBorderImage
            : 'none',
      }}
    >
      {children}
      {Icon && <Icon size={24} strokeWidth={2.5} />}

      {variant === 'cornerBordered' && (
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
  primary: 'bg-brown-60 hover:bg-brown-65 text-dark-06 font-roboto-mono-medium',
  secondary: 'bg-dark-12 text-absolute-white font-roboto-regular ',
  cornerBordered:
    'border-2 border-dashed border-dark-25 bg-dark-12 text-absolute-white font-roboto-regular ',
  bordered: `  bg-dark-06 text-absolute-white font-roboto-regular `,
};

export default Button;
