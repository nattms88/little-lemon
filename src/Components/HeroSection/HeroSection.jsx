import React from "react";
import { Link } from "react-router-dom";
import banner from "../../Assets/images/banner.jpg";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <header className="hero">
        <div className="banner">
          <div className="banner-info">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/reservations">
            <button className="btnHero">Reserve a Table</button>
          </Link>
          </div>
        </div>
        <div className="banner-img">
          <img src={banner} alt="banner" />
        </div>
      </header>
    </>
  );
}

export default HeroSection;
