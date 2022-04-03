import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams } from "react-router-dom";
import { listProductDetails } from "../../actions/productActions";
import { ProductDetails } from "../../components";

export const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const fetchProductDetails = () => {
    dispatch(listProductDetails(params.id));
  };

  useEffect(() => {
    fetchProductDetails();
  }, [dispatch, params.id]);

  return (
    <div>
      {loading ? (
        <Skeleton height={400} />
      ) : product ? (
        <ProductDetails product={product} />
      ) : (
        ""
      )}
    </div>
  );
};
