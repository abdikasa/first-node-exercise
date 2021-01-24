const fs = require("fs");
const path = require("path");
const pathUtil = require("../util/path");

const getProductsFromFile = (cb) => {
  const p = path.join(pathUtil, "data", "producsts.json");
  fs.readFile(p, (err, content) => {
    if (err) {
      return cb([]);
    }
    return cb(JSON.parse(content));
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    const p = path.join(pathUtil, "data", "producsts.json");
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log("Writing error: ", err);
      });
    });
  }

  static fetchAll(callback) {
    return getProductsFromFile(callback);
  }
};
