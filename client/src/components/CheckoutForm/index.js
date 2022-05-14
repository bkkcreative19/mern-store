import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useDispatch } from "react-redux";

import axios from "axios";
import "./CheckoutForm.scss";
import { useNavigate } from "react-router-dom";
import * as stripeServices from "../../services/stripeServices";
import { useSelector } from "react-redux";
import { createOrder } from "../../actions/orderActions";

export const CheckoutForm = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);

  const { shippingType } = cart;

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        fontFamily: "Arial, sans-serif",
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let shippingPrice;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (shippingType === "express") {
      shippingPrice = 34.99;
    } else if (shippingType === "standard") {
      shippingPrice = 0;
    }

    let totalAmount = cart.cartItems
      .reduce((acc, item) => acc + item.qty * item.price, 0)
      .toFixed(2);

    totalAmount = Number(totalAmount) + shippingPrice;

    stripeServices.createCharge(totalAmount, paymentMethod, error);

    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.shippingType,
        itemsPrice: cart.itemsPrice,
        shippingPrice: shippingPrice,
        totalPrice: totalAmount,
      })
    );
    navigate("/profile");
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <CardElement
        id="card-element"
        options={cardStyle}
        onChange={handleChange}
      />
      <button disabled={processing || disabled || succeeded} id="submit">
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}
      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded, see the result in your
        <a href={`https://dashboard.stripe.com/test/payments`}>
          Stripe dashboard.
        </a>{" "}
        Refresh the page to pay again.
      </p>
    </form>
  );
};
