const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { users } = require("../models");

exports.LogIn = async (req, res) => {
  try {
    const { user_id, user_pw } = req.query;
    const user = await users.findOne({ where: { user_id }, raw: true });
    if (user?.user_id == user_id) {
      const same = bcrypt.compareSync(user_pw, user.user_pw);
      if (same) {
        let token = jwt.sign(
          {
            id: user_id,
          },
          process.env.ACCESS_TOKEN,
          { expiresIn: "20m" }
        );
        req.session.accessToken = token;
        res.send(true);
      } else {
        console.log("wrong password");
        res.send(false);
      }
    } else {
      console.log("wrong id");
      res.send(false);
    }
  } catch (error) {
    console.error(error);
  }
};
