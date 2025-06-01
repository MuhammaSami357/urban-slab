import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ForgotPassword = ({ show, onClose, onLoginClick }) => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
  });

  return (
    <div className={`forgot-pass-con ${show ? "show" : "hide"}`}>
      <button className="close-btn" onClick={onClose}> × </button>

      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
  try {
    const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: values.email }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Reset link sent! Check your email.");
    } else {
      alert(data.message || "Something went wrong");
    }
  } catch (error) {
    console.error("Error sending reset link:", error);
    alert("Failed to send reset link.");
  }
}}
      >
        {({ isValid, dirty }) => (
          <Form className="forgot-form">
            <h2>Forgot Password!</h2>
            <p className="info-text">
              Lost your password? Please enter your email address. We'll send you a link to reset your password.
            </p>

            <div className="forgot-input-group">
              <i className="fas fa-envelope"></i>
              <Field type="email" name="email" placeholder="Email Address" />
            </div>
            <ErrorMessage name="email" component="div" className="error-message" />

            <button type="submit" className="send-link-btn" disabled={!(isValid && dirty)}>
              Send Reset Link
            </button>

           <button
  type="button"
  className="cancel-btn"
  onClick={() => {
    onClose();         // Forgot password ko band karo
    onLoginClick();    // Login page ko show karo
  }}
>
  Cancel
</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPassword;
