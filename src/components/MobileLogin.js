import React from 'react'
import { useNavigate } from 'react-router-dom'
const MobileLogin = () => {


  const navigate = useNavigate();
       const handleNavigation = (path) => {
        navigate(path);
       };
  return (
    <div className="login-wrapper">
    <h2 className="login-heading">Welcome Back</h2>

    <div className="login-field">
      <i className="fa fa-envelope"></i>
      <input type="email" placeholder="Email Address" />
    </div>

    <div className="login-field">
      <i className="fa fa-lock"></i>
      <input type="password" placeholder="Password" />
    </div>

    <button className="login-btn">Login</button>

    <p className="login-footer">

      Don't have an account? <span onClick={() => handleNavigation("/mobilesignup")} className="login-signup">Sign Up</span>
    </p>

    
  </div>
  )
}

export default MobileLogin