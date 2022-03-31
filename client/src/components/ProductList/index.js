import React from "react";
import { Product } from "../Product";

import "./ProductList.scss";

export const ProductList = ({ products }) => {
  return (
    <section className="products container">
      {products &&
        products.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
    </section>
  );
};
