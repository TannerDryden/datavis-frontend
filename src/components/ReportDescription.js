import React from "react";
import "./ReportDescription.css";

function ReportDescription(props) {
  return (
    <>
      <li className="Description">
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img
            className="cards__item__img"
            alt="Travel Image"
            src={props.src}
          />
        </figure>
      </li>
    </>
  );
}

export default ReportDescription;
