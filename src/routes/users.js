const router = require("express").Router();

const { register, login, admin } = require("../controllers/usersController");
const accessAdmin = require("../middlewares/accessAdmin");

/* /users */

router.get("/register", register);
router.get("/login", login);
router.post("/login", accessAdmin, admin);

module.exports = router;
