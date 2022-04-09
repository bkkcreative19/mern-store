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
  Profile,
} from "./pages";

import "./App.scss";
import { PrivateRoute } from "./routes";

const App = () => {
  return (
    <>
      <Announcement />
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/products/:id" element={<ProductsPage />} />
        <Route exact path="/product/:id" element={<ProductDetailsPage />} />
        <Route exact path="/cart" element={<CartPage />} />
        <Route exact path="account/login" element={<Login />} />
        <Route exact path="account/register" element={<Register />} />
        <Route exact path="/profile" element={<PrivateRoute />}>
          <Route exact path="/profile" element={<Profile />} />
        </Route>

        {/* <PrivateRoute exact={true} path={"/profile"} component={Profile} /> */}
      </Routes>
    </>
  );
};

export default App;
