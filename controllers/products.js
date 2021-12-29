const Product = require("../models/product");

// /api/products GET handler
exports.getProducts = (req, res, next) => {
  Product.find({})
    .then((products) => {
      res.status(200).json({
        message: "Get all products successfully!",
        products: products,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// /api/products POST handler
exports.postProducts = (req, res, next) => {
  Product.create({
    name: req.body.name,
    description: req.body.description,
  })
    .then((product) => {
      res.status(200).json({
        message: "Product created successfully!",
        product: product,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// /api/products PUT handler
exports.putProducts = (req, res, next) => {
  Product.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    description: req.body.description,
  })
    .then((product) => {
      res.status(200).json({
        message: "Product edited successfully!",
        product: product,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// /api/product/ DELETE handler
exports.deleteProducts = (req, res, next) => {
  Product.findByIdAndDelete(req.body._id)
    .then((product) => {
      res.status(200).json({
        message: "Product deleted successfully!",
        product: product,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// /api/product/:_id GET handler
exports.getProduct = (req, res, next) => {
  Product.findById(req.params._id)
    .then((product) => {
      res.status(200).json({
        message: "Get product successfully!",
        product: product,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
