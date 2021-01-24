const express = require("express");
const router = express.Router();

const productControllers = require("../controllers/product");

router.get("/", productControllers.getProducts);

module.exports = router;
