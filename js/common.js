$(document).ready(function() {

	//tooltip
	function tooltip() {
		var el = $('.js-tooltip-wrap');
		var btn = $('.js-tooltip');
		var arr = el.find('.tooltip__arr');
		btn.hover(function(){
			var text = $(this).attr('data-tooltip');
			el.find('.tooltip__text').html(text);
			el.fadeIn(200);
			var el_width = el.width();
			var pos_top = $(this).offset().top;
			var pos_left = $(this).offset().left;
			var height = $(this).height();
			var width = $(this).width();
			var wnd_width = $(window).width();		
			el.css({'top': pos_top + height});
			if (wnd_width - pos_left < el_width) {
				el.css({'left': pos_left + width - el_width + 1});
				arr.css({'left': el_width - width/2 - 4});
			}
			else {
				el.css({'left': pos_left + width/2 - el_width/2});
				arr.css({'left': el_width/2 - 3});	
			}		
		},function(){
			el.fadeOut(200);
		});
	}
	tooltip();
	var popup = $(".js-popup.js-active");
	var popup_height = popup.outerHeight();
	var popup_top = popup.offset().top;
	function popupPosition() {
		if ($(window).height() <= popup_height + popup_top) {
			popup.addClass("is-not-fixed");
		}
		else {
			popup.removeClass("is-not-fixed");
		}
	}
	popupPosition();
	$(window).resize(function(){
		popupPosition();
	})

});