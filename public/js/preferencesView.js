define(function(require) {
	var Backbone = require("backbone");
	var JST = require("templates");

	return Backbone.View.extend({
		initialize: function() {
			this.render();
		},

		events: {
			"change input": "updatePref"
		},

		render: function(){
			this.$el.html(JST["templates/preferences.html"](this.model.toJSON()));
		},

		/**
		 * update a preference from a changed input
		 * @param  {Event} e
		 */
		updatePref: function(e) {
			var attr = e.target.name;
			this.model.set(attr, e.target.value);
		}
	});
});