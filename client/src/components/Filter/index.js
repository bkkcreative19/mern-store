import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import { IoIosArrowDown } from "react-icons/io";

import Select from "react-select";
import "./Filter.scss";

export const Filter = ({ handleFilters, filters, numOfProducts }) => {
  const optionss = ["low-to-high", "high-to-low", "Alphabetically, A-Z"];

  const options = [
    { value: "low-to-high", label: "Price, low-to-high" },
    { value: "high-to-low", label: "Price, high-to-low" },
    { value: "Alphabetically, A-Z", label: "Alphabetically, A-Z" },
    { value: "Alphabetically, Z-A", label: "Alphabetically, Z-A" },
    { value: "Date, old to new", label: "Date, old to new" },
    { value: "Date, new to old", label: "Date, new to old" },
  ];

  const [test, setTest] = React.useState(options[0]);
  const [lessThan, setLessThan] = useState();
  // const [greaterThan, setGreaterThan] = useState();
  // const [from, setFrom] = useState();
  // const [to, setTo] = useState();
  // const [priceRange, setPriceRange] = useState();

  // const handleChange = (e) => {
  //   setTest(e.target.value);
  // };

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
    handleFilters(`price[lt]`, lessThan);
    // handleFilters("priceRange", lessThan);
  }, [lessThan]);

  return (
    <section className="filter-sort">
      <div className="filter">
        <h3>Filter:</h3>
        <details className="first">
          <summary>
            <span>Availabilty</span>
            <IoIosArrowDown />
          </summary>
          {/* <h3>hi</h3> */}
        </details>
        <details>
          <summary>
            <span>Price</span>
            <input
              onChange={(e) => setLessThan(e.target.value)}
              type="number"
              name="from"
              id=""
              placeholder="less than"
            />
            {/* <input
              onChange={(e) => setGreaterThan(e.target.value)}
              type="number"
              name="to"
              id="" */}

            <IoIosArrowDown />
          </summary>
          {/* <h3>hi</h3> */}
        </details>
        {/*goes here*/}
        {/* <Dropdown
          className="hi"
          options={options}
          // onChange={(e) => handleChange(e)}
          // value={test}
          placeholder="Select an option"
        /> */}
      </div>
      <div className="sort">
        <h3>Sort by:</h3>
        <Select
          defaultValue={test}
          onChange={setTest}
          styles={customStyles}
          options={options}
        />
      </div>
      <span>{numOfProducts} products</span>
    </section>
  );
};
