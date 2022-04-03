import React from "react";
import "./ProductDetails.scss";

export const ProductDetails = ({ product, qty, setQty, addToCartHandler }) => {
  const handleChange = (e) => {
    if (e.target.classList.contains("minus")) {
      if (qty === 1) return;
      setQty(qty - 1);
    } else {
      setQty(qty + 1);
    }
  };

  return (
    <section
      style={{ marginTop: "3rem" }}
      className="product-details container"
    >
      <div className="product-details__image">
        <img src={product.productImage} alt="" className="" />
      </div>

      <div className="product-details__info">
        <h2>{product.name}</h2>
        <p className="price">${product.price}.00 CAD</p>

        <div className="quantity">
          <p className="quan">Quantity</p>
          <div className="options">
            <span className="change minus" onClick={(e) => handleChange(e)}>
              -
            </span>
            <span className="num">{qty}</span>
            <span className="change add" onClick={(e) => handleChange(e)}>
              +
            </span>
          </div>
        </div>
        <button onClick={addToCartHandler} className="btn addToCart">
          Add to cart
        </button>
        <button className="btn buy">Buy it now</button>
      </div>
    </section>
  );
};
