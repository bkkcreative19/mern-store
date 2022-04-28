import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import { IoIosArrowDown } from "react-icons/io";
import { RiFilter3Line } from "react-icons/ri";
import { options } from "../../utils/sortOptions";
import { AvailabilityDropDown } from "./AvailabilityDropDown";
import { PriceDropDown } from "./PriceDropDown";
import Select from "react-select";
import "./Filter.scss";

export const Filter = ({ handleFilters, filters, numOfProducts }) => {
  const [test, setTest] = React.useState(options[0]);
  const [lessThan, setLessThan] = useState();
  const [greaterThan, setGreaterThan] = useState();
  const [inStock, setInStock] = useState();
  // const [greaterThan, setGreaterThan] = useState();
  // const [from, setFrom] = useState();
  // const [to, setTo] = useState();
  // const [priceRange, setPriceRange] = useState();

  // const handleChange = (e) => {
  //   setTest(e.target.value);
  // };
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
    // option: (provided, state) => ({
    //   ...provided,
    //   borderBottom: "1px dotted pink",
    //   color: state.isSelected ? "red" : "blue",
    // }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
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

    // singleValue: (provided, state) => {
    //   const opacity = state.isDisabled ? 0.5 : 1;
    //   const transition = "opacity 300ms";

    //   return { ...provided, opacity, transition };
    // },
  };

  useEffect(() => {
    // console.log(test.value);
    handleFilters("sort", test.value);
  }, [test]);

  useEffect(() => {
    // console.log(test.value);
    handleFilters("isInStock", inStock);
  }, [inStock]);

  useEffect(() => {
    // console.log(test.value);
    if (greaterThan && lessThan) {
      handleFilters(`price`, { lt: lessThan, gt: greaterThan });
    }

    // handleFilters("priceRange", lessThan);
  }, [lessThan, greaterThan]);

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
          />
        </details>
        {/* <details>
          <summary>
            <span>Color</span>
            <IoIosArrowDown />
          </summary>
          <h3>hi</h3>
        </details>
        <details>
          <summary>
            <span>Product type</span>
            <IoIosArrowDown />
          </summary>
          <h3>hi</h3>
        </details> */}
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
