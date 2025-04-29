import React,{useEffect, useState} from 'react';
import logo from '../components/firstlogo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onUserIconClick, onSearchIconClick, onBarIconClick }) => {
  const navigate = useNavigate();

  const goToNewArrival = () => navigate('/newarrival');
  const goToLookBook = () => navigate('/lookbook');
  const goToAbout = () => navigate('/about');
  const goToContact = () => navigate('/contact');
  const goToHome = () => navigate('/');
// Dark mode implementation
const [darkMode, setDarkMode] = useState(() => {
  return localStorage.getItem('theme') === 'dark';
});

useEffect(() => {
  if (darkMode) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
  }
}, [darkMode]);

const toggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <>
      {/* Desktop Navbar */}
      <div className='container-one'>
        <header>
          <div className="mini-nav">
            <div className="mini-navlinks">
              <i id='fb'  className="fa-brands fa-facebook"></i>
              <i id='tiktok' className="fa-brands fa-tiktok"></i>
              <i  id='insta' className="fa-brands fa-instagram"></i>
            </div>
            <div className="main-con">
              <div className="mini-line">
                <p>Cozy Meets Comfort</p>
              </div>
            </div>
          </div>
        </header>

        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="CozyWear Logo" className="logo-img" />
            <span className="logo-text">CozyWear</span>
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Search for products..." />
          </div>

          <div className="icons">
            <i className="fas fa-user icon" onClick={onUserIconClick}></i>
            <i className="fas fa-shopping-cart icon"></i>
            <i className="fas fa-heart icon"></i>
          </div>
        </nav>

        <div className="third-nav">
          <div className="nav-options">
            <li onClick={goToHome}>Explore</li>
            <li onClick={goToNewArrival}>New Arrivals</li>
            <li onClick={goToLookBook}>Summer Collection</li>
            <li onClick={goToAbout}>Our Journey</li>
            <li onClick={goToContact}>Contact Us</li>
          </div>
          <div className="mode-lang">
          <i 
             className={darkMode ? 'fas fa-sun  sun-icon' : 'fa fa-moon  moon-icon'} 
             onClick={toggleDarkMode}
              style={{ cursor: 'pointer', fontSize: '1.5rem' }}
            ></i>
            
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="mobile-con">
        <div className="head-nav">
          <div className="marquee-content">
            <p>Welcome to Us - Cozy meets comfort</p>
            <p>Welcome to Us - Cozy meets comfort</p>
          </div>
        </div>
        <div className="next-nav">
          <nav className="navbar-two">
            <div className="left-section">
              <i className="fa-solid fa-bars-staggered" onClick={onBarIconClick}></i>
            </div>
            <div className="logo-section">
              <img src={logo} alt="Logo" className="logo" />
              <span className="brand-name">CozyWear</span>
            </div>
            <div className="right-section">
              <i className="fas fa-search" onClick={onSearchIconClick}></i>
              <i className="fas fa-shopping-cart"></i>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
