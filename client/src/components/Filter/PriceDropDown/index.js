import React, { useState } from "react";
import "./PriceDropDown.scss";

export const PriceDropDown = ({ setLessThan, setGreaterThan }) => {
  // const [lessThan, setLessThan] = useState();
  // const [greaterThan, setGreaterThan] = useState();
  return (
    <aside className="price-dropdown">
      <div className="head">
        <h3>The Highest Price is $615.00</h3>
        <p>Reset</p>
      </div>
      <div className="options">
        <input
          onChange={(e) => setLessThan(e.target.value)}
          type="number"
          name="less"
          id=""
          placeholder="From"
        />

        <input
          onChange={(e) => setGreaterThan(e.target.value)}
          type="number"
          name="greater"
          id=""
          placeholder="To"
        />
        {/* <span className="in-stock">In Stock</span>
        <span className="out-stock">Out of Stock</span> */}
      </div>
    </aside>
  );
};
