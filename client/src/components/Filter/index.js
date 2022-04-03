import React, { useEffect } from "react";
import Dropdown from "react-dropdown";

import Select from "react-select";
import "./Filter.scss";

export const Filter = ({ handleFilters, filters }) => {
  const optionss = ["low-to-high", "high-to-low", "Alphabetically, A-Z"];

  const options = [
    { value: "low-to-high", label: "Price, low-to-high" },
    { value: "high-to-low", label: "Price, high-to-low" },
    { value: "Alphabetically, A-Z", label: "Alphabetically, A-Z" },
    { value: "Alphabetically, Z-A", label: "Alphabetically, Z-A" },
    { value: "Date, old to new", label: "Date, old to new" },
    { value: "Date, new to old", label: "Date, new to old" },
  ];

  const [test, setTest] = React.useState(options[2]);

  // const handleChange = (e) => {
  //   setTest(e.target.value);
  // };

  useEffect(() => {
    // console.log(test.value);
    handleFilters("sort", test.value);
  }, [test]);

  return (
    <section className="filter-sort">
      <div className="filter">
        <h3>Filter:</h3>
        {/* <Dropdown
          className="hi"
          options={options}
          onChange={(e) => handleChange(e)}
          value={test}
          placeholder="Select an option"
        /> */}

        <Select defaultValue={test} onChange={setTest} options={options} />
      </div>
      <div className="sort"></div>
    </section>
  );
};