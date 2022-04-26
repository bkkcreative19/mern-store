import React from "react";
import { Routes, Route } from "react-router-dom";

import { Announcement, Footer, Header } from "./components";
import {
  HomePage,
  ProductDetailsPage,
  ProductsPage,
  CartPage,
  Login,
  Register,
  Profile,
  Shipping,
  Payment,
  PlaceOrder,
  CheckoutSteps,
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
        <Route exact path="/shipping" element={<PrivateRoute />}>
          <Route exact path="/shipping" element={<Shipping />} />
        </Route>
        <Route exact path="/payment" element={<PrivateRoute />}>
          <Route exact path="/payment" element={<Payment />} />
        </Route>
        <Route exact path="/place-order" element={<PrivateRoute />}>
          <Route exact path="/place-order" element={<PlaceOrder />} />
        </Route>
        {/* <Route exact path="/shipping" element={<Shipping />} /> */}
        <Route exact path="/checkout/:step" element={<CheckoutSteps />} />
        {/* <PrivateRoute exact={true} path={"/profile"} component={Profile} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
