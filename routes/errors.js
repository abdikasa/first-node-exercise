const app = require("express");
const router = app.Router();
const errorsController = require("../controllers/errors");

router.use(errorsController.get404);

module.exports = router;
