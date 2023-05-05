function signup() {
  let savedNickname = document.getElementById("nickname").value; //vaule 가져온다.
  let savedName = document.getElementById("name").value;
  let savedPassword = document.getElementById("signup_password").value;

  if (!savedNickname) {
    alert("Nickname is empty. Please fill in the blank.");
    return;
  } else if (!savedName) {
    alert("Name is empty. Please fill in the blank.");
    return;
  } else if (!savedPassword) {
    alert("Password is empty. Please fill in the blank.");
    return;
  }

  // create user list
  let userlist = {
    nickname: savedNickname,
    name: savedName,
    pw: savedPassword,
    lv: 0,
  };

  // localstroge에 USER가 없으면 if문 실행, 있으면 else문 실행
  if (!localStorage.getItem("USER")) {
    localStorage.setItem("USER", JSON.stringify([userlist]));
    alert("Member registration completed");
    location.reload();
  } else {
    let userList = JSON.parse(localStorage.getItem("USER"));
    let nicknames = userList.map((user) => user.nickname);
    let names = userList.map((user) => user.name);

    if (nicknames.includes(savedNickname)) {
      alert("Nickname already exists.");
      return;
    } else if (names.includes(savedName)) {
      alert("The name already exists.");
      return;
    }

    let userpush = JSON.parse(localStorage.getItem("USER"));
    userpush.push(userlist);
    localStorage.setItem("USER", JSON.stringify(userpush));
    location.href = "./home.html"; // signup 후 home으로
  }
}
