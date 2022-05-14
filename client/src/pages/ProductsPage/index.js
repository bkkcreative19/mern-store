import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { listProducts } from "../../actions/productActions";
import { Filter, ProductList } from "../../components";
import { capitilizeFirstLetter } from "../../utils/captilizeFirstLetter";

import "./ProductsPage.scss";

export const ProductsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [filters, setFilters] = useState({});

  const productList = useSelector((state) => state.productList);

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
      <h2>{capitilizeFirstLetter(params.id)}</h2>

      {products && (
        <Filter
          numOfProducts={products.count}
          handleFilters={handleFilters}
          filters={filters}
          highestPrice={products.highestPrice}
        />
      )}

      {loading ? (
        <Skeleton height={400} />
      ) : products ? (
        <ProductList products={products.results} />
      ) : (
        ""
      )}
    </section>
  );
};
