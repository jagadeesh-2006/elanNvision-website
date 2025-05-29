import React, { useState } from "react";
import "../styles/Events.css";

/** ─── Event data (title, blurb, optional image) ─── */
const EVENTS = [
  {
    title: "Hackathons",
    blurb:
      "48-hour coding marathons with exciting problem statements, mentors, and prizes.",
    img: require("../assets/events/hackathon.jpg"), // optional
  },
  {
    title: "Concert Nights",
    blurb:
      "Feel the bass drop at our EDM and fusion concerts featuring top artists.",
    img: require("../assets/events/concert.jpg"),
  },
  {
    title: "Workshops",
    blurb:
      "Hands-on sessions on AI, AR/VR, Web3, design thinking, and more.",
    img: require("../assets/events/workshop.jpg"),
  },
  {
    title: "Dance & Drama",
    blurb:
      "Stage-shaking dance battles and riveting dramatics that keep the crowd roaring.",
    img: require("../assets/events/dance.jpg"),
  },
];

function Events() {
  const [active, setActive] = useState(null); // null = no modal

  return (
    <section id="events" className="events shared-bg-section">
      <h2>Events</h2>

      {/* grid */}
      <div className="event-grid">
        {EVENTS.map((ev, i) => (
          <div
            key={ev.title}
            className="event-card"
            style={{ animationDelay: `${0.2 + i * 0.2}s` }}
            onClick={() => setActive(ev)}
          >
            {ev.title}
          </div>
        ))}
      </div>

      {/* modal */}
      {active && (
        <div className="modal-backdrop" onClick={() => setActive(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent close if inner clicked
          >
            <button className="close-btn" onClick={() => setActive(null)}>
              &times;
            </button>
            {active.img && <img src={active.img} alt={active.title} />}
            <h3>{active.title}</h3>
            <p>{active.blurb}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Events;
