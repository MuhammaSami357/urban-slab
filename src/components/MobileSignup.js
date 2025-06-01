import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const MobileSignup = () => {
  const navigate = useNavigate();

  // Validation Schema for Signup
  const validationSchema = Yup.object({ 
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Minimum 8 characters').required('Required'),
  });

  // Handle form submission
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const res = await axios.post('http://192.168.18.11:5000/api/mobile-signup', values);
      alert(res.data.msg);
      resetForm();
      navigate('/mobilelogin');
    } catch (error) {
      const errorMsg = error.response?.data?.msg || 'Signup failed';
      alert(errorMsg);
    }
  };

  return (
    <div className="mob-signup-wrapper">
      <h2 className="mob-heading">Create Account</h2>

      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        // onSubmit={handleSubmit}
        onSubmit={async (values, { resetForm }) => {
    try {
      const response = await axios.post("http://192.168.18.11:3000/api/auth/mobile-signup", values);
      console.log("Success:", response.data.msg);
      alert(response.data.msg);
      resetForm();
      navigate('/mobilelogin');
    } catch (error) {
      const errorMsg = error?.response?.data?.msg || "Signup failed. Please try again later.";
      console.error("Signup Error:", errorMsg);
      alert(errorMsg);
    }
  }}
      >
        {() => (
          <Form>
            <div className="mob-field">
              <i className="fa fa-user"></i>
              <Field type="text" name="name" placeholder="Full Name" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>

            <div className="mob-field">
              <i className="fa fa-envelope"></i>
              <Field type="email" name="email" placeholder="Email Address" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="mob-field">
              <i className="fa fa-lock"></i>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>

            <button type="submit" className="mob-btn">Register</button>

            <p className="mob-footer">
              Already have an account? <span onClick={() => navigate("/mobilelogin")} className="mob-login">Login</span>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MobileSignup;
