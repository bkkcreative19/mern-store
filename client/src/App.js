import React from "react";
import { Routes, Route } from "react-router-dom";

import { Announcement, Header } from "./components";
import {
  HomePage,
  ProductDetailsPage,
  ProductsPage,
  CartPage,
  Login,
  Register,
} from "./pages";

import "./App.scss";

const App = () => {
  return (
    <>
      <Announcement />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="account/login" element={<Login />} />
        <Route path="account/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
