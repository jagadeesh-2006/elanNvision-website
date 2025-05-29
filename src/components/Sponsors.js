import React from "react";
import "../styles/Sponsors.css";
import sponsor1 from "../assets/sponsor1.png";
import sponsor2 from "../assets/sponsor2.png";
import sponsor3 from "../assets/sponsor3.png";

function Sponsors() {
  return (
    <section id="sponsors" className="sponsors shared-bg-section">
      <h2>Our Sponsors</h2>
      <div className="sponsor-logos">
        <div className="sponsor" style={{ animationDelay: "0.2s" }}>
          <img src={sponsor1} alt="Sponsor 1" />
        </div>
        <div className="sponsor" style={{ animationDelay: "0.4s" }}>
          <img src={sponsor2} alt="Sponsor 2" />
        </div>
        <div className="sponsor" style={{ animationDelay: "0.6s" }}>
          <img src={sponsor3} alt="Sponsor 3" />
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
