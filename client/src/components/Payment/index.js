import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CardElement, Elements } from "@stripe/react-stripe-js";
import { apiUrl } from "../../utils/apiURL";
import axios from "axios";
import "./Payment.scss";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutForm } from "../CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51KsrI3Lojhc6RaULGw9X45tzHB83ZnxLs0zXuSdgTCZWu7A0abjY3i8LcxF6DMmfPRGdeBTmNns04FSrCbxvAV5x003ibMRE2p"
);

export const Payment = () => {
  const cart = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);

  const { shippingType, shippingAddress } = cart;

  return (
    <section className="payment">
      <div className="review-information">
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
        <div className="method">
          <h4>Method</h4>
          <p>
            {shippingType}{" "}
            <strong>{shippingType === "express" ? "$34.90" : "Free"}</strong>
          </p>
        </div>
      </div>

      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </section>
  );
};
