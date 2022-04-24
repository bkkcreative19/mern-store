import React from "react";
import { ProductList } from "../ProductList";
import "./Featured.scss";

export const Featured = ({ products }) => {
  return (
    <section className="featured container">
      <div className="featured__head">
        <h3>Obsessive Attention. Intelligent Effort.</h3>
        <p>
          Functional handbags made of luxurious materials to improve people's
          lives in small but mighty ways.
        </p>
      </div>
      <ProductList products={products} />
    </section>
  );
};
