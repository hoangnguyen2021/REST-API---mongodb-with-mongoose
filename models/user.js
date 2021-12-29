const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  cart: [
    {
      product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

userSchema.methods.addToCart = function (newProduct) {
  // check if newProduct exists in the cart
  let foundItem = this.cart.find((item) => {
    return item.product._id.toString() === newProduct._id.toString();
  });
  if (foundItem) {
    // if yes, increment its quantity
    foundItem.quantity++;
  } else {
    // if no, push newProduct with quantity of 1
    this.cart.push({ product: newProduct, quantity: 1 });
  }

  return this.save();
};

userSchema.methods.deleteFromCart = function (productId) {
  this.cart = this.cart.filter((item) => {
    return item.product._id.toString() !== productId;
  });

  return this.save();
};

userSchema.methods.clearCart = function (productId) {
  this.cart = [];

  return this.save();
};

module.exports = mongoose.model("User", userSchema);
