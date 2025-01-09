import clsx from "clsx";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault()
    const user_name = e.target.elements.user_name.value;
    const user_password = e.target.elements.user_password.value;
    
    try {
      const response = await fetch("http://localhost:5173/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_name,
          user_password
        })
      });
      
      if (response.ok) {
        const data = await response.json(); // Chuyển đổi response thành JSON
        const token = data.token; // Lấy token từ dữ liệu JSON

        // Lưu token vào Local Storage
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Hiển thị token để kiểm tra (tùy chọn)
        console.log("Token:", token);
        console.log(data.user)
        // Điều hướng đến trang chính sau khi đăng nhập thành công
        navigate("/");
      } else {
        alert("Login failed");
      }
    } catch {
      console.error("Error during login:", error);
      alert("An error occurred while login");
    }

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
            <form className={clsx(styles.sheetInput)} onSubmit={handleLogin}>
              <div className={clsx(styles.sheetInputItem)}>
                <div className="" style={{ width: "100%" }}>
                  <label htmlFor="username" className={clsx(styles.inputLabel)}>
                    Username
                  </label>
                  <br />
                  <input
                    type="text"
                    id="username"
                    name="user_name"
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
                    name="user_password"
                    className={clsx(styles.inputField)}
                  />
                </div>
              </div>
              <button type="submit" className={clsx("button", styles.loginButton)}>Login</button>
            </form>
          </div>
        </div>
        <div className={clsx(styles.loginImg)}>
          {/* <div className={clsx(styles.overlay)}>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Login;
