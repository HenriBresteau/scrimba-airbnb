import React from "react";
import logo from "../images/logo.svg";

export default function Navbar() {
  return (
    <nav>
      <img src={logo} alt="logo airbnb" className="nav--logo" />
    </nav>
  );
}
