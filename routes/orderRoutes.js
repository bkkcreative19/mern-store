const { createOrder } = require("../controller/orderController");

const router = require("express").Router();

router.route("/").post(createOrder);
