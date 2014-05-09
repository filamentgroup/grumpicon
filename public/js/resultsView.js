define(function(require) {
	var _ = require("underscore");
	var ListView = require("listView");
	var JST = require("templates");

	return ListView.extend({
		template: JST["templates/file-previews.html"],

		initialize: function(options) {
			this.prefModel = options.prefModel;
			this.listenTo(this.collection, "readDone", this.render);
			this.listenTo(this.collection, "remove", this.render);
			this.listenTo(this.prefModel, "change", this.render);
		},

		render: function() {
			this.collection.each(_.bind(function(model) {
				model.calcSelectors(this.prefModel.get("customselectors"));
			}, this));

			this.$el.html(this.template({
				files: this.collection.toJSON(),
				prefs: _.extend(this.prefModel.toJSON(), {
					cssprefixnodot: this.prefModel.get("cssprefix").slice(1)
				})
			}));
		}
	});
});