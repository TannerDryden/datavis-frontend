import React from "react";
import "./ExecSummary.css";
function ExecSummary() {
  return (
    <div className="container">
      <h1>Executive Summary</h1>
      <hr class="style-two"></hr>
      <div className="execContainer">
        <p>
          {" "}
          The Metro Center is working with the Washington Hospitality
          Association to develop and track key industry benchmarks (eight) to
          help gauge the health of the industry, support businesses in making
          sound decisions, and support policy development based on unbiased
          data. The Metro Center receives three types of highly confidential
          industry data from Washington State’s Employment Security Department
          (ESD) and Department of Revenue (DOR). These data are at the
          individual employer and employee level, numbering over 5 million
          records per quarter and the Metro Center is tracking these data from
          2010 forward.
        </p>
      </div>
    </div>
  );
}

export default ExecSummary;
