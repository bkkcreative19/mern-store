import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Information.scss";
import { CheckoutForm } from "../CheckoutForm";
import { apiUrl } from "../../utils/apiURL";

const stripePromise = loadStripe(process.env.REACT_APP_PK_KEY);

export const Information = () => {
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`${apiUrl}/order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cart.cartItems),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </>
    // <section className="information">
    //   <h2>Shipping address</h2>
    //   <form className="info-form">
    //     <div className="name">
    //       <input type="text" placeholder="First Name" />
    //       <input type="text" placeholder="Last Name" />
    //     </div>
    //     <input placeholder="Address" type="text" className="address" />
    //     <input
    //       placeholder="Apartment (optional)"
    //       type="text"
    //       className="apartment"
    //     />
    //     <input placeholder="City" type="text" className="city" />
    //     <div className="buttons">
    //       <Link to="/checkout/shipping">
    //         <button className="continue-shopping">Continue Shopping</button>
    //       </Link>
    //       <Link to="/cart">
    //         <button className="return-to-cart">Return to cart</button>
    //       </Link>
    //     </div>
    //   </form>
    // </section>
  );
};
