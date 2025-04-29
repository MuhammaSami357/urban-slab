


import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignUp = ({ show, onClose, onLoginClick }) => {
  // Validation Schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email format").required("Required"),
    password: Yup.string().min(8, "Password must be at least 8 characters").required("Required"),
  });

  return (
    <>
      <div className={`signup-container ${show ? "show" : "hide"}`}>
        <button className="close-btn" onClick={onClose}>×</button>

        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              const response = await axios.post("http://localhost:5000/api/signup", values);
              console.log("Success:", response.data.msg);
              alert(response.data.msg);
            } catch (error) {
              console.error("Signup Error:", error.response?.data?.msg || "Something went wrong");
              alert(error.response?.data?.msg || "Error during signup");
            }
            
          }}
        >
          {({ touched, errors }) => (
            <Form className="signup-form">
              <h2>Sign Up Here</h2>

              <div className="signup-input-group">
                <i className="fas fa-user"></i>
                <Field type="text" name="name" placeholder="Name" />
              </div>
              <ErrorMessage name="name" component="div" className="error-message" />

              <div className="signup-input-group">
                <i className="fas fa-envelope"></i>
                <Field type="email" name="email" placeholder="Email" />
              </div>
              <ErrorMessage name="email" component="div" className="error-message" />

              <div className="signup-input-group">
                <i className="fas fa-lock"></i>
                <Field type="password" name="password" placeholder="Password" />
              </div>
              <ErrorMessage name="password" component="div" className="error-message" />

              <button type="submit" className="signup-btn">Sign Up</button>

              <p className="login-link">
                Already have an account? <a onClick={onLoginClick} style={{ cursor: "pointer" }}>Login here</a>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default SignUp;



