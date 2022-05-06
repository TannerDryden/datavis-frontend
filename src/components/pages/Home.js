import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import DataVis from "../DataVis";
import ExecSummary from "../ExecSummary";

function Home() {
  return (
    <>
      <HeroSection />

      <ExecSummary />

      <DataVis />
    </>
  );
}

export default Home;
// <ReportDescription src="images/Seattle.jpg" label="Adventure" />
