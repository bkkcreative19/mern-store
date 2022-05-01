const filterProducts = (model) => async (req, res, next) => {
  let query;

  if (req.params.category === "all") {
    query = model.find({});
  } else {
    query = model.find({ category: req.params.category });
  }

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
  console.log(req.query);
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

  const results = await query;

  const prices = results.map((product) => product.price);

  res.filterProducts = {
    status: "success",
    count: results.length,
    highestPrice: Math.max(...prices),
    results: results,
  };
  next();
};

module.exports = filterProducts;
