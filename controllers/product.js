const Product = require("../models/product");

const getAddProduct = (req, res, next) => {
  //res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    docTitle: "Add Product",
    path: "/admin/add-product",
    hasProducts: Product.fetchAll().length > 0,
    activeShop: false,
    activeAddProd: true,
    formsCss: true,
    productCss: true,
  });
};

const postAddProduct = (req, res, next) => {
  console.log("object is ", req.body);
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

const getProducts = (req, res, next) => {
  res.render("shop", {
    products: Product.fetchAll(),
    docTitle: "Homepage",
    path: "/",
    activeShop: true,
    activeAddProd: false,
    formsCss: true,
    productCss: true,
  });
};

exports.postAddProduct = postAddProduct;
exports.getAddProduct = getAddProduct;
exports.getProducts = getProducts;