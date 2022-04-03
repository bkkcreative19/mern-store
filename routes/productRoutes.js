const { getProducts, getProduct } = require("../controller/productController");
const advanceResults = require("../middleware/advancedResults");
const router = require("express").Router();

const Product = require("../models/productModel");

router.get("/all/:category", advanceResults(Product), getProducts);
router.get("/:id", getProduct);

module.exports = router;
