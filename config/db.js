const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.DB, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  });
  console.log(`Mongo database connected on ${conn.connection.host}`);
};

module.exports = connectDB;
