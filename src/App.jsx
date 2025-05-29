import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import Register from "./components/register";

import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Events />
      <Gallery />
      <Sponsors />
      <Register />
      <Footer />
    </div>
  );
}

export default App;