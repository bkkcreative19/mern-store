const { getProducts, getProduct } = require("../controller/productController");
const filterProducts = require("../middleware/filterProducts");
const router = require("express").Router();

const Product = require("../models/productModel");

router.get("/all/:category", filterProducts(Product), getProducts);
router.get("/:id", getProduct);

module.exports = router;
