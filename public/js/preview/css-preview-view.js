import BaseView from "./../base/base-view.js";
import Handlebars from "handlebars";

export default class CSSPreviewView extends BaseView {
	initialize(options) {
		this.config = options.config;
		this.datauri = options.datauri;
		this.template = Handlebars.compile(this.config.get("template"));

		this.render();
	}

	render() {
		var config = this.config;
		var html = this.collection.map(model =>
			this.template({
				customselectors: model.get("selectors"),
				prefix: config.get("cssprefix"),
				name: model.get("name"),
				datauri: this.datauri.call(model)
			})
		).join("\n");

		this.$el.html(html);
	}
}