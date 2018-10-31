$(document).ready(function(){
	$('#proficiency').addClass('animated');
	$('#proficiency').addClass('jackInTheBox');
	$('.contactheading').addClass('animated');
	$('.contactheading').addClass('jackInTheBox');
	$('.aboutheading').addClass('animated');
	$('.aboutheading').addClass('jackInTheBox');
	$('.mission').addClass('animated');
	$('.mission').addClass('fadeInLeftBig');
	$('.vision').addClass('animated');
	$('.vision').addClass('fadeInLeftBig');
	$('.values').addClass('animated');
	$('.values').addClass('fadeInLeftBig');
});
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
   	document.getElementById("navbar").style.top = "0";
   } else {
   	document.getElementById("navbar").style.top = "-20em";
   }
}
$(window).on('beforeunload', function(){
   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
   	document.getElementById("navbar").style.top = "0";
   } 
   else {
   	document.getElementById("navbar").style.top = "-20em";
  	}
});
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
$(document).on('mouseover, mouseenter', '.linkli, .dropdown', function(){
	$('.dropdown-menu',this).show();
	$('.dropdown-menu',this).css("overflow-y", "hidden");
});
$(document).on('mouseout, mouseleave', '.linkli, .dropdown', function(){
	$('.dropdown-menu',this).hide();
});
$(document).on('mouseover, mouseenter', '.fa-map-marker,.fa-phone, .fa-envelope-o, .description, #addr, #phone, #email', function(){
	$(this).addClass('animated	');
	$(this).addClass('pulse');
});
$(document).on('mouseout, mouseleave', '.fa-map-marker,.fa-phone, .fa-envelope-o, .description, #addr, #phone, #email', function(){
	$(this).removeClass('animated	');
	$(this).removeClass('pulse');
});
$(document).on('mouseover, mouseenter', '.mission h4,.vision h4, .values h4, .mission h5,.vision h5, .values h5', function(){
	$(this).addClass('animated	');
	$(this).addClass('pulse');
});
$(document).on('mouseout, mouseleave', '.mission h4,.vision h4, .values h4, .mission h5,.vision h5, .values h5', function(){
	$(this).removeClass('animated	');
	$(this).removeClass('pulse');
});

// $(document).on('click', '.dropdown-menu li', function(){
// 	if($('.dropdown-menu li').siblings().hasClass('active')) {
// 		$('.navitems li').siblings().removeClass('active');
// 	}
// 	$(this).addClass('active');
// });