import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { listProducts } from "../../actions/productActions";
import { ProductList } from "../../components";

import "./HomePage.scss";

export const HomePage = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <ProductList products={products} />
    </>
  );
};
