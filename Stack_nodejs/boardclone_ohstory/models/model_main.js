const mysql = require("./config");
const jwt = require("jsonwebtoken");
const dot = require("dotenv").config();

const boardfunc = {
  // board table이 없으면 테이블 생성
  boardTableCheck: async function () {
    try {
      const [sql] = await mysql.query("select * from board");
      // console.log(sql);
    } catch (error) {
      console.log("models tableCheck error");
      console.error(error);
      await mysql.query(
        "create table board (id INT AUTO_INCREMENT PRIMARY KEY,user_name VARCHAR(20),title VARCHAR(30),content VARCHAR(200),category VARCHAR(20),date DATE DEFAULT(current_time),likes INT default 0,comment VARCHAR(100),src VARCHAR(200)); insert into board (user_name, title, content, category, comment, src) values ('test', '[Nodejs] project','Nodejs toy project','Nodejs', json_array('hello','world'), 'https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png' ); insert into board (user_name, title, content, category, comment, src) values ('jsuser', '[Javascript] project','Javascript toy project','Javascript', json_array('Javascript'), 'https://www.vectorlogo.zone/logos/javascript/javascript-horizontal.svg' ); insert into board (user_name, title, content, category, comment, src) values ('dba', '[Mysql] project','MySQL toy project','Mysql', json_array('mysql'), 'https://www.mysql.com/common/logos/logo-mysql-170x115.png' );"
      );
    }
  },
  // users 테이블이 없으면 테이블 생성
  usersTableCheck: async function () {
    try {
      const [sql] = await mysql.query("select * from users");
      // console.log(sql);
    } catch (error) {
      await mysql.query(
        "create table users (id INT AUTO_INCREMENT PRIMARY KEY, user_id VARCHAR(20),user_pw VARCHAR(20),token VARCHAR(200))"
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
  // 로그인
  userChk: async function (user_id) {
    try {
      const data = await mysql.query("select * from users where user_id = ?", [
        user_id,
      ]);
      return data;
    } catch (error) {
      console.log("model UserChk error");
      console.error(error);
    }
  },
  // 전체 메뉴 보기
  viewAll: async function () {
    try {
      const [result] = await mysql.query("select * from board");
      return result;
    } catch (error) {
      console.log("models viewAll error");
      console.error(error);
    }
  },
  // 상세 페이지 보기
  viewSelect: async function (id) {
    try {
      const [result] = await mysql.query("select * from board where id = ?", [
        id,
      ]);
      // console.log(id);
      // console.log("models viewSelect result : ", result);
      return result[0];
    } catch (error) {
      console.log("models viewSelect error");
      console.error(error);
    }
  },
  // 게시글 수정
  viewUpdate: async function (id) {
    try {
      const [result] = await mysql.query("select * from board where id = ?", [
        id,
      ]);
      return result[0];
    } catch (error) {
      console.log("model viewUpdate error");
      console.error(error);
    }
  },
  // 오른쪽 카테고리 눌렀을때 누른 목록만 보여주기
  viewCategory: async function (category) {
    try {
      const [result] = await mysql.query(
        "select * from board where category = ?",
        [category]
      );
      // console.log(result);
      return result;
    } catch (error) {
      console.log("models viewCategory error");
      console.error(error);
    }
  },
  // 게시글 입로드
  upload: async function (data) {
    try {
      const { user_name, title, category, content, src } = data;
      await mysql.query(
        "insert into board(user_name, title, category, content, src, comment) values (?, ?, ?, ?, ?, json_array())",
        [user_name, title, category, content, src]
      );
    } catch (error) {
      console.log("models upload error");
      console.error(error);
    }
  },
  // 게시글 수정
  update: async function (data, id) {
    try {
      const { user_name, title, category, content, src } = data;
      await mysql.query(
        "update board set user_name = ?, title = ?, category = ?, content = ?, src = ? where id = ?",
        [user_name, title, category, content, src, id]
      );
    } catch (error) {
      console.log("model update error");
      console.error(error);
    }
  },
  // 게시글 삭제
  delete: async function (id) {
    try {
      await mysql.query(
        "delete from board where id = ?;SET @CNT = 0; update board SET board.id = @CNT:=@CNT+1;alter table board AUTO_INCREMENT = 0;",
        [id]
      );
    } catch (error) {
      console.log("model delete error");
      console.error(error);
    }
  },
  // 댓글
  subComment: async function (id, comments) {
    try {
      await mysql.query("update board set comment = ? where id = ?", [
        comments,
        id,
      ]);
    } catch (error) {
      console.log("model subComment error");
      console.error(error);
    }
  },
  // 좋아요
  likes: async function (id, lik) {
    try {
      await mysql.query("update board set likes = ? where id = ?", [lik, id]);
    } catch (error) {
      console.log("model likes error");
      console.error(error);
    }
  },
  // 로그인 인증 (토큰 저장)
  addtoken: async function (user_id, token) {
    try {
      const data = await mysql.query(
        "update users set token = ? where user_id = ?; ",
        [token, user_id]
      );
      return data;
    } catch (error) {
      console.log("model verify error");
      console.error(error);
    }
  },
  // 로그인 한 유저가 있는지 정보 가져오기
  logininfo: async function () {
    try {
      const result = await mysql.query(
        "select * from users where token IS NOT NULL"
      );
      const { user_id, token } = result[0][0];
      const key = process.env.KEY2;

      jwt.verify(token, key, async (err, decoded) => {
        if (err) {
          await mysql.query(
            "update users set token = NULL where user_id = ? ",
            [user_id]
          );
          console.error(err);
        } else {
          console.log(decoded);
        }
      });

      return result[0];
    } catch (error) {
      console.log("model logininfo error");
      console.error(error);
    }
  },
  // 로그아웃
  logout: async function (user_id) {
    try {
      await mysql.query("update users set token = NULL where user_id = ?", [
        user_id,
      ]);
    } catch (error) {
      console.log("model logout error");
      console.error(error);
    }
  },
};

boardfunc.boardTableCheck();
boardfunc.usersTableCheck();

module.exports = boardfunc;
