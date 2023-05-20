const mysql = require("./config");
const jwt = require("jsonwebtoken");
const dot = require("dotenv").config();
const bcrypt = require("bcrypt");

// bcrypt를 활용한 password 암호화
const createHash = (user_pw) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(user_pw, 10, (err, data) => {
      if (err) reject(err);

      resolve(data);
    });
  });
};

// bcrypt로 저장된 password의 값을 가져와 비교
const compare = (user_pw, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(user_pw, hash, (err, same) => {
      if (err) reject(err);
      resolve(same);
    });
  });
};

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
        "create table board (id INT AUTO_INCREMENT PRIMARY KEY,user_id VARCHAR(20),title VARCHAR(30),content VARCHAR(200),category VARCHAR(20),date DATE DEFAULT(current_time),likes INT default 0, comment VARCHAR(100), src VARCHAR(200)); insert into board (user_id, title, content, category, comment, src) values ('test', '[Nodejs] project','Nodejs toy project','Nodejs', json_array('hello','world'), 'https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png'); insert into board (user_id, title, content, category, comment, src) values ('jsuser', '[Javascript] project','Javascript toy project','Javascript', json_array('Javascript'), 'https://www.vectorlogo.zone/logos/javascript/javascript-horizontal.svg'); insert into board (user_id, title, content, category, comment, src) values ('dba', '[Mysql] project','MySQL toy project','Mysql', json_array('mysql'), 'https://www.mysql.com/common/logos/logo-mysql-170x115.png');"
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
        "create table users (id INT AUTO_INCREMENT PRIMARY KEY, user_id VARCHAR(20),user_pw VARCHAR(128),token VARCHAR(200) FOREIGN KEY (user_id) REFERENCES board(user_id))"
      );
    }
  },
  // 회원가입
  signUp: async function (user_id, user_pw) {
    try {
      // bcrypt를 활용한 패스워드 암호화
      const hash = await createHash(user_pw);
      await mysql.query("insert into users (user_id, user_pw) values (?, ?)", [
        user_id,
        hash,
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
      const { user_id, title, category, content, src } = data;
      await mysql.query(
        "insert into board(user_id, title, category, content, src, comment) values (?, ?, ?, ?, ?, json_array())",
        [user_id, title, category, content, src]
      );
    } catch (error) {
      console.log("models upload error");
      console.error(error);
    }
  },
  // 게시글 수정
  update: async function (data, id) {
    try {
      const { user_id, title, category, content, src } = data;
      await mysql.query(
        "update board set user_id = ?, title = ?, category = ?, content = ?, src = ? where id = ?",
        [user_id, title, category, content, src, id]
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
  likes: async function (id, like) {
    try {
      await mysql.query("update board set likes = ? where id = ?", [like, id]);
    } catch (error) {
      console.log("model likes error");
      console.error(error);
    }
  },
  // 로그인 인증 (토큰 저장)
  login: async function (req, res) {
    const { user_id, user_pw } = req.body;
    try {
      const [data] = await mysql.query(
        "SELECT * FROM users WHERE user_id = ?",
        [user_id]
      );
      if (!user_id) {
        console.log("아이디를 입력해주세요.");
        return;
      } else if (!user_pw) {
        console.log("비밀번호를 입력해주세요.");
        return;
      }
      if (!data[0]?.user_id) {
        console.log("없는 아이디 입니다.");
        return;
      } else {
        const user_password = await compare(user_pw, data[0].user_pw);

        if (!data[0]?.user_id) {
          console.log("없는 사용자입니다.");
          return;
        } else if (!user_password) {
          console.log("비밀번호가 틀립니다.");
          return;
        } else if (data[0]?.user_id == user_id && user_password) {
          console.log("로그인 성공");
          const accessKey = process.env.ACCESS_TOKEN_KEY;
          const refreshKey = process.env.REFRESH_TOKEN_KEY;
          const accessToken = jwt.sign(
            {
              type: "JWT",
              name: data[0].user_id,
            },
            accessKey,
            {
              expiresIn: "10s",
              issuer: "admin",
            }
          );
          const refreshToken = jwt.sign(
            {
              type: "JWT",
              name: data[0].user_id,
            },
            refreshKey,
            {
              expiresIn: "1h",
            }
          );
          await mysql.query("update users SET refresh = ? where user_id = ?;", [
            refreshToken,
            user_id,
          ]);
          req.session.accessToken = accessToken;
          req.session.refreshToken = refreshToken;
        }

        res.redirect("/");
      }
    } catch (error) {
      console.log("model verify error");
      console.error(error);
    }
  },
  // 로그인 한 유저가 있는지 정보 가져오기
  logininfo: async function (req) {
    try {
      const [result] = await mysql.query(
        "select * from users where refresh IS NOT NULL"
      );
      const accessKey = req.session.accessToken;
      if (result[0]?.user_id) {
        jwt.verify(
          accessKey,
          process.env.ACCESS_TOKEN_KEY,
          async (err, decoded) => {
            if (err) {
              await mysql.query(
                "update users set refresh = NULL where user_id = ? ",
                [result[0].user_id]
              );
              // console.error(err);
            } else {
              console.log(decoded);
            }
          }
        );

        return result[0];
      }
    } catch (error) {
      console.log("model logininfo error");
      console.error(error);
    }
  },
  // 로그아웃
  logout: async function (user_id) {
    try {
      await mysql.query("update users set refresh = NULL where user_id = ?", [
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
