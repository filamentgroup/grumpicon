import DownloadView from "./download-view.js";
import Handlebars from "handlebars";
import template from "./../templates.js";
import JSZip from "jszip";
import _ from "underscore";
import $ from "jquery";

var JST = template.call(window, Handlebars);

const PNG_URI_PREFIX = "data:image/png;base64,";
const ZIP_URI_PREFIX = "data:application/zip;base64,";

/**
 * create a zip file and attach it to the download button
 */
export default class DownloadButtonView extends DownloadView {
	initialize(options) {
		this.config = options.config;
		super.initialize();

		this.listenTo(this.config, "change", this.render);
	}

	render() {
		var data = this.config.toJSON();
		var zip = new JSZip();
		var pngs = zip.folder(data.pngfolder);
		var $link = this.$el.find( "#download" );

		if (this.collection.length) {

			// add each fallback png to the png folder
			this.collection.each(model => {
				pngs.file(model.get("name") + ".png",
					model.get("pngDataUri").replace(PNG_URI_PREFIX, "") + "\n",
					{base64: true});
			});

			// get the file previews and save them as actual files in the zip
			zip.file(data.datasvgcss, $("#svg-css-results").text());
			zip.file(data.datapngcss, $("#png-css-results").text());
			zip.file(data.urlpngcss, $("#fallback-css-results").text());
			zip.file(data.loadersnippet, $("#js-results").text());
			zip.file("preview.html", _.unescape($("#preview-html").html()));

			if( Modernizr.adownload && ( window.URL && window.URL.createObjectURL ) ){
				let blob = zip.generate({ type: "blob" });

				$link.attr({
					href: window.URL.createObjectURL(blob),
					download: "grunticon.zip"
				});
			} else {
				let blob = zip.generate();

				$link.on("click", e => {
					e.preventDefault();
					location.href = ZIP_URI_PREFIX + blob;
				});
			}
			
			this.$el.fadeIn();
		}
	}
}