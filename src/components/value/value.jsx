import React, { useState } from 'react';
import { HiShieldCheck } from 'react-icons/hi';
import { MdCancel, MdAnalytics } from 'react-icons/md';
import './value.css';

const accordionData = [
  {
    icon: <HiShieldCheck />,
    heading: "Best interest rates on the market",
    detail: "We offer the most flexible and competitive interest rates in the market, tailored to fit your financial budget and help you secure your dream home without any hassle."
  },
  {
    icon: <MdCancel />,
    heading: "Prevent unstable prices",
    detail: "Our expert analysis and fixed-price contracts protect you from market fluctuations, ensuring your property value remains stable and your investment stays secure."
  },
  {
    icon: <MdAnalytics />,
    heading: "Best price on the market",
    detail: "We guarantee top-tier property options at the most affordable market prices, ensuring you get maximum value and premium comfort for your investment."
  }
];

const Value = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
   <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" alt="house" />
          </div>
        </div>

        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            We are always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better.
          </span>

          <div className="v-accordion">
            {accordionData.map((item, i) => {
              const isOpen = expandedIndex === i;
              return (
                <div className={`v-accordion-item ${isOpen ? 'expanded' : ''}`} key={i}>
                  <div className="v-accordion-button" onClick={() => toggleAccordion(i)}>
                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText head-text">{item.heading}</span>
                    <div className="flexCenter icon arrow-icon">
                      <span className={`arrow ${isOpen ? 'up' : ''}`}>▼</span>
                    </div>
                  </div>
                  <div className={`v-accordion-panel ${isOpen ? 'show' : ''}`}>
                    <p className="secondaryText">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;