import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Elan & nVision</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#sponsors">Sponsors</a></li>
        <li><a href="#footer">Contact</a></li>
        <li><a href="#Register">Register</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;