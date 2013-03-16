/**
 * jquery-rotate v0.1.0
 *  Very lightweight jquery rotate plugin using CSS 3 Transformation
 *  https://github.com/schickling/jquery-rotate
 */
(function ($) {

	$.fn.extend({
		rotate: function (deg) {

			// cache dom element
			var $this = $(this);

			// make deg random if not set
			if (deg === null) {
				deg = Math.floor(Math.random() * 359);
			}

			// rotate dom element
			$this.css({
				'-webkit-transform': 'rotate(' + deg + 'deg)',
				'-moz-transform': 'rotate(' + deg + 'deg)',
				'-ms-transform': 'rotate(' + deg + 'deg)',
				'-o-transform': 'rotate(' + deg + 'deg)',
				'transform': 'rotate(' + deg + 'deg)'
			});

			// make chainable
			return $this;
		}
	});

})(jQuery);