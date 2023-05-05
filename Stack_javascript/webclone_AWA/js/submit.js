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
if (sessionChk) {
  // console.log(sessionChk.nickname);
  let submitName = document.querySelector("#submitName");
  submitName.setAttribute("placeholder", sessionChk.name);
  console.log(submitName);
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
// 자동완성 데이터 설정
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

// 파일 업로드
const fileupload = document.querySelector("#upload");
const preview = document.querySelector(".imgupload");
let lb = document.querySelector("label");

let pvimg = document.querySelector("#pv");
let reader = new FileReader();
let res;
let filename;

// 파일을 업로드 후 미리보기
fileupload.addEventListener("click", function () {
  // 파일을 업로드 했을때 변화를 감지하여 실행
  fileupload.onchange = function (e) {
    filename = e.target.files[0];
    profile(filename);
    lb.style.display = "none";
  };
});

// 업로드한 파일을 base64 형태로 변환
function profile(value) {
  reader.onload = function () {
    // base64로 변환하여 저장
    res = reader.result;
    // 변환한 값을 src에 할당
    document.getElementById("pv").setAttribute("src", res);
    pv.style.display = "block";
  };
  reader.readAsDataURL(value);
}

// 이미지가 올라갔을때 이미지를 클릭하면 이미지 및 올라간 파일의 정보가 삭제됨
pvimg.addEventListener("click", function () {
  if (!document.getElementById("pv").getAttribute("src")) {
    return;
  }
  document.getElementById("pv").removeAttribute("src");
  document.getElementById("pv").removeAttribute("onerror");
  // document.getElementById("pv").style.display = "none";
  document.getElementById("pv").style.display = "none";

  // document.getElementById("pv").setAttribute("onerror", "style.display='none'");
  lb.style.display = "flex";
  res = "";
  filename = "";
  fileupload.value = "";
});

function createimgupload(nickname, country, city, title, description, img) {
  this.nickname = nickname;
  this.country = country;
  this.city = city;
  this.title = title;
  this.description = description;
  this.img = img;
}

let selectchk = document.querySelector("select");
let selectres;
// console.log(ta);
selectchk.addEventListener("change", function () {
  selectres = selectchk.options[selectchk.selectedIndex].value;
});

// localstorage 등록 시 title을 sub와 연결 시키기 위한 객체 생성
const themesinfo = [
  {
    name: "CABLE CARS",
    sub: "cablecars",
    group: "THEMES",
    cnt: 0,
  },
  {
    name: "CLASSIC FACADES",
    sub: "classics",
    group: "THEMES",
    cnt: 1,
  },
  {
    name: "DOORS",
    sub: "doors",
    group: "THEMES",
    cnt: 2,
  },
  {
    name: "EDUCATIONAL INSTITUTIONS",
    sub: "edus",
    group: "THEMES",
    cnt: 3,
  },
  {
    name: "GOVERNMENT BUILDINGS",
    sub: "goves",
    group: "THEMES",
    cnt: 4,
  },
  {
    name: "HIDDEN WONDESRS",
    sub: "hiddens",
    group: "THEMES",
    cnt: 5,
  },
  {
    name: "HOTEL / MOTEL",
    sub: "hms",
    group: "THEMES",
    cnt: 6,
  },
  {
    name: "INTERIORS",
    sub: "inters",
    group: "THEMES",
    cnt: 7,
  },
  {
    name: "LIBRARY",
    sub: "libs",
    group: "THEMES",
    cnt: 8,
  },
  {
    name: "LIGHTHOUSE",
    sub: "lights",
    group: "THEMES",
    cnt: 9,
  },
  {
    name: "MUSEUM",
    sub: "museums",
    group: "THEMES",
    cnt: 10,
  },
  {
    name: "NATURE",
    sub: "natures",
    group: "THEMES",
    cnt: 11,
  },
];

const colorinfo = [
  {
    name: "BLACK",
    sub: "blacks",
    group: "COLORS",
    cnt: 0,
  },
  {
    name: "BLUE",
    sub: "blues",
    group: "COLORS",
    cnt: 1,
  },
  {
    name: "BROWN",
    sub: "browns",
    group: "COLORS",
    cnt: 2,
  },
  {
    name: "GRAY",
    sub: "grays",
    group: "COLORS",
    cnt: 3,
  },
  {
    name: "GREEN",
    sub: "greens",
    group: "COLORS",
    cnt: 4,
  },
  {
    name: "ORANGE",
    sub: "oranges",
    group: "COLORS",
    cnt: 5,
  },
  {
    name: "PINK",
    sub: "pinks",
    group: "COLORS",
    cnt: 6,
  },
  {
    name: "PURPLE",
    sub: "purples",
    group: "COLORS",
    cnt: 7,
  },
  {
    name: "RED",
    sub: "reds",
    group: "COLORS",
    cnt: 8,
  },
  {
    name: "TURQUOISE",
    sub: "turquoises",
    group: "COLORS",
    cnt: 9,
  },
  {
    name: "WHITE",
    sub: "whites",
    group: "COLORS",
    cnt: 10,
  },
  {
    name: "YELLOW",
    sub: "yellows",
    group: "COLORS",
    cnt: 11,
  },
];
// let readthemes = JSON.parse(localStorage.getItem("THEMESIMG"));

// let taa = "CABLE CARS";

// themesinfo.forEach((value, index) => {
//   // console.log(value.name);
//   // if (value.name == taa) {
//   //   // console.log(value);
//   // }
//   // console.log(value.name == taa);
//   if (value.name == taa) {
//     // console.log(value);
//     console.log(readthemes[value.cnt][value.sub]);
//   }
// });

function subimg() {
  let subcon = document.querySelector(".subcon");
  let inputval = subcon.querySelectorAll("input");
  let localchk = localStorage.getItem("MYIMG");

  let readthemes = JSON.parse(localStorage.getItem("THEMESIMG"));
  let readcolor = JSON.parse(localStorage.getItem("COLORIMG"));

  let upimgchk = inputval[0].value;
  // let upnickname = inputval[1].value;
  let upcountry = inputval[2].value;
  let upcity = inputval[3].value;
  let uptitle = inputval[4].value;
  let updesc = inputval[5].value;

  if (upimgchk == "") {
    alert("Please register your photo.");
  } else if (!selectres) {
    alert("Please enter a category.");
  } else if (upcountry == "") {
    alert("Please enter your country.");
  } else if (upcity == "") {
    alert("Please enter a city.");
  } else if (selectres == "") {
    alert("Please enter the title.");
  } else if (updesc == "") {
    alert("Please enter a description.");
  } else if (upimgchk != "" && upcountry != "" && upcity != "" && selectres != "" && uptitle != "" && updesc != "") {
    // 생성자를 통해 업로드할 이미지 객체생성
    // let imgupload = new createimgupload(
    //   upnickname,
    //   upcountry,
    //   upcity,
    //   selectres,
    //   updesc,
    //   res
    // );

    let imgupload = {
      name: sessionChk.name,
      country: upcountry,
      city: upcity,
      title: selectres,
      description: updesc,
      img: res,
    };

    if (localchk) {
      // 등록한 이미지 정보를 imgupload라는 이름의 localstorage 생성
      let acceptimg = JSON.parse([localStorage.getItem("MYIMG")]);
      // console.log(typeof acceptimg);
      acceptimg.push(imgupload);
      // console.log(acceptimg);

      localStorage.setItem("MYIMG", `${JSON.stringify(acceptimg)}`);
    } else {
      console.log("else");
      localStorage.setItem("MYIMG", `${JSON.stringify([imgupload])}`);
    }

    let craeteobject = {
      catagory: selectres,
      country: upcountry + ", " + upcity,
      description: updesc,
      img: res,
      location: uptitle,
      name: sessionChk.name,
    };

    // 이미지 등록시 카테고리에 이미지 정보 추가
    themesinfo.forEach((value) => {
      if (value.name == selectres) {
        // localStorage.setItem("MYIMG", `${JSON.stringify([imgupload])}`);

        // console.log(readthemes[value.cnt][value.name]);

        readthemes[value.cnt][value.name].push(craeteobject);
      }
      localStorage.setItem("THEMESIMG", `${JSON.stringify(readthemes)}`);
    });

    colorinfo.forEach((value) => {
      if (value.name == selectres) {
        // localStorage.setItem("MYIMG", `${JSON.stringify([imgupload])}`);

        // console.log(readcolor[value.cnt][value.name]);

        readcolor[value.cnt][value.name].push(craeteobject);
      }
      localStorage.setItem("COLORIMG", `${JSON.stringify(readcolor)}`);
    });
  }

  alert("Upload successful");

  setTimeout(() => {
    location.reload();
  }, 100);
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

      console.log(getName);

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
// 유저가 이미지 등록하면 THEMESIMG, COLORIMG에 이미지 등록

// // THEMESIMG 불러오기
// let readthemes = JSON.parse(localStorage.getItem("THEMESIMG"));

// let ta = {
//   title: "",
//   img: "",
//   country: "cc",
//   location: "dd",
//   description: "ee",
// };
// test1.push(ta);

// // console.log(tb);
// localStorage.setItem("THEMESIMG", `${JSON.stringify(readthemes)}`);

// // COLORIMG 불러오기
// let readcolor = JSON.parse(localStorage.getItem("COLORIMG"));

// 찾아온 로컬스토리지 key로 value를 저장
// let tmplocal = JSON.parse(localStorage.getItem(`${listfilter}`));

// console.log(tmplocal);

// // 만들어진 로컬 스토리지의 group이 THEMES 일 경우
// if (tmplocal.group == "THEMES") {
//   let themesname = readthemes[tmplocal.cnt][tmplocal.sub];

//   selectthemes(themesname);
// }

// // 만들어진 로컬 스토리지의 group이 COLORS 일 경우
// if (tmplocal.group == "COLORS") {
//   let colorname = readcolor[tmplocal.cnt][tmplocal.sub];

//   selectthemes(colorname);
// }

// let tat = JSON.parse(localStorage.getItem("imgupload"));

// console.log(tat[0].nickname);
// console.log(tat[2].description);
// console.log(tat[3].title);

//////////////////////////////////////////////////

// // a 태그를 사용한 이미지 다운로드(이미지가 다운로드 파일로 받아짐)
// function dataURLtoBlob(dataurl) {
//   var arr = dataurl.split(","),
//     mime = arr[0].match(/:(.*?);/)[1],
//     bstr = atob(arr[1]),
//     n = bstr.length,
//     u8arr = new Uint8Array(n);
//   while (n--) {
//     u8arr[n] = bstr.charCodeAt(n);
//   }
//   return new Blob([u8arr], {
//     type: mime,
//   });
// }

// function downloadImg(imgSrc) {
//   console.log(res);
//   console.log(filename);
//   var image = new Image();
//   image.crossOrigin = "anonymous";
//   image.src = imgSrc;
//   var fileName = image.src.split("/").pop();
//   image.onload = function () {
//     var canvas = document.createElement("canvas");
//     canvas.width = this.width;
//     canvas.height = this.height;
//     canvas.getContext("2d").drawImage(this, 0, 0);

//     if (typeof window.navigator.msSaveBlob !== "undefined") {
//       window.navigator.msSaveBlob(dataURLtoBlob(canvas.toDataURL()), fileName);
//     } else {
//       var link = document.createElement("a");
//       // link.href = canvas.toDataURL();
//       link.href = res;
//       // link.download = fileName;
//       link.download = filename;
//       link.click();
//       // let subinp = document.querySelector(".subinput");
//       // subinp.innerHTML = `<a href="${res}" download="${filename}"></a>`;
//     }
//   };
// }

// // 로컬 스토리지에 이미지 저장하기
// // 이미지 파일 경로
// // const imagePath = 'image.png';
// const imagePath = "image.png";

// // 이미지를 Base64로 인코딩
// const getBase64Image = (img) => {
//   const canvas = document.createElement("canvas");
//   canvas.width = img.width;
//   canvas.height = img.height;

//   const ctx = canvas.getContext("2d");
//   ctx.drawImage(img, 0, 0);

//   const dataURL = canvas.toDataURL("image/png");
//   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// };

// // 이미지 엘리먼트 생성
// const img = new Image();
// img.crossOrigin = "anonymous";
// img.src = imagePath;

// // 이미지 로드 완료 후 localStorage에 저장
// img.onload = () => {
//   const base64Image = getBase64Image(img);
//   localStorage.setItem("imageData", base64Image);
// };
