const Order = require("../models/order");

// /api/orders GET handler
exports.getOrders = (req, res, next) => {
  // get all orders
  Order.find({ "user.userId": req.user._id })
    .populate("products.product")
    .then((orders) => {
      res.status(200).json({
        message: "Get all orders successfully!",
        orders: orders,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// /api/orders POST handler
exports.postOrders = (req, res, next) => {
  const products = req.user.cart.map((item) => {
    return { product: item.product, quantity: item.quantity };
  });
  Order.create({
    user: {
      name: req.user.username,
      userId: req.user._id,
    },
    products: products,
  })
    .then((order) => {
      req.user.clearCart();
      res.status(200).json({
        message: "Order placed successfully!",
        order: order,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
