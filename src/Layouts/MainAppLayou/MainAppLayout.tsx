import { Outlet } from 'react-router';

import Container from '@/components/container/Container';
import LayoutNavbar from '@/Layouts/MainAppLayou/components/LayoutNavbar';

const MainAppLayout = () => {
  return (
    <>
      <LayoutNavbar />
      <Container as="main" className="flex-1">
        <Outlet />
      </Container>
      <Container as="footer">footer</Container>
    </>
  );
};

export default MainAppLayout;
