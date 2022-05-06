import React from "react";
import "./ExecSummary.css";

function ExecSummary() {
  return (
    <div className="container">
      <h1>Executive Summary</h1>
      <hr class="style-two"></hr>
      <div className="grid-container">
        <div className="execContainer">
          <p>
            {" "}
            The Washington State University Metro Center is working with the
            Washington Hospitality Association to develop and track key industry
            benchmarks to help gauge the health of the industry, support
            businesses in making sound decisions, and support policy development
            based on unbiased data. The Metro Center receives three types of
            highly confidential industry data from Washington State’s Employment
            Security Department (ESD) and Department of Revenue (DOR). These
            data are at the individual employer and employee level, numbering
            over 5 million records per quarter and the Metro Center is tracking
            these data from 2010 forward.
          </p>
        </div>
        <div className="WSU-LOGO">
          <img className="resize" src={require("./WSU-Logo.jpg")} />
        </div>
      </div>
      <h1> Metropolitcan Center for Applied Research and Extension</h1>
      <hr class="style-two"></hr>
      <h2> About Washington State University’s Metro Center</h2>
      <div className="metroText">
        <p>
          {" "}
          Washington State University’s Metropolitan Center for Applied Research
          and Extension (Metro Center) was created to strengthen connections
          between WSU and Washington’s cities. Drawing upon the many experts at
          WSU’s five campuses, Extension offices and research stations across
          the state, the Metro Center leverages applied research, cutting-edge
          analysis, and a deep understanding of place-based solutions to help
          communities thrive. Every Metro Center project is unique, designed to
          cultivate new ideas and produce actionable results for each of our
          clients.{" "}
        </p>
      </div>
      <h2> How the Metro Center Operates</h2>
      <div className="metroText">
        <p>
          The Metro Center acts as a conduit and single point of contact to the
          expertise at WSU. Working on a project basis, the Metro Center
          provides comprehensive project management services to public
          officials, non-profits, and private sector leaders wanting to access
          the unbiased knowledge and research capacity of Washington’s land
          grant university.
        </p>
      </div>
    </div>
  );
}

export default ExecSummary;
