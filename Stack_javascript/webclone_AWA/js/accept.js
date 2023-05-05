// sessionstorage에 admin 게정이 없을 경우 접근 제한
if (!sessionStorage.getItem("ADMINLOGIN")) {
  alert("잘못된 접근입니다.");
  setTimeout(() => {
    location.href = "./home.html";
  }, 100);
}

// accept 페이지에서 다른 페이지로 벗어날때
window.addEventListener("unload", function () {
  sessionStorage.removeItem("ADMINLOGIN");
});

// 로컬 스토리지에서 "USER" 키의 값을 가져와 저장합니다.
const savedNickname = localStorage.getItem("USER");

// 가져온 값을 콘솔에 출력합니다.
// console.log(savedNickname);

// JSON 형식으로 가져온 값을 파싱하여 다시 출력합니다.
// console.log(JSON.parse(savedNickname));

// JSON 형식으로 가져온 값을 변수 userarr에 저장합니다.
let userarr = JSON.parse(savedNickname);

// 버튼 변수를 선언합니다.
let button;
let button2;

// HTML 문서에서 .userlist 클래스를 가진 요소를 선택하여 변수에 저장합니다.
let userlist = document.querySelector(".userlist");

// 그리는 함수
function test(e, i) {
  // div 요소를 생성합니다.
  let div = document.createElement("div");

  // div 요소에 .center 클래스를 추가합니다.
  div.classList.add("center");

  // dl 요소를 생성합니다.
  let dl = document.createElement("dl");

  // dt, dd 요소를 생성합니다.
  let dt = document.createElement("dt");
  let ddName = document.createElement("dd");
  let ddPw = document.createElement("dd");
  let ddLevel = document.createElement("dd");

  // dt, dd 요소에 텍스트 내용을 추가합니다.
  dt.textContent = "Nickname : " + e.nickname;
  ddName.textContent = "Name : " + e.name;
  ddPw.textContent = "Password : " + e.pw;
  ddLevel.textContent = "lv : " + e.lv;

  // dt, dd 요소를 dl 요소에 추가합니다.
  dl.append(dt, ddName, ddPw, ddLevel);

  // dl 요소를 div 요소에 추가합니다.
  div.append(dl);

  // div 요소를 userlist 요소에 추가합니다.
  userlist.append(div);

  // Accept 버튼 요소를 생성합니다.
  let button = document.createElement("button");
  button.classList.add("accept");
  button.textContent = "Accept";

  // Accept 버튼을 div 요소에 추가합니다.
  div.append(button);

  // Reject 버튼 요소를 생성합니다.
  let button2 = document.createElement("button");
  button2.classList.add("reject");
  button2.textContent = "Reject";

  // Reject 버튼을 div 요소에 추가합니다.
  div.append(button2);

  // Accept 버튼에 클릭 이벤트를 추가합니다.
  button.addEventListener("click", function () {
    // e 객체의 lv 속성 값을 1로 변경합니다.
    e.lv = 1;
    // 변경된 값을 로컬 스토리지에 다시 저장합니다.
    localStorage.setItem("USER", JSON.stringify(userarr));
    // level 요소의 텍스트 내용을 변경된 값으로 갱신합니다.
    ddLevel.textContent = "lv : " + e.lv;
  });

  // Reject 버튼에 클릭 이벤트를 추가합니다.
  button2.addEventListener("click", function () {
    // userarr 배열에서 i번째 인덱스의 요소를 삭제합니다.
    userarr.splice(i, 1);
    // 변경된 배열을 로컬 스토리지에 다시 저장합니다.
    localStorage.setItem("USER", JSON.stringify(userarr));
    // div 요소를 삭제합니다.
    div.remove();
  });
}

// userarr 배열의 각 요소마다 test 함수를실행
userarr.forEach(function (e, i) {
  test(e, i);
});

userarr.forEach(function (e, i) {
  // 중복 확인
  if (checkDuplicate(savedNickname, savedName)) {
    alert("이미 등록된 회원입니다.");
    return;
  }
  test(e, i);
});

// function test(e) {
//     let div = document.createElement("div");
//     div.classList.add("center");
//     let h2 = document.createElement("h2");
//     let h3 = document.createElement("h3");
//     let h4 = document.createElement("h4");
//     let level = document.createElement("h5");
//     level.textContent = "lv : " + e.lv;
//     h2.textContent = "Nickname : " + e.nickname;
//     h3.textContent = "Name :" +e.name;
//     h4.textContent = "Password : "+ e.pw;
//     div.append(h2,h3,h4,level);
//     userlist.append(div);

//     button = document.createElement("button");
//     button.classList.add("accept");

//     button.textContent = "Accept"

//     button2 = document.createElement("button");
//     button2.classList.add("reject");

//     button2.textContent = "reject"

//     div.append(button,button2);
// }

// userarr.forEach(function(e, i){
//     test(e);

//     button.addEventListener('click', function() {
//         let ac = document.querySelector(".accept")
//         console.log(ac.className);
//         if(ac.className=='accept'){
//             e.lv = 1;
//             localStorage.setItem("USER",JSON.stringify(userarr));
//             userlist.replaceChildren();
//             userarr.forEach((val) => {
//                 test(val);
//             });
//             location.reload();
//         }
//       });
//     //-------------------
//      //-------------------
//     button2.addEventListener('click', function() {
//         let ad = document.querySelector(".reject")

//         if(ad.className=='reject'){
//             userarr.splice(i,1);
//             localStorage.setItem("USER",JSON.stringify(userarr));
//             userlist.replaceChildren();

//             userarr.forEach((val) => {
//                 test(val);
//             });
//             location.reload();

//         }
//       });
// })

// const pot = document.querySelector(`.0-accept`)
// const pot1 = document.querySelector('.1-accept')
// const pot2 = document.querySelector(`.2-accept`)
// const pot3 = document.querySelector(`.3-accept`)

// pot.addEventListener('click', function() {
//     console.log('Button clicked!');
//   });

// document.getElementById("nickname").textContent = savedNickname;
// document.getElementById("name").textContent = savedName;
// document.getElementById("password").textContent = savedPassword;

// const acceptButton = document.getElementById("accept");
// const rejectButton = document.getElementById("reject");

// acceptButton.addEventListener("click", function() {
//     console.log("User accepted");
// });

// rejectButton.addEventListener("click", function() {
//     console.log("User rejected");
// });

// acceptButton.addEventListener("click", accept);
// rejectButton.addEventListener("click", reject);
