import BaseView from "./../base/base-view.js";
import Handlebars from "handlebars";
import template from "./../templates.js";

// Handlebars helper for JSON
Handlebars.registerHelper("json", context => JSON.stringify(context));

var JST = template.call(window, Handlebars);


/**
 * View for updating the grumpiconfigs
 */
export default class ConfigView extends BaseView {
	initialize() {
		this.template = JST["templates/preferences.html"];
		this.events = {
			"change input, textarea": "updateModel",
			"click .reset": "resetToDefaults"
		};

		this.listenTo(this.model, "change:fromStorage", this.render);

		this.render();
	}

	/**
	 * update a preference from a changed input
	 * @param  {Event} e
	 */
	updateModel(e) {
		var attr = e.target.name;
		var value = e.target.value;

		// for certain options, parse it from a string
		if (/^(customselectors|colors|dynamicColorOnly)$/.test(attr)) {
			try {
				value = JSON.parse(value);
			} catch(e) {}
		}

		this.model.set(attr, value);
		this.model.setLocalStorage();
	}

	/**
	 * reset the model to the defaults
	 * @param  {Event} e
	 */
	resetToDefaults(e) {
		e.preventDefault();

		this.model.setToDefault();
	}
}