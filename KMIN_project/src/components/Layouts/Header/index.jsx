import clsx from "clsx";
import { MdPersonAdd } from "react-icons/md";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={clsx(styles.header)}>
      <div className={clsx(styles.headerLogo)}>
        <img src="./assets/images/MinDev_logo.png" alt="" />
        <div className={clsx(styles.headerLogoContent)}>Mindev</div>
      </div>
      <div className={clsx(styles.headerButton)}>
        <div className={clsx("button", styles.registerButton)}>
          <MdPersonAdd />
          <div className="">Register</div>
        </div>
        <div className={clsx("button", styles.loginButton)}>Login</div>
      </div>
    </header>
  );
};

export default Header;
