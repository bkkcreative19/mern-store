const { createOrder, getOrders } = require("../controller/orderController");
const { protect } = require("../middleware/authMiddleware");
const router = require("express").Router();

router.post("/", protect, createOrder);
router.get("/", protect, getOrders);

module.exports = router;
