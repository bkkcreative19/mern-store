import React, { useEffect } from "react";
import { Featured, Hero } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { listFeaturedProducts } from "../../actions/productActions";

import "./HomePage.scss";

export const HomePage = () => {
  const dispatch = useDispatch();

  const productListFeatured = useSelector((state) => state.productListFeatured);

  const { featuredProducts } = productListFeatured;

  useEffect(() => {
    dispatch(listFeaturedProducts());
  }, []);

  return (
    <section className="home">
      <Hero />
      <Featured products={featuredProducts} />
    </section>
  );
};
