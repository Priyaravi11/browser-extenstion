const Product = require("../models/Product");

exports.getStockAvailability = async (req, res) => {
  try {
    const { url } = req.body;
    const product = await Product.findOne({ url });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ inStock: product.stockAvailability });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
