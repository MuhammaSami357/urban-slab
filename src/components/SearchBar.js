
import React, { useState } from "react";
import catagories from "../data/catagories"; 

const SearchBar = ({ show, onClose }) => {
  const [selectedCatagory, setSelectedCatagory] = useState("All Catagories");
  const [searchTerm, setSearchTerm] = useState("");

  return (
  <div className={`search-container ${show ? 'search-slide-in' : 'search-slide-out'}`}>

      {/* Header Section */}
      <div className="btn-heading">
        <button className="mob-closebtn" onClick={onClose}>
          ×
        </button>
      </div>

      {/* Dropdown + Search Bar */}
      <div className="search-section">
        {/* Categories Dropdown */}
        <select
          className="categories-dropdown"
          value={selectedCatagory}
          onChange={(e) => setSelectedCatagory(e.target.value)}
        >
          {catagories.map((catagory, index) => (
            <option key={index} value={catagory}>
              {catagory}
            </option>
          ))}
        </select>

        {/* Search Bar */}
        <div className="bar-srch">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
            <i   id="srch-icon" className="fas fa-search"></i>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
