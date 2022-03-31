import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { listProducts } from "../../actions/productActions";
import { ProductList } from "../../components";

export const ProductsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(params.id));
  }, [dispatch, params.id]);
  return (
    <>
      <ProductList products={products} />
    </>
  );
};
