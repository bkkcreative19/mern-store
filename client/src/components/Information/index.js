import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../../actions/cartActions";
import "./Information.scss";
import { CheckoutForm } from "../CheckoutForm";
import { apiUrl } from "../../utils/apiURL";

const stripePromise = loadStripe(process.env.REACT_APP_PK_KEY);

export const Information = () => {
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const { shippingAddress, cartItems } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  // console.log(cart);

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
    // <>
    //   {clientSecret && (
    //     <Elements options={options} stripe={stripePromise}>
    //       <CheckoutForm />
    //     </Elements>
    //   )}
    // </>
    <section className="information">
      <h2>Shipping address</h2>
      <form onSubmit={submitHandler} className="info-form">
        <div className="name">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          type="text"
          className="address"
        />
        <input
          placeholder="Apartment (optional)"
          type="text"
          className="apartment"
        />
        <input
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          type="text"
          className="city"
        />
        <div className="buttons">
          <Link to="/checkout/shipping">
            <button onClick={submitHandler} className="continue-shopping">
              Continue to Shipping
            </button>
          </Link>
          <Link to="/cart">
            <button className="return-to-cart">Return to cart</button>
          </Link>
        </div>
      </form>
    </section>
  );
};
