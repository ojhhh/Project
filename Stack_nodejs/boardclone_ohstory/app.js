// npm inti -y
// npm install express express-session dotenv mysql2 ejs

const express = require("express");
const session = require("express-session");

const path = require("path");
const mainRouter = require("./routes/route_main");
const verifyRouter = require("./routes/route_verify");

const PORT = 8080;

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// session 생성
app.use(
  session({
    secret: process.env.KEY,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

// router 위치는 session 아래 두기 안그러면 session 정보가 생성 후에 라우터로 전달되지 않음
app.use(mainRouter);
app.use(verifyRouter);

// app.get("/", (req, res) => {
//   console.log(req.session);
// });

app.listen(PORT, () => {
  console.log("Server On");
});
