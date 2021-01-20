const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//valid middleware function
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/shop");

//app can serve as a valid request handler.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(adminRoutes);
app.use(userRoutes);

app.listen(3000);
