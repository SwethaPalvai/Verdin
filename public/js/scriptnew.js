window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-20em";
  }
}

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
// $(document).ready(function(){
// 	if ($(window).width() <= 767) {
// 		if($('.navbar-inverse').hasClass('hide')) {
// 			$('.navbar-inverse').removeClass('hide');
// 			$('.navbar-inverse').addClass('show');
// 			$('.navitems').addClass('hide');
// 			$('.navbar-inverse').css({"background-color":"white","border-color":"white","border":"none"});
// 			$('.navbar-collapse').css({"border-color":"white"});
// 		}
// 	}
// });

$(document).on('click', '.navbarright li', function(){
	if($('.navbarright li').siblings().hasClass('active')) {
		$('.navbarright li').siblings().removeClass('active');
		$(this).addClass('active');
	}
});
$(document).on('click', '.navitems .linkli', function(){
	if($('.navitems li').siblings().hasClass('active')) {
		$('.navitems li').siblings().removeClass('active');
		$(this).addClass('active');
	}
});
$(document).on('hover', '.linkli', function(){
	alert();
});
// $(document).on('click', '.dropdown-menu li', function(){
// 	if($('.dropdown-menu li').siblings().hasClass('active')) {
// 		$('.navitems li').siblings().removeClass('active');
// 	}
// 	$(this).addClass('active');
// });