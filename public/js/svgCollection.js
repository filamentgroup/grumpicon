define(function(require) {
	var Backbone = require("backbone");
	var _ = require("underscore");
	var svgModel = require("svgModel");

	// test if acceptable css color
	var isColorWord = function( val ){
		var acceptable = ["black","silver","gray","white","maroon","red","purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","aqua","aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","green","greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"];
		if( acceptable.indexOf( val ) > -1 ){
			return true;
		}
		return false;
	};

	// test if value is a valid hex
	var isHex = function( val ){
		return (/^[0-9a-f]{3}(?:[0-9a-f]{3})?$/i).test( val );
	};

	return Backbone.Collection.extend({
		model: svgModel,

		initialize: function(models, options) {
			this.prefModel = options.prefModel;
		},

		/**
		 * all the files have been read by a FileReader in the models
		 * @return {Array} an array of promises
		 */
		isRead: function() {
			var promises = [];
			this.each(function(model) {
				promises.push(model.isRead);
			});
			return promises;
		},

		/**
		 * add a file as a new model to the collection
		 * @param {[type]} file [description]
		 */
		addFile: function(file) {
			var name = file.name.split(".svg")[0];

			// colors
			if (name.indexOf(".colors-") > -1) {
				this.splitColors(name, file);
				name = name.split(".colors-")[0];
			}

			this.add({
				file: file,
				name: name
			});
		},

		/**
		 * add new models for each color on the file name
		 * @param  {name} name The name of the file
		 * @param  {file} file The actual SVG File
		 */
		splitColors: function(name, file) {
			var split = name.split(".colors-");
			var colors = split[1].split("-");
			var extraColors = this.prefModel.get("colors") || "{}";
			try {
				extraColors = JSON.parse(extraColors);
			} catch(e) {};

			name = split[0];

			_.each(colors, _.bind(function(color, i) {
				var iconName;
				if (isHex(color)) {
					iconName = name + "-" + i;
					color = "#" + color;
				} else if(isColorWord(color)){
					iconName = name + "-" + color;
				} else if(extraColors[color]){
					iconName = name + "-" + color;
					color = extraColors[color];
				}

				this.add({
					file: file,
					name: iconName,
					color: color
				});

			}, this));
		}
	});
});
