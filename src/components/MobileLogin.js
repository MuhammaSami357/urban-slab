import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const MobileLogin = () => {
  const navigate = useNavigate();

  const goToMobForgotPass = () => navigate("/mob-forgot-password")
  const [loginSuccess, setLoginSuccess] = useState("");
  const [loginError, setLoginError] = useState("");

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Minimum 8 characters').required('Required'),
  });

  

  return (
    <div className="login-wrapper">
      <h2 className="login-heading">Welcome Back</h2>

      {loginSuccess && <div className="success-msg">{loginSuccess}</div>}
      {loginError && <div className="error-msg">{loginError}</div>}

      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
         onSubmit={async (values, { resetForm }) => {
          try {
           const res = await axios.post("http://192.168.18.11:3000/api/auth/mobile-login", values);

            
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
        {() => (
          <Form>
            <div className="login-field">
              <i className="fa fa-envelope"></i>
              <Field type="email" name="email" placeholder="Email Address" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="login-field">
              <i className="fa fa-lock"></i>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <button type="submit" className="login-btn">Login</button>

            <p className="login-footer">
              Don't have an account? <span onClick={() => navigate("/mobilesignup")} className="login-signup">Sign Up</span>
             
            </p>
<span className='forgot-pass' onClick={goToMobForgotPass} > Forgot password ? Recover Password  </span>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MobileLogin;
