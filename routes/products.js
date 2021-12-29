const express = require("express");
// import controller
const productsController = require("../controllers/products");

// use express router
const router = express.Router();

// handle GET /api/products
router.get("/products", productsController.getProducts);

// handle POST /api/products
router.post("/products", productsController.postProducts);

// handle PUT /api/products
router.put("/products", productsController.putProducts);

// handle DELETE /api/products
router.delete("/products", productsController.deleteProducts);

// handle GET /api/products/:_id
router.get("/products/:_id", productsController.getProduct);

module.exports = router;
