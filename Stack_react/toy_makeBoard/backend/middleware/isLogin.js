const jwt = require("jsonwebtoken");

exports.isLogin = (req, res, next) => {
  try {
    // console.log(req.cookies.token);
    const accessToken = req.cookies.token;
    // console.log(accessToken);
    const data = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN,
      (err, decoded) => {
        if (err) {
          // console.error(err);
          res.send("wrong token");
        } else {
          req.decoded = decoded;
          // console.log(decoded);
          next();
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
};
