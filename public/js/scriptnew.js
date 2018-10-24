$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});

$(function(){
	$(".scroll").click(function(){
		$("html,body").animate({scrollTop:$("body").offset().top
	},"1000");return false})
});
$(document).ready(function(){
	if ($(window).width() <= 767) {
		if($('.navbar-inverse').hasClass('hide')) {
			$('.navbar-inverse').removeClass('hide');
			$('.navbar-inverse').addClass('show');
			$('.navitems').addClass('hide');
			$('.navbar-inverse').css({"background-color":"white","border-color":"white","border":"none"});
			$('.navbar-collapse').css({"border-color":"white"});
		}
	}
});

$(document).on('click', '.navitems .navli', function(){
	if($('.navitems li').siblings().hasClass('active')) {
		$('.navitems li').siblings().removeClass('active');
		$(this).addClass('active');
	}
});
$(document).on('click', '.dropdown-menu li', function(){
	if($('.dropdown-menu li').siblings().hasClass('active')) {
		$('.navitems li').siblings().removeClass('active');
	}
	$(this).addClass('active');
});