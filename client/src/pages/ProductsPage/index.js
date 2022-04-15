import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { listProducts } from "../../actions/productActions";
import { Filter, ProductList } from "../../components";

import "./ProductsPage.scss";

export const ProductsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [sort, setSort] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [filters, setFilters] = useState({});

  const productList = useSelector((state) => state.productList);

  console.log(productList);

  // console.log(productList);

  const { loading, error, products } = productList;

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
    <section className="products-page container">
      <h2>Products</h2>
      <Filter
        numOfProducts={products.count}
        handleFilters={handleFilters}
        filters={filters}
      />
      {loading ? (
        <Skeleton height={400} />
      ) : (
        <ProductList products={products.results} />
        // <ProductList products={products} />
      )}
    </section>
  );
};
