import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import DataVis from "../DataVis";
import ExecSummary from "../ExecSummary";
import ReportDescription from "../ReportDescription";
import Slideshow from "../Slideshow";
function Home() {
  return (
    <>
      <HeroSection />
      <ExecSummary />
      <ReportDescription src="images/Seattle.jpg" label="Adventure" />
      <h3>
        {" "}
        Here will be an explanation of how the visual can assist the user. It
        will explain what type of comparisons can be made. There will be several
        visualization on the home page.{" "}
      </h3>
      <DataVis />
    </>
  );
}

export default Home;
