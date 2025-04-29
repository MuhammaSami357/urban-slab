
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid Email format').required('Required'),
      message: Yup.string().required('Your message is required'),
    }),
    onSubmit: (values) => {
      console.log('Form Submitted:', values);
      alert('Message Sent Successfully!');
    },
  });

  return (
    <>
      {/* Laptop View */}
      <div className="contact-con">
        <div className="contact-page">
          <div className="detail-con">
            <h2>Get in Touch</h2>
            <p>Feel free to reach out to us for any inquiries or support.</p>
            <div className="info">
              <p><i className="fas fa-map-marker-alt"></i> 123 Cozy Street, Fashion City</p>
              <p><i className="fas fa-phone"></i> 03186261688</p>
              <p><i className="fas fa-envelope"></i> hafizsami357@gmail.com</p>
            </div>
          </div>

          <div className="contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="input-group">
                <i className="fas fa-user"></i>
                <input 
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  {...formik.getFieldProps('name')}
                />
                
              </div>
              {formik.touched.name && formik.errors.name ? (
                  <p className="error-text">{formik.errors.name}</p>
                ) : null}
              <div className="input-group">
                <i className="fas fa-envelope"></i>
                <input 
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  {...formik.getFieldProps('email')}
                />
                
              </div>
              {formik.touched.email && formik.errors.email ? (
                  <p className="error-text">{formik.errors.email}</p>
                ) : null}
              <div className="input-group">
                <i className="fas fa-comment"></i>
                <textarea 
                  name="message"
                  placeholder="Your Message"
                  {...formik.getFieldProps('message')}
                ></textarea>
                
              </div>
              {formik.touched.message && formik.errors.message ? (
                  <p className="error-text">{formik.errors.message}</p>
                ) : null}
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="mobile-contactpage">
        <div className="mobile-contact-page">
          <h2 className="fade-in">Get in Touch</h2>
          <p className="fade-in">We’d love to hear from you!</p>

          <div className="mobile-info slide-in">
            <p><i className="fas fa-map-marker-alt"></i> 123 Cozy Street, Fashion City</p>
            <p><i className="fas fa-phone"></i> +123 456 7890</p>
            <p><i className="fas fa-envelope"></i> support@cozywear.com</p>
          </div>

          <h2 className="fade-in">Contact Us</h2>

          <form className="mobile-contact-form slide-in" onSubmit={formik.handleSubmit}>
            <div className="mob-input-group">
              <i className="fas fa-user"></i>
              <input 
                type="text"
                name="name"
                placeholder="Your Name"
                {...formik.getFieldProps('name')}
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="error-text">{formik.errors.name}</p>
              ) : null}
            </div>

            <div className="mob-input-group">
              <i className="fas fa-envelope"></i>
              <input 
                type="email"
                name="email"
                placeholder="Your Email"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="error-text">{formik.errors.email}</p>
              ) : null}
            </div>

            <div className="mob-input-group">
              <i className="fas fa-comment"></i>
              <textarea 
                name="message"
                placeholder="Your Message"
                {...formik.getFieldProps('message')}
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <p className="error-text">{formik.errors.message}</p>
              ) : null}
            </div>

            <button type="submit" className="submit-btn bounce">Send Message</button>
          </form>
        </div>
      </div>

      
    </>
  );
}

export default Contact;
