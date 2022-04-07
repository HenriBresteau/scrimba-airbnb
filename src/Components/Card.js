import React from "react";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "Sold out";
  } else if (props.item.location === "Online") {
    badgeText = "online";
  }
  return (
    <div className="card">
      <div className="card--img__container">
        <img
          src={`../images/${props.item.coverImg}`}
          alt={props.item.title}
          className="card--img"
        />
        {badgeText && <div className="card--img__sold">{badgeText}</div>}
      </div>
      <div className="card--description">
        <div className="card--rating__container">
          <img src="../images/star.svg" alt="star" className="card--rating" />
          <p>
            {props.item.stats.rating}{" "}
            <span>
              ({props.item.stats.reviewCount}) • {props.item.location}
            </span>
          </p>
        </div>
        <div className="card--text">
          <h2>{props.item.title}</h2>
          <p>{props.item.description}</p>
        </div>
        <div className="card--price">
          <p>
            <strong> From $ {props.item.price}</strong> / person
          </p>
        </div>
      </div>
    </div>
  );
}
