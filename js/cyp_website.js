/**
 * Created by yp on 2018/7/1.
 */
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

$('.cyp_con_img').mouseenter(function () {
    $(this).children('img').css('transform','scale(1.5,1.5)');
    $(this).children('img').css('opacity','0.8');
    $(this).children('.cyp_con_img_co').addClass('current');
});
$('.cyp_con_img').mouseleave(function () {
    $(this).children('img').css('transform','scale(1,1)');
    $(this).children('img').css('opacity','1');
    $(this).children('.cyp_con_img_co').removeClass('current');
});