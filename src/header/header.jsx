import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="header-container">
        <div className="header-logo">
          NorthLab<span>Estate</span>
        </div>
        <nav className="header-menu">
          <a href="#residencies" className="menu-item">Residencies</a>
          <a href="#value" className="menu-item">Our Value</a>
          <a href="#contact" className="menu-item">Contact Us</a>
          <a href="#get-started" className="menu-item">Get Started</a>
        </nav>
        <div className="header-action">
          <button className="cta-button">Contact</button>
        </div>
      </div>
    </header>
  );
};

export default Header;