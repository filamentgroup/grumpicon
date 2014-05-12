define(function(require) {

	var $ = require("jquery");
	var SvgCollection = require("svgCollection");
	var PrefModel = require("preferencesModel");

	function createView(viewType, options) {
		require([viewType], function(View) {
			new View(options);
		});
	}

	$(function() {

		if ( Modernizr.blobconstructor ) {
			var prefModel = new PrefModel();
			var svgFiles = new SvgCollection([], {
				prefModel: prefModel
			});

			createView("preferencesView", {
				el: "#prefs",
				model: prefModel
			});

			createView("uploadView", {
				el: document,
				collection: svgFiles
			});

			createView("toggleView", {
				el: ".wat",
				content: ".wat-it-is"
			});

			createView("toggleView", {
				el: ".prefs",
				content: "#prefs"
			});

			createView("toggleView", {
				el: ".see-previews",
				content: "#file-previews"
			});

			createView("resultsView", {
				el: "#file-previews",
				collection: svgFiles,
				prefModel: prefModel
			});

			createView("listView", {
				el: "#svg-icons-results",
				collection: svgFiles
			});

			createView("countView", {
				el: "#results-count",
				collection: svgFiles
			});

			createView("downloadView", {
				el: "#results",
				collection: svgFiles
			});

			createView("downloadButtonView", {
				el: "#download-btn",
				collection: svgFiles,
				prefModel: prefModel
			});

		} else {
			alert("requires netscape 6.2 or higher");
		}
	});
});