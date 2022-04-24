import React from "react";
import { Link } from "react-router-dom";
import Image from "../../images/image1.jpg";

import "./Product.scss";

export const Product = ({ product }) => {
  return (
    <>
      <Link to={`/product/${product._id}`}>
        <div className="product">
          <div className="product__img">
            <img src={product.productImage} alt="product" />
          </div>

          <h3>{product.name}</h3>
          <span>${product.price}.00 CAD</span>
        </div>
      </Link>
    </>
  );
};
