const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("login");
});

// 로그인 정보 확인
router.post("/login", (req, res) => {
  const { user_id, user_pw } = req.body;
  console.log(user_id, user_pw);
  if (!user_id) {
    console.log("아이디를 입력해주세요.");
  } else if (!user_pw) {
    console.log("비밀번호를 입력해주세요 ");
  }
  const sql = "select user_id, user_pw from users where user_id = ?";
  mysql2.query(sql, [user_id], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (!result[0]) {
      console.log("아이디가 없습니다.");
    } else if (user_id === result[0].user_id && user_pw !== result[0].user_pw) {
      console.log("비밀번호를 확인해주세요 ");
    } else if (user_id === result[0].user_id && user_pw === result[0].user_pw) {
      console.log("로그인 성공");
    }
    // console.log(result);
    // res.redirect("/");
  });
});

module.exports = router;
