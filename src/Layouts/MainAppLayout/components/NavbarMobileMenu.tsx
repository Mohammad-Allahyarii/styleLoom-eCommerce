import { Fragment, type Ref } from 'react';

import { Link, NavLink } from 'react-router';

import logo from '@/assets/logos/Logo.svg';
import DashedLine from '@/components/dashedLine/DashedLine';

import { type NavbarMenuItemType } from './navItems';

interface PropsType {
  isOpen: boolean;
  panelId: string;
  items: NavbarMenuItemType[];
  onClose: () => void;
  ref?: Ref<HTMLDivElement>;
}

const NavbarMobileMenu = ({
  isOpen,
  panelId,
  items,
  onClose,
  ref,
}: PropsType) => {
  return (
    // wrapper only positions the two children; it is not part of the dialog
    <div hidden={!isOpen} className="fixed inset-0 z-40">
      {/* site-background dim + soft blur instead of plain black */}
      <div
        className="absolute inset-0 bg-dark-06/70 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* in-flow left edge; single dashed edge via CSS border (DashedBox draws all four sides) */}
      <div
        ref={ref}
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className="absolute left-0 top-0 h-dvh w-[min(85vw,320px)] bg-dark-10 border-r-[3px] border-dashed border-dark-15 px-2 py-4"
      >
        <nav aria-label="Mobile navigation">
          {/* brand row: keeps the logo reachable while the drawer covers the navbar */}
          <div className="flex justify-center pb-4">
            <Link to="/" onClick={onClose} aria-label="StyleLoom home">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          {items.map((item) => (
            <Fragment key={item.title}>
              <DashedLine />
              <NavLink
                to={item.to}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center justify-between min-h-11 px-4 py-3 font-roboto-mono-medium ${
                    isActive ? 'text-brown-60' : 'text-absolute-white'
                  }`
                }
              >
                {item.title}
                {item.icon && <item.icon size={24} strokeWidth={2.5} />}
              </NavLink>
            </Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavbarMobileMenu;
