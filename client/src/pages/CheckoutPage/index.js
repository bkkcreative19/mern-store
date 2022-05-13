import React, { useEffect, useState } from "react";
import { useLocation, Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./CheckoutPage.scss";
import { IoIosArrowForward } from "react-icons/io";

export const CheckoutPage = () => {
  const location = useLocation();
  const cart = useSelector((state) => state.cart);
  const [shippingTotal, setShippingTotal] = useState("Free");
  const [total, setTotal] = useState(
    cart.cartItems
      .reduce((acc, item) => acc + item.qty * item.price, 0)
      .toFixed(2)
  );
  const [test, setTest] = useState(location.pathname.split("/")[2]);

  useEffect(() => {
    setTest(location.pathname.split("/")[2]);
  }, [location.pathname]);

  useEffect(() => {
    if (cart.paymentMethod === "express") {
      setShippingTotal("$34.90");
      setTotal(Number(total) + 34.9);
    } else if (cart.paymentMethod === "standard") {
      setShippingTotal("Free");
      setTotal(
        cart.cartItems
          .reduce((acc, item) => acc + item.qty * item.price, 0)
          .toFixed(2)
      );
    }
  }, [cart.paymentMethod]);

  return (
    <section className="checkout__steps">
      <div className="left">
        <div className="left-container">
          <h1>Cue</h1>
          <div className="steps">
            <div className="steps__cart">
              <Link to="/cart">
                <h3>Cart</h3>
              </Link>
              <IoIosArrowForward />
            </div>
            <div className="steps__information">
              <Link to="/checkout/information">
                <h3 className={test === "information" ? "bold" : ""}>
                  Information
                </h3>
              </Link>
              <IoIosArrowForward />
            </div>
            <div className="steps__shipping">
              <Link to="/checkout/shipping">
                <h3 className={test === "shipping" ? "bold" : ""}>Shipping</h3>
              </Link>
              <IoIosArrowForward />
            </div>
            <div className="steps__payment">
              <Link to="/checkout/payment">
                <h3 className={test === "payment" ? "bold" : ""}>Payment</h3>
              </Link>
            </div>
          </div>
          <Outlet cart={cart} />
        </div>
      </div>
      <div className="right">
        <div className="right-container">
          <div className="order-items">
            {cart.cartItems.map((item) => {
              return (
                <div className="order-items__item" key={item.productId}>
                  <img src={item.productImage} alt="" />
                  <div className="item-content">
                    <p>{item.productName}</p>
                  </div>
                  <span className="item-price">${item.price}.00</span>
                </div>
              );
            })}
          </div>

          <div className="shipping-subtotal">
            <div className="checkout-subtotal">
              <span>Subtotal</span>
              <strong>
                $
                {cart.cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </strong>
            </div>
            <div className="checkout-shipping">
              <span>Shipping</span>
              <strong>{shippingTotal}</strong>
            </div>
          </div>
          <div className="checkout-total">
            <strong>Total</strong>
            <p>
              <span>CAD</span>${total}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
