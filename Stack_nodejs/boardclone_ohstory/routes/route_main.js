const router = require("express").Router();
const jwt = require("jsonwebtoken");
const dot = require("dotenv").config();

const {
  SignUp,
  UserChk,
  ViewAll,
  ViewSelect,
  ViewUpdate,
  ViewCategory,
  Upload,
  Update,
  Delete,
  SubComment,
  Likes,
  Login,
  LoginInfo,
  LogOut,
} = require("../controller/ctl_main");
/////////////////////////////////////////////////////
// get

// 메인 페이지
router.get("/", async (req, res) => {
  console.log(req.session);
  try {
    let loginchk = await LoginInfo(req);
    if (loginchk === undefined) {
      loginchk = "undefined";
    }
    const data = await ViewAll(req, res);
    res.render("main", { data, loginchk });
  } catch (error) {
    console.log("route get / error");
    console.error(error);
  }
});

// 우측 카테고리 버튼
router.get("/category/:category", async (req, res) => {
  try {
    let loginchk = await LoginInfo();
    if (loginchk === undefined) {
      loginchk = "undefined";
    }
    const category = req.params.category;
    const data = await ViewCategory(category);
    res.render("main", { data, loginchk });
  } catch (error) {
    console.log("route get ViewCategory error");
    console.error(error);
  }
});

// 로그인 페이지
router.get("/login", async (req, res) => {
  try {
    let loginchk = await LoginInfo(req);
    if (loginchk === undefined) {
      loginchk = "undefined";
    }
    res.render("login", { loginchk });
  } catch (error) {
    console.log("route get login error");
    console.error(error);
  }
});

// 회원가입 페이지
router.get("/signup", async (req, res) => {
  try {
    let loginchk = await LoginInfo();
    if (loginchk === undefined) {
      loginchk = "undefined";
    }
    res.render("signup", { loginchk });
  } catch (error) {
    console.log("route get signup error");
    console.error(error);
  }
});

// 글 작성 페이지
router.get("/ins", async (req, res) => {
  try {
    let loginchk = await LoginInfo();
    if (loginchk === undefined) {
      loginchk = "undefined";
    }
    res.render("ins", { loginchk });
  } catch (error) {
    console.log("router get ins error");
    console.error(error);
  }
});

// 상세 페이지
router.get("/view/:id", async (req, res) => {
  try {
    let loginchk = await LoginInfo();
    if (loginchk === undefined) {
      loginchk = "undefined";
    }
    const { id } = req.params;
    const data = await ViewSelect(id);

    const arr = JSON.parse(data.comment);
    if (arr == null) {
      arr = [];
    }
    res.render("view", { data, arr, loginchk });
  } catch (error) {
    console.log("router get /view:id error");
    console.error(error);
  }
});

// 게시글 수정
router.get("/update/:id", async (req, res) => {
  try {
    let loginchk = await LoginInfo();
    if (loginchk === undefined) {
      loginchk = "undefined";
    }
    const id = req.params.id;
    const data = await ViewUpdate(id);
    res.render("update", { data, loginchk });
  } catch (error) {
    console.log("router get update error");
    console.error(error);
  }
});

// 게시글 삭제
router.get("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Delete(id);
    res.redirect("/ohstory");
  } catch (error) {
    console.log("router post delete error");
    console.error(error);
  }
});

// 좋아요
router.get("/likes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await ViewSelect(id);
    const lik = data.likes + 1;
    await Likes(id, lik);
    res.redirect("/ohstory/view/" + id);
  } catch (error) {
    console.log("router post likes error");
    console.error(error);
  }
});

// 로그아웃
router.get("/logout/:user_id", async (req, res) => {
  try {
    const userId = req.params.user_id;
    await LogOut(userId);
    res.redirect("/");
  } catch (error) {
    console.log("router get logout error");
    console.error(error);
  }
});

/////////////////////////////////////////////////////
// post

// 회원가입
router.post("/signup", async (req, res) => {
  try {
    const { user_id, user_pw, user_pw2_chk } = req.body;
    if (!user_id) {
      console.log("아이디를 입력해주세요");
      return;
    } else if (!user_pw || !user_pw2_chk) {
      console.log("비밀번호를 입력해주세요.");
      return;
    } else if (user_pw != user_pw2_chk) {
      console.log("비밀번호가 다릅니다.");
      return;
    }

    const user_Chk = await UserChk(user_id);
    // console.log(user_Chk[0] === undefined);
    if (user_Chk[0] !== undefined) {
      console.log("사용중인 아이디 입니다.");
      return;
    } else {
      // bcrypt를 활용한 password 암호화
      await SignUp(user_id, user_pw);
      console.log("회원가입 완료");
      res.redirect("login");
    }
  } catch (error) {
    console.log("router post signup error");
    console.error(error);
  }
});

// 로그인
router.post("/login", Login);
// router.post("/login", async (req, res) => {
//   try {
//     const { user_id, user_pw } = req.body;
//     const data = await UserChk(user_id);

//     if (!user_id) {
//       console.log("아이디를 입력해주세요.");
//       return;
//     } else if (!user_pw) {
//       console.log("비밀번호를 입력해주세요.");
//       return;
//     } else if (!data[0]) {
//       console.log("없는 사용자입니다.");
//       return;
//     } else if (data[0].user_pw != user_pw) {
//       console.log("비밀번호가 틀립니다.");
//       return;
//     } else if (data[0].user_id == user_id && data[0].user_pw == user_pw) {
//       console.log("로그인 성공");
//       const key = process.env.KEY2;
//       const token = jwt.sign(
//         {
//           type: "JWT",
//           name: "tester",
//         },
//         key,
//         {
//           expiresIn: "10s",
//           issuer: "admin",
//         }
//       );
//       await AddToken(user_id, token);
//       res.redirect("/");
//     }
//   } catch (error) {
//     console.log("router login error");
//     console.error(error);
//   }
// });

// 글 업로드
router.post("/upload", async (req, res) => {
  try {
    const data = req.body;
    if (data.category === "Nodejs") {
      Object.assign(data, {
        src: "https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png",
      });
    }
    if (data.category === "Javascript") {
      Object.assign(data, {
        src: "https://www.vectorlogo.zone/logos/javascript/javascript-horizontal.svg",
      });
    }
    if (data.category === "Mysql") {
      Object.assign(data, {
        src: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
      });
    }
    await Upload(data);
    res.redirect("/");
  } catch (error) {
    console.log("router post upload error");
    console.error(error);
  }
});

// 글 수정
router.post("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    if (data.category === "Nodejs") {
      Object.assign(data, {
        src: "https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png",
      });
    }
    if (data.category === "Javascript") {
      Object.assign(data, {
        src: "https://www.vectorlogo.zone/logos/javascript/javascript-horizontal.svg",
      });
    }
    if (data.category === "Mysql") {
      Object.assign(data, {
        src: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
      });
    }
    await Update(data, id);
    res.redirect("/ohstory");
  } catch (error) {
    console.log("router post update error");
    console.error(error);
  }
});

// 댓글 추가
router.post("/comment/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { comment } = req.body;

    const viewquery = await ViewSelect(id);
    const comments = JSON.parse(viewquery.comment);
    comments.push(comment);
    await SubComment(id, JSON.stringify(comments));
    res.redirect("/ohstory/view/" + id);
  } catch (error) {
    console.log("router post comment error");
    console.error(error);
  }
});

module.exports = router;
