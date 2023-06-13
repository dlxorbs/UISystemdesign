const array = [
  {
    title: "인기",
    category: [
      "전체",
      "데님팬츠",
      "피케/카라 티셔츠",
      "캡/야구모자",
      "반소매 티셔츠",
      "캔버스/단화",
      "코튼팬츠",
      "맨투맨/스웨트셔츠",
      "셔츠/블라우스",
      "샌들",
      "슬리퍼",
    ],
  },
  {
    title: "상의",
    category: [
      "전체",
      "니트/스웨터",
      "피케/카라 티셔츠",
      "후드 티셔츠",
      "반소매 티셔츠",
      "긴소매티셔츠",
      "스포츠 상의",
      "맨투맨/스웨트셔츠",
      "셔츠/블라우스",
      "기타 상의",
    ],
  },
  {
    title: "바지",
    category: [
      "전체",
      "데님팬츠",
      "코튼팬츠",
      "트레이닝/조거팬츠",
      "슈트팬츠/슬랙스",
      "스포츠 하의",
      "기타 바지",
    ],
  },
  {
    title: "아우터",
    category: [
      "전체",
      "후드집업",
      "블루종/MA-1",
      "레더/라이더스 재킷",
      "무스탕 /퍼",
      "트러커 재킷",
      "슈트/블레이저 재킷",
      "카디건",
      "플리스",
      "트레이닝 재킷",
    ],
  },
];

$(function () {
  for (let i = 0; i < array.length; i++) {
    const title = array[i].title;
    const category = array[i].category;

    const navmenu = $('<div class="navmenu"><div>+</div></div>').prepend(
      $('<a href="#"></a>').text(title)
    );
    const ul = $('<ul class="category"></ul>');

    for (let j = 0; j < category.length; j++) {
      const listItem = $("<li></li>").text(category[j]);
      ul.append(listItem);
    }

    const submenu = $('<div class="submenu non-click"></div>').append(ul);
    const tablist = $('<div class="tablist"></div>')
      .append(navmenu)
      .append(submenu);
    $(".sidebar-container").append(tablist);
  }

  $(".tablist").click(function (e) {
    const submenu = $(this).children(".submenu");

    $(submenu).toggleClass("non-click");
    $(submenu).toggleClass("click");
  });
});

const text_box =
  '<div class="card-Avatar"><div class="thumbnail"></div><div class="textcontainer"><span class="username">username</span><p class="codyname">코디이름</p><div class="sub"><div class="new"><strong>N</strong></div><p>DIVISION</p><div class="view">조회</div></div></div></div></div>';

for (i = 0; i < 20; i++) {
  $(".card-container").append(text_box);
  //  $($('.card-Avatar')[i].children[0].css("width", "100px"))
  $(".thumbnail")
    .eq(i)
    .css("background-image", `url(./img/cha${i + 1}.png)`);
}

const text_box2 =
  '<div class="cards"><p1 class="lable">L</p1><img class="Thum" src="./img/Top1.png" style="-webkit-user-drag: none;" alt=""><h1>엠벨비</h1><span class="title">루키 언스트럭쳐 볼캡 LA (Blue)</span><div class="price"><p>36,000원</p><p>36,000원</p></div><div class="couponFlex"><div class="coupon">쿠폰</div><div>-10,000원</div></div><div class="star"><img src="./img/star.png" alt=""><img src="./img/star.png" alt=""><img src="./img/star.png" alt=""><img src="./img/star.png" alt=""><img src="./img/star.png" alt=""><span>15,327</span></div><div class="heart"><img src="./img/heart2.png" alt=""><span>44,154</span></div></div></div>';

for (i = 0; i < 10; i++) {
  $(".cardLayout").eq(0).append(text_box2);
  $(".Thum")
    .eq(i)
    .attr("src", `./img/cloth/cloth${i + 1}.png`);
}

for (i = 10; i < 18; i++) {
  $(".cardLayout").eq(1).append(text_box2);

  $(".Thum")
    .eq(i)
    .attr("src", `./img/cloth/cloth${i + 1}.png`);
}

// 스크롤
// 스크롤
let curDown = false;
let curXPos = 0;
let scrollOffset = 0;
const dragThreshold = 10; // 일정 거리 이상의 드래그를 인식하기 위한 임계값 설정
let dragThreshold1;
let dragThreshold2;

$(".cardLayoutWrap").mousemove(function (m) {
  if (curDown) {
    const dragOffset = m.clientX - curXPos;
    scrollOffset += dragOffset;
    $(".cardLayoutscroll").css({ transform: `translateX(${scrollOffset}px)` });
    curXPos = m.clientX;
  }
});

$(".cardLayoutWrap").mousedown(function (m) {
  curXPos = m.clientX;
  dragThreshold1 = curXPos;
  curDown = true;
});

$(".cardLayoutWrap").mouseup(function (m) {
  dragThreshold2 = curXPos;
  if (Math.abs(dragThreshold1 - dragThreshold2) > dragThreshold) {
    // 일정 거리 이상의 드래그인 경우 클릭 방지
    m.preventDefault();
  }
  curDown = false;
  console.log(Math.abs(dragThreshold1 - dragThreshold2));
});
