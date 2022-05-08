const express = require("express");
const stripe = require("stripe")(process.env.SK_key);
require("dotenv").config();

// const colors = require("colors");
const path = require("path");
const cors = require("cors");
// const morgan = require("morgan");
// const fileUpload = require("express-fileupload");
// const { unknownEndpoints, errorHandler } = require("./middleware/error");
const connectDb = require("./config/db");
const app = express();

require("dotenv").config();

connectDb();

//rouets
const authRouter = require("./routes/authRoutes");
// const userRouter = require("./routes/user");
const productRouter = require("./routes/productRoutes");
// const reviewRouter = require("./routes/review");
const orderRouter = require("./routes/orderRoutes");
const paymentRouter = require("./routes/stripe");
// const categoryRouter = require("./routes/category");

app.use(express.json());
// app.use(morgan("tiny"));

// app.use(
//   fileUpload({
//     useTempFiles: true,
//   })
// );

app.use(cors());

app.use("/api/v1/auth", authRouter);
// app.use("/api/v1/user", userRouter);

app.use("/api/v1/product", productRouter);

// app.use("/api/v1/review", reviewRouter);
app.use("/api/v1/order", orderRouter);

app.post("/create-payment-intent", async (req, res) => {
  console.log(req.headers);
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return Number(
      items.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)
    );
  };
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

// app.use("/api/v1/category", categoryRouter);

// app.get("/api/config/paypal", (req, res) =>
//   res.send(process.env.PAYPAL_CLIENT_ID)
// );

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname + "/client/build/index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

// app.use(unknownEndpoints);
// app.use(errorHandler);

const PORT = process.env.PORT || 5001;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

//Handle unhandle promise rejection

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  //close the server
  server.close(() => process.exit(1));
});
