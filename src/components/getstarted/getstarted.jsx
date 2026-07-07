import React from 'react';
import './getstarted.css';

const GetStarted = () => {
  return (
    <section className="g-wrapper" id="get-started" style={{scrollMarginTop: '80px'}}>
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us.
            <br />
            Find your residence soon
          </span>
          <button className="g-button">
            <a href="">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;