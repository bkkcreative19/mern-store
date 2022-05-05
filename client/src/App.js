import React from "react";
import { Routes, Route } from "react-router-dom";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import {
  Announcement,
  Footer,
  Header,
  Information,
  Payment,
  Shipping,
} from "./components";
import {
  HomePage,
  ProductDetailsPage,
  ProductsPage,
  CartPage,
  Login,
  Register,
  Profile,
  PlaceOrder,
  CheckoutSteps,
} from "./pages";

import { BrowserRouter as Router, useLocation } from "react-router-dom";
import "./App.scss";
import { PrivateRoute } from "./routes";

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname.slice(0, 9) === "/checkout" ? (
        ""
      ) : (
        <>
          <Announcement />
          <Header />
        </>
      )}

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

        {/* <PrivateRoute exact={true} path={"/profile"} component={Profile} /> */}
        <Route exact path="checkout" element={<CheckoutSteps />}>
          <Route path="information" element={<Information />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="payment" element={<Payment />} />
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>

      {location.pathname.slice(0, 9) === "/checkout" ? "" : <Footer />}
    </>
  );
};

export default App;
