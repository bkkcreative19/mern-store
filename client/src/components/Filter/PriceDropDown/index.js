import React, { useEffect, useState } from "react";
import "./PriceDropDown.scss";

export const PriceDropDown = ({
  setLessThan,
  setGreaterThan,
  greaterThan,
  lessThan,
  handleFilters,
}) => {
  const reset = () => {
    setGreaterThan(700);
    setLessThan(0);
  };

  const handleChange = (e) => {
    if (e.target.name === "less") {
      setLessThan(e.target.value);
    } else {
      setGreaterThan(e.target.value);
    }
  };

  useEffect(() => {
    handleFilters(`price`, [lessThan, greaterThan]);
  }, [lessThan, greaterThan]);

  return (
    <aside className="price-dropdown">
      <div className="head">
        <h3>The Highest Price is $615.00</h3>
        <p onClick={reset}>Reset</p>
      </div>
      <div className="options">
        <input
          onChange={handleChange}
          type="number"
          name="less"
          id=""
          placeholder="From"
        />

        <input
          onChange={handleChange}
          type="number"
          name="greater"
          id=""
          placeholder="To"
        />
      </div>
    </aside>
  );
};
