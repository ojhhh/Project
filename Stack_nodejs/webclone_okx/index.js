// 필요한 module 설치
// express, mysql2, ejs
// npm init -y -> package.json 기본값 생성
// npm install express mysql2 ejs

const express = require("express");
const path = require("path");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// 정적 파일 선언
// 이거 추가해 주니 css 인식됨
app.use(express.static("views"));

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

app.listen(8090, () => {
  console.log("Server On");
});
