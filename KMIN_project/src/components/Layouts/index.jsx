import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header></Header>
      <div className="content">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Layout;
