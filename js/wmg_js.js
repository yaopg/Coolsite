$(document).ready(function(){

	//nav固定定位

	$(window).scroll(function(){
		if($(window).scrollTop() > 73){
			$('.wmg_header').css({'position':'fixed','background':'#000','border-bottom':'0px solid #6f6f6f'});
		}else{
			$('.wmg_header').css({'position':'','background':'rgba(0, 0, 0, 0)','border-bottom':'1px solid #6f6f6f'});
			$('.wmg_smallprogram_top .wmg_header').css({'position':'','background':'rgba(0, 0, 0, 0)','border-bottom':'1px solid #499095'});	
		}
	});

	

	//下拉菜单
    $('.wmg_header .dropdown').hover(function(event) {
        $('.wmg_header .dropdown-menu').css('display','block');
        $('.wmg_header .nav .special_li').css('margin-top', '95px');
    },function(){
        $('.wmg_header .dropdown-menu').css('display','none');
        $('.wmg_header .nav .special_li').css('margin-top', '0px');
    });


	$('.wmg_header .dropdown').click(function(event) {
		var jq_display= $('.wmg_header .dropdown-menu').css('display');
		if(jq_display == 'block'){
			$('.wmg_header .dropdown-menu').css('display','none');
            $('.wmg_header .nav .special_li').css('margin-top', '0px');
		}
		else{
			$('.wmg_header .dropdown-menu').css('display','block');
            $('.wmg_header .nav .special_li').css('margin-top', '95px');
		}
		// $(this).css('color','#fff');
		// $('.wmg_header .dropdown-toggle').css('color','#fff');
		return false;
	});


	//二维码
	$('.li_erweima a').hover(function() {
		$('.erweima').css('display','block');
	}, function() {
		$('.erweima').css('display','none');
	});


	//验证码

	$('.wmg__codes em p').html(codes(4));
	function codes(n){
      var a="azxcvbnmsdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789";
      var b="";
    for (var i = 0;i<n;i++){
      var index=Math.floor(Math.random()*62);
       b+=a.charAt(index);
 
    }
    return b;
    };

    $('.wmg__codes em').click(function(event) {
    	$('.wmg__codes em p').html(codes(4));
    });
    

    //checkbox
    $('.span_right input').click(function(event) {
    	if($('.span_right input').attr('value') == 'true'){
    		$(".span_right input").removeAttr("checked");
    		$('.span_right input').attr('value','false');
    		$('.button_left').attr('disabled','disabled');
    		$('.button_left').css('background', '#046ebc');
    	}else{
    		$(".span_right input").attr("checked",'');
    		$('.span_right input').attr('value','true');
    		$('.button_left').removeAttr("disabled");
    		$('.button_left').removeAttr('style');
    	}
    });



    //websitecases->蒙版
    $('.websitecase_con .thumbnail>img').mouseenter(function(event) {
    	$(this).siblings('.bg_col').css({'display':'block','opacity':'1'});
    });

    $('.websitecase_con .thumbnail .bg_col').mouseenter(function(event) {
    	$(this).css({'display':'block','opacity':'1'});
    });

    $('.websitecase_con .thumbnail>img').mouseleave(function(event) {
    	$(this).siblings('.bg_col').css('display', 'none');
    });

    $('.websitecase_con .thumbnail .bg_col').mouseleave(function(event) {
    	$(this).css('display', 'none');
    });
    //websitecases->li
    $('.li_active a').removeAttr('href');

    $('.controls_list li').click(function(event) {
    	$(this).addClass('li_active');
    	$(this).siblings().removeClass('li_active');
    	$(this).children('a').removeAttr('href');
    	$(this).siblings().children('a').attr('href','#');
    	$('.websitecase_con .container').eq($(this).index()).addClass('case_list_block');
    	$('.websitecase_con .container').eq($(this).index()).siblings('.container').removeClass('case_list_block');
    	$('body').animate({'scrollTop': '0'}, 500);
        return false;
    });

    


   

});
