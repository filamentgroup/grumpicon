import $ from "jquery";
import _ from "underscore";
import Backbone from "backbone";
import ToggleView from "./base/toggle-view.js";
import ConfigModel from "./config/config-model.js";
import ConfigView from "./config/config-view.js";
import DownloadButtonView from "./download/download-button-view.js";
import DownloadView from "./download/download-view.js";
import CountView from "./preview/count-view.js";
import ListView from "./preview/list-view.js";
import ResultsView from "./preview/results-view.js";
import SvgCollection from "./svgs/svg-collection.js";
import UploadView from "./svgs/upload-view.js";

// set jQuery on Backbone
Backbone.$ = $;

$(() => {

	if ( Modernizr.blobconstructor ) {
		var config = new ConfigModel();
		var collection = new SvgCollection([], {
			config: config
		});

		new ConfigView({
			el: "#prefs",
			model: config
		});

		new UploadView({
			el: document,
			collection
		});

		new ToggleView({
			el: ".wat",
			content: ".wat-it-is"
		});

		new ToggleView({
			el: ".prefs",
			content: "#prefs"
		});

		new ToggleView({
			el: ".see-previews",
			content: "#file-previews"
		});

		new ResultsView({
			el: "#file-previews",
			collection,
			config
		});

		new ListView({
			el: "#svg-icons-results",
			collection
		});

		new CountView({
			el: "#results-count",
			collection
		});

		new DownloadView({
			el: "#results",
			collection
		});

		new DownloadButtonView({
			el: "#download-btn",
			collection,
			config
		});

	} else {
		alert("requires netscape 6.2 or higher");
	}
});