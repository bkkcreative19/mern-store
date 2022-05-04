const asyncHandler = require("../middleware/async");
const stripe = require("stripe")(process.env.SK_key);
const Order = require("../models/orderModel");

const createOrder = asyncHandler(async (req, res, next) => {
  // console.log(req.body.body);
  // const newOrder = await Order.create({
  //   ...req.body.body,
  //   // userId: req.user._id,
  // });
  const { items } = req.body;
  console.log(items);

  const calculateOrderAmount = (items) => {
    return req.body
      .reduce((acc, item) => acc + item.qty * item.price, 0)
      .toFixed(2);
  };

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Number(calculateOrderAmount(items)),
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });

  // res
  //   .status(201)
  //   .send({ status: "success", message: "New Order Created", data: newOrder });
});

module.exports = {
  createOrder,
};
