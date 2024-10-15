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
            <img src="/assets/images/list.png" alt="list.png" />
            Questions
          </div>
          <div className={clsx(styles.divRow)}>
            <img src="/assets/images/tag.png" alt="tag.png" />
            Tags
          </div>
          <div className={clsx(styles.divRow)} style={{ color: '#808080', marginTop: '15px', fontSize: '14px'}}>
            PERSONAL NAVIGATOR
          </div>
          <div className={clsx(styles.divRow)}>
            <img src="/assets/images/help-circle.png" alt="help-circle.png" />
            Your questions
          </div>
          <div className={clsx(styles.divRow)}>
            <img src="/assets/images/message-circle.png" alt="message-circle.png" />
            Your answers
          </div>
          <div className={clsx(styles.divRow)}>
            <img src="/assets/images/heart.png" alt="heart.png" />
            Your likes & votes
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
