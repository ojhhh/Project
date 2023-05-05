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

////////////////////////////////////////////////////

let contenttab = document.querySelector(".contenttab");
let tabs = contenttab.querySelectorAll("span");

// 이미지 그려주는 함수
function imgcard5(a) {
  // console.log(a);
  // console.log(a.mainimg);
  let imgcards = document.querySelector(".imgcards");
  let imgcard = document.createElement("div");
  let imgcardin = document.createElement("div");
  let img = document.createElement("img");
  let img2 = document.createElement("img");
  let imgbtm = document.createElement("div");
  let imgbtmtxt = document.createElement("div");
  let ctspan = document.createElement("span");
  let cardtxtbox = document.createElement("div");
  let cardtxt = document.createElement("div");
  let cta = document.createElement("a");
  let ctp = document.createElement("p");
  let ctp2 = document.createElement("p");
  let cardimg = document.createElement("div");

  imgcard.className = "imgcard";
  imgcardin.className = "imgcardin";
  img.src = a.mainimg;
  imgbtm.className = "imgbtm";
  imgbtmtxt.className = "imgbtmtxt";
  ctspan.innerHTML = "PRESENTED WITH";
  img2.src = a.logoimg;
  cardtxtbox.className = "cardtxtbox";
  cardtxt.className = "cardtxt";
  cta.innerHTML = a.title;
  ctp.innerHTML = a.text;
  ctp2.innerHTML = a.tab;

  cardimg.className = "cardimg";
  cardtxt.append(cta);
  cardtxt.append(ctp);
  cardtxt.append(ctp2);
  cardtxtbox.append(cardtxt);

  imgbtmtxt.append(ctspan);
  imgbtmtxt.append(img2);
  imgbtm.append(imgbtmtxt);

  cardimg.append(img);
  cardimg.append(imgbtm);
  imgcardin.append(cardimg);
  imgcardin.append(cardtxtbox);
  imgcard.append(imgcardin);
  imgcards.append(imgcard);
}

function imgcard4(a) {
  let imgcards = document.querySelector(".imgcards");
  let imgcard = document.createElement("div");
  let imgcardin = document.createElement("div");
  let img = document.createElement("img");
  let cardtxtbox = document.createElement("div");
  let cardtxt = document.createElement("div");
  let cta = document.createElement("a");
  let ctp = document.createElement("p");
  let ctp2 = document.createElement("p");
  let cardimg = document.createElement("div");

  imgcard.className = "imgcard";
  imgcardin.className = "imgcardin";
  img.src = a.mainimg;
  cardtxtbox.className = "cardtxtbox";
  cardtxt.className = "cardtxt";
  cta.innerHTML = a.title;
  ctp.innerHTML = a.text;
  ctp2.innerHTML = a.tab;

  cardimg.className = "cardimg";
  cardtxt.append(cta);
  cardtxt.append(ctp);
  cardtxt.append(ctp2);
  cardtxtbox.append(cardtxt);

  cardimg.append(img);
  imgcardin.append(cardimg);
  imgcardin.append(cardtxtbox);
  imgcard.append(imgcardin);
  imgcards.append(imgcard);
}

// stories 페이지 로딩시 ALL 표출
window.onload = function () {
  allcard();
};

// 전체 이미지 출력 함수
function allcard() {
  let spl;
  let splarr = [];
  let tabarr = [];
  tabs.forEach((a, index) => {
    spl = a.innerHTML;
    splarr.push(spl);
    tmparr = JSON.parse(localStorage.getItem(spl));
    tabarr.push(tmparr);
  });
  tabarr.shift();
  splarr.shift();

  tabarr.forEach((value, index) => {
    if (Object.keys(tabarr[index][0]).length == 5) {
      tabarr[index].forEach((value) => {
        imgcard5(value);
      });
    }
    if (Object.keys(tabarr[index][0]).length == 4) {
      tabarr[index].forEach((value) => {
        imgcard4(value);
      });
    }
  });
}
// tab 누르면 누른 탭의 내용 실행
tabs.forEach(function (a, b) {
  tabs[b].addEventListener("click", function () {
    let spl = a.innerHTML;
    let getlocal = JSON.parse(localStorage.getItem(spl));
    let imgcards = document.querySelector(".imgcards");

    imgcards.innerHTML = "";

    if (tabs[b].innerHTML == "ALL") {
      allcard();
      return;
    }

    if (Object.keys(getlocal[0]).length == 5) {
      getlocal.forEach((a) => {
        imgcard5(a);
      });
    }
    if (Object.keys(getlocal[0]).length == 4) {
      getlocal.forEach((a) => {
        imgcard4(a);
      });
    }
  });
});

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
  let collectionsGallery = document.querySelector(".collections-gallery");
  let collectionsGalleryItem = document.querySelectorAll(".collections-gallery-item");
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

// let te = ["a", "b", "c", "d", "e"];
// let tee = ["a", "b", "c", "d"];

// console.log(Object.keys(itd01).length);
// console.log(Object.keys(qual01).length);

/////////////////////////////////////////////

// // stories card info localstorage save
// // let cardinfo = document.querySelector(".cardtxt");
// let cardtitle = "Modular Accommodations";
// // let cardpall = cardinfo.querySelectorAll("p");
// let cardtext =
//   "Rising above Denver’s flourishing RiNo neighborhood, the Catbird Hotel is playful and eccentric.";
// let cardtab = "IN THE DETAILS";
// let img1 =
//   "https://accidentallywesanderson.com/wp-content/uploads/2023/04/catbirrd-800x800.jpg";
// let ITDimg =
//   "https://accidentallywesanderson.com/wp-content/uploads/2021/12/dlr-group_bug1.png";

// // console.log(cardtitle);
// // console.log(cardtext);
// // console.log(cardtab);
// function createITD(title, text, tab, img1, ITDimg) {
//   this.title = title;
//   this.text = text;
//   this.tab = tab;
//   this.img1 = img1;
//   this.ITDimg = ITDimg;
// }

// let testlocal = new createITD(cardtitle, cardtext, cardtab, img1, ITDimg);
// let testlocal2 = new createITD(cardtitle, cardtext, cardtab, img1, ITDimg);

// localStorage.setItem("INTHEDETAILS", JSON.stringify([testlocal]));
// let abc = JSON.parse(localStorage.getItem("INTHEDETAILS"));

// let abb = testlocal2;
// (function () {
//   console.log("test");
//   abc.push(abb);
//   console.log(abc);
//   localStorage.setItem("INTHEDETAILS", JSON.stringify(abc));
// })();

// // 로컬 스토리지에 정보가 있으면 가져와서 카드를 만듬
// if (localStorage.getItem("INTHEDETAILS").length != 0) {
//   let tlocal = JSON.parse(localStorage.getItem("INTHEDETAILS"));
//   tlocal.forEach((a, b) => {
//     console.log(tlocal);
//     console.log(tlocal[b].title);
//     let imgcards = document.querySelector(".imgcards");
//     let imgcard = document.createElement("div");
//     let imgcardin = document.createElement("div");
//     let img = document.createElement("img");
//     let img2 = document.createElement("img");
//     let imgbtm = document.createElement("div");
//     let imgbtmtxt = document.createElement("div");
//     let ctspan = document.createElement("span");
//     let cardtxtbox = document.createElement("div");
//     let cardtxt = document.createElement("div");
//     let cta = document.createElement("a");
//     let ctp = document.createElement("p");
//     let ctp2 = document.createElement("p");
//     let cardimg = document.createElement("div");

//     imgcard.className = "imgcard";
//     imgcardin.className = "imgcardin";
//     img.src = tlocal[b].img1;
//     imgbtm.className = "imgbtm";
//     imgbtmtxt.className = "imgbtmtxt";
//     ctspan.innerHTML = "PRESENTED WITH";
//     img2.src = tlocal[b].ITDimg;
//     cardtxtbox.className = "cardtxtbox";
//     cardtxt.className = "cardtxt";
//     cta.innerHTML = tlocal[b].title;
//     ctp.innerHTML = tlocal[b].text;
//     ctp2.innerHTML = tlocal[b].tab;

//     cardimg.className = "cardimg";
//     cardtxt.append(cta);
//     cardtxt.append(ctp);
//     cardtxt.append(ctp2);
//     cardtxtbox.append(cardtxt);

//     imgbtmtxt.append(ctspan);
//     imgbtmtxt.append(img2);
//     imgbtm.append(imgbtmtxt);

//     cardimg.append(img);
//     cardimg.append(imgbtm);
//     imgcardin.append(cardimg);
//     imgcardin.append(cardtxtbox);
//     imgcard.append(imgcardin);
//     imgcards.append(imgcard);
//   });
// }
