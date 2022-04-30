import React, { useState } from "react";
import "./AvailabilityDropDown.scss";

export const AvailabilityDropDown = ({ setInStock }) => {
  return (
    <article className="availability-dropdown">
      <div className="head">
        <h3>0 selected</h3>
        <p onClick={() => setInStock(null)}>Reset</p>
      </div>
      <div className="options">
        <span onClick={() => setInStock(true)} className="in-stock">
          In Stock
        </span>
        <span onClick={() => setInStock(false)} className="out-stock">
          Out of Stock
        </span>
      </div>
    </article>
  );
};
