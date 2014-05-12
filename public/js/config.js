require.config({
	baseUrl: "./js",
	paths: {
		jquery: "../lib/jquery/dist/jquery",
		backbone: "../lib/backbone/backbone",
		underscore: "../lib/underscore/underscore",
		uglify: "../lib/uglifyweb/dist/uglifyweb-1.1.1",
		handlebars: "../lib/handlebars/handlebars",
		jszip: "../lib/jszip/jszip"
	},
	shim: {
		backbone: {
			exports: "Backbone",
			deps: ["underscore", "jquery"]
		},
		uglify: {
			exports: "uglify"
		},
		jszip: {
			exports: "JSZip"
		},
		handlebars: {
			exports: "Handlebars"
		},
		templates: {
			exports: "JST",
			deps: ["handlebars"]
		}
	},
	deps: ["grumpicon"]
});