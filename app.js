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

//send 404; create a catch-all
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000);
