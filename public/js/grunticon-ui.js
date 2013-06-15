require.config({
	shim: {
		underscore: {
			exports: "_"
		},
		backbone: {
			deps: [
				"underscore",
				"jquery"
			],
			exports: "Backbone"
		},
		uglifyweb: {
			exports: "uglifyweb"
		},
		jszip: {
			exports: "JSZip"
		},
		canvg: {
			exports: "canvg",
			deps: [
				"libs/rgbcolor",
				"libs/Stackblur"
			]
		}
	},
	paths: {
		jquery: "libs/jquery",
		underscore: "libs/underscore",
		backbone: "libs/backbone",
		jszip: "libs/jszip",
		canvg: "libs/canvg"
	}
});

require([
	"model",
	"collection",
	"views"
], function( Model, Collection, Views ) {

	$(function() {

		if ( Modernizr.blobconstructor ) {
			var svgFiles = new Collection();

			new Views.UploadView({
				el: document,
				collection: svgFiles
			});

			new Views.FilesView({
				el: "#file-list",
				collection: svgFiles
			});

			new Views.ResultsView({
				el: "#results",
				collection: svgFiles
			});			

		} else {
			alert("Your browser isn't supported.");
		}
	});
	
});