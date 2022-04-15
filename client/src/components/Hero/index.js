import React from "react";
import "./Hero.scss";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h2>This is CUE Clothing</h2>
        <p>Best Designs Around</p>
        <Link to="/products/all">
          <button>Shop Now</button>
        </Link>
      </div>
    </section>
  );
};
