import type { Ref } from 'react';

import { Menu, X } from 'lucide-react';

interface PropsType {
  isOpen: boolean;
  onToggle: () => void;
  panelId: string;
  ref?: Ref<HTMLButtonElement>;
}

// a native button instead of the shared Button: it needs aria-expanded/aria-controls
// and a ref, which Button does not forward
const NavbarMenuToggle = ({ isOpen, onToggle, panelId, ref }: PropsType) => {
  return (
    <button
      type="button"
      ref={ref}
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={panelId}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      className="bg-dark-12 text-absolute-white font-roboto-regular min-w-max rounded-xl relative z-50 py-2.5 px-5 flex justify-center items-center gap-1 cursor-pointer transition-all duration-300 ease-in-out text-[16px] lg:text-[16px] aspect-square p-4! md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown-60"
    >
      {isOpen ? (
        <X size={24} strokeWidth={2.5} />
      ) : (
        <Menu size={24} strokeWidth={2.5} />
      )}
    </button>
  );
};

export default NavbarMenuToggle;
