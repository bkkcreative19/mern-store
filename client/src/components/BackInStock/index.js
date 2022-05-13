import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

import "./BackInStock.scss";

export const BackInStock = () => {
  return (
    <section className="back-in-stock container">
      <h3 className="head">Back in stock!</h3>
      <div className="back-in-stock__content">
        <div className="left bags">
          <div className="left__img">
            <img
              src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80"
              alt=""
            />
          </div>
          <span>
            Bags <HiOutlineArrowNarrowRight />
          </span>
        </div>
        <div className="right">
          <div className="product-example">
            <Link to={`/product/62656782dc0c1c2de2482a0c`}>
              <div className="product">
                <div className="product__img">
                  <img
                    src="https://cdn.shopify.com/s/files/1/0551/9242/0441/products/wl1_360x.jpg?v=1637107610"
                    alt="product"
                  />
                </div>

                <h3>Mini Woven Bagg</h3>
                <span>$460.00 CAD</span>
              </div>
            </Link>
          </div>

          <div className="shoes">
            <div className="shoes__img">
              <img
                src="https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdvbWVuJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
            <span>
              Shoes <HiOutlineArrowNarrowRight />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
