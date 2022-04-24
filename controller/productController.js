const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const getProducts = asyncHandler(async (req, res, next) => {
  let products;

  res.send(res.filterProducts);

  // res.send(products);

  //   const keyWord = req.query.keyWord;

  //   if (keyWord) {
  //     const searchItem = keyWord
  //       ? { name: { $regex: keyWord, $options: "i" } }
  //       : {};

  //     const searchProduct = await Product.find(searchItem);

  //     res.status(200).send({
  //       status: "success",

  //       data: { results: searchProduct, count: searchProduct.length },
  //     });
  //   } else {
  //     res.status(200).send({ status: "success", data: res.advanceResults });
  //   }
});

const getProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  res.send(product);
});

const getFeaturedProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find({ featured: true });

  res.send(products);
});

module.exports = {
  getProducts,
  getProduct,
  getFeaturedProducts,
};
