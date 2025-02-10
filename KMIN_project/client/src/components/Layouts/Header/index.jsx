import clsx from "clsx";
import { MdPersonAdd } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchProtectedData } from "../../../utils/authUtils.js";
import React, { useEffect, useState } from "react";

import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegisterClick = () => {
    navigate("/Register");
  };

  const handleLoginClick = () => {
    navigate("/Login");
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");
    setIsLoggedIn(false);
    navigate("/");
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkTokenStatus = async () => {
      const { isValid } = await fetchProtectedData();
      setIsLoggedIn(isValid);
    };

    checkTokenStatus();
    
    // Nếu muốn refresh liên tục mỗi lần reload
    window.addEventListener('load', checkTokenStatus);

    // Cleanup nếu cần
    return () => window.removeEventListener('load', checkTokenStatus);
  }, []);

  const hideQuestionSpace =
    location.pathname === "/Login" || location.pathname === "/Register";

  return (
    <header className={clsx(styles.header)}>
      <div className={clsx(styles.headerLogo)}>
        <img src="./assets/images/MinDev_logo.png" alt="" />
        <div className={clsx(styles.headerLogoContent)}>Mindev</div>
      </div>
      {!hideQuestionSpace && (
        <div className={clsx(styles.questionSpace)} id="questionSpace">
          Questions
        </div>
      )}

      <div className={clsx(styles.headerButton)}>
        {!isLoggedIn ? (
          <>
            <div
              className={clsx("button", styles.registerButton)}
              onClick={handleRegisterClick}
            >
              <MdPersonAdd />
              <div>Register</div>
            </div>
            <div
              className={clsx("button", styles.loginButton)}
              onClick={handleLoginClick}
            >
              Login
            </div>
          </>
        ) : (
          <>
            <div
              className={clsx("button", styles.registerButton)}
              onClick={handleLogoutClick}
            >
              <MdLogout />
              <div>Logout</div>
            </div>
          </>)}
        {}
      </div>
    </header>
  );
};

export default Header;
