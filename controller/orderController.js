const req = require("express/lib/request");
const res = require("express/lib/response");
const asyncHandler = require("../middleware/async");
const stripe = require("stripe")(process.env.SK_key);
const Order = require("../models/orderModel");

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const createOrder = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

const getOrders = asyncHandler(async (req, res) => {
  // console.log(req.user);
  const orders = await Order.find({ user: req.user._id });
  res.status(201).json(orders);
});

module.exports = {
  createOrder,
  getOrders,
};
