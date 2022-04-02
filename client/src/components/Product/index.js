import React from "react";
import "./Product.scss";

export const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.productImage} alt="product" className="product__img" />
      <h3>{product.name}</h3>
      <span>${product.price}.00 CAD</span>
    </div>
  );
};
