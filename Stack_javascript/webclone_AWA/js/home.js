// myPage에서 회원 탈퇴했을때 USER가 한명도 없을 경우
setTimeout(() => {
  if (localStorage.getItem("USER")) {
    if (localStorage.getItem("USER").length == 2) {
      localStorage.removeItem("USER");
    }
  }
}, 100);

// admin 계정 만들기
// let test = {
//     nickname : 'hello🤟',
//     id : 'test'
// }

// sessionStorage.setItem('USER', JSON.stringify(test))

// 📚 중요 전역 변수

// 🔷 스와이프 관련
let itemMarginRight = 40;
let itemWidth = 400;
// item 바로위 = container
let _gallerySlideContainer = document.querySelector(".gallery-slide-container");
// item 전체 가져온 것
let arrAllItem = document.querySelectorAll(".gallery-slide-item");
let itemCount = arrAllItem.length;
let currentIndex = 0;
let rightArrowBtn = document.querySelector(".nav-right-arrow");
let leftArrowBtn = document.querySelector(".nav-left-arrow");

// header에 들어가는 함수 부분 //
// 검색 팝업 관련 (숨어있다 나오는)
// let searchPopupBtn = document.querySelector('#dropdown-search-form');
let searchPopupBtn = document.querySelector(".dropdown-search-form");
let searchPopup = document.querySelector("#search-popup");
let popupCloseBtn = document.querySelector("#popup-close-btn");

let search = document.querySelector(".keyword-input"); // 검색 input 창
let searchSubmit = document.querySelector(".search-icon-btn"); // 돋보기 버튼
let autocompleteWrap = document.querySelector(".autocomplete_wrap");
let noImgSearched = document.querySelector(".no_img_searched");

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

// 로그인 팝업 관련 (숨어있다 나오는)
let loginPopupContent = document.querySelector(".login-popup-content");
let idLoginBtn = document.querySelector("#id-login-btn");
let logincloseBtn = document.querySelector("#login-close-btn");

let topBanner = document.querySelector(".top_banner"); // 최상단 빨간 배너
let signupcloseBtn = document.querySelector("#signup-close-btn");

// collection 팝업 관련
let navCollectionsBtn = document.querySelector(".nav-collections-btn");
let collectionsDropdown = document.querySelector(".collections-dropdown");

// 기타
let siteHeader = document.querySelector(".site_header");
let siteHeaderprimary = document.querySelector(".site_header__primary-nav");
let responsiveTopLogo = document.querySelector(".responsive-top-logo");
let dropdownSearchForm = document.querySelector(".dropdown-search-form");
let reponsiveLoginBtn = document.querySelector("#id-login-btn");
let navInstagramBtn = document.querySelector(".nav-instagram-btn");
let primaryNavSocial = document.querySelector(".site_header__primary-nav--social");
let primaryNavSeachlogin = document.querySelector(".site_header__primary-nav--seachlogin");
let responsiveHamburgMenu = document.querySelector(".responsive-hamburg-menu");
let responsiveHamburgMenuWidthYscroll = document.querySelector(".responsive-hamburg-menu-width-yscroll");
let responsSearchX1200Yscroll200 = document.querySelector(".respon-search-form-x1200under-yscroll200over");
let responsHamburgXwidth1200Yscroll200 = document.querySelector(".responsive-hamburg-menu-xwidth1200-yscroll200");

// 로그인 했을떄 idLoginBtn innerHTML 이름으로 변경
if (sessionStorage.getItem("LOGIN")) {
  let loginSession = JSON.parse(sessionStorage.getItem("LOGIN"));

  idLoginBtn.innerHTML = `<a id="id-login-btn" >
<img src="https://accidentallywesanderson.com/wp-content/themes/awa/assets/images/icon-user-red.svg" alt="">
${loginSession.name}
</a>`;
}

// 햄버거 메뉴 관련
// 버튼 위에 있는 태그 까지 해줘야 클릭반응이 옴 ⭐⭐ (햄버거 감싸고 있는 태그)
let hamburgMenuBtn = document.querySelector(".responsive-hamburg-menu-xWidth-under1200");
// 누르면 나오게되는, 햄버거 메뉴리스트
let NavResponsiveHham = document.querySelector(".site_header__primary-nav--responsive-ham");
// 드롭다운 메뉴 테스트 - 사용하지 않는 것 같음, 혹시 모르니 살려둠 📛
let ResponsiveHamburgerDropdownOver200 = document.querySelector(".site_header__primary-nav--responsive-ham-over200");
// 햄버거 버튼 누르면 -> 그 자리에 나오는 'X 버튼'
let closeStateButton = document.querySelector(".close-state-button");
let closeStateButtonUnder1200 = document.querySelector("#close-state-button-under1200");
let closeStateButtonUnder1200Y200over = document.querySelector(".close-state-button-xwidth1200-yscroll200");
// 햄버거 버튼 자체
let hamburgMenuButton = document.querySelector("#hamburg-menu-btn-under1200");
let hamburgXwidth1200Yscroll200 = document.querySelector("#hamburg-menu-button-xwidth1200-yscroll200");

// 검색버튼
// under1200 일 때, '검색 버튼'
let dropdownSearchXWidthUnder1200 = document.querySelector(".dropdown-search-form-xWidth-under1200");

// 검색 버튼 : x 1200 under, y 스크롤 200 이상일 때,
let SearchformX1200underY200over = document.querySelector("#dropdown-search-form-x1200under-y200over");
let searchPopupBtnCalcBoxTop = document.querySelector("#search-popup-btn");

// 새롭게 만든 드롭다운 검색 메뉴
let dropDownSearchX1200Y200 = document.querySelector(".input-search-keyword-x1200-y200");

// x1200이하, y200 이상에서, 검색버튼 누르면 > 햄버거 메뉴 살짝 올리려구
let navResponsiveHamIsActive = document.querySelector(".site_header__primary-nav--responsive-ham.is-active");
let navResponsiveHam = document.querySelector(".site_header__primary-nav--responsive-ham");

// x1200 이하, y200 이하에서, x 클릭하면, 햄버거 버튼 안 보이게
let responsiveMenuXwidth1200Yscroll200 = document.querySelector(".responsive-hamburg-menu-xwidth1200-yscroll200");

// width 1201 이하 & yscroll 200 이상 & 검색 아이콘 클릭 일 때, 검색 떨어지게 하는 함수
function searchDropDownX1201Y200() {
  responsHamburgXwidth1200Yscroll200.addEventListener("click", function () {
    // 동일한 디자인이지만, X 가 위에 있는, 걸로 만들기
    dropDownSearchX1200Y200.style.display = "none";
  });
}

// 🟦 scroll 이벤트 : 뷰포트가 스크롤될 때마다 호출되는 함수

function handleYScroll() {
  // 스크롤 위치 가져오기
  const scrollYPosition = window.scrollY;

  // 1. width 1201 이상인 경우
  if (window.matchMedia("(min-width: 1201px)").matches) {
    // 1.1 width 1201 이상 & Y Scorll 200 이상 (밑으로 내림)
    if (scrollYPosition > 200) {
      //   console.log(" width 1201 이상 & Y Scorll 200 이상 (밑으로 내림) ");

      // '상단 메뉴바' 떨어지게 하기
      siteHeaderprimary.classList.add("is-scrolled");
      // '상단 로고' '넣기'
      responsiveTopLogo.classList.add("is-scrolled");
      // '검색' 중 '아이콘만' 보이게 하기
      dropdownSearchForm.innerHTML = `<img src="https://accidentallywesanderson.com/wp-content/themes/awa/assets/images/icon-search-red.svg" alt="">`;
      // '로그인' 중 '아이콘만' 보이게 하기
      reponsiveLoginBtn.innerHTML = `<img src="https://accidentallywesanderson.com/wp-content/themes/awa/assets/images/icon-user-red.svg" alt="">`;
      // '소셜 아이콘' '오른쪽으로 이동'

      // 인스타그램 아이콘을 살짝 옆으로
      navInstagramBtn.style.marginRight = "10px";
      dropdownSearchForm.style.marginRight = "40px";

      // 인스타 + 페북을 살짝 오른쪽으로
      primaryNavSocial.style.marginLeft = "145px";

      // 햄버거 보이게 하기
      // 👇 이게 none 되어도 문제 없는거 같은데? 혹시 모르니까, 살려두기
      hamburgXwidth1200Yscroll200.style.display = "block";

      // '검색' 중 '아이콘만' 보이는거 제거
      responsSearchX1200Yscroll200.classList.remove("is-scrolled");
      // '햄버거 메뉴' '보이게' 하는거 제거
      responsHamburgXwidth1200Yscroll200.classList.remove("is-scrolled");

      // 검색창이 사라짐
      searchPopup.classList.remove("is-active");
    }
    // 1.2 width 1201 이상 & Y Scroll 200 이하 (위로 올림)
    else {
      let loginSession = JSON.parse(sessionStorage.getItem("LOGIN"));

      // '상단 메뉴바' '제거'
      siteHeaderprimary.classList.remove("is-scrolled");
      // '상단 로고' '제거'
      responsiveTopLogo.classList.remove("is-scrolled");
      // '검색 아이콘 + 텍스트' 다 보이게 하기
      dropdownSearchForm.innerHTML = `<img src="https://accidentallywesanderson.com/wp-content/themes/awa/assets/images/icon-search-red.svg" alt=""> Search`;
      // '로그인 아이콘 + 텍스트' 다 보이게 하기
      if (sessionStorage.getItem("LOGIN")) {
        reponsiveLoginBtn.innerHTML = `<img src="https://accidentallywesanderson.com/wp-content/themes/awa/assets/images/icon-user-red.svg" alt=""> ${loginSession.nickname}`;
      } else {
        reponsiveLoginBtn.innerHTML = `<img src="https://accidentallywesanderson.com/wp-content/themes/awa/assets/images/icon-user-red.svg" alt=""> Login`;
      }

      //   console.log(" width 1201 이상 & Y Scroll 200 이하 (위로 올림) ");

      // '검색' 중 '아이콘만' 보이게 하기 - 제거
      responsSearchX1200Yscroll200.classList.remove("is-scrolled");
      // '햄버거 메뉴' '보이게' 하기 - 제거
      responsHamburgXwidth1200Yscroll200.classList.remove("is-scrolled");
    }
  }

  // 2. width 1201 이하인 경우
  else {
    // 2.1 width 1201 이하 & Y Scorll 200 이상 (밑으로 내림)
    if (scrollYPosition > 200) {
      //   console.log(" width 1201 이하 & Y Scorll 200 이상 (밑으로 내림) ");
      //   console.log("띠링 목차 변형");

      // '상단 메뉴바' 떨어지게 하기
      siteHeaderprimary.classList.add("is-scrolled");
      // '상단 로고' '넣기'
      responsiveTopLogo.classList.add("is-scrolled");
      // '검색' 중 '아이콘만' 보이게 하기
      responsSearchX1200Yscroll200.classList.add("is-scrolled");
      // '햄버거 메뉴' '보이게' 하기
      // [예전버전]
      // responsHamburgXwidth1200Yscroll200.classList.add('is-scrolled')
      // [현재]
      // 스크롤 내리면 햄버거 메뉴 나오게 하기 : 이게 지금 보이게 하는데?
      // responsHamburgXwidth1200Yscroll200.style.display = "block"; // ⭐⭐ 이거 삭제
      responsHamburgXwidth1200Yscroll200.classList.add("is-scrolled"); // 이거 추가 ⭐⭐⭐
    }
    // 2.2 width 1201 이하 & Y Scorll 200 이하 (위로 올림)
    else {
      //   console.log(" width 1201 이하 & Y Scorll 200 이하 (위로 올림) ");

      // '상단 메뉴바' '제거'
      siteHeaderprimary.classList.remove("is-scrolled");
      // '상단 로고' '제거'
      responsiveTopLogo.classList.remove("is-scrolled");
      // '검색' 중 '아이콘만' 보이는거 제거
      responsSearchX1200Yscroll200.classList.remove("is-scrolled");
      // '햄버거 메뉴' '보이게' 하는거 제거
      responsHamburgXwidth1200Yscroll200.classList.remove("is-scrolled");

      // 햄버거 메뉴, 좁아졌을 때 보다, 살짝 크게 하기
      navResponsiveHam.style.top = "116px";

      // ⭐ 햄버거 버튼 눌렀을 때, 취소버튼 위치 시키기
      // (이걸 안 해주면, 스크롤 내린거 기준으로 하면 또 그거에 따라 달라짐)
      closeStateButton.style.top = "80px";
      closeStateButton.style.right = "8px";

      // 스크롤 올렸을 때 나타나는 햄버거 없애기 ❓❓❓ 이건가?
      // responsHamburgXwidth1200Yscroll200.style.display = "none"; // 테스트
      // deleteHamburgBtn()

      // x Under1200, y over200 햄버거 보이게 하기
      // 햄버거 보이게 하기 🔵
      // 👇 이걸 none 해도 문제 없어 보이는데? , 혹시 모르니가 살려두기.
      hamburgXwidth1200Yscroll200.style.display = "block";
    }
  }
}

// 스크롤 y 200 미만에서 햄버거 아이콘 클릭 > 메뉴가 나옴 > 엑스 버튼 클릭 > 위에 nav 에 있는 햄버거가 나오나?
// 엑스 버튼 클릭하고 -> 이거 안 나오게 설정 : respon-search-form-x1200under-yscroll200over
// function deleteHamburgBtn() {
//     엑스버튼.addEventListener('click', function() {
//         햄버거(respon-search-form-x1200under-yscroll200over).style.display = 'none'
//     })
// }

// 스크롤 발생하면 -> handleYScroll 함수 실행
window.addEventListener("scroll", handleYScroll);
// 브라우저가 켜져 있으면, 우선, 실행되게 하기
// setInterval(handleYScroll, 11111150);
// 성능 저하가 일어나지만, setInterval 로 했음...
// 그러니까, 브라우저가 작아졌을 때, 목차 클릭 후 목차가 나타나는 속도가 빨라지긴 함.
// ⭐⭐⭐ 이게 큰 변화를 가져왔음.
// 근데 문제는 이게, 검색을 막는다.

// 스크롤 발생하면 -> handleYScroll 함수 실행
window.addEventListener("scroll", handleYScroll);

// 🟦 '햄버거 버튼' 클릭 관련 함수
// '스크롤 맨 위 AND width 1200 이하' 에서, 햄버거 버튼 클릭되면 -> 1) 메뉴 나오게 2) x 버튼 나오게
function showDropMenuCloseBtnX1200under() {
  hamburgMenuBtn.addEventListener("click", function () {
    // console.log("햄버거");
    // 햄버거 클릭시 > '드롭다운 메뉴' 나오게 하기
    NavResponsiveHham.classList.add("is-active");
    // 햄버거 클릭시 > 스크롤 사라지게 하기
    // document.body.style.overflow = "hidden";

    // 햄버거 버튼 누르면 -> 그 자리에 X 버튼 나오기
    closeStateButton.style.display = "block";

    // 햄버거 클릭시 > 햄버거 버튼 사라지게 하기
    hamburgMenuButton.style.display = "none";
    // console.log(hamburgMenuButton)

    // x 버튼 클릭시 -> 스크롤 생성
    xBtnClickCreateScroll();
  });
}
// '스크롤 맨 위 AND width 1200 이하' 에서, 햄버거 버튼 클릭되면 -> 1) 메뉴 나오게 2) x 버튼 나오게
showDropMenuCloseBtnX1200under();

// x under 1200, y scroll 200 이상 | 햄버거 버튼 클릭 > 1) 햄버거 메뉴 나오게 2) x 버튼 나오게
function hamburgBtnX1200underY200over() {
  hamburgXwidth1200Yscroll200.addEventListener("click", function () {
    // console.log("햄버거1200200");
    // 드롭다운 메뉴 : 나오고 있음.

    // 햄버거 클릭시 > 스크롤 사라지게 하기
    // document.body.style.overflow = "hidden";

    // 햄버거 버튼 누르면 -> 그 자리에 X 버튼 나오기
    closeStateButtonUnder1200Y200over.style.display = "block";

    // 햄버거 버튼 사라지게 하기 (🔵)
    hamburgXwidth1200Yscroll200.style.display = "none";
  });
}
// x under 1200, y scroll 200 이상 | 햄버거 버튼 클릭 > 1) 햄버거 메뉴 나오게 2) x 버튼 나오게
// hamburgBtnX1200underY200over()

// 반응형에서, 햄버거 누르면, 드롭메뉴 나오게 하기
// 👇 이름은 TEST 이지만, 현재, 이게 작동하고 있음.
function hamburgBtnX1200underY200over__TEST() {
  hamburgXwidth1200Yscroll200.addEventListener("click", function () {
    // console.log("햄버거 클릭💪💪");
    // 햄버거 클릭시 > '드롭다운 메뉴' 나오게 하기
    NavResponsiveHham.classList.add("is-active");
    // 햄버거 클릭시 > 스크롤 사라지게 하기
    // document.body.style.overflow = "hidden";

    // 햄버거 버튼 누르면 -> 그 자리에 'X 버튼' 놓이게 하기
    closeStateButtonUnder1200Y200over.style.display = "block";
    // 딱 제자리에 놓이게 함 👇
    closeStateButtonUnder1200Y200over.style.top = "45px";
    // 딱 제자리에 놓이게 함 👇
    closeStateButtonUnder1200Y200over.style.right = "17px";

    // 햄버거 클릭시 > 햄버거 버튼 사라지게 하기
    // 이게 문제였는데, 그 이유는 햄버거 버튼만 특정한게 아니라, 그 부모태그를 가져왔기 때문임
    hamburgXwidth1200Yscroll200.style.display = "none";

    // x 버튼 클릭시 -> 스크롤 생성
    // 📛 x 버튼 클릭하면 > 1) 스크롤 생성 2) 햄버거 메뉴 아이콘 등장 해야 함. 이게 안 됨.
    // [기존함수]
    // xBtnClickCreateScroll();
    // [테스트]
    // 기존 함수 기능을 대체하고 있음.
    // 보완할 것 : 1) 햄버거 메뉴 아이콘을 클릭하면, 다시 나타나야 함.
    closeBtnXwidth1200underY200over__TEST();
  });
}

hamburgBtnX1200underY200over__TEST();

// 반응형에서, 햄버거 누르면, 드롭메뉴 나오게 하기
// hamburgBtnX1200underY200over__TEST()
// hamburgXwidth1200Yscroll200.addEventListener('click', hamburgBtnX1200underY200over__TEST);

// x under 1200 | y over 200 | 취소 버튼 클릭되면 -> 햄버거 버튼 생기게 하기
function closeBtnXwidth1200underY200over__TEST() {
  // x under 1200 | y over 200 | 취소 버튼
  closeStateButtonUnder1200Y200over.addEventListener("click", function () {
    // x under 1200 | y over 200 | 햄버거 버튼은 보여주기
    // [나타는 나지만, 클릭이 안 되는 버튼 👇]
    hamburgXwidth1200Yscroll200.style.display = "block";
    // [테스트] 되살아나는 버튼이 해당 버튼이 아니라, 클래스 여야 하나? 라는 생각에 해본 테스트, 👉 📛 작동 안 함.
    // responsHamburgXwidth1200Yscroll200.classList.add('is-scrolled') = 'block'

    // x under 1200 | y over 200 | 취소 버튼은 제거
    closeStateButtonUnder1200Y200over.style.display = "none";
  });
  // x under 1200 | y over 200 | 위에서 나타난 햄버거 메뉴가 클릭되면, dropdown 되게 하기
  // 음... 안 되네
  // hamburgBtnX1200underY200over__TEST()
}

// 🟦 'x 버튼' 클릭 관련 함수

// x under 1200 | (y는 기본값) | x 버튼 클릭시 -> 스크롤 생성 함수
// hamburgBtnX1200underY200over__TEST 에 의해 대체된 부분이 있음.
// 다른 영역에도 혹시 쓰이는 부분이 있으니 살려둠 ✅✅✅

// 이 함수의 문제
// close 버튼은 x width 1200, y 기본값에 위치한 버튼 인데, 클릭되었을 때 나오게 하는 건, x width 1200, y 200 이상에 있는 버튼임.

function xBtnClickCreateScroll() {
  // ✅ 디버깅 중
  // close-state-button-xwidth1200-yscroll200 위에 클릭된 버튼은 이 클래스
  // 지금 이 함수에서 가리키는 버튼은 close-state-button 이 클래스
  // 같은건가?
  // 다른 버튼임
  // 이건, 위에 있는 Xunder1200 을 잡고 있는 것 같음.
  // 제대로된 타겟을 잡고 있나?

  closeStateButton.addEventListener("click", function () {
    // (드롭다운 메뉴가 나와서 스크롤이 없었는데) 스크롤이 다시 생기게 한다.
    // 이건 closeBtnX1200under 함수로 우선 넣어보자
    // document.body.style.overflow = "auto";
    // x 버튼 누르면 -> 다시 햄버거 버튼이 생기게 한다.
    // 이건 어떤 x 버튼을 말하는 거지?
    // 아, 지금 x1200, yscroll200 에 있는 버튼을 이야기 하는거 같은데? ❓❓❓
    // 그러면, 이건, colseBtnx1200,y200으로 가야 하는거아닌가?
    // responsHamburgXwidth1200Yscroll200.style.display = 'block'
  });
}

// x under 1200 | (y는 기본값) | x 버튼 누르면, 드롭다운 리스트 사라지게 하기 ❓❓❓ 드롭다운 제거 함수는 위에꺼랑 동일한거 아닌가?
function closeBtnXwidth1200under() {
  closeStateButton.addEventListener("click", function () {
    // 드롭다운 메뉴 지우기
    NavResponsiveHham.classList.remove("is-active");
    // x 취소 버튼 없애기
    closeStateButton.style.display = "none";
    // 햄버거 버튼 다시 나타나게 하기
    hamburgMenuButton.style.display = "block";
    // (드롭다운 메뉴가 나와서 스크롤이 없었는데) 스크롤이 다시 생기게 한다.
    // document.body.style.overflow = "auto";
  });
}
closeBtnXwidth1200under();

// x under 1200, y scroll 200 이상 | x 버튼 클릭 > 1) 드롭 다운 메뉴 사라지게 하기
function closeBtnXwidth1200underY200over() {
  // 👇 이 버튼 자체가 나타나지 않고 있는 상황📛
  // ✅ 클릭 순서대로 함수를 정렬하면, 좀 더 파악이 쉬울 것 같음.
  closeStateButtonUnder1200Y200over.addEventListener("click", function () {
    // console.log("x 버튼 잘 클릭 되고 있나");

    NavResponsiveHham.classList.remove("is-active");
    // x 표시 클릭 했을 때 > 드롭다운 메뉴 사라지게 하기
    // NavResponsiveHham.style.display = 'none';

    // 스크롤 나타나게 하는 다른 코드. 이게 왜 되는지는 모르겠네.
    // document.documentElement.style.overflow = "auto";
  });
}
closeBtnXwidth1200underY200over();

// 🟦 취소 버튼, x 버튼 관련 함수

// 취소 버튼이 클릭되면 -> 햄버거 버튼 생기는 함수
function cancelBtnClickCreateHamburgBtn() {
  popupCloseBtn.addEventListener("click", function () {
    hamburgMenuButton.style.display = "block";
  });
}

// 그냥, 버튼 클릭되면 > 검색 없애기 (만들려고 시도했었음.)
function deleteDropdown() {
  스크롤바따라다니는버튼.addEventListener("click", function () {
    searchPopup.classList.remove("is-active");
  });
}

// 반응형 화면(x1200under, y200 over) 에서, X 버튼 클릭하면 > 검색 창이 나오게
// 📛 작동하는지는 모르겠음.
function closeBtnX1200underY200over() {
  SearchformX1200underY200over.addEventListener("click", function () {
    // 검색창 바로 떨어지게 하기
    searchPopup.classList.add("is-active");
    // 이걸 다른 검색창을 만들어서 거기에는 x 자를 붙여서 나오기

    // 새롭게 드롭다운 검색 + 취소 표시창 떨어지게 하기
    searchDropDownX1201Y200();

    // 반응형 화면 nav bar '제거'
    siteHeaderprimary.classList.remove("is-scrolled");

    // 드롭다운 없애기 ⭐⭐⭐⭐⭐⭐
    // x 자 만들기 함수
    createXIconBtn();

    // 파란박스가 스크롤 위치에 따라 상대적으로 움직이게 하기
    // searchPopupBtnCalcBoxTop.offsetHeight + "px"

    // 스크롤바 따라다니는 버튼
    // deleteDropdown()

    // search-popup-btn 의 x 값을 가져온다. ⭐⭐
    // searchPopupBtnCalcBoxTop.offsetHeight + "px"/
    // x 버튼의 top 에 이 값을 넣어본다.

    // 검색 창에 취소 버튼 붙이기
    // popupCloseBtn

    // 취소 버튼 누르면 -> 다시 나타나게 하기

    // x 버튼이 있어서, 그걸 누르면, 사라지게 하기
  });
}
closeBtnX1200underY200over();

// 🟦 검색 아이콘 버튼, 검색 버튼, 관련 함수

// under x 1200, over y scroll 200 일 때, 검색 버튼 누르면, 검색창 나오게 하기
function searchIconBtn() {
  dropdownSearchXWidthUnder1200.addEventListener("click", function () {
    searchPopup.classList.add("is-active");

    // 햄버거 버튼 없애기
    hamburgMenuButton.style.display = "none";
    // 취소버튼 클릭되면 > 햄버거 버튼 생성
    cancelBtnClickCreateHamburgBtn();
  });
}
// under x 1200, over y scroll 200 일 때, 검색 버튼 누르면, 검색창 나오게 하기
searchIconBtn();

// 🟦 로그인 완료되면, login 대신, 'nickname' 표시 되게 하기

// 🔷 accept 되면, lv1 로 바뀌어서 > 세션 스토리지에 자동 저장
// so, 세션 스토리지 값을 가져오면, 'accept 완료된, 로그인 성공한 유저' 를 가져오게 됨.

//////////////////////////////////////////////////////////

// sesstionStorage 에서 USER KEY 안에 있는 데이터 가져오기
let resMenuMainList = document.querySelectorAll(".res-menu-main-list");
let resMenuMainListCollections = resMenuMainList[0].querySelector(".res-menu-main-list-item");
let resMenuMainListItem = resMenuMainList[5].querySelector(".res-menu-main-list-item");

if (JSON.parse(sessionStorage.getItem("LOGIN"))) {
  let userSession = JSON.parse(sessionStorage.getItem("LOGIN"));

  // 가져온거 변수에 저장
  let UserNickname = userSession.nickname;

  // login 부분에 넣어주기
  let loginTag = document.querySelector("#id-login-btn");

  loginTag.innerHTML = `<img src="https://accidentallywesanderson.com/wp-content/themes/awa/assets/images/icon-user-red.svg" alt=""> ${UserNickname}`;

  resMenuMainListItem.innerHTML = `<img class="res-menu-main-list-a-img" src="https://accidentallywesanderson.com/wp-content/themes/awa/assets/images/icon-user-black.svg" alt="">
  ${UserNickname}`;
} else if (sessionStorage.getItem("ADMINLOGIN")) {
  let adminSession = JSON.parse(sessionStorage.getItem("ADMINLOGIN"));

  let adminName = adminSession.name;

  let adminTag = document.querySelector("#id-login-btn");

  adminTag.innerHTML = `<img src="https://accidentallywesanderson.com/wp-content/themes/awa/assets/images/icon-user-red.svg" alt=""> ${adminName}`;
  resMenuMainListItem.innerHTML = `<img class="res-menu-main-list-a-img" src="https://accidentallywesanderson.com/wp-content/themes/awa/assets/images/icon-user-black.svg" alt="">
  ${adminName}`;
}

// width 1200이하 heigth 200 이상 일때 햄버거 버튼 클릭시 나오는 팝업창에서 collections 누를경우
resMenuMainListCollections.addEventListener("click", function () {
  // Themes SEE ALL
  seeAllBtn[0].addEventListener("click", function () {
    localStorage.setItem("seeAll", "themes");
  });

  // Color Palettes SEE ALL
  seeAllBtn[1].addEventListener("click", function () {
    localStorage.setItem("seeAll", "color");
  });
  window.location = "./collections.html";
});

resMenuMainListItem.addEventListener("click", function () {
  // 로그아웃 기능 추가
  if (sessionStorage.getItem("LOGIN") || sessionStorage.getItem("ADMINLOGIN")) {
    if (confirm("로그아웃 하시겠습니까?")) {
      sessionStorage.clear();
      location.reload();
    } else {
      return;
    }
  }

  //   console.log("Login 시작");
  loginPopupContent.classList.add("is-active");
  loginPopup.classList.add("is-active");
});
/////////////////////////////////////////////////////////////////////

// 🔷 레퍼런스 코드 from 정현
// let sessionChk = JSON.parse(sessionStorage.getItem("test"));

// function sessionLoginChk(sessionChk) {
// let loginTag = document.querySelector("#id-login-btn");
// if (sessionChk) {
//     loginTag.innerHTML = `<img src="https://accidentallywesanderson.com/wp-content/themes/awa/assets/images/icon-user-red.svg" alt=""> ${sessionChk.name}`;
// }
// return sessionChk;
// }

// 🔷 'collection 영역 밖' 클릭하면 > collection 꺼지게 하기
function outsideClickCloseModal() {
  // let 전체 모달창 영역
  let collectionDropdownArea = document.querySelector(".collections-dropdown");

  collectionDropdownArea.addEventListener("click", function (event) {
    if (event.target !== collectionDropdownArea) {
      collectionsDropdown.classList.remove("is-active");
    }
  });
}
// 'collection 영역 밖' 클릭하면 > collection 꺼지게 하기
outsideClickCloseModal();

// ----------------👇👇👇 DJ DON'T TOUCH 👇👇👇--------------------------

// 🔷 '콜렉션 popupCloseBtn' 누르면 > 콜렉션 창 나오게 하기
navCollectionsBtn.addEventListener("click", function () {
  const scrollYPosition = window.scrollY;

  if (scrollYPosition > 200) {
    localStorage.setItem("seeAll", "themes");
    window.location = "./collections.html";
    console.log("찍힘");
  } else {
    if (!collectionsDropdown.classList.contains("is-active-for-home")) {
      collectionsDropdown.classList.add("is-active-for-home");
    } else {
      collectionsDropdown.classList.remove("is-active-for-home");
    }
  }
});

let loginPopup = document.querySelector(".login_popup"); // 로그인 창
let signupPopup = document.querySelector(".signup_popup"); // 회원가입 창
let moveToSignup = document.querySelector(".move_to_signup"); // 회원가입으로 이동
let moveToLogin = document.querySelector(".move_to_login");

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
  //   console.log("검색: ", searchInput);

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

// 🔷 로그인 popup
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

  //   console.log("Login 시작");
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
// header에 들어가는 함수 부분 끝 //

// 🔷 clone + container 의 width 업데이트

function updateContainerWidth() {
  // container 의 너비 = (358 + 55) * 4

  let xValueContainer = (itemMarginRight + itemWidth) * itemCount - itemMarginRight + "px";

  _gallerySlideContainer.style.width = xValueContainer;

  // let updateWidthAfterClone = (item_size + item_right_margin) * newSlideCount - item_right_margin + 'px';
}

function makeClone() {
  for (i = 0; i < arrAllItem.length; i++) {
    let cloneItem = arrAllItem[i].cloneNode(true);
    cloneItem.classList.add("clone");
    // cloneItem.innerHTML = `클론 사진 : ${i}`
    _gallerySlideContainer.append(cloneItem);
  }

  for (i = arrAllItem.length - 1; i >= 0; i--) {
    let cloneItem = arrAllItem[i].cloneNode(true);
    cloneItem.classList.add("clone");
    // cloneItem.innerHTML = `클론 사진 : ${i}
    _gallerySlideContainer.prepend(cloneItem);
  }

  updateContainerWidth();
}

makeClone();
// 클론하고싶은거wrapper.cloneNode(true)

// 🔷 버튼 누르면 반응

leftArrowBtn.addEventListener("click", function () {
  _gallerySlideContainer.classList.add("animated");
  moveContainer(currentIndex - 1);
});

rightArrowBtn.addEventListener("click", function () {
  _gallerySlideContainer.classList.add("animated");
  moveContainer(currentIndex + 1);
});

function moveContainer(num) {
  let xMoveAmount = (itemWidth + itemMarginRight) * -num;
  // console.log(`전체 움직여야 하는 양 : ${xMoveAmount}`)
  _gallerySlideContainer.style.left = `${xMoveAmount}px`;

  currentIndex = num;

  if (currentIndex == arrAllItem.length || -currentIndex == arrAllItem.length) {
    setTimeout(function () {
      _gallerySlideContainer.classList.remove("animated");

      // 전체가 처음으로 이동한다.
      _gallerySlideContainer.style.left = "0px";

      currentIndex = 0;
    }, 500);

    setTimeout(function () {
      _gallerySlideContainer.classList.add("animated");
    }, 600);
  }
}

////////////////////////////////////////////////////////////////////
// header nav bar 중 myPage
function loginCheck1() {
  let userLoginCheck = window.sessionStorage.getItem("LOGIN");
  let adminLoginCheck = window.sessionStorage.getItem("ADMINLOGIN");
  if (!userLoginCheck && !adminLoginCheck) {
    alert("Please login first.");
  } else {
    location.href = "./myPage.html";
  }
}

// header nav bar 중 board
function loginCheck2() {
  let userLoginCheck = window.sessionStorage.getItem("LOGIN");
  let adminLoginCheck = window.sessionStorage.getItem("ADMINLOGIN");
  if (!userLoginCheck && !adminLoginCheck) {
    alert("Please login first.");
  } else {
    location.href = "./board.html";
  }
}

// header nav bar 중 submit
function loginCheck3() {
  let userLoginCheck = window.sessionStorage.getItem("LOGIN");
  let adminLoginCheck = window.sessionStorage.getItem("ADMINLOGIN");
  if (!userLoginCheck && !adminLoginCheck) {
    alert("Please login first.");
  } else {
    location.href = "./submit.html";
  }
}

// header Collections 누르면 나오는 Themes, Color Palettes 이미지 눌렀을때
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

// Collections Themes, Color Palettes SEE ALL 눌렀을 경우
let seeAllBtn = document.querySelectorAll(".see-all-btn");

// Themes SEE ALL
seeAllBtn[0].addEventListener("click", function () {
  localStorage.setItem("seeAll", "themes");
});

// Color Palettes SEE ALL
seeAllBtn[1].addEventListener("click", function () {
  localStorage.setItem("seeAll", "color");
});
