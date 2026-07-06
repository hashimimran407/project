import React from "react";
import "./hero.css";
import { HiLocationMarker } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="orange-circle"></div>

        <h1>
          Discover <br />
          Most Suitable <br />
          Property
        </h1>

        <p>
          Find a variety of properties that suit you very easily
          <br />
          Forget all difficulties in finding a residence for you
        </p>

        <div className="search-bar">
          <HiLocationMarker size={25} color="#4066ff" />
          <input type="text" placeholder="Search location" />
          <button>Search</button>
        </div>

        <div className="stats">
          <div>
            <h2>
              9,000 <span>+</span>
            </h2>
            <p>Premium Product</p>
          </div>

          <div>
            <h2>
              2,000 <span>+</span>
            </h2>
            <p>Happy Customer</p>
          </div>

          <div>
            <h2>
              28 <span>+</span>
            </h2>
            <p>Awards Winning</p>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="image-container">
          <img src="/hero-image.png" alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;