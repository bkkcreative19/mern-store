import React from "react";
import { Routes, Route } from "react-router-dom";

import { Announcement, Header } from "./components";
import { HomePage, ProductsPage } from "./pages";

import "./App.scss";

const App = () => {
  return (
    <>
      <Announcement />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductsPage />} />
      </Routes>
    </>
  );
};

export default App;
