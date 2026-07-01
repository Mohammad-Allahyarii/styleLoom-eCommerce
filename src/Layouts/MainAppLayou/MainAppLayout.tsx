import { Outlet } from "react-router";

const MainAppLayout = () => {
  return (
    <div>
      <h1>layout</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainAppLayout;
