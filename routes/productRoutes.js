const { getProducts } = require("../controller/productController");
const advanceResults = require("../middleware/advancedResults");
const router = require("express").Router();

const Product = require("../models/productModel");

router.get("/:category", advanceResults(Product), getProducts);

module.exports = router;
