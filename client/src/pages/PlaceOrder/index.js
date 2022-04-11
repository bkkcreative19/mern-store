import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../actions/orderActions";

export const PlaceOrder = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentMethod, cartItems } = cart;

  console.log(cartItems);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shipping: cart.shippingAddress,
        payment: {
          paymentMethod: cart.paymentMethod,
        },
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  return (
    <section className="place-order container">
      <div className="shipping">
        <h3>Shipping</h3>
        <span>
          Address:{shippingAddress.address}, {shippingAddress.city}{" "}
          {shippingAddress.postalCode}, {shippingAddress.country}
        </span>
      </div>
      <div className="payment-method">
        <h3>Payment Method</h3>
        <span>Method: {paymentMethod}</span>
      </div>
      <h3>Order Items</h3>
      <ul>
        {cartItems.map((item) => {
          <li key={item.productId}>
            <img src={item.productImage} alt="" />
            <h4>{item.productName}</h4>
            <span>
              {item.qty} x ${item.price} = ${item.qty * item.price}
            </span>
          </li>;
        })}
      </ul>
      <button onClick={placeOrderHandler}>Place Order</button>
    </section>
  );
};
