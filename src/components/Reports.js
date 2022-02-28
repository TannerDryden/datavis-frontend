import React, { useState, useEffect } from "react";
import "./Reports.css";
import { Link } from "react-router-dom";

function Reports(props) {
  return (
    <>
      <li className="cards__item">
        <figure className="cards__item__pic-wrap">
          <img className="cards__item__img" src={props.src} />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{props.text}</h5>
        </div>
      </li>
    </>
  );
}

export default Reports;
