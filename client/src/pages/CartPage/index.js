import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartItem } from "../../components";
import "./Cart.scss";

export const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  console.log(cart);
  return (
    <section className="cart container">
      <table className="cartItems">
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem) => {
            return <CartItem key={cartItem.productId} cartItem={cartItem} />;
          })}
        </tbody>
      </table>
    </section>
  );
};
