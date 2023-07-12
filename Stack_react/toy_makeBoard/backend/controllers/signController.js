const bcrypt = require("bcrypt");
const { users } = require("../models");

exports.SignUp = async (req, res) => {
  try {
    const { user_id, user_pw, user_name } = req.query;
    const hash = bcrypt.hashSync(user_pw, 10);
    await users.create({ user_id, user_pw: hash, user_name });
  } catch (error) {
    console.error(error);
  }
};
