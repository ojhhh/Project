const express = require("express");
const session = require("express-session");
const dot = require("dotenv").config();
const { sequelize } = require("./models");
const { userRouter, postRouter } = require("./routers");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

sequelize
  .sync({ force: false })
  .then((e) => {
    console.log("connect");
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/users", userRouter);
app.use("/posts", postRouter);

app.listen(process.env.PORT, () => {
  console.log("Server On");
});
