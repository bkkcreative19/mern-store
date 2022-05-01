import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import { IoIosArrowDown } from "react-icons/io";
import { RiFilter3Line } from "react-icons/ri";
import { options } from "../../utils/sortOptions";
import { AvailabilityDropDown } from "./AvailabilityDropDown";
import { PriceDropDown } from "./PriceDropDown";
import Select from "react-select";
import "./Filter.scss";

export const Filter = ({
  handleFilters,
  filters,
  numOfProducts,
  highestPrice,
  products,
}) => {
  const [test, setTest] = React.useState(options[0]);
  const [lessThan, setLessThan] = useState(0);
  const [greaterThan, setGreaterThan] = useState(700);
  const [inStock, setInStock] = useState();

  var details = [...document.querySelectorAll("details")];

  document.addEventListener("click", function (e) {
    if (!details.some((f) => f.contains(e.target))) {
      details.forEach((f) => f.removeAttribute("open"));
    } else {
      details.forEach((f) =>
        !f.contains(e.target) ? f.removeAttribute("open") : ""
      );
    }
  });

  const customStyles = {
    control: () => ({
      background: "transparent",
      display: "flex",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: () => ({
      color: "#181818bd",
      cursor: "pointer",
    }),
  };

  useEffect(() => {
    handleFilters("sort", test.value);
  }, [test]);

  useEffect(() => {
    handleFilters("isInStock", inStock);
  }, [inStock]);

  return (
    <section className="filter-sort">
      <div className="filter">
        <h3 className="filter__desktop">Filter:</h3>
        <h3 className="filter__mobile">
          <RiFilter3Line /> <span>Filter and sort</span>
        </h3>
        <details className="first">
          <summary>
            <span>Availabilty</span>
            <IoIosArrowDown />
          </summary>
          <AvailabilityDropDown setInStock={setInStock} />
        </details>
        <details>
          <summary>
            <span>Price</span>
            <IoIosArrowDown />
          </summary>
          <PriceDropDown
            setGreaterThan={setGreaterThan}
            setLessThan={setLessThan}
            lessThan={lessThan}
            greaterThan={greaterThan}
            handleFilters={handleFilters}
          />
        </details>
      </div>
      <div className="sort">
        <h3>Sort by:</h3>
        <Select
          defaultValue={test}
          onChange={setTest}
          styles={customStyles}
          options={options}
          className="select"
        />
      </div>
      <span>{numOfProducts} products</span>
    </section>
  );
};
