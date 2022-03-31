import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components";
import { HomePage } from "./pages";

import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <Routes>{/* <Route path="/" element={<HomePage />} /> */}</Routes>
      hi
    </>
  );
};

export default App;
