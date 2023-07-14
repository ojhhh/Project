const bcrypt = require("bcrypt");
const { users } = require("../models");

exports.SignUp = async (req, res) => {
  try {
    const { user_id, user_pw, user_name } = req.query;
    const hash = bcrypt.hashSync(user_pw, 10);
    const data = await users.findOne({ where: { user_id }, raw: true });
    // console.log(data);
    if (data?.user_id) {
      res.send(false);
    } else {
      await users.create({ user_id, user_pw: hash, user_name });
      res.send(true);
    }
  } catch (error) {
    console.error(error);
  }
};
