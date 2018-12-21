$(document).ready(function(){
	$('#proficiency').addClass('animated');
	$('#proficiency').addClass('jackInTheBox');
	$('.contactheading').addClass('animated');
	$('.contactheading').addClass('jackInTheBox');
	$('.aboutheading').addClass('animated');
	$('.aboutheading').addClass('jackInTheBox');
	$('.employersheading').addClass('animated');
	$('.employersheading').addClass('jackInTheBox');
	abtheight = $('.AboutUs').height();//alert(abtheight);104
	visionheight = $('.vision').height();//alert(visionheight);83
	valuesheight = $('.values').height();//alert(valuesheight);104
	if ($(window).width() <= 767) {
		if($('.outsourcingm').hasClass('hide')) {
			$('.outsourcingm').removeClass('hide');
			$('.outsourcingm').addClass('show');
			$('.outsourcingl').addClass('hide');
		} 
		else
		{
			if($('.outsourcingl').hasClass('hide')) {
				$('.outsourcingl').removeClass('hide');
				$('.outsourcingl').addClass('show');
				$('.outsourcingm').addClass('hide');
			}
		}
		if($('.staffingm').hasClass('hide')) {
			$('.staffingm').removeClass('hide');
			$('.staffingm').addClass('show');
			$('.staffingl').addClass('hide');
		}
		else
		{
			if($('.staffingl').hasClass('hide')) {
				$('.staffingl').removeClass('hide');
				$('.staffingl').addClass('show');
				$('.staffingm').addClass('hide');
			}
		}
	}
});
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
	$(".values:visible").addClass("animated fadeInLeftBig");
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ) {
   	document.getElementById("navbar").style.top = "0";
   	$('.mission').addClass('animated');
		$('.mission').addClass('fadeInLeftBig');
   } else {
   	document.getElementById("navbar").style.top = "-20em";
   	$('.mission').removeClass('animated');
		$('.mission').removeClass('fadeInLeftBig');
    }
  //  if (document.body.scrollTop > 183 || document.documentElement.scrollTop > 183 && 
  //  	document.body.scrollTop < 204 || document.documentElement.scrollTop < 204 ) {
  //  	$('.vision').addClass('animated');
		// $('.vision').addClass('fadeInLeftBig');
  //  }
  //  else
  //  {
  //  	$('.vision').removeClass('animated');
		// $('.vision').removeClass('fadeInLeftBig');
  //  }
  //  if (document.body.scrollTop > 304 || document.documentElement.scrollTop > 304&& 
  //  	document.body.scrollTop < 404 || document.documentElement.scrollTop < 404) {
  //  	$('.values').addClass('animated');
		// $('.values').addClass('fadeInLeftBig');
  //  }
  //  else
  //  {
  //  	$('.values').removeClass('animated');
		// $('.values').removeClass('fadeInLeftBig');
  //  }
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
$(document).on('mouseover, mouseenter', '#proficiency', function(){
	$(this).removeClass('jackInTheBox');
	$(this).addClass('animated');
	$(this).addClass('bounceIn');
});
$(document).on('mouseout, mouseleave', '#proficiency', function(){
	$(this).removeClass('animated');
	$(this).removeClass('bounceIn');
});
$(document).on('mouseover, mouseenter', '.aboutheading', function(){
	$(this).removeClass('jackInTheBox');
	$(this).addClass('animated');
	$(this).addClass('bounceIn');
});
$(document).on('mouseout, mouseleave', '.aboutheading', function(){
	$(this).removeClass('animated');
	$(this).removeClass('bounceIn');
});
$(document).on('mouseover, mouseenter', '.contactheading', function(){
	$(this).removeClass('jackInTheBox');
	$(this).addClass('animated');
	$(this).addClass('bounceIn');
});
$(document).on('mouseout, mouseleave', '.contactheading', function(){
	$(this).removeClass('animated');
	$(this).removeClass('bounceIn');
});