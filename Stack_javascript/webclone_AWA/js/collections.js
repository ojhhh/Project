// localStorage.removeItem("||");

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

////////////////////////////////////////////////////////

// search btn
// header 우상단 search & login btn
// 검색 팝업 관련 (숨어있다 나오는)
// let searchPopupBtn = document.querySelector('#dropdown-search-form');
// let searchPopupBtn = document.querySelector(".dropdown-search-form");
// let searchPopup = document.querySelector("#search-popup");
// let popupCloseBtn = document.querySelector("#popup-close-btn");

// let search = document.querySelector(".keyword-input"); // 검색 input 창
// let searchSubmit = document.querySelector(".search-icon-btn"); // 돋보기 버튼
// let autocompleteWrap = document.querySelector(".autocomplete_wrap");
// let noImgSearched = document.querySelector(".no_img_searched");
// 자동완성 데이터 설정
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

// 이미지 그려주는 함수
let colcardwrap = document.querySelector(".colcardwrap");
let colcard = document.querySelector(".colcard");
let colcardin = document.querySelector(".colcardin");
let themestag = document.querySelector(".themes");
let colortag = document.querySelector(".colorpalette");
let tmp;

// let gradations = document.querySelectorAll(".gradation");
// let colcards = document.querySelectorAll(".colcard");
let getGotothemes = JSON.parse(localStorage.getItem("gotothemes"));
let getGotocolor = JSON.parse(localStorage.getItem("gotocolor"));
function addtag(value) {
  let img = document.createElement("img");
  let div1 = document.createElement("div");
  let div2 = document.createElement("div");
  let div3 = document.createElement("div");
  let h4 = document.createElement("h4");
  let atag = document.createElement("a");

  h4.innerHTML = value.title;
  h4.className = "title";
  img.src = value.img;
  div1.className = "colcard";
  div2.className = "colcardin";

  div2.onclick = function (e) {
    // 클릭한 이미지의 tag 값을 가져옴
    tmp = e.target.innerHTML;
    // h4 태그를 누르면 innerHTML을 가져와 동작이 잘되지만 그라데이션을 누르면 div 부터 가져옴
    // gradation div를 눌렀을때 하위 h4의 innerHTML을 가져오기 위해
    // ta 변수에 target의 태그 정보를 저장
    let ta = e.target;

    // 그라데이션을 눌렀을 경우 실행
    if (e.target.className == "gradation") {
      // 그라데이션 자식 태그 h4의 innerHTML 값을 가져와
      let tb = ta.querySelector("h4");
      // tmp에 값을 저장해 h4 태그를 눌렀을때와 같은 동작을 하게 함
      tmp = tb.innerHTML;
    }

    // tm() 함수가 적용 중일 경우

    // themestag에 addborder 클래스가 있는 경우 실행
    if (themestag.classList.contains("addborder")) {
      // gotothemes 배열에 저장된 값을 가져옴
      getGotothemes.forEach((value, index) => {
        // gotothemes 배열에 저장된 name 값과 tmp 값 비교
        if (getGotothemes[index].name == tmp) {
          // console.log(gotothemes[index]);
          // gotothemes 내용 중 name과 tmp가 일치한 객체를 로컬 스토리지에 저장
          localStorage.setItem("||", JSON.stringify(getGotothemes[index]));
        }
      });
    }

    // cp() 함수가 적용 중일 경우

    // colortag addborder 클래스가 있는 경우 실행
    if (colortag.classList.contains("addborder")) {
      getGotocolor.forEach((value, index) => {
        if (getGotocolor[index].name == tmp) {
          localStorage.setItem("||", JSON.stringify(getGotocolor[index]));
        }
      });
    }
  };
  atag.href = "./collist.html";

  div3.className = "gradation";

  div3.append(h4);
  div2.append(img);
  div2.append(atag);
  atag.append(div3);
  div1.append(div2);
  colcardwrap.append(div1);
}

// // 넘어갈 키워드 배열
// const gotocolor = [
//   {
//     name: "BLACK",
//     sub: "blacks",
//     group: "COLORS",
//     cnt: 0,
//     desc: "Occasionally darkness is required to bring out the pops of color in contrast. Black. The opposite of White.",
//   },
//   {
//     name: "BLUE",
//     sub: "blues",
//     group: "COLORS",
//     cnt: 1,
//     desc: "Blue has been an important color since ancient times. Often associated with peace and harmony, explore our collection for calm vibes.",
//   },
//   {
//     name: "BROWN",
//     sub: "browns",
//     group: "COLORS",
//     cnt: 2,
//     desc: "Wood, brick, and a variety of construction materials often employ brown as a base color. This collection showcases some of the best browns around.",
//   },
//   {
//     name: "GRAY",
//     sub: "grays",
//     group: "COLORS",
//     cnt: 3,
//     desc: "Gray doesn't have to equate to drab. This collection features a wide array of images and locations that are, upon closer inspection, anything but!",
//   },
//   {
//     name: "GREEN",
//     sub: "greens",
//     group: "COLORS",
//     cnt: 4,
//     desc: "Lush natural scenery, fields of clover, sporting pitches, and brilliant emeralds - all green. Dive in to a collection filled with green goodness.",
//   },
//   {
//     name: "ORANGE",
//     sub: "oranges",
//     group: "COLORS",
//     cnt: 5,
//     desc: "The color and name of a popular fruit. You won't find any citrus in this colorful collection, but it is a tasty one nonetheless.",
//   },
//   {
//     name: "PINK",
//     sub: "pinks",
//     group: "COLORS",
//     cnt: 6,
//     desc: `"A "pop of pink" is a quintessential element of the AWA aesthetic. This popular collection provides a feast for the eyes that upon further inspection sets up some equally enchanting stories."`,
//   },
//   {
//     name: "PURPLE",
//     sub: "purples",
//     group: "COLORS",
//     cnt: 7,
//     desc: "Royal and regal, Purple has long been associated with the finer things in life. This petite collection is so lush that you can almost feel the velvet through the screen.",
//   },
//   {
//     name: "RED",
//     sub: "reds",
//     group: "COLORS",
//     cnt: 8,
//     desc: "Is it warm in here? Red, often associated with love, passion, and all things hot, you might need to cool off after exploring this collection.",
//   },
//   {
//     name: "TURQUOISE",
//     sub: "turquoises",
//     group: "COLORS",
//     cnt: 9,
//     desc: "Ahhh... Take a dip in this refreshing collection dominated by aquatic tones of turquoise and teal.",
//   },
//   {
//     name: "WHITE",
//     sub: "whites",
//     group: "COLORS",
//     cnt: 10,
//     desc: "Similar to the Black collection, White often serves as a contrast that allows other pops of color to take center stage. One thing is for certain, these snaps & stories aren't vanilla.",
//   },
//   {
//     name: "YELLOW",
//     sub: "yellows",
//     group: "COLORS",
//     cnt: 11,
//     desc: "An underrated color in the AWA universe, yellow has a lot to offer. We find that there is a lot to love when yellow appears as a pop of color and hope that you'll be delighted, too.",
//   },
// ];

// const gotothemes = [
//   {
//     name: "CABLE CARS",
//     sub: "cablecars",
//     group: "THEMES",
//     cnt: 0,
//     desc: "Aerial lifts, tramways, cableways... Occasionally the best way to get from point A to B is on a wire. Cable Cars were first pioneered for human transportation at the end of the 19th century and have maintained their value and charm with unique variations on the mode of transport across the globe.",
//   },
//   {
//     name: "CLASSIC FACADES",
//     sub: "classics",
//     group: "THEMES",
//     cnt: 1,
//     desc: `"The stunners contained within this theme scream AWA. Guess what, they are all real places, each with a story to tell. We invite you to explore some of the most "classic" spots around the globe."`,
//   },
//   {
//     name: "DOORS",
//     sub: "doors",
//     group: "THEMES",
//     cnt: 2,
//     desc: `"Many times a door is just a door, but sometimes the door represents passage to a new, fantastical place. Other times, the doors themselves have a certain charm, an undeniable "it factor". This collection contains doors of all kinds. Step through and discover something new."`,
//   },
//   {
//     name: "EDUCATIONAL INSTITUTIONS",
//     sub: "edus",
//     group: "THEMES",
//     cnt: 3,
//     desc: "Spanning all cultures and eras, Humanity's quest for knowledge is a constant from time immemorial. Each of the places and spaces within this theme have a connection to learning. Some formal, others less so.",
//   },
//   {
//     name: "GOVERNMENT BUILDINGS",
//     sub: "goves",
//     group: "THEMES",
//     cnt: 4,
//     desc: "The thought of a government building might bring to mind drab, unimaginative hallways and unmarked doors. It does not need to be so! These places represent the opposite of that aesthetic.",
//   },
//   {
//     name: "HIDDEN WONDESRS",
//     sub: "hiddens",
//     group: "THEMES",
//     cnt: 5,
//     desc: "A collection the most unusual places and things with deeper meanings and untold stories. Let's explore together!",
//   },
//   {
//     name: "HOTEL / MOTEL",
//     sub: "hms",
//     group: "THEMES",
//     cnt: 6,
//     desc: "Weary travelers have found unique places to lay their head since the beginning of human travel. The locations contained within the collection represent some of the more... extravagant, beautiful, and history-laden options.",
//   },
//   {
//     name: "INTERIORS",
//     sub: "inters",
//     group: "THEMES",
//     cnt: 7,
//     desc: "Who doesn't love an immaculately designed interior? It's where we spend most of our waking hours, at least for many of us. This collection represents the best of the best when you need a little inspiration for your own inside spaces.",
//   },
//   {
//     name: "LIBRARY",
//     sub: "libs",
//     group: "THEMES",
//     cnt: 8,
//     desc: "To get lost in a book is one of life's simple pleasures. To get lost in one of these libraries, well, you can let us know what you think!",
//   },
//   {
//     name: "LIGHTHOUSE",
//     sub: "lights",
//     group: "THEMES",
//     cnt: 9,
//     desc: "Beacons, most often situated on a coast, help watercraft avoid disaster while also guiding them to a friendly port. They come in all shapes and sizes, and each has a story to tell. Learn about these iconic sentinels of the sea (and lakes).",
//   },
//   {
//     name: "MUSEUM",
//     sub: "museums",
//     group: "THEMES",
//     cnt: 10,
//     desc: "A night at the museum? We'd need YEARS of exploration to get through all of these lovely homes of art, antiquity and ingenuity.",
//   },
//   {
//     name: "NATURE",
//     sub: "natures",
//     group: "THEMES",
//     cnt: 11,
//     desc: "The great outdoors. Sights, sounds, smells. Nature is a wonderful spot to get lost.",
//   },
// ];

// 페이지가 열리면 바로 실행
(function () {
  let collectionsStart = localStorage.getItem("seeAll");

  if (collectionsStart) {
    if (collectionsStart == "themes") {
      tm();
    } else if (collectionsStart == "color") {
      cp();
    }
  }
})();

// onclick THEMES
function tm() {
  // 이미지 배열 초기화
  colcardwrap.innerHTML = "";

  // 상단 THEMES 클릭시 THEMES에 border가 생기고 COLOR에 border 삭제
  themestag.classList.add("addborder");
  colortag.classList.remove("addborder");

  // 로컬 스토리지에 저장된 THEMES 정보를 가져옴
  let themearr = JSON.parse(localStorage.getItem("THEMES"));

  // 가져온 THEMES 정보를 출력
  themearr.forEach((value) => {
    addtag(value);
  });
}

// onclick COLOR PALETTE
function cp() {
  // 이미지 배열 초기화
  colcardwrap.innerHTML = "";

  // 상단 COLOR에 클릭시  COLOR에 border가 생기고 THEMES에 border 삭제
  themestag.classList.remove("addborder");
  colortag.classList.add("addborder");

  // 로컬 스토리지에 저장된 COLORPALETTE 정보를 가져와 출력
  let colorarr = JSON.parse(localStorage.getItem("COLORPALETTE"));
  colorarr.forEach((value) => {
    addtag(value);
  });
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
  let collectionsGallery = document.querySelector(".collections-gallery");
  let collectionsGalleryItem = document.querySelectorAll(".collections-gallery-item");
  let collectionsItemTitle = collectionsContainer.querySelectorAll("a");

  collectionsItemTitle.forEach((v, i) => {
    collectionsItemTitle[i].addEventListener("click", function () {
      let getName = collectionsItemTitle[i].querySelector(".collections-item-title").innerHTML;

      console.log(getName);

      // let getGotothemes = JSON.parse(localStorage.getItem("gotothemes"));
      // let getGotocolor = JSON.parse(localStorage.getItem("gotocolor"));

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
