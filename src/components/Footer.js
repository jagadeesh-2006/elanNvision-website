import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logo.jpeg";
import insta from "../assets/instagram (1).png"; 
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>

      <div className="footer-center">
        <p>© 2025 Elan & nVision. All rights reserved.</p>
      </div>

      <div className="footer-right">
        <a href="https://www.instagram.com/elan_nvision.iith/?hl=en" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="Instagram" className="social-icon" />
        </a>
        <a href="https://www.facebook.com/elannvision.iithyderabad/" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" className="social-icon" />
        </a>
        <a href="https://www.youtube.com/user/ElanIITHyderabad" target="_blank" rel="noopener noreferrer">
          <img src={youtube} alt="YouTube" className="social-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
