import { Link, NavLink } from 'react-router';

import { Menu, ShoppingCart } from 'lucide-react';

import logo from '@/assets/logos/Logo.svg';
import Button from '@/components/button/Button';
import Container from '@/components/container/Container';
import DashedLine from '@/components/dashedLine/DashedLine';

const LayoutNavbar = () => {
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
        <Link to={'/'} className="">
          <img src={logo} alt="Logo" />
        </Link>

        {/* right */}
        <div className="hidden md:flex justify-end items-center gap-3">
          <Link to="/shopping-cart">
            <Button variant="secondary" icon={ShoppingCart} />
          </Link>

          <Link to={'contact-us'}>
            <Button>Contact</Button>
          </Link>
        </div>

        <Button className="aspect-square p-4! md:hidden">
          <Menu />
        </Button>
      </Container>
      <DashedLine />
    </>
  );
};

export default LayoutNavbar;
