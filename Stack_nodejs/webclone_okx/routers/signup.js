const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("signup");
});

// 회원가입 정보 확인
router.post("/signup", (req, res) => {
  const { user_id, user_pw, user_pw_chk } = req.body;
  console.log(user_id, user_pw, user_pw_chk);
  if (!user_id) {
    console.log("아이디를 입력해주세요.");
  } else if (user_pw.length < 4) {
    console.log("비밀번호를 최소 4자리 이상 입력해주세요.");
  } else if (user_pw !== user_pw_chk) {
    console.log("비밀번호가 다릅니다.");
  } else {
    const selectsql = "select user_id from users where user_id = ?";
    mysql2.query(selectsql, [user_id], (serr, sres) => {
      if (!sres[0]) {
        const insertsql = "insert into users(user_id, user_pw) values (?,?)";
        mysql2.query(insertsql, [user_id, user_pw], (ierr, iresult) => {
          if (ierr) {
            console.log(ierr);
          } else {
            res.redirect("/login");
          }
        });
      } else {
        console.log("사용중인 아이디입니다.");
      }
    });
  }
});

module.exports = router;
