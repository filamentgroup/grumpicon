import {Model} from "backbone";
import _ from "underscore";

/**
 * A model that stores all of the grumpiconfigs
 */
export default class ConfigModel extends Model {
	/* config from grunticon */
	defaults() {
		return {
			datasvgcss: "icons.data.svg.css",
			datapngcss: "icons.data.png.css",
			urlpngcss: "icons.fallback.css",
			/*files: {
				loader: path.join( __dirname, 'grunticon', 'static', 'grunticon.loader.js'),
				embed: path.join( __dirname, 'grunticon', 'static', 'grunticon.embed.js'),
				corsEmbed: path.join( __dirname, 'grunticon', 'static', 'grunticon.embed.cors.js'),
				banner: path.join( __dirname, 'grunticon', 'static', 'grunticon.loader.banner.js')
			},*/
			previewhtml: "preview.html",
			loadersnippet: "grunticon.loader.js",
			//cssbasepath: path.sep,
			customselectors: {},
			cssprefix: ".icon-",
			//defaultWidth: "400px",
			//defaultHeight: "300px",
			colors: {},
			dynamicColorOnly: false,
			pngfolder: "png",
			pngpath: "png",
			template: `{{#each customselectors}}{{this}},{{/each}}
{{prefix}}{{name}} {
	background-image: url('{{datauri}}');
	background-repeat: no-repeat;
}`
			//tmpPath: os.tmpDir(),
			//tmpDir: "grunticon-tmp",
			//previewTemplate: path.join( __dirname, "..", "example", "preview.hbs" ),
			//compressPNG: false,
			//optimizationLevel: 3,
			//enhanceSVG: false,
			//corsEmbed: false
		};
	}

	/**
	 * extend the defaults with the data store in localStorage
	 * @return {[type]} [description]
	 */
	initialize() {
		this.set(_.extend(this.defaults(), this.getLocalStorage()));
	}

	/**
	 * save off the whole model to localStorage
	 */
	setLocalStorage() {
		this.set("fromStorage", true);
		localStorage.setItem("grumpiconfig", JSON.stringify(this.toJSON()));
	}

	/**
	 * retrieve the model from localStorage
	 * @return {Object} The model's data
	 */
	getLocalStorage() {
		var config = localStorage.getItem("grumpiconfig") || "{}";
		config = JSON.parse(config);

		this.set("fromStorage", !_.isEmpty(config));

		return config;
	}

	/**
	 * clear from localStorage
	 */
	removeLocalStorage() {
		localStorage.removeItem("grumpiconfig");
	}

	/**
	 * reset the model
	 */
	setToDefault() {
		this.set(this.defaults());
		this.set("fromStorage", false);
		this.removeLocalStorage();
	}
}