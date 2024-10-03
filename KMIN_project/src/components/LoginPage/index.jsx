import clsx from "clsx";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/")
  }

  return (
    <>
      <div className={clsx(styles.loginForm)}>
        <div className={clsx(styles.loginContent)}>
          <div className={clsx(styles.loginSheet)}>
            <div className={clsx(styles.sheetTitle)}>
              <span>We’ve missed you!</span>
            </div>
            <div className={clsx(styles.sheetDescription)}>
              More than 150 questions are waiting for your wise suggestions!
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
              <div className={clsx("button", styles.loginButton)} onClick={handleLogin}>Login</div>
            </div>
          </div>
        </div>
        <div className={clsx(styles.loginImg)}></div>
      </div>
    </>
  );
};

export default Login;
