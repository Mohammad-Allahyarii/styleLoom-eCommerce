import { Menu, ShoppingCart } from 'lucide-react';

import logo from '@/assets/logos/Logo.svg';
import Button from '@/components/button/Button';
import Container from '@/components/container/Container';
import DashedLine from '@/components/dashedLine/DashedLine';

const LayoutNavbar = () => {
  return (
    <Container as="nav" className="flex items-center justify-between relative py-6">
      {/* left */}
      <div className=" hidden md:flex items-center gap-3">
        <Button variant="secondary">Home</Button>
        <Button variant="bordered">Products</Button>
      </div>

      {/* center */}
      <div className=''>
        <img src={logo} alt="Logo" />
      </div>

      {/* right */}
      <div className="hidden md:flex justify-end items-center gap-3">
        <Button variant="secondary" icon={ShoppingCart} />

        <Button>Contact</Button>
      </div>

      <Button className="aspect-square p-4! md:hidden">
        <Menu />
      </Button>

      <DashedLine />
    </Container>
  );
};

export default LayoutNavbar;
