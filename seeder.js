const fs = require("fs");
const mongoose = require("mongoose");
// const colors = require("colors");
require("dotenv").config();

//load env vars

//load models
// const User = require("./models/User");
const Product = require("./models/productModel");
const Category = require("./models/categoryModel");
// const Review = require("./models/Review");
// const Order = require("./models/Order");

// Connect to DB

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Read JSON files

// const users = JSON.parse(
//   fs.readFileSync(`${__dirname}/_data/users.json`, "utf-8")
// );

const products = JSON.parse(
  fs.readFileSync(`${__dirname}/data/product.json`, "utf-8")
);
const categories = JSON.parse(
  fs.readFileSync(`${__dirname}/data/category.json`, "utf-8")
);
// const reviews = JSON.parse(
//   fs.readFileSync(`${__dirname}/_data/reviews.json`, "utf-8")
// );

//Import into DB

const importData = async () => {
  try {
    // await User.create(users);
    await Product.create(products);
    await Category.create(categories);
    //await Review.create(reviews);
    // console.log(`Data Imported`.green.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async () => {
  try {
    // await User.deleteMany();
    await Product.deleteMany();
    await Category.deleteMany();
    //await Review.deleteMany();
    // await Order.deleteMany();
    // console.log("Data Destroy".red.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
