define(function(require) {
	var Backbone = require("backbone");

	return Backbone.View.extend({
		initialize: function() {
			this.listenTo(this.collection, "readDone", this.render);
			this.listenTo(this.collection, "remove", this.render);
		},

		render: function() {
			this.$el.fadeIn();
		}
	});
});