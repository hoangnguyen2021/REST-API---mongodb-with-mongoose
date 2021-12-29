const express = require("express");
// import controller
const orderController = require("../controllers/orders");

// use express router
const router = express.Router();

// handle GET /api/orders
router.get("/orders", orderController.getOrders);

// handle POST /api/orders
router.post("/orders", orderController.postOrders);

module.exports = router;
