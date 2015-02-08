import _ from "underscore";
import BaseView from "./../base/base-view";
import Handlebars from "handlebars";
import template from "./../templates.js";

var JST = template.call(window, Handlebars);

export default class HTMLPreviewView extends BaseView {
	initialize(options) {
		this.template = JST["node_modules/grunt-grunticon/example/preview.hbs"];
		this.config = options.config;
		this.embedText = options.embedText;

		this.render();
	}

	render() {
		var html = this.template(this.getTemplateData());
		this.$el.text(html);
	}

	getTemplateData() {
		var config = this.config;

		return {
			loaderText: "",
			embedText: this.embedText,
			cssFiles: {
				svg: config.get("datasvgcss"),
				png: config.get("datapngcss"),
				fallback: config.get("urlpngcss")
			},
			icons: this.collection.map(model => {
				return {
					prefix: config.get("cssprefix"),
					name: model.get("name"),
					width: model.get("width"),
					height: model.get("height"),
					selectorType: "class",
					selectorString: config.get("cssprefix").slice(1)
				}
			})
		};
	}
}