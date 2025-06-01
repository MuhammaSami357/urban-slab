import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import NewArrivals from './components/NewArrivals';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import BarOptions from './components/BarOptions';
import MobileSignup from './components/MobileSignup';
import MobileLogin from './components/MobileLogin';
import './App.css';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import MobileSlider from './components/MobileSlider';
import ProductDetail from './components/ProductDetail'
import MobileProductDetail from './components/MobileProductDetail';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import MobileForgotPassword from './components/MobileForgotPassword';
function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showBar, setShowBar] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  // Toggle functions


  const toggleSignUp = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  const toggleLogin = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const toggleBar = () => {
    setShowBar((prev) => !prev);
  };

  const toggleForgot = () => {
    setShowForgotPassword(true)
    setShowLogin(false);
    setShowSignUp(false);

  }

  // Close functions
  const closeSignUp = () => setShowSignUp(false);


  const closeLogin = () => setShowLogin(false);

  const closeSearch = () => setShowSearch(false);

  const closeBar = () => setShowBar(false);

  const closeForgotPassword = () => setShowForgotPassword(false);


  return (
    <BrowserRouter>
      <div>
        {/* Navbar with click handlers */}
        <Navbar
          onUserIconClick={toggleSignUp}
          onSearchIconClick={toggleSearch}
          onBarIconClick={toggleBar}
        />

        {/* Routes for pages */}
        <Routes>
          <Route path="/" element={<><Home /><MobileSlider /></>} />

          <Route path="/newarrival" element={<NewArrivals />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path='/mobilesignup' element={<MobileSignup />} />

          <Route path="/product/:id" element={<ProductDetail />} />

          <Route path="/MobileProduct/:id" element={<MobileProductDetail />} />

          <Route path='/mobilelogin' element={<MobileLogin />} />

          <Route path="/reset-password/:token" element={<ResetPassword />} />

          <Route path='/mob-forgot-password' element={<MobileForgotPassword />} />
        </Routes>


        {/* Conditional rendering of modals */}
        {showSignUp && <SignUp show={showSignUp} onClose={closeSignUp} onLoginClick={toggleLogin} />}


        {showLogin && <Login show={showLogin} onClose={closeLogin} onSignUpClick={toggleSignUp}
          onForgotPasswordClick={toggleForgot} />}



        {showForgotPassword && <ForgotPassword show={showForgotPassword} onClose={closeForgotPassword} onLoginClick={toggleLogin} onForgotPasswordClick={toggleForgot} />}


        {/* {showSearch && <SearchBar show={showSearch} onClose={closeSearch} />} */}
        <SearchBar show={showSearch} onClose={closeSearch} />

        {showBar && <BarOptions show={showBar} onClose={closeBar} />}


        {/* Scroll to Top Button */}
        <ScrollToTopButton />

        {/* Footer added here */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App; 