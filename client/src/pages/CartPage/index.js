import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CartItem } from "../../components";
import "./Cart.scss";

export const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const { cartItems } = cart;

  const [total, setTotal] = useState(
    cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)
  );

  useEffect(() => {
    setTotal(
      cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)
    );
  }, [cartItems]);

  const handleCheckout = () => {
    // history.push({
    //   pathname: routes.LOGIN,
    //   search: `?redirect=${routes.SHIPPING}`,
    // });
    navigate("/checkout/information");
  };

  return (
    <section className="cart container">
      {cartItems.length === 0 ? (
        <h1>Your cart is empty</h1>
      ) : (
        <>
          <div className="cart__head">
            <h2>Your cart</h2>
            <Link to="/">Continue shopping</Link>
          </div>
          <div className="cart__products-section">
            <div className="cart__products-section-head">
              <h4>Product</h4>
              <h4>Quantity</h4>
              <h4>Total</h4>
            </div>
            <div className="cart__products-section-products">
              {cartItems.map((item) => {
                return <CartItem key={item.productId} cartItem={item} />;
              })}
            </div>
          </div>
          <div className="total">
            <div className="subtotal">
              <h3> Subtotal </h3>
              <p>${total} CAD</p>
            </div>

            <small>Taxes and shipping calculated at checkout</small>
            <button onClick={handleCheckout} className="checkout">
              Check out
            </button>
          </div>
        </>
      )}
    </section>
  );
};
