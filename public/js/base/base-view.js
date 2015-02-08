import {View} from "backbone";

/**
 * A base view to extend from that has a simple render method
 */
export default class BaseView extends View {
	/**
	 * standard render. get data and pass it into the template
	 */
	render() {
		this.$el.html(this.template(this.getTemplateData()));
	}

	/**
	 * retun the model's data, can get used to pass any data in the template
	 * @return {Object} data for the template
	 */
	getTemplateData() {
		return this.model.toJSON();
	}
}