const jwt = require("jsonwebtoken");

exports.isLogin = (req, res, next) => {
  try {
    console.log(req.sessionID);
    console.log(req.session);
    next();
  } catch (error) {
    console.error(error);
  }
};
