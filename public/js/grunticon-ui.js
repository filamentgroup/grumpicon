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

			new Views.ToggleView({
				el: ".wat",
				content: ".wat-it-is"
			});

			new Views.ToggleView({
				el: ".see-previews",
				content: "#file-previews"
			});

			_.each(["svg-css", "png-css", "fallback-css", "example-html", "svg-icons"], function( name ) {
				var escape = name.indexOf("html") > -1;
				
				new Views.ResultsView({
					el: "#" + name + "-results",
					template: "templates/" + name + ".html",
					collection: svgFiles,
					escapeHtml: escape
				});
			});

			new Views.ResultsCount({
				el: "#results-count",
				collection: svgFiles
			});

			new Views.DownloadView({
				el: "#results",
				collection: svgFiles
			});

			new Views.DownloadBtnView({
				el: "#download-btn",
				collection: svgFiles
			});


		} else {
			alert("requires netscape 6.2 or higher");
		}
	});
	
});
