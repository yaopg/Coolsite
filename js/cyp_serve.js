/*
* @Author: admin
* @Date:   2018-07-03 08:47:20
* @Last Modified by:   admin
* @Last Modified time: 2018-07-03 16:27:25
*/

'use strict';
$('.cyp_dropdown').hover(function() {
    $('.cyp_dropdown_menu').css('display','block');
    $(this).css('background','black');
}, function() {
    $('.cyp_dropdown_menu').css('display','none');
    $(this).css('background','transparent');
});

$(window).scroll(function(event){
    if($(window).scrollTop()>=$('.cyp_one>.navbar').height()){
        $('.cyp_one>.navbar').addClass('navbar-fixed-top');
        $('.cyp_one>.navbar').css('min-height','60px');
        $('.cyp_one>.navbar-default').css('background','black');

        $('.cyp_one>.navbar-default').css('border-color','transparent');
    }else{
        $('.cyp_one>.navbar').removeClass('navbar-fixed-top');
        $('.cyp_one>.navbar').css('min-height','75px');
        $('.cyp_one>.navbar-default').css('background','transparent');
        $('.cyp_one>.navbar-default').css('border-color','#e7e7e7');

    }
});
$('.cypb_nav>span').click(function() {
    $(this).addClass('current').siblings().removeClass('current');
    if($(this).index()==0){
        $('.cypb_current').css('display','none');
    }else{
          $('.cypb_current').css('display','block');
    }
});
$('.cypb_pad').hover(function() {
    $(this).children('.cypb_pad_cut').css('visibility','visible');
    console.log($(window).width());
    if($(window).width()>=750) {
        $(this).css('box-shadow', '1px 1px 1px 1px #edf2f9')
        $(this).css('background', 'white');
    }
}, function() {
     $(this).children('.cypb_pad_cut').css('visibility','hidden');
     $(this).css('box-shadow','0px 0px 0px transparent')
    $(this).css('background','transparent');

});