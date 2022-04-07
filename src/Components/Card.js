import React from "react";

export default function Card({
  title,
  rate,
  reviewCount,
  openSpots,
  location,
  description,
  price,
  img,
}) {
  return (
    <div className="card">
      <div className="card--img__container">
        <img src={`../images/${img}`} alt={title} className="card--img" />

        {openSpots > 0 ? (
          <div className="card--img__sold">Online</div>
        ) : (
          <div className="card--img__sold">Sold Out</div>
        )}
      </div>
      <div className="card--description">
        <div className="card--rating__container">
          <img src="../images/star.svg" alt="star" className="card--rating" />
          <p>
            {rate}{" "}
            <span>
              ({reviewCount}) • {location}
            </span>
          </p>
        </div>
        <div className="card--text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="card--price">
          <p>
            <strong> From $ {price}</strong> / person
          </p>
        </div>
      </div>
    </div>
  );
}
