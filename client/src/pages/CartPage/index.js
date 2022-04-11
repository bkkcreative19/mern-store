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
  // console.log(userInfo);
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
    navigate("/shipping");
  };

  return (
    <section className="cart container">
      <div className="cart__head">
        <h2>Your cart</h2>
        <Link to="/">Continue shopping</Link>
      </div>
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
      ${total}
      <button onClick={handleCheckout} className="checkout">
        Check out
      </button>
    </section>
  );
};
