import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/IntroVideo_Trim2.mp4" autoPlay loop muted />
      <h1>Washington State Hospitality Association</h1>
      <p>Health of the Hospitality Industry</p>
    </div>
  );
}

export default HeroSection;
