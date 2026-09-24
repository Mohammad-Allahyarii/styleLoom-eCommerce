import { Fragment, type Ref } from 'react';

import { Link, NavLink } from 'react-router';

import clsx from 'clsx';

import logo from '@/assets/logos/Logo.svg';
import DashedLine from '@/components/dashedLine/DashedLine';

import CartBadge from './CartBadge';
import { type NavbarMenuItemType } from './navItems';

interface PropsType {
  isOpen: boolean;
  panelId: string;
  items: NavbarMenuItemType[];
  onClose: () => void;
  cartLineCount: number;
  ref?: Ref<HTMLDivElement>;
}

const NavbarMobileMenu = ({
  isOpen,
  panelId,
  items,
  onClose,
  cartLineCount,
  ref,
}: PropsType) => {
  return (
    // wrapper only positions the two children; it always stays mounted so the
    // close animation can play; when closed, inert keeps the off-screen drawer
    // unfocusable and uninteractive
    <div className="fixed inset-0 z-40" inert={!isOpen}>
      {/* site-background dim + soft blur instead of plain black; pointer-events
          only while open so the invisible scrim never blocks the page */}
      <div
        className={clsx(
          'absolute inset-0 bg-dark-06/70 backdrop-blur-sm transition-opacity duration-300 ease-in-out motion-reduce:transition-none',
          isOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0',
        )}
        onClick={onClose}
      />
      {/* in-flow left edge; single dashed edge via CSS border (DashedBox draws all four sides) */}
      <div
        ref={ref}
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={clsx(
          'absolute left-0 top-0 h-dvh w-[min(85vw,320px)] bg-dark-10 border-r-[3px] border-dashed border-dark-15 px-2 py-4',
          'transition-transform duration-300 ease-in-out motion-reduce:transition-none',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
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
                {/* only the Cart item carries an icon, so the badge lands there */}
                {item.icon && (
                  <span className="relative inline-flex">
                    <item.icon size={24} strokeWidth={2.5} />
                    <CartBadge count={cartLineCount} />
                  </span>
                )}
              </NavLink>
            </Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavbarMobileMenu;
