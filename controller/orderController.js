const asyncHandler = require("../middleware/async");
const Order = require("../models/orderModel");

const createOrder = asyncHandler(async (req, res, next) => {
  console.log(req.body.body);
  const newOrder = await Order.create({
    ...req.body.body,
    // userId: req.user._id,
  });

  res
    .status(201)
    .send({ status: "success", message: "New Order Created", data: newOrder });
});

module.exports = {
  createOrder,
};
