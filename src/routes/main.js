const express = require("express");
const router = express.Router();
const { index, services, design, admin} = require("../controllers/mainController");
const verifyAdmin = require("../middlewares/admin");


router
    .get('/', index)
    .get('/services', services)
    .get('/services/design', design)
    .get("/admin", verifyAdmin, admin)
module.exports = router;