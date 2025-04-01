const Product = require("../models/Product");

exports.getDiscounts = async (req, res) => {
  try {
    const { url } = req.body;
    const product = await Product.findOne({ url });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product.discounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
