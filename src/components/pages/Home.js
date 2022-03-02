import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import DataVis from "../DataVis";
import ExecSummary from "../ExecSummary";
import ReportDescription from "../ReportDescription";
function Home() {
  return (
    <>
      <HeroSection />
      <ExecSummary />
      <ReportDescription src="images/Seattles.jpg" label="Adventure" />
      <DataVis />
    </>
  );
}

export default Home;
