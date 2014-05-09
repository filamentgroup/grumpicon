define(function(require) {
	var $ = require("jquery");
	var Backbone = require("backbone");
	var _ = require("underscore");

	return Backbone.Model.extend({
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

		/**
		 * Check to see if the file has been read
		 * @return {Promise} Is the file done reading
		 */
		isRead: function() {
			return this.deferred.promise();
		},

		/**
		 * read the svg file's content and store it in model.svgDataUri
		 */
		read: function() {
			var file = this.get("file");
			var reader = new FileReader();
			var color = this.get("color");

			// read the file's contents and store it in the model.datauri
			reader.onload = _.bind(function(e) {
				var prefix = "data:image/svg+xml;charset=US-ASCII,";
				var uri = e.target.result;

				// add css to add color
				if (color) {
					uri = uri.replace(/(<svg[^>]+>)/im, '$1<style type="text/css">circle, ellipse, line, path, polygon, polyline, rect, text { fill: ' + color + ' !important; }</style>');
				}

				// create data uri
				this.set("svgDataUri", prefix + escape(uri));

				// draw the svg on the canvas
				this.drawSvg();
			}, this);

			reader.readAsText(file);
		},

		/** 
		 * draw on the svg on the canvas
		 */
		drawSvg: function() {
			var img = new Image();
			img.onload = _.bind(function() {
				this.set("width", img.width);
				this.set("height", img.height);

				this.canvas.width = img.width;
				this.canvas.height = img.height;
				this.context.drawImage(img, 0, 0);

				this.makePngDataURI();
			}, this);
			img.src = this.get("svgDataUri");
		},

		/** 
		 * get datauri of the png version using the canvas
		 */
		makePngDataURI: function() {
			var datauri = this.canvas.toDataURL();
			this.set("pngDataUri", datauri);
			this.deferred.resolve();
		},

		/** 
		 * make sure dropped file is a svg
		 */
		validateType: function() {
			return this.get("file").type.indexOf("svg") > -1;
		},

		/** 
		 * build custom selectors
		 * @param  {Object} selectorPref Custom selector object from the preferences
		 */
		calcSelectors: function(selectorPref) {
			var customselectors = selectorPref || "{}";
			var name = this.get("name");
			var selectors = [];

			// try to parse the customselectors string
			try {
				customselectors = JSON.parse(customselectors);
			} catch(e) {
				// no custom selectors
			}

			if (customselectors && customselectors[name]) {
				selectors = customselectors[name];
			}

			this.set("selectors", selectors);
		}
	});
});
