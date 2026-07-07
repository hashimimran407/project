import React from 'react';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiVideoCamera } from 'react-icons/hi';
import { HiChatBubbleBottomCenterText } from 'react-icons/hi2';
import './contact.css';

const contactModes = [
  {
    icon: <MdCall />,
    title: "Call",
    number: "072474874595",
    btnText: "Call now"
  },
  {
    icon: <BsFillChatDotsFill />,
    title: "Chat",
    number: "5730585734587",
    btnText: "Chat now"
  },
  {
    icon: <HiVideoCamera />,
    title: "Video Call",
    number: "54728587845",
    btnText: "Video Call now"
  },
  {
    icon: <HiChatBubbleBottomCenterText />,
    title: "Message",
    number: "5728375825",
    btnText: "Message now"
  }
];

const Contact = () => {
  return (
    <section id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Easy to contact us</span>
          <span className="secondaryText">
            We are always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better.
          </span>
          <div className="c-modes">
            {contactModes.map((mode, i) => (
              <div className="flexColCenter c-mode-card" key={i}>
                <div className="flexStart card-top">
                  <div className="flexCenter icon">{mode.icon}</div>
                  <div className="flexColStart detail">
                    <span className="primaryText head-text">{mode.title}</span>
                    <span className="secondaryText text-number">{mode.number}</span>
                  </div>
                </div>
                <button className="flexCenter c-button">{mode.btnText}</button>
              </div>
            ))}
          </div>
        </div>
        <div className="c-right">
          <div className="image-container">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" alt="contact-house" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;