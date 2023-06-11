const router = require("express").Router();
const { list, detail } = require("../controllers/productController");
router.get("/", list);
router.get("/detail", detail);

module.exports = router;
