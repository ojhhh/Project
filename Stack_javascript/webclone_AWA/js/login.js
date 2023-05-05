// ADMIN 계정 로컬스토리지 생성
const adminAccount = {
  name: "maple",
  pw: "worrior",
  nickname: "admin",
  lv: 2,
};
localStorage.setItem("ADMIN", JSON.stringify(adminAccount));

// USER 계정 로컬스토리지 받아와서 로그인
let su = JSON.parse(localStorage.getItem("USER"));
let admin = JSON.parse(localStorage.getItem("ADMIN"));

function login() {
  // 입력한 아이디와 비밀번호를 가져옵니다.
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  // admin 로그인
  if (username === adminAccount.name) {
    if (password !== adminAccount.pw) {
      alert("Wrong password. Please try again.");
      return;
    } else {
      alert("Login successful");
      sessionStorage.setItem("ADMINLOGIN", JSON.stringify(adminAccount));
      location.reload(); // login 성공시 새로고침
      return;
    }
  }

  if (!username) {
    alert("Name is empty. Please fill in the blank.");
    return;
  } else if (!password) {
    alert("Password is empty. Please fill in the blank.");
    return;
  }

  // user 로그인
  // USER 이름을 가진 localstorage가 있는 경우 왼쪽 없는 경우 빈배열을 생성
  // USER 스토리지가 없는 경우를 대비
  let users = JSON.parse(localStorage.getItem("USER")) || [];

  // 입력한 아이디와 비밀번호를 검증합니다.
  let user = users.find((u) => u.name === username);
  console.log(user);

  if (!user) {
    alert("No account exists");
    return;
  }

  if (user.lv === 0) {
    alert("Waiting account acceptance...");
    return;
  }

  if (user.pw !== password) {
    alert("Wrong password. Please try again.");
    return;
  }

  alert("Login successful");
  let logininfo = {
    name: user.name,
    nickname: user.nickname,
  };
  sessionStorage.setItem("LOGIN", JSON.stringify(logininfo));
  location.reload(); // login 성공시 새로고침
}
