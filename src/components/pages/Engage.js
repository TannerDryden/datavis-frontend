import React from "react";
import "../../App.css";
import "./Engage.css";
function Engage() {
  return (
    <div className="container">
      <h1>How to Engage</h1>
      <hr class="style-two"></hr>
      <div className="grid-container">
        <div className="execContainer">
          <p>
            {" "}
            Engage by utilizing the Blog tab. Here you can insert the dashboard
            that interests you and write an analysis to support the
            visualizations. The post can be exported to your computer to be
            saved or to send to a collegue!
          </p>
        </div>
        <div className="PeoplePhoto">
          <img className="resize" src={require("../people.jpg")} />
        </div>
      </div>
    </div>
  );
}
export default Engage;
