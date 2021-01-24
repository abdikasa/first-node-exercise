exports.get404 = (req, res, next) => {
  // res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
  res.status(404).render("404", {
    docTitle: "404 PAGE NOT FOUND",
    activeShop: false,
    activeAddProd: false,
    formsCss: true,
    productCss: true,
    path: "",
  });
};
