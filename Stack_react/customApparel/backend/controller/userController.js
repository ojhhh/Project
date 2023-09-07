const db = require("../models");
const User = db.USER;
// 로그인 할때 bcrypt 사용 jsonwebtoken 설치
const dot = require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
exports.signUp = async (req, res) => {
  try {
    console.log(req);
    // console.log("This is reqbody", req.body.data);
    // console.log("This is reqbody", req.file.path);
    const obj = JSON.parse(req.body.data);
    const { Nick, user_id, user_pw } = obj;

    const user = await User.findOne({ where: { user_id } });
    if (user != null) {
      // console.log("중복가입방지");
      return res
        .status(500)
        .json({ message: "중복된 유저가 있어 가입을 방지했습니다." });
    }

    const hash = bcrypt.hashSync(user_pw, 10);

    // Create a new user with image information
    const newUser = await User.create({
      Nick,
      user_id,
      user_pw: hash,
      profile_img: "/" + req.file.path,
    });

    // console.log("User created successfully:", newUser);

    // Return a success response
    res.status(200).json({ data: newUser, message: "가입에 성공하셨습니다." });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: error });
  }
};

exports.login = async (req, res) => {
  // console.log(req.body);
  // console.log(req);
  const { user_id, user_pw } = req.body;
  try {
    const user = await User.findOne({ where: { user_id } });
    if (user == null) {
      return res.send("가입 안한 아이디임~");
    }
    if (user.Accept == 0) return res.send("이재영");
    const same = bcrypt.compareSync(user_pw, user.user_pw);
    if (same) {
      let token = jwt.sign(
        {
          user_id: user.user_id,
          Nick: user.Nick,
          id: user.id,
        },
        process.env.ACCESS_TOKEN_KEY,
        {
          expiresIn: "20m",
        }
      );
      req.session.access_token = token;
      req.session.name = user.user_id;
      req.session.Nick = user.Nick;
      // console.log("req.session", req.session);
      // console.log("token", token);
      // return res.send({
      //   message: "로그인성공",
      //   token: req.session.access_token,
      // });
      return res
        .status(200)
        .json({ message: "로그인성공", token: req.session });
    } else {
      return res.status(400).json({ message: "로그인실패" });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.viewUser = async (req, res) => {
  const { acc_decoded } = req;
  // console.log("asd", acc_decoded);
  const user = await User.findOne({ where: { name: acc_decoded.name } });

  // json 형태로 데이터를 응답
  res.json(user);
};

exports.logout = async (req, res) => {
  res.cookie("token", "", { expires: new Date(0), httpOnly: true });
  res.send("Logged out");
};
