import clsx from "clsx";
import styles from "./HomePage.module.css";

const Home = () => {
  return (
    <>
      <div className={clsx(styles.homePage)}>
        <div className={clsx(styles.leftNavbar)}>
          <div className={clsx(styles.divRow)} style={{ color: '#808080', fontSize: '14px'}}>
            MENU
          </div>
          <div className={clsx(styles.divRow)}>
            Questions
          </div>
          <div className={clsx(styles.divRow)}>
            Tags
          </div>
          <div className={clsx(styles.divRow)} style={{ color: '#808080', marginTop: '15px', fontSize: '14px'}}>
            PERSONAL NAVIGATOR
          </div>
          <div className={clsx(styles.divRow)}>
            Your questions
          </div>
          <div className={clsx(styles.divRow)}>
            Your answers
          </div>
          <div className={clsx(styles.divRow)}>
            Your likes & votes
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
