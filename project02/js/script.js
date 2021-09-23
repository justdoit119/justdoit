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

    $('.Mm').css({'display':'none'});
    $('.hambuger').click(function(){
        $('.Mm').toggle('slow');
    });
        


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
    speed : 500, //애니메이션 속도
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
 
//컨텐츠 02 : 도부 브랜드 
$(window).scroll(function(){
    var sct = $(document).scrollTop();

    if( 1000 < sct && sct < 2400 ){
        $('.con2_left').show();
        $('.con2_middle').show();
    }
    else if( sct == 0 && sct < 2500 ){
        $('.con2_left').hide();
        $('.con2_middle').hide();
    }  
    return true
});

// 위로 올라가기 top 버튼
$( window ).scroll( function() {
	if ( $( this ).scrollTop() > 300 ) {
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