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


// 책갈피(history-novel-movie) 
var h_li = $('.history').parent('li')
var n_li = $('.novel').parent('li')
var m_li = $('.movie').parent('li')

$('.t_h').css({display:'block'})
$('.t_n').css({display:'none'})
$('.t_m').css({display:'none'});

$('.history').addClass('on1');

$(h_li).click(function(){
    $('.t_h').css({display:'block',opacity:0}).animate({opacity:1});
    $('.t_n').css({display:'none',opacity:1}).animate({opacity:0});
    $('.t_m').css({display:'none',opacity:1}).animate({opacity:0});

    $('.history').addClass('on1');
    $('.novel').removeClass('on2');
    $('.movie').removeClass('on3');
});


$(n_li).click(function(){
    $('.t_h').css({display:'none',opacity:1}).animate({opacity:0});
    $('.t_n').css({display:'block',opacity:0}).animate({opacity:1});
    $('.t_m').css({display:'none',opacity:1}).animate({opacity:0});

    $('.history').removeClass('on1');
    $('.novel').addClass('on2');
    $('.movie').removeClass('on3');
});


$(m_li).click(function(){
    $('.t_h').css({display:'none',opacity:1}).animate({opacity:0})
    $('.t_n').css({display:'none',opacity:1}).animate({opacity:0})
    $('.t_m').css({display:'block',opacity:0}).animate({opacity:1});

    $('.history').removeClass('on1');
    $('.novel').removeClass('on2');
    $('.movie').addClass('on3');
});


// 1200 사이드 메뉴 나타내고 없애기 

$('.side_menu').hide();
$('.hamburger').click(function(){
    $('.side_menu').show().css({width:'0',opacity:0}).animate({width:'50vw', opacity:1},1000);
    $(this).css({display:'none'})
});
$('.cancle').click(function(){
    $('.side_menu').css({width:'50vw',opacity:1}).animate({width:'0vw', opacity:0},1000);
    $('.hamburger').css({opacity:0}).animate({opacity:1},2500).show();
});


// 1200 사이드 세로메뉴 

$('.Ssub_menu').hide();
 
  init(1)
  function init(n){
      $('li.Smain_list').eq(n).find('ul').show();
  }
$('.title').click(function(){
    if($(this).next().css('display') == 'none'){
        $('Ssub_menu').each(function(){
            if($(this).css('display') == 'block'){
                $(this).slideUp();
            }
        });
        $(this).next().slideDown();
    }else{
        return false;
    }
});

});
