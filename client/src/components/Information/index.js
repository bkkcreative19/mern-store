import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Information.scss";

export const Information = () => {
  const navigate = useNavigate();
  return (
    <section className="information">
      <h2>Shipping address</h2>
      <form className="info-form">
        <div className="name">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input placeholder="Address" type="text" className="address" />
        <input
          placeholder="Apartment (optional)"
          type="text"
          className="apartment"
        />
        <input placeholder="City" type="text" className="city" />
        <div className="buttons">
          <Link to="/checkout/shipping">
            <button className="continue-shopping">Continue Shopping</button>
          </Link>
          <Link to="/cart">
            <button className="return-to-cart">Return to cart</button>
          </Link>
        </div>
      </form>
    </section>
  );
};
