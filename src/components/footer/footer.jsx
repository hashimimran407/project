import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <div className="f-logo-container">
            <span className="f-logo-text">Homyz</span>
            <span className="f-logo-dot"></span>
          </div>
          <span className="secondaryText f-vision">
            Our vision is to make all people
            <br />
            the best place to live for them.
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText f-info-title">Information</span>
          <span className="secondaryText f-address">Lahore</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;