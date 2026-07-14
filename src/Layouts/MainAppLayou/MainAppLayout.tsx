import { Outlet } from 'react-router';

import Container from '@/components/container/Container';
import LayoutNavbar from '@/Layouts/MainAppLayou/components/LayoutNavbar';
import LayoutFooter from '@/Layouts/MainAppLayou/components/LayoutFooter';

const MainAppLayout = () => {
  return (
    <>
      <LayoutNavbar />
      <Container as="main" className="flex-1">
        <Outlet />
      </Container>
      <LayoutFooter />
    </>
  );
};

export default MainAppLayout;
