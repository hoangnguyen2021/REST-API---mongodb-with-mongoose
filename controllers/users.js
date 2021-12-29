const User = require("../models/user");
const Product = require("../models/product");

// /api/users GET handler
exports.getUsers = (req, res, next) => {
  // get all users
  User.find({})
    .then((users) => {
      res.status(200).json({
        message: "Get all users successfully!",
        users: users,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// /api/users POST handler
exports.postUsers = (req, res, next) => {
  // create a new user
  User.create({
    username: req.body.username,
    email: req.body.email,
    cart: [],
  })
    .then((user) => {
      res.status(200).json({
        message: "User created successfully!",
        user: user,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// /api/users/:id GET handler
exports.getUser = (req, res, next) => {
  // get user by id
  User.findById(req.params.id)
    .then((user) => {
      res.status(200).json({
        message: "Get user successfully!",
        user: user,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// /api/cart GET handler
exports.getUserCart = (req, res, next) => {
  res.status(200).json({
    message: "Get cart successfully!",
    cart: req.user.cart,
  });
};

// /api/cart POST handler
exports.postUserCart = (req, res, next) => {
  Product.findById(req.body.productId)
    .then((product) => {
      return req.user.addToCart(product);
    })
    .then((user) => {
      res.status(200).json({
        message: "Add to cart successfully!",
        cart: user.cart,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// /api/cart DELETE handler
exports.deleteUserCart = (req, res, next) => {
  req.user
    .deleteFromCart(req.body.productId)
    .then((user) => {
      res.status(200).json({
        message: "Delete from cart successfully!",
        cart: user.cart,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
