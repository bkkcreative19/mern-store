const { getProducts } = require("../controller/productController");

const router = require("express").Router();

router.get("/:category", getProducts);

module.exports = router;
