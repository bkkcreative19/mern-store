import React, { useEffect, useState } from "react";
import { useLocation, Outlet, Link } from "react-router-dom";

import "./CheckoutSteps.scss";

export const CheckoutSteps = () => {
  const location = useLocation();

  const [test, setTest] = useState(location.pathname.split("/")[2]);

  useEffect(() => {
    setTest(location.pathname.split("/")[2]);
  }, [location.pathname]);

  return (
    <section className="checkout container">
      <div className="left">
        <h1>Cue</h1>
        <div className="steps">
          <div className="steps__cart">
            <Link to="/cart">
              <h3>Cart</h3>
            </Link>
          </div>
          <div className="steps__information">
            <Link to="/checkout/information">
              <h3 className={test === "information" ? "bold" : ""}>
                Information
              </h3>
            </Link>
          </div>
          <div className="steps__shipping">
            <Link to="/checkout/shipping">
              <h3 className={test === "shipping" ? "bold" : ""}>Shipping</h3>
            </Link>
          </div>
          <div className="steps__payment">
            <Link to="/checkout/payment">
              <h3 className={test === "payment" ? "bold" : ""}>Payment</h3>
            </Link>
          </div>
        </div>
      </div>
      checkout <Outlet />
    </section>
  );
};
