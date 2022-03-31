const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

const getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find({});
  res.send(products);

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

module.exports = {
  getProducts,
};
