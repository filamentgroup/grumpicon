define([
	"jquery",
	"underscore",
	"backbone",
	"canvg"
], function( $, _, Backbone, canvg ) {
	var Model = Backbone.Model.extend({
		defaults: {
			file: "",
			svgDataUri: "data:image/svg+xml;charset=US-ASCII,",
			pngDataUri: "data:image/png;base64,",
			name: "icon",
			width: 30,
			height: 30
		},
		initialize: function() {
			this.deferred = $.Deferred();
			this.isRead = this.deferred.promise();
			this.canvas = $("<canvas/>")[0];
			this.context = this.canvas.getContext("2d");
			this.read();
		},
		/** read the svg file's content and store it in model.svgDataUri */
		read: function() {
			var model = this,
				file = model.get("file"),
				reader = new FileReader();

			model.set("name", file.name.split(".svg")[0]);

			// read the file's contents and store it in the model.datauri
			reader.onload = function(e) {
				model.set("svgDataUri", "data:image/svg+xml;charset=US-ASCII," + escape(e.target.result));
				// draw the svg on the canvas
				canvg(model.canvas, e.target.result);
				model.getDims();
			};

			reader.readAsText(file);
		},
		/** get the width and height of the icon */
		getDims: function() {
			var model = this,
				img = new Image();
			img.onload = function() {
				model.set("width", img.width );
				model.set("height", img.height );
				model.makePngDataURI();
			};
			img.src = model.get("svgDataUri");
		},
		/** get datauri of the png version using the canvas */
		makePngDataURI: function() {
			var datauri = this.canvas.toDataURL();
			this.set("pngDataUri", datauri);
			this.deferred.resolve();
		},
		/** make sure dropped file is a svg */
		validateType: function() {
			return this.get("file").type.indexOf("svg") > -1;
		}
	});

	return Model;

});
