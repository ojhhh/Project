// 세션이 없을 경우 home.html로 이동 (Submit, MyPage, Board내에서 로그아웃 할시 home으로 이동)
if (!sessionStorage.getItem("LOGIN") && !sessionStorage.getItem("ADMINLOGIN")) {
  location.href = "./home.html";
}

let sessionChk;
// 세션 스토리지에 ADMINLOGIN이 있으면 admin 정보로 입력 아니면 유저정보 입력
if (sessionStorage.getItem("ADMINLOGIN")) {
  sessionChk = JSON.parse(sessionStorage.getItem("ADMINLOGIN"));
} else {
  sessionChk = JSON.parse(sessionStorage.getItem("LOGIN"));
}

let users = JSON.parse(localStorage.getItem("USER"));
let myImgJson = JSON.parse(localStorage.getItem("MYIMG"));
let themesimg = JSON.parse(localStorage.getItem("THEMESIMG"));
let colorimg = JSON.parse(localStorage.getItem("COLORIMG"));

// 다른 html 파일 불러오기
// 헤더파일 하나로 다른 html 문서에 불러 들여 쓸 수 있게 해주는 스크립트
function includeHTML() {
  let z, elmnt, file, xhttp;

  z = document.getElementsByTagName("*");

  for (let i = 0; i < z.length; i++) {
    elmnt = z[i];
    file = elmnt.getAttribute("data-include");

    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
            searchlogin();
            navCollections();
            getStartName();
            seeAllbtn();
            CollectionImg();

            sessionLoginChk(sessionChk);
            myPageUserInfo(sessionChk);
            myPageEditProfile(sessionChk);
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("data-include");
          includeHTML();
        } //if
      }; //onreadystatechange

      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    } //if - file
  } //for
} //includeHTML

/* 실행 */
window.addEventListener("DOMContentLoaded", () => {
  includeHTML();
});

// search btn
// header 우상단 search & login btn
function searchlogin() {
  let categoryNames = [];
  let colorsName = [
    {
      name: "BLACK",
      group: "COLORS",
      cnt: 0,
    },
    {
      name: "BLUE",
      group: "COLORS",
      cnt: 1,
    },
    {
      name: "BROWN",
      group: "COLORS",
      cnt: 2,
    },
    {
      name: "GRAY",
      group: "COLORS",
      cnt: 3,
    },
    {
      name: "GREEN",
      group: "COLORS",
      cnt: 4,
    },
    {
      name: "ORANGE",
      group: "COLORS",
      cnt: 5,
    },
    {
      name: "PINK",
      group: "COLORS",
      cnt: 6,
    },
    {
      name: "PURPLE",
      group: "COLORS",
      cnt: 7,
    },
    {
      name: "RED",
      group: "COLORS",
      cnt: 8,
    },
    {
      name: "TURQUOISE",
      group: "COLORS",
      cnt: 9,
    },
    {
      name: "WHITE",
      group: "COLORS",
      cnt: 10,
    },
    {
      name: "YELLOW",
      group: "COLORS",
      cnt: 11,
    },
  ];
  let themesName = [
    {
      name: "CABLE CARS",
      group: "THEMES",
      cnt: 0,
    },
    {
      name: "CLASSIC FACADES",
      group: "THEMES",
      cnt: 1,
    },
    {
      name: "DOORS",
      group: "THEMES",
      cnt: 2,
    },
    {
      name: "EDUCATIONAL INSTITUTIONS",
      group: "THEMES",
      cnt: 3,
    },
    {
      name: "GOVERNMENT BUILDINGS",
      group: "THEMES",
      cnt: 4,
    },
    {
      name: "HIDDEN WONDESRS",
      group: "THEMES",
      cnt: 5,
    },
    {
      name: "HOTEL / MOTEL",
      group: "THEMES",
      cnt: 6,
    },
    {
      name: "INTERIORS",
      group: "THEMES",
      cnt: 7,
    },
    {
      name: "LIBRARY",
      group: "THEMES",
      cnt: 8,
    },
    {
      name: "LIGHTHOUSE",
      group: "THEMES",
      cnt: 9,
    },
    {
      name: "MUSEUM",
      group: "THEMES",
      cnt: 10,
    },
    {
      name: "NATURE",
      group: "THEMES",
      cnt: 11,
    },
  ];

  for (let i = 0; i < colorsName.length; i++) {
    let temp = colorsName[i].name;
    categoryNames.push(temp);
  }
  for (let i = 0; i < themesName.length; i++) {
    let temp = themesName[i].name;
    categoryNames.push(temp);
  }

  // function searchlogin() {
  // 검색 팝업 관련 변수
  let searchPopupBtn = document.querySelector("#dropdown-search-form");
  let searchPopup = document.querySelector("#search-popup");
  let popupCloseBtn = document.querySelector("#popup-close-btn");

  let search = document.querySelector(".keyword-input"); // 검색 input 창
  let searchSubmit = document.querySelector(".search-icon-btn"); // 돋보기 버튼
  let autocompleteWrap = document.querySelector(".autocomplete_wrap");
  let noImgSearched = document.querySelector(".no_img_searched");

  // 🔷 검색창 popup
  searchPopupBtn.addEventListener("click", function () {
    searchPopup.classList.add("is-active");
    if (noImgSearched.classList.contains("is-active")) {
      noImgSearched.classList.remove("is-active");
    }
  });
  popupCloseBtn.addEventListener("click", function () {
    searchPopup.classList.remove("is-active");
  });

  // 🔷 검색 함수
  search.addEventListener("keyup", function () {
    // Enter 누르면 submit 됨
    if (window.event.keyCode === 13) {
      window.event.preventDefault();
      searchSubmit.click();
    }

    // autocomplete 비우기
    autocompleteWrap.innerHTML = "";
    let searchInput = search.value.toUpperCase();

    // input 창에 입력한 문자로 시작하는 것만 배열로 담음
    let autocomplete = categoryNames.filter(function (e) {
      return e.startsWith(searchInput);
    });
    //   console.log(autocomplete);

    autocomplete.forEach(function (suggested) {
      let div = document.createElement("div");
      div.innerHTML = suggested;
      autocompleteWrap.appendChild(div);

      div.onclick = () => {
        searchInput = div.innerHTML;
        autocompleteWrap.innerHTML = "";
        //   console.log(searchInput);
        moveToCollist(searchInput);
      };
    });
    if (searchInput == "") {
      autocompleteWrap.innerHTML = "";
    }
  });

  // 돋보기 버튼 눌렀을 때
  searchSubmit.addEventListener("click", function () {
    let searchInput = search.value.toUpperCase();

    // 찾는 게 있을 경우 & 없을 경우
    let findCategory = [];
    for (let i = 0; i < categoryNames.length; i++) {
      if (categoryNames[i].startsWith(searchInput)) {
        //   console.log("검색 성공");
        findCategory.push(categoryNames[i]);
      }

      if (findCategory == "") {
        //   console.log("검색 실패");
        noImgSearched.classList.add("is-active");
        return;
      } else {
        noImgSearched.classList.remove("is-active");
        return;
      }
    }
    moveToCollist(findCategory[0]);
  });

  // 검색 값 받아서 collist로 이동
  function moveToCollist(input) {
    //   console.log(input);

    // input값 받아와서 로컬스토리지 생성
    for (let i = 0; i < colorsName.length; i++) {
      let temp = colorsName[i].name;
      if (input == temp) {
        localStorage.setItem("||", JSON.stringify(colorsName[i]));
      }
    }
    for (let i = 0; i < themesName.length; i++) {
      let temp = themesName[i].name;
      if (input == temp) {
        localStorage.setItem("||", JSON.stringify(themesName[i]));
      }
    }

    // collist로 이동
    location.href = "./collist.html";
  }

  //////////////////////////////////////////////////////////////////////

  // 로그인 팝업 관련 변수
  let topBanner = document.querySelector(".top_banner"); // 최상단 빨간 배너

  let loginPopupContent = document.querySelector(".login-popup-content");
  let idLoginBtn = document.querySelector("#id-login-btn");
  let logincloseBtn = document.querySelector("#login-close-btn");
  let signupcloseBtn = document.querySelector("#signup-close-btn");

  let loginPopup = document.querySelector(".login_popup"); // 로그인 창
  let signupPopup = document.querySelector(".signup_popup"); // 회원가입 창
  let moveToSignup = document.querySelector(".move_to_signup"); // 회원가입으로 이동
  let moveToLogin = document.querySelector(".move_to_login");

  // 로그인 popup
  idLoginBtn.addEventListener("click", function () {
    // 로그아웃 기능 추가
    if (sessionStorage.getItem("LOGIN") || sessionStorage.getItem("ADMINLOGIN")) {
      if (confirm("Do you want to logout?")) {
        sessionStorage.clear();
        location.reload();
        return;
      } else {
        return;
      }
    }
    loginPopupContent.classList.add("is-active");
    loginPopup.classList.add("is-active");
  });
  logincloseBtn.addEventListener("click", function () {
    loginPopupContent.classList.remove("is-active");
    loginPopup.classList.remove("is-active");
    signupPopup.classList.remove("is-active");
  });
  signupcloseBtn.addEventListener("click", function () {
    loginPopupContent.classList.remove("is-active");
    loginPopup.classList.remove("is-active");
    signupPopup.classList.remove("is-active");
  });

  moveToSignup.addEventListener("click", function () {
    if (!signupPopup.classList.contains("is-active")) {
      signupPopup.classList.add("is-active");
    }
    if (loginPopup.classList.contains("is-active")) {
      loginPopup.classList.remove("is-active");
    }
  });
  moveToLogin.addEventListener("click", function () {
    if (!loginPopup.classList.contains("is-active")) {
      loginPopup.classList.add("is-active");
    }
    if (signupPopup.classList.contains("is-active")) {
      signupPopup.classList.remove("is-active");
    }
  });
  topBanner.addEventListener("click", function () {
    loginPopupContent.classList.add("is-active");
    signupPopup.classList.add("is-active");
  });
}
// ❗❗❗❗❗❗❗❗❗❗ myPage 관련 js 시작 ❗❗❗❗❗❗❗❗❗❗ //

// 프로필 수정 팝업창 열고 닫는 버튼
let popupBtn = document.querySelector(".popup_btn");
// 수정 저장하는 버튼
let saveBtn = document.querySelector(".save_btn");
// saveBtn.addEventListener("click", addList);
// saveBtn.addEventListener("click", popupOpen);

// 회원 정보 수정
saveBtn.addEventListener("click", myPageUserUpdate);

// 팝업창 열고 닫기
function popupOpen() {
  let editPopup = document.querySelector(".edit_popup_wrap");
  if (editPopup.classList.contains("is-active")) {
    editPopup.classList.remove("is-active");
  } else {
    editPopup.classList.add("is-active");
  }
}

// Settings 팝업창 열고 닫는 버튼
let deleteBtn = document.querySelector(".delete_btn");
// saveBtn.addEventListener("click", addList);
// deleteBtn.addEventListener("click", popupOpen2);

// 회원 탈퇴 기능
deleteBtn.addEventListener("click", userDelete);

// 팝업창 열고 닫기
function popupOpen2() {
  let settingsPopup = document.querySelector(".settings_popup_wrap");
  if (settingsPopup.classList.contains("is-active")) {
    settingsPopup.classList.remove("is-active");
  } else {
    settingsPopup.classList.add("is-active");
  }
}

// Collections
// submit에서 사진 추가할 때마다 div 추가?

// 추가되는 곳
let _collections = document.querySelector(".profile_content_list");

function addCollections() {
  _collections.innerHTML = "";
  if (!localStorage.getItem("MYIMG")) {
    return;
  }
  //   console.log("사진 추가");

  // let myImgJson = localStorage.getItem("MYIMG"); // 올린 이미지 읽어오기
  // let myImg = JSON.parse(myImgJson);
  //   console.log(myImg);

  myImgJson.forEach(function (i, index) {
    if (sessionChk.name == i.name) {
      let div = document.createElement("div"); // 사진 들어갈 div
      let deleteImgBtn = document.createElement("div"); // 삭제 버튼

      div.classList.add("collection_img");
      deleteImgBtn.classList.add("delete_img_btn");
      deleteImgBtn.setAttribute("onclick", "imgdelete()");

      div.innerHTML = "<img src='" + myImgJson[index].img + "' alt='myImgJson" + [index] + "'>";
      deleteImgBtn.innerHTML = "X";
      div.append(deleteImgBtn);
      _collections.appendChild(div);

      // let deleteArr = [];
      // deleteImgBtn.addEventListener("click", function () {
      //   myImgJson.splice(index, 1);
      //   //   console.log(myImgJson);
      // });
    }
  });
}
addCollections();

let deleteImgBtn = document.querySelectorAll(".delete_img_btn"); // 삭제 버튼

// 이미지를 클릭하면 해당 인덱스의 번호를 가져와 삭제 함수 실행
function getImgIndex() {
  deleteImgBtn.forEach((delvalue, delindex) => {
    deleteImgBtn[delindex].onclick = function () {
      delindex;
      imgdelete(delindex);
    };
  });
}
getImgIndex();

// myPage 이미지 X 버튼 클릭시 사진 삭제
function imgdelete(delindex) {
  // console.log(myImgJson[delindex]);
  if (confirm("Are you sure you want to delete the picture?")) {
    themesimg.forEach((tmvalue) => {
      // console.log(myImgJson[delindex].title);
      // console.log(tmvalue[myImgJson[delindex].title]);
      if (tmvalue[myImgJson[delindex].title]) {
        tmvalue[myImgJson[delindex].title].forEach((x, y) => {
          if (x.name == myImgJson[delindex].name && x.img == myImgJson[delindex].img && x.description == myImgJson[delindex].description) {
            // console.log(x);
            // console.log(tmvalue[x.catagory][y]);
            myImgJson.splice(delindex, 1);
            tmvalue[x.catagory].splice(y, 1);

            localStorage.setItem("THEMESIMG", JSON.stringify(themesimg));
            localStorage.setItem("MYIMG", JSON.stringify(myImgJson));
            addCollections();
            return;
          }
        });
      }
    });

    colorimg.forEach((clvalue) => {
      if (clvalue[myImgJson[delindex].title]) {
        clvalue[myImgJson[delindex].title].forEach((x, y) => {
          if (x.name == myImgJson[delindex].name && x.img == myImgJson[delindex].img && x.description == myImgJson[delindex].description) {
            myImgJson.splice(delindex, 1);
            clvalue[x.catagory].splice(y, 1);

            localStorage.setItem("COLORIMG", JSON.stringify(colorimg));
            localStorage.setItem("MYIMG", JSON.stringify(myImgJson));
            addCollections();
            return;
          }
        });
      }
    });
  } else {
    return;
  }
}

// 회원 탈퇴시 내가 올린 이미지 삭제
function myimgdelete() {
  myImgJson.forEach((value, index) => {
    if (sessionChk.name == value.name) {
      // let themesimg = JSON.parse(localStorage.getItem("THEMESIMG"));
      themesimg.forEach((tvalue) => {
        // if (tvalue[value.title] == value.title) {
        //   console.log(tvalue);
        // }
        if (tvalue[value.title]) {
          tvalue[value.title].forEach((innerValue, innerIndex) => {
            if (innerValue.name == sessionChk.name) {
              // console.log(innerValue);
              // console.log(tvalue[value.title][innerIndex]);
              tvalue[value.title].splice(innerIndex, 1);
              myImgJson.splice(index, 1);
              // console.log(themesimg);
              // console.log(myImgJson);

              localStorage.setItem("THEMESIMG", JSON.stringify(themesimg));
              localStorage.setItem("MYIMG", JSON.stringify(myImgJson));
              addCollections();
            }
          });
        }
        // console.log(tvalue[value.title]);
      });

      // let colorimg = JSON.parse(localStorage.getItem("COLORIMG"));
      colorimg.forEach((tvalue) => {
        // if (tvalue[value.title] == value.title) {
        //   console.log(tvalue);
        // }
        if (tvalue[value.title]) {
          tvalue[value.title].forEach((innerValue, innerIndex) => {
            if (innerValue.nickname == sessionChk.nickname) {
              // console.log(innerValue);
              // console.log(tvalue[value.title][innerIndex]);
              tvalue[value.title].splice(innerIndex, 1);
              myImgJson.splice(index, 1);
              // console.log(colorimg);
              // console.log(myImgJson);

              localStorage.setItem("COLORIMG", JSON.stringify(colorimg));
              localStorage.setItem("MYIMG", JSON.stringify(myImgJson));
              addCollections();
            }
          });
        }
        // console.log(tvalue[value.title]);
      });
      // console.log(themeseimg.length);
    }
  });
}

// if (deleteImgBtn) {
//   deleteImgBtn.addEventListener("click", function () {
//     // console.log(myImgJson);
//     // console.log("push");

//     if (confirm("사진을 삭제 하시겠습니까?")) {
//       // alert("삭제");
//       myImgJson.forEach((value, index) => {
//         if (sessionChk.nickname == value.nickname) {
//           console.log(value.nickname, value.title);
//           let themesimg = JSON.parse(localStorage.getItem("THEMESIMG"));
//           themesimg.forEach((tvalue) => {
//             // if (tvalue[value.title] == value.title) {
//             //   console.log(tvalue);
//             // }
//             if (tvalue[value.title]) {
//               tvalue[value.title].forEach((innerValue, innerIndex) => {
//                 if (innerValue.nickname == sessionChk.nickname) {
//                   // console.log(innerValue);
//                   // console.log(tvalue[value.title][innerIndex]);
//                   tvalue[value.title].splice(innerIndex, 1);
//                   myImgJson.splice(index, 1);
//                   // console.log(themesimg);
//                   // console.log(myImgJson);

//                   localStorage.setItem("THEMESIMG", JSON.stringify(themesimg));
//                   localStorage.setItem("MYIMG", JSON.stringify(myImgJson));
//                   addCollections();
//                 }
//               });
//             }
//             // console.log(tvalue[value.title]);
//           });
//           let colorimg = JSON.parse(localStorage.getItem("COLORIMG"));

//           // console.log(themeseimg.length);
//         }
//       });
//     } else {
//       return;
//     }
//   });
// }

// 세션스토리지에 유저가 있으면 정보를 가져와 로그인 창을 그려줌
function sessionLoginChk(sessionChk) {
  let loginTag = document.querySelector("#id-login-btn");
  if (sessionChk) {
    loginTag.innerHTML = `<img src="https://accidentallywesanderson.com/wp-content/themes/awa/assets/images/icon-user-red.svg" alt=""> ${sessionChk.nickname}`;
  }
  return sessionChk;
}

// myPage nickname, name 출력
function myPageUserInfo(sessionChk) {
  let profilePanelHeader = document.querySelector(".profile_panel_header");
  let profilePanelHeaderH2 = profilePanelHeader.querySelector("h2");
  let profilePanelHeaderH4 = profilePanelHeader.querySelector("h4");

  profilePanelHeaderH2.innerHTML = sessionChk.nickname;
  profilePanelHeaderH4.innerHTML = sessionChk.name;
}

// myPage Edit Profile nickname, name 불러오기
function myPageEditProfile(sessionChk) {
  let editPopupBody = document.querySelector(".edit_popup_body");
  let editNickname = editPopupBody.querySelector("#edit_nickname");
  let editName = editPopupBody.querySelector("#edit_name");

  // editNickname 요소의 placeholder 속성을 sessionChk.nickname 값으로 설정
  editNickname.setAttribute("placeholder", sessionChk.nickname);
  // editName 요소의 placeholder 속성을 sessionChk.name 값으로 설정
  editName.setAttribute("placeholder", sessionChk.name);

  // console.log(editNickname.placeholder);
  return sessionChk;
}

// myPage Edit Profile ninkname, name 수정
function myPageUserUpdate() {
  let editPopupBody = document.querySelector(".edit_popup_body");
  let editNickname = editPopupBody.querySelector("#edit_nickname");
  let editName = editPopupBody.querySelector("#edit_name");

  // console.log(editNickname.placeholder);
  // console.log(editNickname.value);

  // Edit profile 에 아무것도 입력안했을때 기존의 회원 정보 유지
  if (!editNickname.value) {
    editNickname.value = editNickname.placeholder;
  }
  if (!editName.value) {
    editName.value = editName.placeholder;
  }
  if (editNickname.value && editName.value) {
    // console.log(editNickname.value);

    users.forEach((value) => {
      // console.log(value.name);
      if (value.nickname == sessionChk.nickname && value.name == sessionChk.name) {
        // console.log(editNickname.value);
        value.nickname = editNickname.value;
        value.name = editName.value;

        // console.log(value);
      }
    });

    // 객체의 속성을 수정
    sessionChk.nickname = editNickname.value;
    // sessionChk.name = editName.value;

    // sessionChk.nickname = editNickname.placeholder || sessionChk.nickname;
    // sessionChk.name = editName.placeholder || sessionChk.name;

    localStorage.setItem("USER", JSON.stringify(users));

    sessionStorage.setItem("LOGIN", JSON.stringify(sessionChk));

    alert("Member information modification completed");
    setTimeout(() => {
      sessionLoginChk(sessionChk);
      myPageUserInfo(sessionChk);
      location.reload();
    }, 100);
  }

  // if (editNickname.placeholder == editNickname.value) {
  //   alert("전의 닉네임과 동일합니다.");
  // } else if (editName.placeholder == editName.value) {
  //   alert("전의 이름과 동일합니다.");
  // }
}

// Delete your MW Account

function userDelete() {
  let check1 = document.querySelector("#check1");
  let check2 = document.querySelector("#check2");

  if (!check1.checked || !check2.checked) {
    alert("Please accept the terms and conditions.");
  } else {
    let imageDeleted;
    do {
      imageDeleted = false;

      users.forEach((value, index) => {
        if (value.name == sessionChk.name) {
          myImgJson.forEach((value, index) => {
            if (sessionChk.name == value.name) {
              themesimg.forEach((tvalue) => {
                if (tvalue[value.title]) {
                  tvalue[value.title].forEach((innerValue, innerIndex) => {
                    if (innerValue.name == sessionChk.name) {
                      tvalue[value.title].splice(innerIndex, 1);
                      myImgJson.splice(index, 1);

                      localStorage.setItem("THEMESIMG", JSON.stringify(themesimg));
                      localStorage.setItem("MYIMG", JSON.stringify(myImgJson));
                      addCollections();

                      imageDeleted = true;
                    }
                  });
                }
              });

              colorimg.forEach((tvalue) => {
                if (tvalue[value.title]) {
                  tvalue[value.title].forEach((innerValue, innerIndex) => {
                    if (innerValue.name == sessionChk.name) {
                      tvalue[value.title].splice(innerIndex, 1);
                      myImgJson.splice(index, 1);

                      localStorage.setItem("COLORIMG", JSON.stringify(colorimg));
                      localStorage.setItem("MYIMG", JSON.stringify(myImgJson));
                      addCollections();

                      imageDeleted = true;
                    }
                  });
                }
              });
            }
          });
        }
      });
    } while (imageDeleted);

    users.forEach((value, index) => {
      if (value.name == sessionChk.name) {
        users.splice(index, 1);
        localStorage.setItem("USER", JSON.stringify(users));
        alert("Thank you for using it.");
        setTimeout(() => {
          sessionStorage.clear();
          location.href = "./home.html";
        }, 100);
      }
    });
  }
}

// header collections 누르면 나오는 창
function navCollections() {
  let navCollectionsBtn = document.querySelector(".nav-collections-btn");
  let collectionsDropdown = document.querySelector(".collections-dropdown");
  navCollectionsBtn.addEventListener("click", function () {
    if (!collectionsDropdown.classList.contains("is-active")) {
      collectionsDropdown.classList.add("is-active");
    } else {
      collectionsDropdown.classList.remove("is-active");
    }
  });
}

function getStartName() {
  if (sessionStorage.getItem("LOGIN")) {
    let loginchk = JSON.parse(sessionStorage.getItem("LOGIN"));

    // 가져온거 변수에 저장
    let UserNickname = loginchk.nickname;

    // login 부분에 넣어주기
    let loginTag = document.querySelector("#id-login-btn");
    loginTag.innerHTML = `<img src="https://accidentallywesanderson.com/wp-content/themes/awa/assets/images/icon-user-red.svg" alt=""> ${UserNickname}`;
  } else if (sessionStorage.getItem("ADMINLOGIN")) {
    let adminSession = JSON.parse(sessionStorage.getItem("ADMINLOGIN"));

    let adminName = adminSession.name;

    let adminTag = document.querySelector("#id-login-btn");

    adminTag.innerHTML = `<img src="https://accidentallywesanderson.com/wp-content/themes/awa/assets/images/icon-user-red.svg" alt=""> ${adminName}`;
  }
}

// header Collections 누르면 나오는 Themes, Color Palettes 이미지 눌렀을때
function CollectionImg() {
  let collectionsContainer = document.querySelector(".collections-container");

  let collectionsItemTitle = collectionsContainer.querySelectorAll("a");

  collectionsItemTitle.forEach((v, i) => {
    collectionsItemTitle[i].addEventListener("click", function () {
      let getName = collectionsItemTitle[i].querySelector(".collections-item-title").innerHTML;

      // console.log(getName);

      let getGotothemes = JSON.parse(localStorage.getItem("gotothemes"));
      let getGotocolor = JSON.parse(localStorage.getItem("gotocolor"));

      getGotothemes.forEach((value) => {
        if (value.name == getName) {
          localStorage.setItem("||", JSON.stringify(value));
        }
      });

      getGotocolor.forEach((value) => {
        if (value.name == getName) {
          localStorage.setItem("||", JSON.stringify(value));
        }
      });
    });
  });
}
// Collections Themes, Color Palettes SEE ALL 눌렀을 경우
function seeAllbtn() {
  let seeAllBtn = document.querySelectorAll(".see-all-btn");

  // Themes SEE ALL
  seeAllBtn[0].addEventListener("click", function () {
    localStorage.setItem("seeAll", "themes");
  });

  // Color Palettes SEE ALL
  seeAllBtn[1].addEventListener("click", function () {
    localStorage.setItem("seeAll", "color");
  });
}
