import clsx from "clsx";
import { MdPersonAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/Register");
  };

  const handleLoginClick = () => {
    navigate("/Login");
  };

  return (
    <header className={clsx(styles.header)}>
      <div className={clsx(styles.headerLogo)}>
        <img src="./assets/images/MinDev_logo.png" alt="" />
        <div className={clsx(styles.headerLogoContent)}>Mindev</div>
      </div>
      <div className={clsx(styles.questionSpace)} id="questionSpace">
        Questions
      </div>
      <div className={clsx(styles.headerButton)}>
        <div className={clsx("button", styles.registerButton)} onClick={handleRegisterClick}>
          <MdPersonAdd />
          <div className="">Register</div>
        </div>
        <div className={clsx("button", styles.loginButton)} onClick={handleLoginClick}>Login</div>
      </div>
    </header>
  );
};

export default Header;
