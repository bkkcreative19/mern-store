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
              src="https://cdn.shopify.com/s/files/1/0551/9242/0441/collections/Mlouye_-_Bags_collection_750x.jpg?v=1637109194"
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
                src="https://cdn.shopify.com/s/files/1/0551/9242/0441/collections/Mlouye_-_Shoe_collection_750x.jpg?v=1637109743"
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
