import React from "react";
import grid from "../images/grid.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero--grid">
        <img src={grid} alt="grid" className="hero--photo" />
      </div>
      <div className="hero--text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
