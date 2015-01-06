
$(document).ready( function() {

	// F A D E - I N  ~  L I G H T B O X 

	$('.work_link').click( function () {
		var contentId = $(this).attr('data-lbcontent');

		$('.lightbox-content').html($('#' + contentId + "_merits"));

		$('.lightbox').css('display', 'block');
		$('.dontShow').css('display', 'block');
		$('.lightbox').css('opacity', '0').stop().clearQueue().animate({opacity : 1}, 1000);
		
		
	});

	// C L O S E  ~  L I G H T B O X

	$('.close').click( function () {

		$('.lightbox').css('opacity', '1').stop().clearQueue().animate({opacity : 0}, 1200, function() {
			$('.lightbox').css('display', 'none');
			$('.dontShow').css('display', 'none');
		});
	});

	// B A C K ~ T O ~ T O P / S C R O L L 

	$(window).scroll(function(){
		var scrolledDown = $(window).scrollTop();

		if(scrolledDown >= 500){
			$('.backToTop').css('display', 'block');
		} 

		else if( scrooledDown = 40){
			$('.backToTop').css('display', 'none');	
		}
	});

	$('#toTop').click(function(){
		$('html, body').animate({scrollTop: "0"}, 1200); 
	});

});

