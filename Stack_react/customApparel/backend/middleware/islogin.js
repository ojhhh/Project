const jwt = require("jsonwebtoken");
const dot = require("dotenv").config();

exports.islogin = (req, res, next) => {
  const { access_token } = req.session;
  console.log(access_token);
  console.log("여기에서는있음", req.session);
  jwt.verify(access_token, process.env.ACCESS_TOKEN_KEY, (err, acc_decoded) => {
    if (err) {
      console.log(err);
      res.send("다시 로그인해주세요");
    } else {
      req.acc_decoded = acc_decoded;
      next();
    }
  });
};
