import * as $ from "jquery";
import {Model} from "backbone";
import readFile from "./../utils/readFile.js";
import createImage from "./../utils/createImage.js";

const SVG_TAG = /(<svg[^>]+>)/im;
const SVG_URI_PREFIX = "data:image/svg+xml;charset=US-ASCII,";

/**
 * a model that represents each dropped file
 * it creates the data uris
 */
export default class FileModel extends Model {
	initialize(options) {
		this.processFile()
			.then(() => this.collection.trigger("processed"));

		// set an id for the preview templates
		this.set("id", this.cid);

		this.listenTo(this.collection.config, "change:customselectors", this.calcSelectors);
	}

	/**
	 * read the file and create data uris
	 * @return {Promise} a Promise that will resolve once the read is done
	 */
	processFile() {
		var file = this.get("file");

		return readFile(file)
			.then(uri => this.addColor(uri))
			.then(uri => {
				let svgDataUri = SVG_URI_PREFIX + escape(uri);
				this.set({ svgDataUri });
				return svgDataUri;
			})
			.then(createImage)
			.then(img => this.drawSvgOnCanvas(img))
			.then(canvas => {
				let pngDataUri = canvas.toDataURL();
				this.set({ pngDataUri });
			})
			.then(() => this.calcSelectors());
	}

	/**
	 * if there was a color option, then bake that into the svg via CSS
	 * @param {string} uri the modified string value of the SVG
	 */
	addColor(uri) {
		var color = this.get("color");

		if (color) {
			uri = uri.replace(SVG_TAG, `$1<style type="text/css">circle, ellipse, line, path, polygon, polyline, rect, text { fill: ${color} !important; }</style>`);
		}

		return uri;
	}

	/**
	 * draw the SVG on a canvas
	 * @param  {Image} img The SVG
	 * @return {Canvas}     The canvas with the SVG drawn on it
	 */
	drawSvgOnCanvas(img) {
		var width = img.width || 30;
		var height = img.height || 30;
		var canvas = document.createElement("canvas");
		var context = canvas.getContext("2d");

		this.set({ width, height });

		canvas.width = width;
		canvas.height = height;

		context.drawImage(img, 0, 0);

		return canvas;
	}

	/**
	 * calculate the CSS selector for the icon
	 */
	calcSelectors() {
		var customselectors = this.collection.config.get("customselectors");
		var name = this.get("name");
		var selectors = [];

		if (customselectors[name]) {
			selectors = customselectors[name];
		}

		this.set({ selectors });
	}
}