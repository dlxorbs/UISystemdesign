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
