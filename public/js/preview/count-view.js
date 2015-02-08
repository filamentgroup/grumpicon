import {View} from "backbone";

export default class CountView extends View {
	initialize() {
		this.listenTo(this.collection, "processed remove", this.render);
	}

	render() {
		this.$el.html(`${this.collection.length} Grumpicons`);
	}
}