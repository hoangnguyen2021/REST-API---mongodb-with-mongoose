// import expressjs, body-parser, routes
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");

// import User model
const User = require("./models/user");

const app = express();

// body-parser middleware
app.use(bodyParser.json());

// allow origin, methods, headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// this middleware always executes
app.use((req, res, next) => {
  User.findById("61acf379f145409cf9bb742d")
    .populate("cart.product")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

// handle /api/products (all methods)
app.use("/api", productsRoutes);

// handle /api/users (all methods)
app.use("/api", usersRoutes);

// handle /api/order (all methods)
app.use("/api", ordersRoutes);

// connect to mongdodb
mongoose
  .connect(
    "mongodb+srv://hoangnguyen:hoang123@cluster0.kv1fd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("Connected to Database!");
    app.listen(3001);
  })
  .catch((err) => {
    console.log(err);
  });
