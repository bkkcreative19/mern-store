import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { savePaymentMethod } from "../../actions/cartActions";
import "./Payment.scss";

export const Payment = () => {
  const navigate = useNavigate();
  if (!localStorage.getItem("shippingAddress")) {
    navigate("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (paymentMethod === "") {
      return;
    }
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/place-order");
  };

  return (
    <section className="payment container">
      <input
        type="text"
        placeholder="payment method"
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      />
      <button onClick={submitHandler}>Nextt</button>
    </section>
  );
};
