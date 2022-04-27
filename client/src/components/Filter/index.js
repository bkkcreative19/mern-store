import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import { IoIosArrowDown } from "react-icons/io";
import { RiFilter3Line } from "react-icons/ri";
import { options } from "../../utils/sortOptions";
import Select from "react-select";
import "./Filter.scss";

export const Filter = ({ handleFilters, filters, numOfProducts }) => {
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
        <h3 className="filter__desktop">Filter:</h3>
        <h3 className="filter__mobile">
          <RiFilter3Line /> <span>Filter and sort</span>
        </h3>
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
            {/* <input
              onChange={(e) => setLessThan(e.target.value)}
              type="number"
              name="from"
              id=""
              placeholder="less than"
            /> */}
            {/* <input
              onChange={(e) => setGreaterThan(e.target.value)}
              type="number"
              name="to"
              id="" */}

            <IoIosArrowDown />
          </summary>
          {/* <h3>hi</h3> */}
        </details>
        <details>
          <summary>
            <span>Color</span>
            <IoIosArrowDown />
          </summary>
          {/* <h3>hi</h3> */}
        </details>
        <details>
          <summary>
            <span>Product type</span>
            <IoIosArrowDown />
          </summary>
          {/* <h3>hi</h3> */}
        </details>
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
          className="select"
        />
      </div>
      <span>{numOfProducts} products</span>
    </section>
  );
};
