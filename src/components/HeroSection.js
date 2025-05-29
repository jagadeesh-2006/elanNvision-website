import React from "react";
import "../styles/HeroSection.css";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        Welcome to Elan & nVision
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
      >
        The Ultimate Fusion of Culture and Technology
      </motion.p>
      <motion.a
        href="#events"
        className="cta-button"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore Events
      </motion.a>
    </section>
  );
}

export default HeroSection;
