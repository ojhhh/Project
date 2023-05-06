// 필요한 module 설치
// express, mysql2, ejs
// npm init -y -> package.json 기본값 생성
// npm install express mysql2 ejs

const express = require("express");
const path = require("path");

const app = express();

const reqmysql2 = require("mysql2");

const mysql2 = reqmysql2.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "okx",
});

mysql2.query("select * from users", (err, res) => {
  if (err) {
    const sql =
      "create table users (id INT AUTO_INCREMENT PRIMARY KEY, user_id VARCHAR(50), user_pw VARCHAR(50) NOT NULL)";
    mysql2.query(sql);
  } else {
    console.log(res);
  }
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// 정적 파일 선언
// 이거 추가해 주니 css 인식됨
app.use(express.static("views"));
// 이렇게 해주니 css에서 image 폴더에 접근가능
app.set("images", path.join(__dirname, "views/image"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/signup", (req, res) => {
  res.render("signup");
});

// 로그인 정보 확인
app.post("/login", (req, res) => {
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

// 회원가입 정보 확인
app.post("/signup", (req, res) => {
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

app.listen(8090, () => {
  console.log("Server On");
});
