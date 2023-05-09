const express = require("express");
const { mysql } = require("../models");
const router = express.Router();

const { SignUp } = require("../controller/ctl_main");

router.get("/", async (req, res) => {
  try {
    res.render("main");
  } catch (error) {}
});

router.get("/login", async (req, res) => {
  try {
    res.render("login");
  } catch (error) {
    console.log("route get login error");
    console.error(error);
  }
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signup");
  } catch (error) {
    console.log("route get signup error");
    console.error(error);
  }
});

router.get("/view", async (req, res) => {
  try {
    res.render("view");
  } catch (error) {
    console.log("router get datila error");
    console.error(error);
  }
});

router.post("/signup", async (req, res) => {
  try {
    const { user_id, user_pw } = req.body;
    await SignUp(user_id, user_pw);
    res.redirect("login");
  } catch (error) {
    console.log("router post signup error");
  }
});
//
module.exports = router;
