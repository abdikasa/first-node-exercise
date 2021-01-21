const app = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = app.Router();

//send 404; create a catch-all
router.use((req, res, next) => {
  // res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
  res.status(404).render("404", { docTitle: "404 PAGE NOT FOUND" });
});

module.exports = router;
