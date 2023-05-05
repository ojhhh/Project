const adminAccount = {
  name: "maple",
  pw: "worrior",
  nickname: "admin",
  lv: 2,
};

function adminLogin() {
  // 입력한 아이디와 비밀번호를 가져옵니다.
  const username = document.getElementById("adminID").value;
  const password = document.getElementById("adminPW").value;

  // console.log(username, password);

  // 아이디와 비밀번호를 검증합니다.
  if (username == adminAccount.name && password == adminAccount.pw) {
    alert("Login successful");
    sessionStorage.setItem("ADMINLOGIN", JSON.stringify(adminAccount));
    location.href = "./accept.html";
  } else {
    alert("Incorrect username or password");
  }
}
