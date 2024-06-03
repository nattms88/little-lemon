import React from "react";
import "./Homepage.css";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Highlights from "../../Components/Highlights/Highlights";
import Testimonials from "../../Components/Testimonials/Testimonials";
import AboutSection from "../../Components/About/AboutSection";

function Homepage() {
  return (
    <>
      <HeroSection />
      <Highlights />
      <Testimonials />
      <AboutSection />
    </>
  );
}

export default Homepage;
