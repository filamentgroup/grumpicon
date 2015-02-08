import {View} from "backbone";

export default class DownloadView extends View {
	initialize() {
		this.listenTo(this.collection, "processed remove", this.render);
	}

	render() {
		this.$el.fadeIn();
	}
}