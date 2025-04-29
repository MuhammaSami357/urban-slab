import React from 'react'
import { useNavigate } from 'react-router-dom'

const MobileSignup = () => {


  
  const navigate = useNavigate();
  const handleNavigation = (path) => {
   navigate(path);
  };


  return (
   
<div className="mob-signup-wrapper">
      <h2 className="mob-heading">Create Account</h2>

      <div className="mob-field">
        <i className="fa fa-user"></i>
        <input type="text" placeholder="Full Name" />
      </div>

      <div className="mob-field">
        <i className="fa fa-envelope"></i>
        <input type="email" placeholder="Email Address" />
      </div>

      <div className="mob-field">
        <i className="fa fa-lock"></i>
        <input type="password" placeholder="Password" />
      </div>

      <button className="mob-btn">Register</button>

      <p className="mob-footer">
        Already have an account? <span onClick={() => handleNavigation("/mobilelogin")} className="mob-login">Login</span>
      </p>
    </div>


    
  )
}

export default MobileSignup
