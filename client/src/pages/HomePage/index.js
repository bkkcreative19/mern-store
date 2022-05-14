import React, { useEffect } from "react";
import { Featured, Hero } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { listFeaturedProducts } from "../../actions/productActions";

export const HomePage = () => {
  const dispatch = useDispatch();

  const productListFeatured = useSelector((state) => state.productListFeatured);

  const { featuredProducts } = productListFeatured;

  useEffect(() => {
    dispatch(listFeaturedProducts());
  }, []);

  return (
    <section>
      <Hero />
      <Featured products={featuredProducts} />
    </section>
  );
};
