/**
 * Created by yp on 2018/6/30.
 */
$('.cyp_two_img').mouseenter(function () {
    $(this).children('img').css('transform','scale(1.5,1.5)');
    $(this).children('img').css('opacity','0.8');
    $(this).children('i').css('visibility','visible');
    $(this).children('i').css('transform','rotate(360deg)');

});
$('.cyp_two_img').mouseleave(function () {
    $(this).children('img').css('transform','scale(1,1)');
    $(this).children('img').css('opacity','1');
    $(this).children('i').css('visibility','hidden');
    $(this).children('i').css('transform','rotate(0deg)');
});
var num=$('.cyp_two_none').offset().top;
$(window).scroll(function(){
    if($(window).scrollTop()>=num){
        $('.cyp_two_none').addClass('cyp_fixed');
        $('.cyp_two_none').removeClass('col-sm-3');
        $('.col-sm-9').addClass('col-sm-offset-3');
    }else{
        $('.cyp_two_none').removeClass('cyp_fixed');
        $('.col-sm-9').removeClass('col-sm-offset-3');
        $('.cyp_two_none').addClass('col-sm-3');
    }
});
var li_num;
$('.cyp_two_li li').click(function () {
    $(this).addClass('current').siblings().removeClass('current');
    li_num=$(this).index();
    console.log(li_num);
    if(li_num==0){
        $('.cyp_nav').removeClass('cyp_current');
        $('.cyp_nav').siblings().removeClass('cyp_current');
    } else if(li_num==1){
        $('.cyp_nav').removeClass('cyp_current');
        $('.cyp_nav').siblings().addClass('cyp_current');
    }else if(li_num==2){
        $('.cyp_pic').removeClass('cyp_current');
        $('.cyp_pic').siblings().addClass('cyp_current');
    }else if(li_num==3){
        $('.cyp_charact').removeClass('cyp_current');
        $('.cyp_charact').siblings().addClass('cyp_current');
    }else if(li_num==4){
        $('.cyp_image').removeClass('cyp_current');
        $('.cyp_image').siblings().addClass('cyp_current');
    }else if(li_num==5){
        $('.cyp_tearn').removeClass('cyp_current');
        $('.cyp_tearn').siblings().addClass('cyp_current');
    }else if(li_num==6){
        $('.cyp_content').removeClass('cyp_current');
        $('.cyp_content').siblings().addClass('cyp_current');
    }else if(li_num==7){
        $('.cyp_product').removeClass('cyp_current');
        $('.cyp_product').siblings().addClass('cyp_current');
    }else if(li_num==8){
        $('.cyp_customer').removeClass('cyp_current');
        $('.cyp_customer').siblings().addClass('cyp_current');
    }else if(li_num==9){
        $('.cyp_fo').removeClass('cyp_current');
        $('.cyp_fo').siblings().addClass('cyp_current');
    }else if(li_num==10){
        $('.cyp_cms').removeClass('cyp_current');
        $('.cyp_cms').siblings().addClass('cyp_current');
    }else{
        $('.cyp_event').removeClass('cyp_current');
        $('.cyp_event').siblings().addClass('cyp_current');
    }


});
