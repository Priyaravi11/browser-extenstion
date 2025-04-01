const express = require("express");
const { getPriceComparison } = require("../controllers/priceController");

const router = express.Router();

router.post("/", getPriceComparison);

module.exports = router;
