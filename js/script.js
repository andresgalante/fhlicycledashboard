jQuery.fn.addRemoveHasScroll = function(){
	return this.each(function(){
		var count  = $(".lifecycle-item",this).size();
		var width  = $(this).width();

 		if(
			(count === 2) ||
			(count === 3) ||
			(count === 4) ||
			(count === 5   && width > 1200) ||
			(count === 6   && width > 1440) ||
			(count === 7   && width > 1680) ||
			(count === 8   && width > 1920) ||
			(count === 9   && width > 2160) ||
			(count === 10  && width > 2400)
		)
		{
					$(this).removeClass('has-scroll');		
		}
		else
		{
					$(this).addClass('has-scroll');
		}

	});
};

jQuery(function($){
	$(".lifecycle-container").addRemoveHasScroll();

	$(window).resize(function(){
		$(".lifecycle-container").addRemoveHasScroll();
	});
});


