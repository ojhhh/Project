const mysql = require("./config");

const boardfunc = {
  // board table이 없으면 테이블 생성
  boardTableCheck: async function () {
    try {
      const [sql] = await mysql.query("select * from board");
      // console.log(sql);
    } catch (error) {
      console.log("models tableCheck error");
      console.error(error);
    }
  },
  // users 테이블이 없으면 테이블 생성
  usersTableCheck: async function () {
    try {
      const [sql] = await mysql.query("select * from users");
      // console.log(sql);
    } catch (error) {
      await mysql.query(
        "create table users (id INT AUTO_INCREMENT PRIMARY KEY, user_id VARCHAR(20),user_pw VARCHAR(20))"
      );
      // console.log("models usersCheck error");
      // console.error(error);
    }
  },
  // 회원가입
  signUp: async function (user_id, user_pw) {
    try {
      await mysql.query("insert into users (user_id, user_pw) values (?, ?)", [
        user_id,
        user_pw,
      ]);
    } catch (error) {
      console.log("models signUp error");
      console.error(error);
    }
  },
};

// board.tableCheck();
boardfunc.usersTableCheck();

module.exports = boardfunc;
