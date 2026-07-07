import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <section className="h-wrapper">
      {/* Video ki standard classes: flexCenter, paddings, innerWidth, h-container */}
      <div className="flexCenter paddings innerWidth h-container">
        
        {/* Logo image ka sahi path aur width */}
        <img src="./logo.png" alt="logo" width={100} />

        {/* Links ke darmiyan gap ke liye 'h-menu' class zaroori hai */}
        <div className="flexCenter h-menu">
          <a href="#residencies">Residencies</a>
          <a href="#value">Our Value</a>
          <a href="#contact-us">Contact Us</a>
          <a href="#get-started">Get Started</a>
          
          {/* Button par video ki standard 'button' class apply hogi */}
          <button className="button">
            <a href="#contact-us">Contact</a>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Header;