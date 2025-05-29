import React from "react";
import "../styles/Gallery.css";
import img1 from "../assets/gallery1.jpg";
import img2 from "../assets/gallery2.jpg";
import img3 from "../assets/gallery3.jpg";
import img4 from "../assets/gallery4.jpg";
import img5 from "../assets/gallery5.jpeg";

function Gallery() {
  const images = [img1, img2, img3 ,img4,img5];

  return (
    <section id="gallery" className="gallery shared-bg-section">
      <h2>Gallery</h2>
      <div className="image-grid">
        {images.map((img, index) => (
          <div className="image-box" key={index}>
            <img src={img} alt={`Event ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
