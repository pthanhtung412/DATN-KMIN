import clsx from "clsx";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_password: "",
    user_repeatPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRegisterClick = async (e) => {
    e.preventDefault();
    // Xử lý logic đăng ký ở đây
    if (formData.password !== formData.repeatPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5173/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_name: formData.user_name,
          user_email: formData.user_email,
          user_password: formData.user_password
        })
      });

      if (response.ok) {
        // Redirect to login page on successful registration
        alert("Registration successful");
        navigate("/Login");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred while registering");
    }
  };

  return (
    <form onSubmit={handleRegisterClick}>
      <div className={clsx(styles.loginForm)}>
        <div className={clsx(styles.loginContent)}>
          <div className={clsx(styles.loginSheet)}>
            <div className={clsx(styles.sheetTitle)}>
              <span>Join MinDev community</span>
            </div>
            <div className={clsx(styles.sheetDescription)}>
              Get more features and privileges by joining the most helpful community
            </div>
            <div className={clsx(styles.sheetInput)}>
              <div className={clsx(styles.sheetInputItem)}>
                <div style={{ width: "100%" }}>
                  <label htmlFor="username" className={clsx(styles.inputLabel)}>
                    Username
                  </label>
                  <br />
                  <input
                    type="text"
                    id="username"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange} // Thêm onChange handler
                    className={clsx(styles.inputField)}
                  />
                </div>
              </div>
              <div className={clsx(styles.sheetInputItem)}>
                <div style={{ width: "100%" }}>
                  <label htmlFor="Email" className={clsx(styles.inputLabel)}>
                    Email
                  </label>
                  <br />
                  <input
                    type="email"
                    id="Email"
                    name="user_email" // Đảm bảo tên trường đúng
                    value={formData.user_email}
                    onChange={handleChange} // Thêm onChange handler
                    className={clsx(styles.inputField)}
                  />
                </div>
              </div>
              <div className={clsx(styles.sheetInputItem)}>
                <div style={{ width: "100%" }}>
                  <label htmlFor="password" className={clsx(styles.inputLabel)}>
                    Password
                  </label>
                  <br />
                  <input
                    type="password"
                    id="password"
                    name="user_password"
                    value={formData.user_password}
                    onChange={handleChange} // Thêm onChange handler
                    className={clsx(styles.inputField)}
                  />
                </div>
              </div>
              <div className={clsx(styles.sheetInputItem)}>
                <div style={{ width: "100%" }}>
                  <label htmlFor="repeatPassword" className={clsx(styles.inputLabel)}>
                    Repeat password
                  </label>
                  <br />
                  <input
                    type="password"
                    id="repeatPassword"
                    name="user_repeatPassword"
                    value={formData.user_repeatPassword}
                    onChange={handleChange} // Thêm onChange handler
                    className={clsx(styles.inputField)}
                  />
                </div>
              </div>
              <button type="submit" className={clsx("button", styles.loginButton)}>Register</button>
            </div>
          </div>
        </div>
        <div className={clsx(styles.loginImg)}></div>
      </div>
    </form>
  );
};

export default Register;
