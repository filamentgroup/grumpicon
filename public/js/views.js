define([
	"jquery",
	"underscore",
	"backbone",
	"jszip",
	"templates"
], function( $, _, Backbone, JSZip, JST) {
	/** @namespace */
	var Views = {};

	/**
		* The upload view handles the interaction between the file drag and drop and the file input button.
		* @constructor
	*/
	Views.UploadView = Backbone.View.extend( /** @lends Views.UploadView */ {
		events: {
			"drop": "fileDrop",
			"dragover": "highlight",
			"dragleave": "highlightOff"
		},
		/**
			* Add a list of files to the file collection
			* @function
			* @param {FileList} fileList The FileList object that should be added to the file collection
		*/
		addFiles: function(fileList) {
			var files = [],
				len = fileList.length,
				col = this.collection,
				i;

			// loop through the file list and convert it to an array
			for ( i = 0; i < len; i++ ) {
				files.push({
					"file": fileList[i]
				});
			}
			col.add(files);
			$.when.apply(window, col.isRead()).done(function(){
				col.trigger( "readDone" );
			});
		},
		/** Handle dropped files */
		fileDrop: function(e) {
			e.preventDefault();
			e.stopPropagation();

			this.addFiles(e.originalEvent.dataTransfer.files);
			this.$("body").removeClass("dragover");
		},
		/** Highlight the page's background on drag over */
		highlight: function(e) {
			e.stopPropagation();
			e.preventDefault();
			e.originalEvent.dataTransfer.dropEffect = "copy";
			this.$("body").addClass("dragover");
		},
		/** Turn off the highlight when a file is dropped or the dragged off */
		highlightOff: function(e) {
			this.$("body").removeClass("dragover");
		}
	});

	Views.ResultsCount = Backbone.View.extend({
		initialize: function(options) {
			this.listenTo(this.collection, "readDone", this.render);
			this.listenTo(this.collection, "remove", this.render);
		},
		render: function(){
			this.$el.html( this.collection.length + " Grumpicons" );
		}
	});
	
	Views.ListView = Backbone.View.extend({
		events: {
			"click .close": "removeFile"
		},
		/** remove the file from the collection */
		removeFile: function(e) {
			e.preventDefault();

			var cid = $(e.target).closest(".close").data("file"),
				file = this.collection.get(cid);

			this.collection.remove(file);
		}
	});

	/**
		* A toggle view takes a "button" and toggles open/closed another area
		* @constructor
	*/
	Views.ToggleView = Backbone.View.extend( /** @lends Views.ToggleView */ {
		initialize: function(options) {
			var view = this;
			this.$content = $(options.content);
			this.$content.on("click", ".close", function(e) {
				e.preventDefault();
				view.$content.hide();
			});
		},
		events: {
			"click": "toggle"
		},
		toggle: function(e) {
			e.preventDefault();
			this.$content.toggle();
		}
	});

	/**
		* The results view shows previews of the files and the download button
		* @constructor
	*/
	Views.ResultsView = Views.ListView.extend( /** @lends Views.ResultsView */ {
		initialize: function(options) {
			this.template = options.template;
			this.escapeHtml = options.escapeHtml;
			this.listenTo(this.collection, "readDone", this.render);
			this.listenTo(this.collection, "remove", this.render);
		},
		render: function() {
			var view = this,
				html = "";

			view.collection.each(function(model) {
				var data = $.extend(true, {}, model.toJSON(), {id: model.cid});
				html += JST[view.template](data);
			});

			if ( view.escapeHtml ) {
				html = html.replace(/</g, "&lt;");
			}

			view.$el.html(html);
			view.$el.fadeIn();

		}
	});

	/**
		* The download view shows the download button to get the zip file
		* @constructor
	*/
	Views.DownloadView = Backbone.View.extend( /** @lends Views.DownloadView */ {
		initialize: function() {
			this.listenTo(this.collection, "readDone", this.render);
			this.listenTo(this.collection, "remove", this.render);
		},
		render: function() {
			this.$el.fadeIn();
		}
	});

	Views.DownloadBtnView = Views.DownloadView.extend( /** @lends Views.DownloadView */ {
		render: function() {
			var view = this,
				zip = new JSZip(),
				img = zip.folder("png"),
				link = view.$el.find( "#download" ), blob;

				view.collection.each(function(model) {
					img.file(model.get("name") + ".png",
						model.get("pngDataUri").replace("data:image/png;base64,","") + "\n",
						{base64: true});
				});

				zip.file("icons.data.svg.css", $("#svg-css-results").text());
				zip.file("icons.data.png.css", $("#png-css-results").text());
				zip.file("icons.fallback.css", $("#fallback-css-results").text());
				zip.file("grunticon.loader.txt", '<!-- Grunticon Loader: place this in the head of your page -->\n<script>\n/* grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license. */window.grunticon=function(e){if(e&&3===e.length){var t=window,n=!(!t.document.createElementNS||!t.document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect||!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||window.opera&&-1===navigator.userAgent.indexOf("Chrome")),o=function(o){var r=t.document.createElement("link"),a=t.document.getElementsByTagName("script")[0];r.rel="stylesheet",r.href=e[o&&n?0:o?1:2],a.parentNode.insertBefore(r,a)},r=new t.Image;r.onerror=function(){o(!1)},r.onload=function(){o(1===r.width&&1===r.height)},r.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}};grunticon( [ "[YOUR PATH HERE]/icons.data.svg.css", "[YOUR PATH HERE]/icons.data.png.css", "[YOUR PATH HERE]/icons.fallback.css" ] );</script><noscript><link href="[YOUR PATH HERE]/icons.fallback.css" rel="stylesheet"></noscript>');
				zip.file("preview.html", unescape($("#preview-html").html().replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")));			


			if( Modernizr.adownload && ( window.URL && window.URL.createObjectURL ) ){
				link.attr( "download" , "grunticon.zip" );
				blob = zip.generate({type:"blob"});
				link.attr( "href" , window.URL.createObjectURL( blob ) );
			} else {
				blob = zip.generate();
				link.on( "click" , function( e ){
					e.preventDefault();
					location.href = "data:application/zip;base64," + blob;
				});
			}
			view.$el.fadeIn();
		}
	});

	return Views;
});
