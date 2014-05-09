define(function(require) {
	var DownloadView = require("downloadView");
	var JSZip = require("jszip");
	var JST = require("templates");
	var _ = require("underscore");
	var $ = require("jquery");

	return DownloadView.extend({
		initialize: function(options) {
			this.prefModel = options.prefModel;
			DownloadView.prototype.initialize.call(this);
			this.listenTo(this.prefModel, "change", _.bind(function() {
				// only redner if some files have been added
				if (this.collection.length) {
					this.render.call(this);
				}
			}, this));
		},

		render: function() {
			var zip = new JSZip();
			var pngs = zip.folder(this.prefModel.pngfolder);
			var link = this.$el.find( "#download" );
			var data = this.prefModel.toJSON();
			var blob;

			this.collection.each(function(model) {
				pngs.file(model.get("name") + ".png",
					model.get("pngDataUri").replace("data:image/png;base64,","") + "\n",
					{base64: true});
			});

			zip.file(this.prefModel.get("datasvgcss"), $("#svg-css-results").text());
			zip.file(this.prefModel.get("datapngcss"), $("#png-css-results").text());
			zip.file(this.prefModel.get("urlpngcss"), $("#fallback-css-results").text());
			zip.file(this.prefModel.get("loadersnippet"), JST["templates/script-html.html"](data));
			zip.file("preview.html", unescape($("#preview-html").html().replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")));			

			if( Modernizr.adownload && ( window.URL && window.URL.createObjectURL ) ){
				link.attr("download", "grunticon.zip");
				blob = zip.generate({ type: "blob" });
				link.attr("href", window.URL.createObjectURL(blob));
			} else {
				blob = zip.generate();
				link.on("click", function(e){
					e.preventDefault();
					location.href = "data:application/zip;base64," + blob;
				});
			}
			
			this.$el.fadeIn();
		}
	});
});