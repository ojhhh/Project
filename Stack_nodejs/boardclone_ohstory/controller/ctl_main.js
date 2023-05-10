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

exports.LogIn = async function (user_id, user_pw) {
  try {
    const data = await boardfunc.Login(user_id, user_pw);
    return data[0];
  } catch (error) {
    console.log("controller LogIn error");
    console.error(error);
  }
};

exports.ViewAll = async function (req, res) {
  try {
    const data = await boardfunc.viewAll();
    return data;
  } catch (error) {
    console.log("controller ViewAll error");
    console.error(error);
  }
};

exports.ViewSelect = async function (id) {
  try {
    // console.log("controller ViewSelect id : ", id);
    const data = await boardfunc.viewSelect(id);
    return data;
  } catch (error) {
    console.log("controller ViewSelect error");
    console.error(error);
  }
};

exports.ViewUpdate = async function (id) {
  try {
    const data = await boardfunc.viewUpdate(id);
    return data;
  } catch (error) {
    console.log("controller ViewUpdate error");
    console.error(error);
  }
};

exports.ViewCategory = async function (category) {
  try {
    const data = await boardfunc.viewCategory(category);
    return data;
  } catch (error) {
    onsole.log("controller ViewCategory error");
    console.error(error);
  }
};

exports.Upload = async function (updata) {
  try {
    const data = await boardfunc.upload(updata);
    return data;
  } catch (error) {
    console.log("controller Upload error");
    console.error(error);
  }
};

exports.Update = async function (data, id) {
  try {
    await boardfunc.update(data, id);
  } catch (error) {
    console.log("controller Update error");
    console.error(error);
  }
};

exports.Delete = async function (id) {
  try {
    await boardfunc.delete(id);
  } catch (error) {
    console.log("controller Delete error");
    console.error(error);
  }
};

exports.SubComment = async function (id, comments) {
  try {
    await boardfunc.subComment(id, comments);
  } catch (error) {
    console.log("controller SubComment error");
    console.error(error);
  }
};

exports.Likes = async function (id, lik) {
  try {
    await boardfunc.likes(id, lik);
  } catch (error) {
    console.log("controller Likes error");
    console.error(error);
  }
};
