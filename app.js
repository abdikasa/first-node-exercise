const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

app.set("view engine", "pug");
//app.set("views", "views");

//valid middleware function
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/shop");
const errorRoutes = require("./routes/errors");

//app can serve as a valid request handler.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//prefixes routes with admin
app.use("/admin", adminRoutes.routes);
app.use(userRoutes);
app.use(errorRoutes);

app.listen(3000);
