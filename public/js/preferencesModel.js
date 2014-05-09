define(function(require) {
	var Backbone = require("backbone");

	return Backbone.Model.extend({
		defaults: {
			datasvgcss: "icons.data.svg.css",
			datapngcss: "icons.data.png.css",
			urlpngcss: "icons.fallback.css",
			/*files: {
				loader: path.join( __dirname, 'grunticon', 'static', 'grunticon.loader.js'),
				banner: path.join( __dirname, 'grunticon', 'static', 'grunticon.loader.banner.js')
			},*/
			previewhtml: "preview.html",
			loadersnippet: "grunticon.loader.txt",
			//cssbasepath: path.sep,
			customselectors: "{}",
			cssprefix: ".icon-",
			//defaultWidth: "400px",
			//defaultHeight: "300px",
			colors: "{}",
			pngfolder: "png",
			pngpath: "png",
			//template: "",
			//previewTemplate: path.join( __dirname, "..", "example", "preview.hbs" )
		}
	});
});
