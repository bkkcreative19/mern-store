const { createPayment } = require("../controller/stripeController");
const router = require("express").Router();

router.post("/", createPayment);

module.exports = router;
