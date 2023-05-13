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
app.use("/ohstory", mainRouter);
app.use(verifyRouter);
app.use(express.static(path.join(__dirname, "public")));

// cookies 생성
app.use(
  session({
    secret: process.env.secretKEY,
    resave: false,
    saveUninitialized: true,
  })
);

app.listen(PORT, () => {
  console.log("Server On");
});
