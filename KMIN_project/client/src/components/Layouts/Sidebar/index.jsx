import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { fetchProtectedData } from "../../../utils/authUtils.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons"; // Import biểu tượng cụ thể
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const Sidebar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    useEffect(() => {
      const checkTokenStatus = async () => {
        const { isValid } = await fetchProtectedData();
        setIsLoggedIn(isValid);
      };
  
      checkTokenStatus();
    }, []);
  
    return (
      <>
        <div className={clsx(styles.sideBar)}>
          <div className={clsx(styles.leftNavbar)}>
            <div
              className={clsx(styles.divTitle)}
              style={{ color: "#808080", fontSize: "14px" }}
            >
              MENU
            </div>
            <Link to="/" className={clsx(styles.divRow)}>
              <FontAwesomeIcon
                icon={faAddressBook}
                className={clsx(styles.iconMenu)}
              />{" "}
              {/* Sử dụng icon */}
              Questions
            </Link>
            <Link to="/Tags" className={clsx(styles.divRow)}>
              <FontAwesomeIcon
                icon={faBookmark}
                className={clsx(styles.iconMenu)}
              />{" "}
              {/* Sử dụng icon */}
              Tags
            </Link>
            {isLoggedIn && (
              <div id="personal_navigator">
                <div
                  className={clsx(styles.divTitle)}
                  style={{
                    color: "#808080",
                    marginTop: "15px",
                    fontSize: "14px",
                  }}
                >
                  PERSONAL NAVIGATOR
                </div>
                <Link to="/YourQuestion" className={clsx(styles.divRow)}>
                  <FontAwesomeIcon
                    icon={faCircleQuestion}
                    className={clsx(styles.iconMenu)}
                  />{" "}
                  {/* Sử dụng icon */}
                  Your questions
                </Link>
                <div className={clsx(styles.divRow)}>
                  <FontAwesomeIcon
                    icon={faComment}
                    className={clsx(styles.iconMenu)}
                  />{" "}
                  {/* Sử dụng icon */}
                  Your answers
                </div>
                <div className={clsx(styles.divRow)}>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={clsx(styles.iconMenu)}
                  />{" "}
                  {/* Sử dụng icon */}
                  Your likes & votes
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  };
  
  export default Sidebar;