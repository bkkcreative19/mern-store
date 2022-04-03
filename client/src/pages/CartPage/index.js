import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.scss";

export const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  console.log(cart);
  return <div className="cart container"></div>;
};
