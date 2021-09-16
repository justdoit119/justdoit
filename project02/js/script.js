$(document).ready(function(){


// 내비게이션 
    $('.Sm').hide();
    $('.Mm > .Ml').hover(
        function(){
            $(this).find('.Sm').stop().slideDown();
        },
        function(){
            $('.Sm').stop().slideUp();
        }
    );

// 메인 슬라이드
var current = 0;

timer();
function timer(){
    setIntervalId = setInterval(function(){
        var m_s = current + 1;
        if(m_s == 3){m_s = 0;}
        move(m_s)},4000);
}

function move(m_s){
    if(current == m_s) return;

    var currentEl = $('.m_slide > li').eq(current);
    var nextEl = $('.m_slide > li').eq(m_s);

    currentEl.css({left:'0%'}).animate({left:'-100%'},2000);
    nextEl.css({left:'100%'}).animate({left:'0%'},2000);

    current = m_s
}

// 컨텐츠 01 : 베스트메뉴 - bx 슬라이더
$('.bxslider').bxSlider({
    auto : true, //자동으로 애니메이션 시작
    speed : 1000, //애니메이션 속도
    pause : 4000, //애니메이션 유지시간(1000 = 1초)
    mode : 'horizontal', //슬라이드 모드('fade','horizontal',vertcal' 이 있음)
    autoControls : false , //시작 및 중지버튼이 보여짐
    pager : false , //페이지표시 보여짐
    captions : false, // 이미지 위에 텟스트를 넣을 수 있음
    minSlides: 1,    // 최소 노출 개수
    maxSlides: 5,      // 최대 노출 개수
    slideWidth: 280,
    moveSlides: 1,
});

/*
//con2 doboo brand // 스크롤을 벗어나면 제자리 돌아오는 작업을 해야함! 
$(window).scroll(function(){
    $('.con2_right').each(function(){
        var con2R = $(this).offset().top + $(this).outerHeight();
        var con2R_window = $(window).scrollTop() + $(window).height();
    
    if(con2R_window > con2R){
        $('.con2_left').css({'display':'block', 'opacity':'0.3', 'left':'1200px'}).animate({'opacity':'1', 'left':'-60px'},2200);
        $('.con2_middle').css({'display':'block', 'opacity':'0.3', 'left':'1200px'}).animate({'opacity':'1', 'left':'465px'},2000);
    }
    // else if(){}
    });
});
*/

//컨텐츠 02 : 도부 브랜드 
$(window).scroll(function(){
      
    var sct = $(document).scrollTop(); //내려간것은 인식하는데 올라간것은 인식을 못함
    
    if(sct > 1100){
        $('.con2_left').css({'display':'block','opacity':'0.3', 'left':'1200px'}).animate({'opacity':'1', 'left':'-60px'},2000);
        $('.con2_middle').css({'display':'block','opacity':'0.3', 'left':'1200px'}).animate({'opacity':'1', 'left':'465px'},1500);
    }
    else if(sct < 0){
        $('.con2_left').animate({'left':'1200px'},2200);
        $('.con2_middle').animate({'left':'1200px'},2000);
    }

});

// 위로 올라가기 top 버튼
$( window ).scroll( function() {
	if ( $( this ).scrollTop() > 200 ) {
		$( '.window_top' ).fadeIn();
	} else {
		$( '.window_top' ).fadeOut();
	}
});
$( '.window_top' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
} );

















});