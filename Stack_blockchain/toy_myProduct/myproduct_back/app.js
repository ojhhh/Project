const express = require("express");
const path = require("path");
const multer = require("multer");
const cors = require("cors");
const dot = require("dotenv").config();

const { sequelize } = require("./models");

const app = express();

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
  })
);

sequelize
  .sync({
    force: false,
  })
  .then((e) => {
    console.log("database connect");
  })
  .catch((err) => {
    console.error(err);
  });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/img", express.static(path.join(__dirname, "uploads")));

app.listen(8080, () => {
  console.log("server on");
});
