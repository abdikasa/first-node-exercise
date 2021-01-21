const express = require("express");

const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");
const admin = require("./admin");

router.get("/", (req, res, next) => {
  //console.log("All Products: ", admin.products);
  //res.sendFile(path.join(rootDir, "views", "shop.html"));
  const products = admin.products;
  res.render("shop", { products, docTitle: "Homepage" });
});

module.exports = router;
