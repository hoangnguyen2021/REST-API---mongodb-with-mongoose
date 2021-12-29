const express = require("express");
// import controller
const usersController = require("../controllers/users");

// use express router
const router = express.Router();

// handle GET /api/users
router.get("/users", usersController.getUsers);

// handle POST /api/users
router.post("/users", usersController.postUsers);

// handle GET /api/users/:id
router.get("/users/:id", usersController.getUser);

// handle GET /api/cart
router.get("/cart", usersController.getUserCart);

// handle POST /api/cart
router.post("/cart", usersController.postUserCart);

// handle DELETE /api/cart
router.delete("/cart", usersController.deleteUserCart);

module.exports = router;
