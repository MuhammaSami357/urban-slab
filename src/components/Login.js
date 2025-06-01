import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Login = ({ show, onClose, onSignUpClick, onForgotPasswordClick }) => {
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  });

  return (
    <div className={`login-container ${show ? "show" : "hide"}`}>
      <button className="close-btn" onClick={onClose}> × </button>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
           const res = await axios.post("http://localhost:5000/api/auth/login", values);

            
            const token = res.data.token;
            const user = res.data.user;

            // Save token in localStorage
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            setLoginSuccess("Login successful!");
            setLoginError("");

            // Optionally: redirect or close login popup
            // onClose();

          } catch (error) {
            const msg = error?.response?.data?.message || "Login failed. Try again.";
            setLoginError(msg);
            setLoginSuccess("");
          }
        }}
      >
        {({ isValid, dirty }) => (
          <Form className="login-form">
            <h2>Login Here</h2>

            <div className="login-input-group">
              <i className="fas fa-envelope"></i>
              <Field type="email" name="email" placeholder="Email" />
            </div>
            <ErrorMessage name="email" component="div" className="error-message" />

            <div className="login-input-group">
              <i className="fas fa-lock"></i>
              <Field type="password" name="password" placeholder="Password" />
            </div>
            <ErrorMessage name="password" component="div" className="error-message" />

            <button type="submit" className="login-btn" disabled={!(isValid && dirty)}>
              Login
            </button>

            {loginError && <div className="error-message">{loginError}</div>}
            {loginSuccess && <div className="success-message">{loginSuccess}</div>}

            <p className="signup-link">
              Don’t have an account?{" "}
              <a onClick={onSignUpClick} style={{ cursor: "pointer" }}>
                Sign Up Here
              </a>
            </p>

            <p className="forgot-password">
              Lost Password?{" "}
              <a id="recover-pass" onClick={onForgotPasswordClick}>
                Recover Password
              </a>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
