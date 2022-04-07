import React from "react";
import Card from "./Components/Card";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

import dataCard from "./data";
export default function App() {
  const cards = dataCard.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        openSpots={item.openSpots}
        rate={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        description={item.description}
        price={item.price}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-container">{cards}</section>
    </div>
  );
}
