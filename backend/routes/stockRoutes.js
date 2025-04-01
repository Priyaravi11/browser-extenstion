const express = require("express");
const { getStockAvailability } = require("../controllers/stockController");

const router = express.Router();

router.post("/", getStockAvailability);

module.exports = router;
