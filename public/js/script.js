window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-245px";
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
$('.dropdown-toggle').click(function(){
	$('div').removeClass('dropdown-backdrop');
});