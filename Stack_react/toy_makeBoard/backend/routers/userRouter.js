const router = require("express").Router();
const { LogIn, SignUp } = require("../controllers");

router.get("/login", LogIn);
router.get("/signUp", SignUp);

module.exports = router;
