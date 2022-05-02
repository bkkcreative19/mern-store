import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import { Footer } from "./index";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

it("renders like it suppose to", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>,
    div
  );
});

it("render footer", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
  expect(getByTestId("footer-header")).toHaveTextContent("Quick links");
});
