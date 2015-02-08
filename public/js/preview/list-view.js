import $ from "jquery";
import BaseView from "./../base/base-view.js";
import Handlebars from "handlebars"
import template from "./../templates.js";

var JST = template.call(window, Handlebars);

/**
 * A preview of the icons, also lets you delete any
 */
export default class ListView extends BaseView {
	initialize() {
		this.events = {
			"click .close": "removeFile"
		};

		this.template = JST["templates/svg-icons.html"];

		this.listenTo(this.collection, "processed remove", this.render);
	}

	getTemplateData() {
		var files = this.collection.toJSON();
		return { files };
	}

	/**
	 * remove the file from the collection 
	 * @param  {Event} e
	 */
	removeFile(e) {
		e.preventDefault();

		var cid = $(e.currentTarget).data("file");
		var file = this.collection.get(cid);

		this.collection.remove(file);
	}
}