import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams, useNavigate } from "react-router-dom";
import { listProductDetails } from "../../actions/productActions";
import { addToCart } from "../../actions/cartActions";
import { ProductDetails } from "../../components";

export const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const fetchProductDetails = () => {
    dispatch(listProductDetails(params.id));
  };

  const addToCartHandler = () => {
    dispatch(addToCart(params.id, qty));
  };

  useEffect(() => {
    fetchProductDetails();
  }, [dispatch, params.id]);

  return (
    <div>
      {loading ? (
        <Skeleton height={400} />
      ) : product ? (
        <ProductDetails
          addToCartHandler={addToCartHandler}
          setQty={setQty}
          qty={qty}
          product={product}
        />
      ) : (
        ""
      )}
    </div>
  );
};
