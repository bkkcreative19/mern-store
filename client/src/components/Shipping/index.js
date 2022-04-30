import React from "react";
import { Link } from "react-router-dom";
import "./Shipping.scss";

export const Shipping = () => {
  return (
    <section className="shipping">
      <div className="info">
        <div className="contact">
          <h4>Contact</h4>
          <p>bkkcreative17@gmail.com</p>
        </div>
        <div className="ship-to">
          <h4>Ship to</h4>
          <p>3501 Vela Ln, Apt 8301, Fort Worth TX 76137, United States</p>
        </div>
      </div>
      <div className="shipping-method">
        <h2>Shipping method</h2>
        <div className="standard">
          <input type="radio" name="shipping-method" id="" value="standard" />
          <div className="text">
            <p>Standard</p>
            <p>4 to 8 business days</p>
          </div>
          <span>Free</span>
        </div>
        <div className="express">
          <input type="radio" name="shipping-method" id="" value="express" />
          <div className="text">
            <p>Express</p>
            <p>2 to 3 business days</p>
          </div>
          <span>$34.90</span>
        </div>
      </div>
      <div className="buttons">
        <Link to="/checkout/payment">
          <button className="continue-payment">Continue to payment</button>
        </Link>
        <Link to="/checkout/information">
          <button className="return-to-information">
            Return to information
          </button>
        </Link>
      </div>
    </section>
  );
};
