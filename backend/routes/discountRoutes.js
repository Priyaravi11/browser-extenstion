const express = require("express");
const { getDiscounts } = require("../controllers/discountController");

const router = express.Router();

router.post("/", getDiscounts);

module.exports = router;
