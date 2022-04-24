import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import "./CartItem.scss";
import CircleLoader from "react-spinners/CircleLoader";
import { RiDeleteBin6Line } from "react-icons/ri";
import { addToCart, removeFromCart } from "../../actions/cartActions";

export const CartItem = ({ cartItem }) => {
  const testt = useRef();
  const [qty, setQty] = useState(cartItem.qty);

  const dispatch = useDispatch();

  const handleQty = () => {};

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleChange = (e) => {
    let test = qty;

    if (e.target.classList.contains("minus")) {
      if (qty === 1) {
        removeFromCartHandler(cartItem.productId);
        return;
      }
      test = test - 1;
    } else {
      test = test + 1;
    }
    setQty(test);
  };

  useEffect(() => {
    dispatch(addToCart(cartItem.productId, qty));
  }, [qty, dispatch]);

  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <img src={cartItem.productImage} alt="" />
        <div className="details">
          <h3>{cartItem.productName}</h3>
          <p>${cartItem.price}.00</p>
        </div>
      </div>
      <div className="cart-item__quantity-change">
        <div className="input">
          <span onClick={(e) => handleChange(e)} className="change minus">
            -
          </span>
          <span ref={testt} className="num">
            {qty}
          </span>
          <span onClick={(e) => handleChange(e)} className="change add">
            +
          </span>
        </div>

        <RiDeleteBin6Line
          onClick={() => removeFromCartHandler(cartItem.productId)}
          className="delete-icon"
        />
      </div>
      <p className="cart-item__total">${cartItem.price * qty}.00</p>
    </div>
  );
};
