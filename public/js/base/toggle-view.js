import $ from "jquery";
import {View} from "backbone";

/**
 * a view that handles simple toggling of an element
 */
export default class ToggleView extends View {
	initialize(options) {
		this.$content = $(options.content);

		this.events = {
			"click": "toggle"
		};

		// let the close button/link also trigger the toggle
		this.$content.on("click", ".close", (e) => {
			e.preventDefault();
			this.$content.hide();
		});
	}

	/**
	 * toggle the content shown and hidden
	 * @param  {Event} e
	 */
	toggle(e) {
		e.preventDefault();
		this.$content.toggle();
	}
}