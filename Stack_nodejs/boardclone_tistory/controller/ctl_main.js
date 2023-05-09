const { boardfunc } = require("../models");

exports.SignUp = async function (user_id, user_pw) {
  try {
    const data = await boardfunc.signUp(user_id, user_pw);
    return data;
  } catch (error) {
    console.log("controller SignUp error");
    console.error(error);
  }
};
