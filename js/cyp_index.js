/*
* @Author: admin
* @Date:   2018-06-27 09:24:42
* @Last Modified by:   admin
* @Last Modified time: 2018-06-29 16:04:47
*/

'use strict';
	$('.cyp_dropdown').hover(function() {
		$('.cyp_dropdown_menu').css('display','block');
		$(this).css('background','black');
	}, function() {
		$('.cyp_dropdown_menu').css('display','none');
		$(this).css('background','transparent');
	});
	
	$('.cyp_li>li').children().hover(function(){
	  	$(this).addClass('current');
	}, function () {
		$(this).removeClass('current');
		}
	);
	$('.cyp_img2').fadeTo('1000', 1, function() {
			$(this).css('top','0px')
	});

	$(window).scroll(function(){
		if($(window).scrollTop()>=$('.cyp_img2').offset().top-$('.cyp_img2').height()&&$(window).scrollTop()<=$('.cyp_img2').offset().top+$('.cyp_img2').height()){
			$('.cyp_img2').css('top','0px');
			$('.cyp_img2').css('opacity','1');
		}else{
			$('.cyp_img2').css('top','30px');
			$('.cyp_img2').css('opacity','0.5');
		}
	});
	$(window).scroll(function(event) {
		if($(window).scrollTop()>=$('.cypa_dong1').offset().top-$(window).height()&&$(window).scrollTop()<=$('.cypa_dong1').offset().top+$('.cypa_dong1').height()){
			$('.cypa_dong1').css('top','0px');
		}else{
			$('.cypa_dong1').css('top','30px');
		}
	});
	$(window).scroll(function(event){
		if($(window).scrollTop()>=$('.cypb_dong2').offset().top-$(window).height() && $(window).scrollTop()<=$('.cypb_dong2').offset().top+$('.cypb_dong2').height()){
			$('.cypb_dong2').css('opacity','1');
			console.log($('.cypb_dong2').height());
		}else{
			$('.cypb_dong2').css('opacity','0');
		}
	});
	$(window).scroll(function(event){
		if($(window).scrollTop()>=$('.cypa_dong3').offset().top-$(window).height() && $(window).scrollTop()<=$('.cypa_dong3').offset().top+$('.cypa_dong3').height()){
			$('.cypa_dong3').css('opacity','1');
			$('.cypa_dong3').css('left','0px')
		}else{
			$('.cypa_dong3').css('opacity','0.5');
			$('.cypa_dong3').css('left','-30px')
		}
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
