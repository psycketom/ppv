(function($){
	return $.extend({
		PPV : function(value){
			var sizer = $(document.createElement('div')).css({
				position : 'absolute',
				width : '1' + value,
				height : '1' + value,
				left : '-100%',
				top : '-100%'
			}).appendTo(document.body);
			
			var inPixels = sizer.height();
			
			sizer.remove();
			
			return inPixels;
		}
	});
})(jQuery);