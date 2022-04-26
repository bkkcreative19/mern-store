import React from "react";
import { useParams } from "react-router-dom";

export const CheckoutSteps = () => {
  const params = useParams();

  console.log(params);

  return <section className="checkout container">checkout</section>;
};
