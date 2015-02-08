import _ from "underscore";
import BaseView from "./../base/base-view";
import CSSPreviewView from "./css-preview-view.js";
import HTMLPreviewView from "./html-preview-view.js";
import Handlebars from "handlebars";
import template from "./../templates.js";

var JST = template.call(window, Handlebars);

/**
 * File previews for content available to download
 */
export default class ResultsView extends BaseView {
	initialize(options) {
		this.template = JST["templates/file-previews.html"]
		this.config = options.config;

		this.listenTo(this.collection, "processed remove change", this.render);
	}

	/**
	 * render the view and all the sub view
	 * @return {[type]} [description]
	 */
	render() {
		var config = this.config;
		var collection = this.collection;
		var embedText = JST["node_modules/grunt-grunticon/example/output/grunticon.loader.js"]();

		super.render();

		new CSSPreviewView({
			el: "#svg-css-results",
			datauri: function() {
				return this.get("svgDataUri");
			},
			collection,
			config
		});

		new CSSPreviewView({
			el: "#png-css-results", 
			datauri: function() {
				return this.get("pngDataUri");
			},
			collection,
			config
		});

		new CSSPreviewView({
			el: "#fallback-css-results",
			datauri: function() {
				return `${config.get("pngpath")}/${this.get("name")}.png`;
			},
			collection,
			config
		});

		this.$el.find("#js-results").html(embedText);

		new HTMLPreviewView({
			el: "#preview-html",
			embedText,
			collection,
			config
		});

	}

	getTemplateData() {
		return this.config.toJSON();
	}
}