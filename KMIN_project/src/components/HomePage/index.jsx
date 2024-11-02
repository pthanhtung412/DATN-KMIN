import React from "react";
import clsx from "clsx";
import styles from "./HomePage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons"; // Import biểu tượng cụ thể
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";


const Home = () => {
  return (
    <>
      <div className={clsx(styles.homePage)}>
        <div className={clsx(styles.leftNavbar)}>
          <div
            className={clsx(styles.divTitle)}
            style={{ color: "#808080", fontSize: "14px" }}
          >
            MENU
          </div>
          <div className={clsx(styles.divRow)}>
          <FontAwesomeIcon icon={faAddressBook} className={clsx(styles.iconMenu)}/> {/* Sử dụng icon */}
            Questions</div>
          <div className={clsx(styles.divRow)}>
            <FontAwesomeIcon icon={faBookmark} className={clsx(styles.iconMenu)}/> {/* Sử dụng icon */}
            Tags
          </div>
          <div
            className={clsx(styles.divTitle)}
            style={{ color: "#808080", marginTop: "15px", fontSize: "14px" }}
          >
            PERSONAL NAVIGATOR
          </div>
          <div className={clsx(styles.divRow)}>
            <FontAwesomeIcon
              icon={faCircleQuestion}
              className={clsx(styles.iconMenu)}
            />{" "}
            {/* Sử dụng icon */}
            Your questions
          </div>
          <div className={clsx(styles.divRow)}>
            <FontAwesomeIcon
              icon={faComment}
              className={clsx(styles.iconMenu)}
            />{" "}
            {/* Sử dụng icon */}
            Your answers
          </div>
          <div className={clsx(styles.divRow)}>
            <FontAwesomeIcon icon={faHeart} className={clsx(styles.iconMenu)} />{" "}
            {/* Sử dụng icon */}
            Your likes & votes
          </div>
        </div>
        <div className={clsx(styles.midNavBar)}>
          <div className={clsx(styles.listTag)}>
            <div className={clsx(styles.tagFilter)}>
              <FontAwesomeIcon icon={faClock} className={clsx(styles.iconFilter)}/> {/* Sử dụng icon */}
              New
            </div>
            <div className={clsx(styles.tagFilter)}>
              Top
            </div>
            <div className={clsx(styles.tagFilter)}>
              Hot
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
