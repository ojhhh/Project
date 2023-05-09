// npm inti -y
// npm install express mysql2 ejs

const express = require("express");
const mysql2 = require("mysql2");
const path = require("path");
const mainRouter = require("./routes/route_main");

const PORT = 8080;

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use("/tistory", mainRouter);
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log("Server On");
});
