import { useEffect, useId, useRef, useState } from 'react';

import { Link, NavLink, useLocation } from 'react-router';

import { ShoppingCart } from 'lucide-react';

import logo from '@/assets/logos/Logo.svg';
import Button from '@/components/button/Button';
import Container from '@/components/container/Container';
import DashedLine from '@/components/dashedLine/DashedLine';
import useMediaQuery from '@/hooks/useMediaQuery';
import { selectLineCount, useCartStore } from '@/stores/cartStore';

import CartBadge from './CartBadge';
import NavbarMenuToggle from './NavbarMenuToggle';
import NavbarMobileMenu from './NavbarMobileMenu';
import { NAV_ITEMS } from './navItems';

const LayoutNavbar = () => {
  const { pathname } = useLocation();
  const isDesktop = useMediaQuery('(min-width: 768px)');

  // the path where the drawer was opened: comparing it with the current pathname
  // closes the drawer on navigation and on reaching md without any effect
  const [menuOpenPath, setMenuOpenPath] = useState<string | null>(null);

  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  // per-value subscription: re-renders only when the line count changes
  const lineCount = useCartStore(selectLineCount);

  const isOpen = menuOpenPath === pathname && !isDesktop;

  // React-docs "adjusting state when props change": clear a stale open-path during
  // render (guarded, so it cannot loop) so shrinking back to mobile does not
  // silently reopen a drawer opened on another path
  if (menuOpenPath !== null && !isOpen) {
    setMenuOpenPath(null);
  }

  const toggleMenu = () => {
    setMenuOpenPath(isOpen ? null : pathname);
  };

  const closeMenu = () => {
    setMenuOpenPath(null);
  };

  // one effect while open: focus + scroll lock setup, Escape/Tab/outside listeners,
  // and cleanup that also covers unmount; setState runs only inside callbacks
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    // scroll lock: page must not scroll behind the fixed drawer; restored on close/unmount
    document.body.style.overflow = 'hidden';
    const firstLink = drawerRef.current?.querySelector<HTMLElement>('a');
    firstLink?.focus();

    const focusablesIn = () =>
      Array.from(
        drawerRef.current?.querySelectorAll<HTMLElement>('a[href], button') ??
          [],
      );

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpenPath(null);
        // focus belongs back on the trigger for keyboard dismissal only
        toggleRef.current?.focus();
        return;
      }
      // manual focus trap: cycle Tab between the drawer's first and last focusables
      if (event.key === 'Tab') {
        const focusables = focusablesIn();
        if (focusables.length === 0) {
          return;
        }
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement;
        if (
          event.shiftKey &&
          (active === first || !drawerRef.current?.contains(active))
        ) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (
        target instanceof Node &&
        !toggleRef.current?.contains(target) &&
        !drawerRef.current?.contains(target)
      ) {
        setMenuOpenPath(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
      // restore scroll before MainAppLayout's 100ms-delayed scroll-to-top runs
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <Container
        as="nav"
        className="flex items-center justify-between relative py-6"
      >
        {/* left */}
        <div className=" hidden md:flex items-center gap-3">
          <NavLink to="/">
            {({ isActive }) => (
              <Button variant={isActive ? 'secondary' : 'bordered'}>
                Home
              </Button>
            )}
          </NavLink>

          <NavLink to="products">
            {({ isActive }) => (
              <Button variant={isActive ? 'secondary' : 'bordered'}>
                Products
              </Button>
            )}
          </NavLink>
        </div>

        {/* center */}
        <Link to={'/'} className="" onClick={closeMenu}>
          <img src={logo} alt="Logo" />
        </Link>

        {/* right */}
        <div className="hidden md:flex justify-end items-center gap-3">
          <Link to="/shopping-cart">
            <span className="relative inline-flex">
              <Button variant="secondary" icon={ShoppingCart} />
              <CartBadge count={lineCount} />
            </span>
          </Link>

          <Link to={'contact-us'}>
            <Button>Contact</Button>
          </Link>
        </div>

        <NavbarMenuToggle
          ref={toggleRef}
          isOpen={isOpen}
          onToggle={toggleMenu}
          panelId={panelId}
        />
      </Container>
      <NavbarMobileMenu
        ref={drawerRef}
        isOpen={isOpen}
        panelId={panelId}
        items={NAV_ITEMS}
        onClose={closeMenu}
        cartLineCount={lineCount}
      />
      <DashedLine />
    </>
  );
};

export default LayoutNavbar;
