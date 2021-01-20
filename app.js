const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//valid middleware function
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/shop");
const errorRoutes = require("./routes/errors");

//app can serve as a valid request handler.
app.use(bodyParser.urlencoded({ extended: false }));

//prefixes routes with admin
app.use("/admin", adminRoutes);
app.use(userRoutes);
app.use(errorRoutes);

app.listen(3000);
