const { User } = require("../models");
const bcrypt = require("bcrypt");

exports.Login = async (req, res) => {
  try {
    const { user_id, user_pw } = req.body;
    console.log(user_id, user_pw);
    if (!user_id) {
      console.log("아이디를 입력해주세요.");
      return;
    } else if (!user_pw) {
      console.log("비밀번호를 입력해주세요 ");
      return;
    }
    const data = await User.findOne({ where: { user_id } });
    const campare = bcrypt.compareSync(user_pw, data.user_pw);
    if (!data?.user_id) {
      console.log("아이디를 잘못 입력하였습니다.");
    } else if (!campare) {
      console.log("비밀번호가 틀립니다.");
    } else {
      res.redirect("/");
    }
  } catch (error) {
    console.error(error);
  }
};
