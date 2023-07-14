const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { users } = require("../models");

exports.LogIn = async (req, res) => {
  try {
    // console.log(req);
    const { user_id, user_pw } = req.body;
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
        res.cookie("token", token, { httpOnly: true });
        // console.log("loginController");
        res.send(token);
      } else {
        res.send("wrong password");
      }
    } else {
      res.send("wrong id");
    }
  } catch (error) {
    console.error(error);
  }
};
