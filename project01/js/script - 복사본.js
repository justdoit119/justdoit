$(document).ready(function(){


//헤더 네비 작업 
$('.sub_menu').hide();
$('.main_menu > .main_list').hover(
    function(){
        $(this).find('.sub_menu').slideDown();
    },
    function(){
        $('.sub_menu').hide();
    }
);


// 메인 자동 슬라이드 

var current = 0;

timer();
function timer(){
    setIntervalId = setInterval(function(){
        var m = current + 1;
        if(m == 4){m = 0;}
    move(m)},5000);
}

function move(m){
    if(current == m) return;

    var currentEl = $('.main_slide > ul > li').eq(current);
    var nextEl = $('.main_slide > ul > li').eq(m)

    currentEl.css({left:'0%'}).animate({left:'-100%'},2000);
    nextEl.css({left:'100%'}).animate({left:'0%'},2000);
    
    current = m
}


// 이벤트 서브 슬라이드 
/***********************************
이벤트 서브 슬라이드 질문 
★ 슬라이드가 넘어갈때,
 슬라이드와 같은 순서인 페이저의 색상과 크기가 변경되었으면 함. 
(1. 클릭하면 색상이 파란색으로 변해야하는데 변하지 않아요.
 2. 클릭 후에 슬라이드 넘어가도 페이저 크기가 돌아오지 않아요. )
***********************************/
var current_s = 0;
var setIntervalId_s;

$('.banner_buttton > li').each(function(){

    $('.banner_buttton > li').click(function(e){
        e.preventDefault(); //a태그의 이벤트 기능 취소
    
        $('.banner_buttton > li').removeClass("on");
        $(this).addClass("on");
    
        var i = $(this).index();
        movie(i);
    });
    

});

timer_s();
function timer_s(){
    setIntervalId_s = setInterval(function(){
        var m_s = current_s + 1;
        if(m_s == 3){m_s = 0;}
        movie(m_s)},4000);
}

$('.banner_area').mouseover(function(){
    clearInterval(setIntervalId_s);
});
$('.banner_area').mouseout(function(){
    timer_s();
});

function movie(m_s){
    if(current_s == m_s) return;

    var currentEl_s = $('.con1_banner1 > li').eq(current_s);
    var nextEl_s = $('.con1_banner1 > li').eq(m_s);

    currentEl_s.css({left:'0%'}).animate({left:'-100%'},2000);
    nextEl_s.css({left:'100%'}).animate({left:'0%'},2000);
    
    current_s = m_s
}

// 갤러리 _ bxslider
$('.bxslider').bxSlider({
    mode:'fade',
    responsive:'true',
    // slideWidth:'720px',
    // slideHeigt:'380px',
    slideMargin:'0px',
    pagerCustom: '#bx-pager'
    
}); 


// 햄버거바 사이드 메뉴 나타내고 없애기 

$('.side_menu').hide();
$('.hamburger').click(function(){
    $('.side_menu').show().css({width:'0',opacity:0}).animate({width:'50vw', opacity:1},1000);
    $(this).css({display:'none'})
});
$('.cancle').click(function(){
    $('.side_menu').css({width:'50vw',opacity:1}).animate({width:'0vw', opacity:0},1000);
    $('.hamburger').css({opacity:0}).animate({opacity:1},2500).show();
});

// 햄버거바 사이드 세로메뉴  
// 슬라이드 토글로 수정 - 민재 오빠 가르쳐준 
//안되네!!

$('.Ssub_menu').hide();
    $('.Smain_menu>li>a').click(function(){
        //e.preventDefault();
        $(this).next('.Ssub_menu').stop().slideToggle();
    });



/*
$('.Ssub_menu').hide();

$('.title').click(function(){
    $('.Ssub_menu').each(function(i){
            console.log('index:'+i);
        if($(this).css('display') == 'block'){
            $(this).slideUp();
        }
    });
    $(this).next().slideDown();
});
*/


});




