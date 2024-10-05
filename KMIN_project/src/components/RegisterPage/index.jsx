import clsx from "clsx";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <>
      <div className={clsx(styles.loginForm)}>
        <div className={clsx(styles.loginContent)}>
          <div className={clsx(styles.loginSheet)}>
            <div className={clsx(styles.sheetTitle)}>
              <span>Join MinDev community</span>
            </div>
            <div className={clsx(styles.sheetDescription)}>
            Get more features and priviliges by joining to the most helpful community
            </div>
            <div className={clsx(styles.sheetInput)}>
              <div className={clsx(styles.sheetInputItem)}>
                <div className="" style={{ width: "100%" }}>
                  <label htmlFor="username" className={clsx(styles.inputLabel)}>
                    Username
                  </label>
                  <br />
                  <input
                    type="text"
                    id="username"
                    name="username"
                    defaultValue="azakost"
                    className={clsx(styles.inputField)}
                  />
                </div>
              </div>
              <div className={clsx(styles.sheetInputItem)}>
                <div className="" style={{ width: "100%" }}>
                  <label htmlFor="password" className={clsx(styles.inputLabel)}>
                    Password
                  </label>
                  <br />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    defaultValue="azako"
                    className={clsx(styles.inputField)}
                  />
                </div>
              </div>
              <div className={clsx(styles.sheetInputItem)}>
                <div className="" style={{ width: "100%" }}>
                  <label htmlFor="password" className={clsx(styles.inputLabel)}>
                    Password
                  </label>
                  <br />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    defaultValue="azako"
                    className={clsx(styles.inputField)}
                  />
                </div>
              </div>
              <div className={clsx(styles.sheetInputItem)}>
                <div className="" style={{ width: "100%" }}>
                  <label htmlFor="password" className={clsx(styles.inputLabel)}>
                    Password
                  </label>
                  <br />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    defaultValue="azako"
                    className={clsx(styles.inputField)}
                  />
                </div>
              </div>
              <button type="button" className={clsx(styles.loginButton)}>Register</button>
            </div>
          </div>
        </div>
        <div className={clsx(styles.loginImg)}></div>
      </div>
    </>
  );
};

export default Register;
