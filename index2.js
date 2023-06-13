// 스크롤
let curDown = false,
curYPos = 0,
curXPos = 0;


$('.cardLayoutWrap').mousemove(function(m){
  if(curDown){
    $('.cardLayoutWrap').scrollBy(120, 0)
  }
});

$('.cardLayoutWrap').mousedown(function(m){
curYPos = m.offsetY;
curXPos = m.offsetX;
curDown = true;

});

$('.cardLayoutWrap').mouseup(function(){
curDown = false;
});
