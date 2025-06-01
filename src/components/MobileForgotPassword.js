import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const MobileForgotPassword = () => {
    const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setMsg("");
    setError("");

    try {
      const res = await fetch("http://192.168.18.11:5000/api/auth/mobile-forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: values.email }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.msg || "Something went wrong");

      setMsg(data.msg);
      resetForm();
    } catch (err) {
      setError(err.message);
    }
    setSubmitting(false);
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="forgot-password-form">
            <label htmlFor="email">Email Address</label>
            <Field
              type="email"
              name="email"
              placeholder="Enter your email"
              id="email"
              className="input-field"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error-msg"
            />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Reset Link"}
            </button>
          </Form>
        )}
      </Formik>
      {msg && <p className="success-msg">{msg}</p>}
      {error && <p className="error-msg">{error}</p>}
    </div>
  );
};

export default MobileForgotPassword;
