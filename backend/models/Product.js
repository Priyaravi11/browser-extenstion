const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  url: String,
  prices: [Number],
  discounts: [String],
  stockAvailability: Boolean
});

module.exports = mongoose.model("Product", ProductSchema);
