
(function ($) {
var SlideSpeed = 700;
var TimeOut = 3000;
 
$(document).ready(function(e) {
	$('.review__slide').css(
		{"position" : "absolute",
		 "top":'0', "left": '0'}).hide().eq(0).show();
	var slideNum = 0;
	var slideTime;
	slideCount = $(".review__slider-content .review__slide").size();
	var animSlide = function(arrow){
		clearTimeout(slideTime);
		$('.review__slide').eq(slideNum).fadeOut(SlideSpeed);
		if(arrow == "next"){
			if(slideNum == (slideCount-1)){slideNum=0;}
			else{slideNum++}
			}
		else if(arrow == "prew")
		{
			if(slideNum == 0){slideNum=slideCount-1;}
			else{slideNum-=1}
		}
		else{
			slideNum = arrow;
			}
		$('.review__slide').eq(slideNum).fadeIn(SlideSpeed, rotator);
		$(".review__control-slide.active").removeClass("active");
		$('.review__control-slide').eq(slideNum).addClass('active');
		}
var $linkArrow = $('<a class="prew" href="#">&lt;</a><a class="next" href="#">&gt;</a>')
	.prependTo('.review__slider-content');		
	$('.next').click(function(){
		animSlide("next");
		return false;
		})
	$('.prew').click(function(){
		animSlide("prew");
		return false;
		})
	var $adderSpan = '';
	$('.review__slide').each(function(index) {
			$adderSpan += '<span class = "review__control-slide">' + index + '</span>';
		});
	$('<div class ="review__slider-controls">' + $adderSpan +'</div>').appendTo('.review__slider');
	$(".review__control-slide:first").addClass("active");
	$('.review__control-slide').click(function(){
	var goToNum = parseFloat($(this).text());
	animSlide(goToNum);
	});
	var pause = false;
	var rotator = function(){
			if(!pause){slideTime = setTimeout(function(){animSlide('next')}, TimeOut);}
			}
	$('.review__slider').hover(	
		function(){clearTimeout(slideTime); pause = true;},
		function(){pause = false; rotator();
		});
	rotator();
});
})(jQuery);
