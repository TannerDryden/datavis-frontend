import React from "react";
import "../App.css";
import "./Slideshow.css";

function Slideshow() {
  return (
    <div className="slideshow-container">
      <video src="/videos/slideshow.mp4" autoPlay loop muted />
    </div>
  );
}

export default Slideshow;
