import React from "react";
import "./CartItem.scss";

export const CartItem = ({ cartItem }) => {
  return (
    <tr className="cartItem">
      <td className="cartItem__img">
        <img src={cartItem.productImage} alt="" />
      </td>
      <td className="cartItem__info">{cartItem.productName}</td>
      <td className="cartItem__qty">5</td>
      <td className="cartItem__total">$500.00</td>
    </tr>
  );
};
