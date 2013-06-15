define([
	"jquery",
	"underscore",
	"backbone",
	"model"
], function( $, _, Backbone, Model ) {
	var Collection = Backbone.Collection.extend({
		model: Model,
		isRead: function() {
			var promises = [];
			this.each(function(model) {
				promises.push(model.isRead);
			});
			return promises;
		}
	});

	return Collection;
});