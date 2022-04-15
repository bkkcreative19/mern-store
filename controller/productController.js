const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const getProducts = asyncHandler(async (req, res, next) => {
  // console.log(req.params.category);
  let products;

  if (req.params.category === "all") {
    products = await Product.find({});
  } else {
    products = await Product.find({ category: req.params.category });
  }
  // await products.sort({ price: "asc" });
  // const products = await Product.find({
  //   price: {
  //     $lte: req.query.priceRange[0] && Number(req.query.priceRange[0]),
  //     $gte: req.query.priceRange[1] && Number(req.query.priceRange[1]),
  //   },
  // });

  res.send(res.advanceResults);

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

module.exports = {
  getProducts,
  getProduct,
};
