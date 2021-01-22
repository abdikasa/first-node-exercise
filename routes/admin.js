const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

const products = [];

router.get("/add-product", (req, res, next) => {
  //res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    docTitle: "Add Product",
    path: "/admin/add-product",
    hasProducts: products.length > 0,
    activeShop: false,
    activeAddProd: true,
    formsCss: true,
    productCss: true,
  });
});

router.post("/add-product", (req, res, next) => {
  console.log("object is ", req.body);
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
