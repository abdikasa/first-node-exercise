const Product = require("../models/product");

const getAddProduct = (req, res, next) => {
  //res.sendFile(path.join(rootDir, "views", "add-product.html"));
  Product.fetchAll((products) => {
    res.render("admin/add-product", {
      docTitle: "Add Product",
      path: "/admin/add-product",
      hasProducts: products.length > 0,
      activeShop: false,
      activeAddProd: true,
      formsCss: true,
      productCss: true,
    });
  });
};

const postAddProduct = (req, res, next) => {
  console.log("object is ", req.body);
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

const getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("customer/product-list", {
      products,
      docTitle: "Homepage",
      path: "/",
      activeShop: true,
      activeAddProd: false,
      formsCss: true,
      productCss: true,
    });
  });
};

exports.postAddProduct = postAddProduct;
exports.getAddProduct = getAddProduct;
exports.getProducts = getProducts;
