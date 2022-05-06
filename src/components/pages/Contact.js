import React from "react";
import "../../App.css";
import "./Engage.css";
function Contact() {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <hr class="style-two"></hr>
      <div className="grid-container">
        <div className="execContainer">
          <p>
            Learn more about the Metro Center at our{" "}
            <a href="https://metrocenter.wsu.edu/" rel="noreferrer">
              website.
            </a>{" "}
            <br />
            The Metropolitan Center for Applied Research and Extension can be
            reached via email or by phone. Please consult our{" "}
            <a href="https://metrocenter.wsu.edu/directory/" rel="noreferrer">
              directory
            </a>{" "}
            for more information on how to reach individuals directly.
            <br />
            <br />
            Phone: (206) 219-2400
            <br />
            Email: Metro.Center@wsu.edu
          </p>
        </div>
        <h2 className="Areas">
          {" "}
          WSU Everett <br />
          915 N. Broadway Everett, WA 98201
          <br />
          <br />
          WSU Seattle
          <br />
          901 5th Avenue, Ste 2900 Seattle, WA 98164
        </h2>
      </div>
    </div>
  );
}
export default Contact;
