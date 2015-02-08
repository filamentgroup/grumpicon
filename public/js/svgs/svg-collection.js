import _ from "underscore";
import {Collection} from "backbone";
import FileModel from "./svg-model.js";
import Colorfy from "./../utils/colorfy.js";

export default class FileCollection extends Collection {
	initialize(models, options) {
		this.model = FileModel;
		this.config = options.config;
	}

	/**
	 * split the file into multiple files if it has colors, then add it to the collection
	 * @param {File} file A svg that was dropped
	 */
	addFile(file) {
		var name = file.name.split(".svg")[0];
		var extraColors = this.config.get("colors");
		var colorfy = new Colorfy(name, extraColors, this.config.toJSON());

		// build files for each color
		_.each(colorfy.colors, (color, colorName) => {
			let name = `${colorfy.originalFilepath}-${colorName}`;
			this.add({ file, color, name })
		});

		// don't add base SVG if it had colors and the dynamicColorOnly option was true
		if (_.isEmpty(colorfy.colors) || !this.config.get("dynamicColorOnly")) {
			this.add({ file, name: colorfy.originalFilepath });
		}
	}
}