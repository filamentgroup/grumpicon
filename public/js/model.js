define([
	"jquery",
	"underscore",
	"backbone",
	"canvg"
], function( $, _, Backbone, canvg ) {
	var Model = Backbone.Model.extend({
		initialize: function() {
			this.deferred = $.Deferred();
			this.isRead = this.deferred.promise();
			this.canvas = $("<canvas/>")[0];
			this.context = this.canvas.getContext("2d");
			this.read();
		},
		/** read the svg file's content and store it in model.datauri */
		read: function() {
			var model = this,
				file = model.get("file"),
				reader = new FileReader();

			model.set("name", file.name.split(".svg")[0], {
				silent: true
			});

			// read the file's contents and store it in the model.datauri
			reader.onload = function(e) {
				model.set("svgDataUri", e.target.result);

				model.drawCanvas();
			};

			reader.readAsDataURL(file);
		},
		drawCanvas: function() {
			var model = this,
				reader = new FileReader();

			reader.onload = function(e) {
				model.set("svgText", e.target.result);

				canvg(model.canvas, model.get("svgText"));
				model.getDims();
			};

			reader.readAsText(model.get("file"));			
		},
		getDims: function() {
			var model = this,
				img = new Image();
			img.onload = function() {
				model.set("width", img.width );
				model.set("height", img.height );
				model.makePngDataURI();
			}
			img.src = model.get("svgDataUri");
		},
		makePngDataURI: function() {
			var datauri = this.canvas.toDataURL();
			this.set("pngDataUri", datauri);
			this.deferred.resolve();
			this.trigger("readDone");
		},
		validateType: function() {
			return true;
		}
	});

	return Model;

});