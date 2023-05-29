const { User } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.SignUp = async (req, res) => {
  const { user_id, user_pw, user_pw_chk } = req.body;
  try {
    if (!user_id) {
      console.log("아이디를 입력해주세요.");
    } else if (user_pw.length < 4) {
      console.log("비밀번호를 최소 4자리 이상 입력해주세요.");
    } else if (user_pw !== user_pw_chk) {
      console.log("비밀번호가 다릅니다.");
    } else {
      const data = await User.findOne({ where: { user_id } });

      if (data?.user_id) {
        console.log("사용중인 아이디입니다.");
      } else {
        const token = jwt.sign({ user_id }, process.env.ACCESS_TOKEN_KEY, {
          expiresIn: "5m",
        });
        req.session.accessToken = token;

        const hash = bcrypt.hashSync(user_pw, 10, (err) => {
          console.error(err);
        });
        console.log(hash);
        await User.create({ user_id, user_pw: hash });
        res.redirect("/login");
      }
    }
  } catch (error) {
    console.error(error);
  }
};
