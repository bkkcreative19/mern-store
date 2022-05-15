import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingType } from "../../actions/cartActions";
import "./Shipping.scss";

export const Shipping = () => {
  const cart = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { shippingAddress } = cart;

  const submitHandler = () => {
    navigate("/checkout/payment");
  };
  return (
    <section className="shipping">
      <div className="info">
        <div className="contact">
          <h4>Contact</h4>
          <p>{userLogin.userInfo.email}</p>
        </div>
        <div className="ship-to">
          <h4>Ship to</h4>
          <p>
            {shippingAddress.address}, {shippingAddress.apartment},{" "}
            {shippingAddress.city} {shippingAddress.postalCode},{" "}
            {shippingAddress.country}
          </p>
        </div>
      </div>
      <div className="shipping-method">
        <h2>Shipping method</h2>
        <div className="standard">
          <input
            onChange={(e) => dispatch(saveShippingType(e.target.value))}
            type="radio"
            name="shipping-method"
            id=""
            value="standard"
            checked={cart.shippingType === "standard" ? "checked" : ""}
          />
          <div className="text">
            <p>Standard</p>
            <p>4 to 8 business days</p>
          </div>
          <span>Free</span>
        </div>
        <div className="express">
          <input
            onChange={(e) => dispatch(saveShippingType(e.target.value))}
            type="radio"
            name="shipping-method"
            id=""
            value="express"
            checked={cart.shippingType === "express" ? "checked" : ""}
          />
          <div className="text">
            <p>Express</p>
            <p>2 to 3 business days</p>
          </div>
          <span>$34.90</span>
        </div>
      </div>
      <div className="buttons">
        <button onClick={submitHandler} className="continue-payment">
          Continue to payment
        </button>

        <Link to="/checkout/information">
          <button className="return-to-information">
            Return to information
          </button>
        </Link>
      </div>
    </section>
  );
};
