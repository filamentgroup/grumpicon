//Copy of colory.js from directory-colorfy with Node stuff stripped out

var colorsRegx = /\.colors\-([^\.]+)/i;

var isColorWord = function( val ){
	var acceptable = ["black","silver","gray","white","maroon","red","purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","aqua","aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkgrey","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","green","greenyellow","grey","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightgrey","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"];
	return acceptable.indexOf( val ) > -1;
};
// test if value is a valid hex
var isHex = function( val ){
	return (/^[0-9a-f]{3}(?:[0-9a-f]{3})?$/i).test( val );
};


var Colorfy = function( filepath, extraColors, opts ){
	opts = opts || {};

	var colors = this._getColorConfig( filepath, extraColors );

	//this.originalContents = fs.readFileSync( filepath ).toString( 'utf-8' );
	this.originalFilepath = filepath.replace( colorsRegx, "" );
	//this.originalFilename = path.basename( this.originalFilepath );
	//this.ofnNoExt = path.basename( this.originalFilepath, path.extname(this.originalFilepath) );
	this.filepath = filepath;
	this.extraColors = extraColors;
	this.colors = colors;
	this.colornames = Object.keys(this.colors);
	this.colorFiles = {};
	this.dynamicColorOnly = opts.dynamicColorOnly;
};

/*Colorfy.prototype.writeFiles = function( destFolder ){
	destFolder = destFolder || "";
	var filesWritten = [];

	if( !fs.existsSync( destFolder ) ){
		fs.mkdirpSync( destFolder );
	}
	if (this.dynamicColorOnly !== true) {
		fs.writeFileSync( path.join( destFolder, this.originalFilename ), this.originalContents );
	}
	
	for (var filepath in this.colorFiles) {
		if (this.colorFiles.hasOwnProperty(filepath)) {
			fs.writeFileSync( path.join( destFolder, filepath ), this.colorFiles[ filepath ] );
			filesWritten.push( path.join( destFolder, filepath ) );
		}
	}

	return filesWritten;
};

Colorfy.prototype.convert = function(){
	var self = this;
	var color = "",
		newFilePath = "",
		newFilename = "";
	var promises = [];
	return new RSVP.Promise( function( resolve, reject ){
		for( var name in self.colors ){
			if( self.colors.hasOwnProperty(name) ){
				color = self.colors[name];
				newFilePath = path.join( path.dirname( self.originalFilepath ), self.ofnNoExt + "-" + name + path.extname( self.originalFilepath ) );
				newFilename = path.basename( newFilePath );
				promises.push(self._getNewFileContents( newFilename, color ));
			}
		}

		RSVP.all(promises).then(function(contents){
			contents.forEach(function(newFile){
				var key = Object.keys( newFile )[0];
				self.colorFiles[ key ] = newFile[ key ];
			});
			resolve(self);
		})
		.catch(function(err){
			reject(err);
		});
	});
};

Colorfy.prototype._getNewFileContents = function( name, color ){
	var self = this;
	return new RSVP.Promise(function(resolve, reject){

		execFile( phantomJsPath,
			[
				phantomfile,
				encodeURI(self.originalContents),
				name,
				color
			],
			function(err, stdout, stderr){
				var svg = "";
				if( err ){
					process.stderr.write( stderr + "\n");
					reject( err );
				}
				svg = JSON.parse(decodeURI(stdout));
				resolve( svg );
			}
		);
	});
};*/

Colorfy.prototype._getColorConfig = function( str, extraColors ){
	extraColors = extraColors || {};

	var colors = str.match( colorsRegx ), colorObj = {};

	if( colors ){
		colors = colors[ 1 ].split( "-" );
		colors.forEach( function( color, i ){
			if( extraColors[ color ] ){
				colorObj[ color ] = extraColors[ color ];
			} else if( isHex( color ) ){
				colorObj[ i ] = "#" + color;
			} else if( isColorWord( color ) ){
				colorObj[ color ] = color;
			}
		});
		return colorObj;
	}
	else {
		return colorObj;
	}
}; //getColorConfig



module.exports = Colorfy;


