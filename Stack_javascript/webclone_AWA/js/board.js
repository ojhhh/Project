// 세션이 없을 경우 home.html로 이동 (Submit, MyPage, Board내에서 로그아웃 할시 home으로 이동)
if (!sessionStorage.getItem("LOGIN") && !sessionStorage.getItem("ADMINLOGIN")) {
  location.href = "./home.html";
}

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

            boardLogout();
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

// ❗❗❗❗❗❗❗❗❗❗ board 관련 js 시작 ❗❗❗❗❗❗❗❗❗❗ //
// 전역 변수

// board list 관련
let _json = '{"key" : "value"}';
let _board = document.querySelector(".board_body");
let _title = document.querySelector("#title").value;
let _detailsPrev = document.querySelector("#details").value;
let _details = _detailsPrev.replace(/(?:\r\n|\r|\n)/g, "<br>");

let userInfo = window.sessionStorage.getItem("LOGIN");
let adminInfo = window.sessionStorage.getItem("ADMINLOGIN");
let writerName = "";
if (userInfo && !adminInfo) {
  writerName = JSON.parse(userInfo).name;
} else if (!userInfo && adminInfo) {
  writerName = JSON.parse(adminInfo).name;
}
// console.log("작성자: ", writerName);
let userName = document.querySelector("#name1");
userName.innerHTML = writerName;

// pagination 관련
let paging = document.querySelector(".paging"); // 페이징 번호 보여주는 곳
let pagingPrev = document.querySelector(".paging_prev");
let pagingNext = document.querySelector(".paging_next");
let pageCount = 3; // 3개씩 보여주기
let currentPage = 1; // 현재 페이지

// 게시판 더미 데이터 설정
let dummyData = [
  {
    title: "안녕하세요",
    details: ".",
    nickname: "Damin",
    date: "2023-04-22",
  },
  {
    title: "저는",
    details: ".",
    nickname: "Damin",
    date: "2023-04-22",
  },
  {
    title: "지금",
    details: ".",
    nickname: "Damin",
    date: "2023-04-22",
  },
  {
    title: "더미 데이터",
    details: ".",
    nickname: "Damin",
    date: "2023-04-22",
  },
  {
    title: "만드는 중",
    details: ".",
    nickname: "Damin",
    date: "2023-04-22",
  },
  {
    title: "집에 있는데",
    details: ".",
    nickname: "Damin",
    date: "2023-04-23",
  },
  {
    title: "집에",
    details: ".",
    nickname: "Damin",
    date: "2023-04-23",
  },
  {
    title: "가고싶은건",
    details: ".",
    nickname: "Damin",
    date: "2023-04-23",
  },
  {
    title: "뭘까요",
    details: ".",
    nickname: "Damin",
    date: "2023-04-23",
  },
  {
    title: "...",
    details: ".",
    nickname: "Damin",
    date: "2023-04-23",
  },
  {
    title: "진짜",
    details: ".",
    nickname: "Damin",
    date: "2023-04-24",
  },
  {
    title: "집중",
    details: ".",
    nickname: "Damin",
    date: "2023-04-24",
  },
  {
    title: "하나도",
    details: ".",
    nickname: "Damin",
    date: "2023-04-24",
  },
  {
    title: "안된다",
    details: ".",
    nickname: "Damin",
    date: "2023-04-24",
  },
  {
    title: ":(",
    details: ".",
    nickname: "Damin",
    date: "2023-04-24",
  },
];

// 게시글 제출하는 팝업창 열고 닫기 (write 버튼)
let popupBtn = document.querySelector(".popup_btn");
function popupOpen() {
  let msgPopup = document.querySelector(".msg_popup_wrap");
  if (msgPopup.classList.contains("is-active")) {
    msgPopup.classList.remove("is-active");
  } else {
    msgPopup.classList.add("is-active");
  }
}

// 게시글 제출하기 (input 창이 비어있는지 체크)
let submitBtn = document.querySelector(".submit_btn");
submitBtn.addEventListener("click", submitCheck);
function submitCheck() {
  let _title = document.querySelector("#title").value;
  let _detailsPrev = document.querySelector("#details").value;
  let titleInput = document.querySelector("#title");
  let detailsInput = document.querySelector("#details");

  if (!_title == "") {
    if (titleInput.classList.contains("is-empty")) {
      titleInput.classList.remove("is-empty");
    }
  }
  if (!_detailsPrev == "") {
    if (detailsInput.classList.contains("is-empty")) {
      detailsInput.classList.remove("is-empty");
    }
  }

  if (_title == "") {
    alert("Please fiil out the Title.");
    titleInput.classList.add("is-empty");
  } else if (_detailsPrev == "") {
    alert("Please fiil out the Details.");
    detailsInput.classList.add("is-empty");
  } else {
    addList();
    popupOpen();

    // 게시글 팝업 안에 input 초기화
    let titleText = document.getElementsByClassName("titleText");
    let detailsText = document.getElementsByClassName("details");
    for (let i = 0; i < titleText.length; i++) {
      titleText[i].value = "";
      detailsText[i].value = "";
    }
  }
}

// 게시글 리스트 추가
function addList() {
  //   console.log("리스트 추가 시작");
  let _title = document.querySelector("#title").value;
  let _detailsPrev = document.querySelector("#details").value;
  let _details = _detailsPrev.replace(/(?:\r\n|\r|\n)/g, "<br>");

  // 로그인 되어있는 유저 or 관리자의 네임 가져오기
  let userInfo = window.sessionStorage.getItem("LOGIN");
  let adminInfo = window.sessionStorage.getItem("ADMINLOGIN");
  let writerName = "";
  if (userInfo && !adminInfo) {
    writerName = JSON.parse(userInfo).name;
  } else if (!userInfo && adminInfo) {
    writerName = JSON.parse(adminInfo).name;
  }
  //   console.log("작성자: ", writerName);

  // month 앞에 0 붙이기
  function getFormattedMonth(date) {
    const month = date.getMonth() + 1; // 월을 1부터 시작하도록 조정
    return month.toString().padStart(2, "0"); // 월 앞에 0을 붙여 두 자리 숫자로 만듭니다.
  }
  let time = new Date();
  let month = getFormattedMonth(time);
  let year = time.getFullYear();
  let date = time.getDate();

  let _date = String(`${year}-${month}-${date}`);
  //   console.log(_date);

  let value = window.localStorage.getItem("bulletin-board");
  //   console.log(value);

  if (!value) {
    // console.log("리스트 첫 추가");
    window.localStorage.setItem(
      "bulletin-board",
      `{"title" : "${_title}", "details" : "${_details}", "nickname" : "${writerName}", "date" : "${_date}", "answer" : ""}`
    );
  } else {
    // console.log("리스트 추가 추가");
    window.localStorage.setItem(
      "bulletin-board",
      value + "|" + `{"title" : "${_title}", "details" : "${_details}", "nickname" : "${writerName}", "date" : "${_date}", "answer" : ""}`
    );
  }
  //   console.log(window.localStorage.getItem("bulletin-board"));

  _board.innerHTML = "";

  // 만들어진 로컬스토리지를 배열로
  let _json = window.localStorage.getItem("bulletin-board");
  let _json2 = []; // 빈 배열 생성
  let _split = _json.split("|");
  _split.forEach(function (i, index) {
    _json2.push(JSON.parse(_split[index]));
  });
  //   console.log(_json2);

  render(_json2);
  location.reload();
}

// 렌더링
function render(_json2) {
  //   console.log(_json2);

  let _ul = document.createElement("ul");
  _ul.classList.add("board_list");
  let _li = document.createElement("li");

  let _div1 = document.createElement("div");
  let _div2 = document.createElement("div");
  let _div3 = document.createElement("div");
  let _div4 = document.createElement("div");

  _div1.innerHTML = "No";
  _div2.innerHTML = "Title";
  _div3.innerHTML = "Name";
  _div4.innerHTML = "Date";

  _div1.classList.add("list_top");
  _div2.classList.add("list_top");
  _div3.classList.add("list_top");
  _div4.classList.add("list_top");
  _div1.classList.add("list_no");
  _div2.classList.add("list_title");
  _div3.classList.add("list_name");
  _div4.classList.add("list_date");

  _li.append(_div1, _div2, _div3, _div4);
  _ul.append(_li);

  _json2.forEach(function (i, index) {
    // for (let i = 0; i < _json2.length; i++) {
    let _li = document.createElement("li");

    let _div1 = document.createElement("div");
    let _div2 = document.createElement("div");
    let _div3 = document.createElement("div");
    let _div4 = document.createElement("div");

    let indexNum = index;
    let writerName = _json2[index].nickname;
    _div1.innerHTML = indexNum + 1; // 리스트에 보여지는 번호
    _div2.innerHTML = _json2[index].title;
    _div3.innerHTML = writerName;
    _div4.innerHTML = _json2[index].date;

    _div1.classList.add("list_no");
    _div2.classList.add("list_title");
    _div3.classList.add("list_name");
    _div4.classList.add("list_date");

    _li.append(_div1, _div2, _div3, _div4);
    _ul.append(_li);

    _div2.addEventListener("click", function () {
      popupOpen2(indexNum, _json2, writerName); // title 누르면 게시글 팝업창 열림
    });
  });
  _board.append(_ul);
}

let value = window.localStorage.getItem("bulletin-board");

let dummyDataArr = [];
dummyData.forEach(function (i, index) {
  dummyDataArr.push(JSON.stringify(dummyData[index]));
});
let dummyDataArr2 = dummyDataArr.join("|");

window.onload = function () {
  // dummy list 넣으려고 만든 부분 ~

  if (!value) {
    window.localStorage.setItem("bulletin-board", dummyDataArr2);
  } else if (value) {
    window.localStorage.setItem("bulletin-board", value);
  }
  // ~ 나중에 빼도 됨

  let _json = window.localStorage.getItem("bulletin-board");
  let _json2 = []; // 빈 배열 생성
  let _split = _json.split("|");
  _split.forEach(function (i, index) {
    _json2.push(JSON.parse(_split[index]));
  });

  render(_json2);
  pagination(_json2, currentPage);
};

// 작성된 게시글 보여주는 팝업창 열고 닫기
let popupBtn2 = document.querySelector(".popup_btn2");
let deleteBtn = document.querySelector(".delete_btn");
function popupOpen2(indexNum, _json2, writerName) {
  //   console.log("선택된 게시글의 인덱스: " + indexNum);

  let msgPopup = document.querySelector(".content_popup_wrap");
  if (msgPopup.classList.contains("is-active")) {
    msgPopup.classList.remove("is-active");
  } else {
    msgPopup.classList.add("is-active");
    renderTD(indexNum, _json2, writerName);
    adminAnswer(indexNum, _json2, writerName);

    // deleteBtn.onclick = function () {
    //   //   console.log("삭제 버튼 눌림");
    //   if (confirm("Do you want to delete?")) {
    //     deleteList(indexNum, _json2, writerName);
    //   } else {
    //     return;
    //   }
    // };

    deleteBtn.addEventListener("click", function () {
      //   console.log("삭제 버튼 눌림");
      if (confirm("Do you want to delete?")) {
        deleteList(indexNum, _json2, writerName);
      } else {
        return;
      }
    });
  }
}

// 게시글 팝업에 로컬스토리지에 저장된 title, details 불러오기
function renderTD(indexNum, _json2, writerName) {
  console.log("선택된 게시글의 인덱스: " + indexNum);

  let inputIndex = document.querySelector(".input_index");
  let userName = document.querySelector("#name2");
  let inputTitle = document.querySelector(".input_title");
  let inputDetails = document.querySelector(".input_details");

  inputIndex.innerHTML = `No. ${indexNum + 1}`;
  userName.innerHTML = writerName;
  inputTitle.innerHTML = _json2[indexNum].title;
  inputDetails.innerHTML = _json2[indexNum].details;
}

// 게시판 리스트 삭제
function deleteList(indexNum, _json2, writerName) {
  //   console.log("리스트 삭제 시작");
  //   console.log(_json2[indexNum]);
  //   console.log("선택된 게시글의 인덱스: " + indexNum);

  let userInfo = window.sessionStorage.getItem("LOGIN");
  let adminInfo = window.sessionStorage.getItem("ADMINLOGIN");
  let userName = "";
  if (userInfo && !adminInfo) {
    userName = JSON.parse(userInfo).name;
  } else if (!userInfo && adminInfo) {
    userName = JSON.parse(adminInfo).name;
  }
  //   console.log(`게시글 작성자: ${writerName} | 로그인 된 사람: ${userName}`);

  if (writerName != userName) {
    alert("You have no right to delete.");
  } else if (writerName == userName) {
    let _json = window.localStorage.getItem("bulletin-board");
    let _jsonArr = [];
    let _jsonArr2 = [];
    let _split = _json.split("|");
    _split.forEach(function (i, index) {
      _jsonArr.push(JSON.parse(_split[index]));
    });
    // console.log(_jsonArr);

    // 두 객체의 title을 비교하여 같으면 삭제
    for (let i = 0; i < _jsonArr.length; i++) {
      if (_jsonArr[i].title == _json2[indexNum].title) {
        // console.log("삭제되는 리스트: " + JSON.stringify(_jsonArr[i]));
        _jsonArr2.splice(i, 1);
      } else {
        // console.log(_jsonArr[i]);
        // console.log(_json2[indexNum]);
        // console.log("남아있는 리스트: " + JSON.stringify(_jsonArr[i]));
        _jsonArr2.push(JSON.stringify(_jsonArr[i]));
      }
    }
    _jsonArr = _jsonArr2.join("|");
    // console.log(_jsonArr);

    if (_jsonArr == "") {
      window.localStorage.removeItem("bulletin-board");
      window.localStorage.getItem("bulletin-board");
      let _board = document.querySelector(".board_body");
      _board.innerHTML = "";
    } else {
      window.localStorage.setItem("bulletin-board", _jsonArr);
      window.localStorage.getItem("bulletin-board");
      let _board = document.querySelector(".board_body");
      _board.innerHTML = "";
    }

    let _json3 = window.localStorage.getItem("bulletin-board");
    let _json4 = []; // 빈 배열 생성
    let _split2 = _json3.split("|");
    _split2.forEach(function (i, index) {
      _json4.push(JSON.parse(_split2[index]));
    });
    //console.log(_json4);

    let msgPopup = document.querySelector(".content_popup_wrap");
    msgPopup.classList.remove("is-active");

    render(_json4);
    location.reload();
  }
}

// Admin 답글
function adminAnswer(indexNum, _json2) {
  //   console.log(_json2[indexNum]);

  //input 초기화
  let inputAnswerAdminText = document.getElementsByClassName("input_answer_admin");
  //   console.log(inputAnswerAdminText);
  for (let i = 0; i < inputAnswerAdminText.length; i++) {
    // console.log("초기화");
    inputAnswerAdminText[i].value = "";
  }

  let userView = document.querySelector(".user_view");
  let adminView = document.querySelector(".admin_view");

  let userInfo = window.sessionStorage.getItem("LOGIN");
  let adminInfo = window.sessionStorage.getItem("ADMINLOGIN");

  // 유저가 로그인 한 상태 -> 게시글을 눌렀을 때 admin의 답글과 delete 버튼이 보임
  if (userInfo && !adminInfo) {
    // console.log("유저 로그인ing");

    let inputAnswerUser = document.querySelector(".input_answer_user");
    inputAnswerUser.innerHTML = _json2[indexNum].answer;

    if (!userView.classList.contains("is-active")) {
      userView.classList.add("is-active");
    }
    if (adminView.classList.contains("is-active")) {
      adminView.classList.remove("is-active");
    }
  }
  // Admin이 로그인 한 상태 -> 게시글을 눌렀을 때 답글을 달 수 있는 input창과 save 버튼이 보임
  else if (!userInfo && adminInfo) {
    // console.log("관리자 로그인ing");

    if (userView.classList.contains("is-active")) {
      userView.classList.remove("is-active");
    }
    if (!adminView.classList.contains("is-active")) {
      adminView.classList.add("is-active");
    }
    // console.log(indexNum);
    let saveBtn = document.querySelector(".save_btn");
    saveBtn.onclick = function () {
      saveAnswer(indexNum, _json2);
    };
  }
}
function saveAnswer(indexNum, _json2) {
  //   console.log(indexNum);
  //   console.log("saveBtn 눌림");
  //   console.log(_json2[indexNum]);
  let inputAnswerAdmin = document.querySelector(".input_answer_admin").value;
  console.log("저장된 answer: ", inputAnswerAdmin);
  if (!inputAnswerAdmin) {
    alert("Admin Answer is empty. Please fill in the blank");
  } else if (inputAnswerAdmin) {
    _json2[indexNum].answer = inputAnswerAdmin;
    // console.log(_json2);
    let _jsonArr = [];
    _json2.forEach(function (i, index) {
      _jsonArr.push(JSON.stringify(_json2[index]));
    });
    let _jsonArr2 = _jsonArr.join("|");
    // console.log(_jsonArr2);
    window.localStorage.setItem("bulletin-board", dummyDataArr2 + "|" + _jsonArr2);
    alert("Admin Answer is saved.");
  }
  indexNum = 0;
  return indexNum;
}

// 게시판 Search
let searchSubmit = document.querySelector(".search_submit");
searchSubmit.addEventListener("click", function () {
  let searchInput = document.querySelector(".search_field").value;
  console.log("찾고 싶은 제목 or 이름: " + searchInput);

  let _json = window.localStorage.getItem("bulletin-board");
  let _json2 = [];
  let _split = _json.split("|");
  _split.forEach(function (i, index) {
    _json2.push(JSON.parse(_split[index]));
  });
  //   console.log(_json2);

  let noSearched = document.querySelector(".no_searched");

  let _json3 = [];
  for (let i = 0; i < _json2.length; i++) {
    let findTitle = _json2[i].title;
    let findName = _json2[i].nickname;

    // 찾는 것이 있으면 _json3 배열에 저장
    if (findTitle.includes(searchInput) || findName.includes(searchInput)) {
      //console.log("찾았다", _json2[i]);
      _json3.push(_json2[i]);
    } else {
      //console.log("못찾았다", _json2[i]);
    }

    // 찾는 것이 없으면 NO SEARCHED 뜨게
    if (_json3 == "") {
      noSearched.classList.add("is-active");
    } else {
      noSearched.classList.remove("is-active");
    }
  }
  _board.innerHTML = ""; // 게시판 초기화
  paging.innerHTML = ""; // 페이징 번호 초기화
  pagingPrev.innerHTML = "";
  pagingNext.innerHTML = "";
  render(_json3);
  pagination(_json3, currentPage);
});

// Pagination
function pagination(_json2, currentPage) {
  let _json = [];

  let totalList = _json2.length; // 총 게시글 수 32
  //   console.log("게시글 수: ", totalList);

  let totalPage = Math.ceil(totalList / 5); // 총 페이지 수 7
  //   console.log("총 페이지 수: ", totalPage); // 한 페이지에 5개씩
  if (totalPage < pageCount) {
    pageCount = totalPage;
  }

  let pageGroup = Math.ceil(currentPage / pageCount);
  //console.log("pageGroup: ", pageGroup);

  let lastNum = pageGroup * pageCount; // 보여지는 마지막 번호
  if (lastNum > totalPage) {
    lastNum = totalPage;
  }
  let firstNum = lastNum - (pageCount - 1); // 화면에 보여질 첫번째 페이지 번호
  //console.log("firstNum: ", firstNum);
  //console.log("lastNum: ", lastNum);

  let next = lastNum + 1;
  let prev = firstNum - 1;

  if (lastNum < totalPage) {
    pagingNext.innerHTML += "<div id='prev'>▶</div>";
  }
  if (prev > 0) {
    pagingPrev.innerHTML += "<div id='prev'>◀</div>";
  }

  for (let i = firstNum; i <= lastNum; i++) {
    paging.innerHTML += "<div class='paging_btn' id='" + i + "'>" + i + "</div>";
  }

  let pagingBtn = document.querySelectorAll(".paging div");
  for (let i = 0; i < pagingBtn.length; i++) {
    pagingBtn[i].addEventListener("click", function () {
      let _id = pagingBtn[i].id;
      console.log("페이지 번호: ", _id);
      let currentPageWrap = document.querySelector(".current_page");
      currentPageWrap.innerHTML = `Page: ${_id}`;

      _json = _json2.slice(5 * (_id - 1), 5 * _id);

      _board.innerHTML = ""; // 게시판 초기화
      render(_json);
    });
  }

  pagingNext.addEventListener("click", function () {
    // console.log("nextBtn");
    selectedPage = next;
    currentPage = selectedPage;
    paging.innerHTML = "";
    pagingPrev.innerHTML = "";
    pagingNext.innerHTML = "";
    pagination(_json2, currentPage);
  });
  pagingPrev.addEventListener("click", function () {
    // console.log("prevBtn");
    selectedPage = prev;
    currentPage = selectedPage;
    paging.innerHTML = "";
    pagingPrev.innerHTML = "";
    pagingNext.innerHTML = "";
    pagination(_json2, currentPage);
  });
}

///////////////////////////////////////////////////////////////////

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

      //   console.log(getName);

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

// 검색 값 받아서 collist로 이동
function moveToCollist(input) {
  console.log(input);

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

// 로그인 팝업 기능이지만 로그아웃 하기 위해 사용
function boardLogout() {
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
    //////////////////////////////////////////////////////////////
    if (sessionStorage.getItem("LOGIN") || sessionStorage.getItem("ADMINLOGIN")) {
      if (confirm("Do you want to logout?")) {
        sessionStorage.clear();
        // console.log(lp);
        if (location.pathname == "/myPage.html" || location.pathname == "/submit.html" || location.pathname == "/board.html") {
          location.href = "./home.html";
          return;
        }
      } else {
        return;
      }
    }
    //////////////////////////////////////////////////////////////
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
  //   topBanner.addEventListener("click", function () {
  //     loginPopupContent.classList.add("is-active");
  //     signupPopup.classList.add("is-active");
  //   });
}
