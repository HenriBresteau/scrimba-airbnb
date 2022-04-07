import React from "react";
import Card from "./Components/Card";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

import dataCard from "./data";
export default function App() {
  const cards = dataCard.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-container">{cards}</section>
    </div>
  );
}
