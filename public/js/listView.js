define(function(require) {
	var Backbone = require("backbone");
	var JST = require("templates");
	var $ = require("jquery");

	return Backbone.View.extend({
		template: JST["templates/svg-icons.html"],

		initialize: function() {
			this.listenTo(this.collection, "readDone", this.render);
			this.listenTo(this.collection, "remove", this.render);
		},

		events: {
			"click .close": "removeFile"
		},

		/**
		 * remove the file from the collection 
		 * @param  {Event} e
		 */
		removeFile: function(e) {
			e.preventDefault();

			var cid = $(e.target).closest(".close").data("file");
			var file = this.collection.get(cid);

			this.collection.remove(file);
		},

		/**
		 * Render a list of the dropped svgs
		 */
		render: function() {
			this.$el.html(this.template({
				// the models + their cid for IDing on the removal
				files: this.collection.map(function(model) {
					return _.extend(model.toJSON(), {id: model.cid});
				})
			}));
		}
	});
});