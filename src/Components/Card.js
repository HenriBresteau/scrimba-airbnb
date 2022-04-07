import React from "react";
import katie from "../images/katie.png";
import star from "../images/star.svg";

export default function Card() {
  return (
    <div className="card">
      <div className="card--img__container">
        <img src={katie} alt="katie" className="card--img" />
      </div>
      <div className="card--description">
        <div className="card--rating__container">
          <img src={star} alt="star" className="card--rating" />
          <p>
            5.0 <span>(6) • USA</span>
          </p>
        </div>
        <div className="card--text">
          <p>Life lessons with Katie Zofers</p>
        </div>
        <div className="card--price">
          <p>
            <strong> From $136</strong> / person
          </p>
        </div>
      </div>
    </div>
  );
}
