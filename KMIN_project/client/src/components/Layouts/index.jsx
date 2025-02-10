import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import clsx from "clsx";
import styles from "./Layouts.module.css";

const Layout = () => {
  const location = useLocation();
  //Nếu là trang đăng nhập và đăng ký thì dấu Sidebar
  const hideSidebar = location.pathname.includes("Login") || location.pathname.includes("Register");

  return (
    <>
      <Header></Header>
      <div className={clsx(styles.content)}>
        {!hideSidebar ? 
        (
          <div style={{display:"flex"}}>
            <Sidebar></Sidebar>
            <div className={clsx(styles.midNavBar)}>
              <Outlet></Outlet>
            </div>
          </div>
        ) 
        : (
          <Outlet></Outlet>
        )}
      </div>
    </>
  );
};

export default Layout;
