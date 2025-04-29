
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = ({ show, onClose, onSignUpClick }) => {
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
        onSubmit={(values) => {
          console.log("Login Data:", values);
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

            <p className="signup-link">
              
              Don’t have an account?{" "}
              <a onClick={onSignUpClick} style={{ cursor: "pointer" }}>
                Sign Up Here
              </a>
            </p>
            <p className="forgot-password">
      Lost Your Password? 
    </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
