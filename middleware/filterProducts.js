const filterProducts = (model) => async (req, res, next) => {
  //JSON.Stringify Convert the javascript object into string | when sending data to server, the data has to be string
  //JSON.parse Convert the string into javascript Object | when server send data, data is always a string, so parse the data to convert into js Object
  // console.log("1", req.query);
  let query;
  // console.log(req.params.category);
  // const reqQuery = { ...req.query };

  // console.log("2", reqQuery);

  // const removeFeilds = ["select", "sort", "limit", "page"];
  // console.log("1", reqQuery);
  // console.log(removeFeilds);
  // removeFeilds.forEach((param) => delete reqQuery[param]);
  // console.log("2", reqQuery);

  //Create query string
  // let queryStr = JSON.stringify(reqQuery);
  // console.log("3", queryStr);
  // console.log(typeof Number(JSON.parse(req.query.price).lt));
  //Create operators ($gt,gte,lt,lte)
  // queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)/g, (match) => `$${match}`);

  // console.log("4", queryStr);
  //Finding resource
  // query = model.find(JSON.parse(queryStr));
  if (req.params.category === "all") {
    query = model.find({});
  } else {
    query = model.find({ category: req.params.category });
  }
  console.log(req.query);
  // // //Feild to exclude

  // const removeFeilds = ["select", "sort", "limit", "page"];

  // removeFeilds.forEach((param) => {
  //   delete reqQuery[param];
  // });

  // let queryStr = JSON.stringify(reqQuery);

  // queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)/g, (match) => `$${match}`);

  // query = model.find(JSON.parse(queryStr));

  // console.log("3", reqQuery);

  // //Create query string
  // let queryStr = JSON.stringify(reqQuery);
  // //Create operators ($gt,gte,lt,lte)
  // queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)/g, (match) => `$${match}`);

  // //Finding resource
  // if (req.params.category === "all") {
  //   query = model.find();
  // } else {
  //   query = model.find({ category: req.params.category });
  // }

  // // console.log(req.query);
  // // console.log(JSON.parse(req.query));
  // //Select
  // if (req.query.select) {
  //   const select = req.query.select.split(",").join(" ");
  //   query = query.select(select);
  // }

  // // console.log(req.query.priceRange);
  // console.log("hi", req.query.price);
  if (req.query.price) {
    query = query
      .where("price")
      .gt(Number(req.query.price[0]))
      .lt(Number(req.query.price[1]));
  }

  if (req.query.isInStock) {
    if (req.query.isInStock === "true") {
      query = query.where({ countInStock: { $gt: 0 } });
    } else {
      query = query.where({ countInStock: 0 });
    }
  }

  // //Sort
  if (req.query.sort) {
    const sort = req.query.sort.split(",").join(" ");
    console.log("sort", sort);
    if (sort === "Alphabetically  A-Z") {
      query = query.sort({ name: "asc" });
    }
    if (sort === "Alphabetically  Z-A") {
      query = query.sort({ name: "desc" });
    }
    if (sort === "low-to-high") {
      query = query.sort({ price: "asc" });
    }
    if (sort === "high-to-low") {
      query = query.sort({ price: "desc" });
    }
    if (sort === "Date  old to new") {
      query = query.sort({ createdAt: "asc" });
    }
    if (sort === "Date  new to old") {
      query = query.sort({ createdAt: "desc" });
    }
  }

  // //Pagination

  // // const page = parseInt(req.query.page, 10) || 1;
  // // const limit = parseInt(req.query.limit, 10) || 25;
  // // const startIndex = (page - 1) * limit;

  // // const endIndex = page * limit;
  // // const total = await model.countDocuments();

  // // query = query.skip(startIndex).limit(limit);
  // // console.log(populate);
  // if (populate) {
  //   query = query.populate(populate);
  // }

  // //Execute Query
  const results = await query;

  //Pagination Result
  // const pagination = {};

  // if (endIndex < total) {
  //   pagination.next = {
  //     page: page + 1,
  //     limit,
  //   };
  // }
  // if (startIndex > 0) {
  //   pagination.prev = {
  //     page: page - 1,
  //     limit,
  //   };
  // }

  // let results;

  // console.log(req.params.category);

  // if (req.params.category === "all") {
  //   results = await model.find({});
  // } else {
  //   results = await model.find({ category: req.params.category });
  // }

  // res.advanceResults = {
  //   status: "success",
  //   //pagination,
  //   //total,
  //   count: results.length,
  //   results: results,
  // };
  res.filterProducts = {
    status: "success",
    //pagination,
    //total,
    count: results.length,
    results: results,
  };
  next();
};

module.exports = filterProducts;
