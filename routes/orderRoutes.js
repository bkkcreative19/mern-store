const { createOrder } = require("../controller/orderController");
const { protect } = require("../middleware/authMiddleware");
const router = require("express").Router();

router.post("/", protect, createOrder);

module.exports = router;
