$(document).ready(function() {

	//tooltip
	function tooltip() {
		var el = $('.js-tooltip-wrap');
		var btn = $('.js-tooltip');
		var arr = el.find('.tooltip__arr');
		btn.hover(function(){
			var text = $(this).attr('data-tooltip');
			el.find('.tooltip__text').html(text);
			el.toggle();
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
		});
	}
	tooltip();
	var popup = $(".js-popup.js-active");
	
	if (popup.length > 0) {
		var popup_height = popup.outerHeight();
		var popup_top = popup.offset().top;
	}
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

	$(document).click(function() {
        $(".js-select-list").hide();
        $(".js-select").removeClass("is-active");
        $(".js-window").removeClass("is-active");
    });
    function select() {
        $(".js-select").each(function(){
            var select_list = $(this).find(".js-select-list");
            var text = select_list.find("li").first().text();
            $(this).find(".js-select-text").text(text);
            $(this).click(function(event){
                if ($(this).hasClass("is-active")) {
                    $(this).removeClass("is-active");
                    select_list.slideUp("fast");
                }
                else {
                    $(".js-select").removeClass("is-active");
                    $(".js-select-list").hide();
                    select_list.slideDown("fast");
                    $(this).addClass("is-active");
                }
                event.stopPropagation();
            });
            select_list.find("li").click(function(event) {
                var id = $(this).attr("data-id");
                var text = $(this).text();
                $(this).parent().parent().find(".js-select-text").text(text);
                $(this).parent().parent().find(".js-select-input").val(id);
                $(this).parent().hide();
                $(this).parents(".js-select").removeClass("is-active");
                event.stopPropagation();
            });
        });
    }
    select();
    $('.js-select').click(function(event){
        event.stopPropagation();
    });

    function accordion() {
        $(".js-accordion-list").hide();
        $(".js-accordion-title").click(function(){
            $(this).toggleClass("is-active");
            $(this).parents(".js-accordion").find(".js-accordion-list").slideToggle("fast");
            $(this).parents(".js-accordion").toggleClass("is-extend");
        });
    }
    accordion();

    $(".js-user-btn").click(function(){
    	if ($(this).hasClass("js-active")) {
    		$(this).removeClass("js-active");
    		$(".user_client").removeClass("is-active");
    	}
    	else {
    		$(".user_client").removeClass("is-active");
    		$(this).addClass("js-active");
    		$(this).parent().addClass("is-active");
    	}
    });

    var overlay = $(".js-overlay");
    var window_el = $(".js-window");
    $(".js-popup-link").click(function(){  
        if ($(this).attr("href")) {
            var link = $(this).attr("href");
        }
        else {
            var link = $(this).attr("data-href");
        }
        window_el.removeClass("is-active");
        $("."+link).toggleClass("is-active");
        //overlay.addClass("is-active");
        return false;  
    });
    // overlay.click(function(){
    //     $(this).removeClass("is-active");
    //     $(".js-window").removeClass("is-active");
    // });
    $(".js-close").click(function(){
        window_el.removeClass("is-active");
        //overlay.removeClass("is-active");
    });

    window_el.click(function(event) {
        event.stopPropagation();
    });


    $(".js-hidden").hide();
    $(".js-hidden-item-btn").click(function(){
        $(".js-hidden").slideToggle("fast");
    });
    $(".js-hide-template").click(function(){
        $(".js-hidden").slideToggle("fast");
    });
});
