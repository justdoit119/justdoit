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
    

    /* 컨테이너 1 */
    $('.menu>.menu1').addClass('on1');
    $('.con_menu1').css({display:'block'});
    $('.con_menu2').css({display:'none'});
    
    $('.menu>.menu1').click(function(){
        $('.con_menu1').css({display:'block'});
        $('.con_menu2').css({display:'none'});
        $(this).addClass('on1');
        $('.menu>.menu2').removeClass('on2')
    });

    $('.menu>.menu2').click(function(){
        $('.con_menu1').css({display:'none'});
        $('.con_menu2').css({display:'block'});
        $(this).addClass('on2');
        $('.menu>.menu1').removeClass('on1')
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
    