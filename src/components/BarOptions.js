import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BarOptions = ({ show, onClose }) => {
  const navigate = useNavigate();

  // Function to navigate and close the menu
  const handleNavigation = (path) => {
    navigate(path); // Navigate to the selected page
    onClose(); // Hide the menu
  };

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`bar-con ${show ? "show" : ""}`}>
      <button className="barclose-btn" onClick={onClose}>
        ×
      </button>
      <h4>Welcome to Menu</h4>

      <ul className="menu-list">
        <li onClick={() => handleNavigation("/")}>
          <i className="fas fa-compass"></i> Explore
        </li>
        <li onClick={() => handleNavigation("/newarrival")}>
          <i className="fas fa-fire"></i> New Arrival
        </li>
        <li onClick={() => handleNavigation("/summersale")}>
          <i className="fas fa-sun"></i> Summer Collection
        </li>
        <li onClick={() => handleNavigation("/contact")}>
          <i className="fas fa-phone"></i> Contact Us
        </li>
        <li
          onClick={() => {
            handleNavigation("/mobilesignup");
            onClose(); // BarOptions menu close hoga
          }}
        >
          <i className="fas fa-user"></i> Accounts
        </li>

        {/* Dark Mode Toggle Button with Text */}
        <li onClick={toggleDarkMode} style={{ cursor: "pointer", fontSize: "1.2rem", display: "flex",  gap: "0.2rem" }}>
          <i className={darkMode ? "fas fa-sun icon sun-icon" : "fas fa-moon icon moon-icon"}></i> 
          {darkMode ? "Light Mode" : "Dark Mode"}
        </li>
      </ul>
    </div>
  );
};

export default BarOptions;
