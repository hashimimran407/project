import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        
        {/* Yahan Logo Image aayegi */}
        <img src="./logo.png" alt="logo" width={100} />

        {/* Yahan Menu items aayenge */}
        <div className="flexCenter h-menu">
          <a href="#residencies">Residencies</a>
          <a href="#value">Our Value</a>
          <a href="#contact-us">Contact Us</a>
          <a href="#get-started">Get Started</a>
          <button className="button">
            <a href="#contact-us">Contact</a>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Header;