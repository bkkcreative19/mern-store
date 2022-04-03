import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { listProducts } from "../../actions/productActions";
import { Filter, ProductList } from "../../components";

export const ProductsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [sort, setSort] = useState("");
  const [filters, setFilters] = useState({});

  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;
  // console.log(filters);

  const handleFilters = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const fetchProducts = () => {
    dispatch(listProducts(params.id, { ...filters }));
  };

  useEffect(() => {
    fetchProducts();
  }, [dispatch, params.id, filters]);

  return (
    <section className="container">
      <Filter handleFilters={handleFilters} filters={filters} />
      <ProductList products={products.results} />
    </section>
  );
};
