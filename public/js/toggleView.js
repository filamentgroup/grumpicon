define(function(require) {
	var Backbone = require("backbone");
	var $ = require("jquery");

	return Backbone.View.extend({
		initialize: function(options) {
			this.$content = $(options.content);

			// let the close button/link also trigger the toggle
			this.$content.on("click", ".close", _.bind(function(e) {
				e.preventDefault();
				this.$content.hide();
			}, this));
		},

		events: {
			"click": "toggle"
		},

		/**
		 * toggle the content shown and hidden
		 * @param  {Event} e
		 */
		toggle: function(e) {
			e.preventDefault();
			this.$content.toggle();
		}
	});
});