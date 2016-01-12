/****
jquery.backtotoplink.js v1.0.0
Licensed under MIT
copyright 2016 andy suwandy
https://bytutorial.com/framework-and-scripts-library/backtotoplink-jquery-plugin
https://github.com/bytutorial
****/
(function ($) {
    $.extend({
        backToTopLink: function (options) {
			
			//default sesttings
            var settings = $.extend({
				navigatorZIndex			: '999999',				//Z-index of the navigator
				navigatorBorderRadius	: '20%',				//border radius of the navigator, set 100% if you want to make a circle navigator
				navigatorBgcolor		: '#000',				//navigator background color
				navigatorBgcolorHover	: '#000',				//navigator background color (when hovering, by default same color)
				navigatorOpacity		: 0.6,					//opacity of the navigator 
				navigatorOpacityHover	: 0.9,					//opacity of the navigator when hovering
				navigatorWidth			: 30,					//navigator width size
				navigatorHeight			: 30,					//navigator height size
				navigatorPadding		: 5,					//navigator padding size
				navigatorPosition		: 'rb',					//lb (left bottom) or rb (right bottom),
				navigatorPosPercent		: 3,					//percentage position
				arrowImgSrc    			: '',					//image source
				arrowColor	 			: '#fff',				//color of the div arrow
				arrowWidth				: 10,					//width of the div arrow
				arrowMarginTop			: 8,					//margin top of the arrow image
				arrowImgMarginTop		: 8,					//margin top of the arrow image (apply if using image only)
				scrollDelay				: 1000					//scrolling delay
			}, options);
			
			
			//we check if the top navigator link has already been created.
			if ($("#top-navigator").length == 0) {
				$("body").prepend("<div id='top-navigator'><div id='arrow-up'></div></div>");

				//styles for the top-navigator
				$("#top-navigator").css({
					'position'			: 'fixed',
					'text-align'		: 'center',
					'cursor'			: 'pointer',
					'display'			: 'none',
					'z-index'			: settings.navigatorZIndex,
					'border-radius'		: settings.navigatorBorderRadius,
					'background'		: settings.navigatorBgcolor,
					'opacity'			: settings.navigatorOpacity,
					'width'				: settings.navigatorWidth,
					'height'			: settings.navigatorHeight,
					'padding'			: settings.navigatorPadding
				});
				
				$("#top-navigator").hover(
					function() {
						$(this).css({
							'opacity'		: settings.navigatorOpacityHover,
							'background'	: settings.navigatorBgcolorHover
						});
					}, function() {
						$(this).css({
							'opacity'		: settings.navigatorOpacity,
							'background'	: settings.navigatorBgcolor
						});
					}
				);
				
				switch(settings.navigatorPosition){
					case "lb":
						//left bottom
						$("#top-navigator").css({
							'left'			: settings.navigatorPosPercent + '%',
							'bottom'		: settings.navigatorPosPercent + '%'
						});
						break;
					default:
						//right bottom
						$("#top-navigator").css({
							'right'			: settings.navigatorPosPercent + '%',
							'bottom'		: settings.navigatorPosPercent + '%'
						});
						break;
				}
				
				if(settings.arrowImgSrc != ""){
					$("#arrow-up").html("<img src='" + settings.arrowImgSrc + "' border='0'/>");
					$("#arrow-up").css("margin-top", settings.arrowImgMarginTop);
				}else{
					var borderProp = settings.arrowWidth + 'px solid transparent';
					var borderBotProp = settings.arrowWidth + 'px solid ' + settings.arrowColor;
					$("#arrow-up").css({
						'width'			:'0',
						'height'		:'0',
						'border-left'	:borderProp,
						'border-right'	:borderProp,
						'border-bottom'	:borderBotProp,
						'font-size'		:'0',
						'line-height'	:'0',
						'margin'		:'0 auto',
						'display'		:'inline-block',
						'margin-top'	: settings.arrowMarginTop
					});
				}
				
				$(window).scroll(function () {
						if ($(this).scrollTop()) {
							$('#top-navigator:hidden').stop(true, true).fadeIn();
						} else {
							$('#top-navigator').stop(true, true).fadeOut();
						}
				});

				$("#top-navigator").click(function () {
					//reset the value
					$(this).css({
						'opacity'		: settings.navigatorOpacity,
						'background'	: settings.navigatorBgcolor
					});
					$('html, body').animate({ scrollTop: $('html').offset().top }, settings.scrollDelay);
				});
			}
        }
		
    });
})(jQuery);