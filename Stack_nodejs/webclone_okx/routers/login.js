const router = require("express").Router();
const { Login } = require("../controllers/loginController");

router.get("/", (req, res) => {
  res.render("login");
});

// 로그인 정보 확인
router.post("/", Login);

module.exports = router;
