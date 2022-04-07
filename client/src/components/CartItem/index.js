import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import "./CartItem.scss";
import CircleLoader from "react-spinners/CircleLoader";
import { RiDeleteBin6Line } from "react-icons/ri";
import { addToCart } from "../../actions/cartActions";

export const CartItem = ({ cartItem }) => {
  const testt = useRef();
  const [qty, setQty] = useState(cartItem.qty);

  const dispatch = useDispatch();

  const handleQty = () => {};

  const handleChange = (e) => {
    let test = qty;

    if (e.target.classList.contains("minus")) {
      if (qty === 1) return;
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
    <tr className="cartItem">
      <td className="cartItem__img-and-details">
        <img src={cartItem.productImage} alt="" />
        <div className="details">
          <h3>{cartItem.productName}</h3>
          <p>${cartItem.price}.00</p>
        </div>
      </td>
      {/* <td className="cartItem__img">
        <img src={cartItem.productImage} alt="" />
      </td>
      <td className="cartItem__info">{cartItem.productName}</td> */}
      <td className="cartItem__qty">
        <div className="options">
          <span onClick={(e) => handleChange(e)} className="change minus">
            -
          </span>
          <span ref={testt} className="num">
            {qty}
          </span>
          <span onClick={(e) => handleChange(e)} className="change add">
            +
          </span>
          <RiDeleteBin6Line />
        </div>
      </td>
      <td className="cartItem__total">${cartItem.price * qty}.00</td>
    </tr>
  );
};
