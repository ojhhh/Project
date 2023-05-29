const router = require("express").Router();
const { SignUp } = require("../controllers/signupController");

router.get("/", (req, res) => {
  res.render("signup");
});

// 회원가입 정보 확인
router.post("/", SignUp);

module.exports = router;
