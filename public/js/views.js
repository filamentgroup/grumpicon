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
			"dragleave": "highlightOff",
			"click #fake-files": "triggerFiles",
			"change .files-input": "fileUpload"
		},
		/**
			* Add a list of files to the file collection
			* @function
			* @param {FileList} fileList The FileList object that should be added to the file collection
		*/
		addFiles: function(fileList) {
			var files = [],
				len = fileList.length,
				i;

			// loop through the file list and convert it to an array
			for ( i = 0; i < len; i++ ) {
				files.push({
					"file": fileList[i]
				});
			}
			this.collection.add(files);
		},
		/** Manually trigger the file input to open up the "Browse file" dialog	*/
		triggerFiles: function(e) {
			e.preventDefault();
			this.$(".files-input")[0].click();
		},
		/** Handle dropped files */
		fileDrop: function(e) {
			e.preventDefault();
			e.stopPropagation();

			this.addFiles(e.originalEvent.dataTransfer.files);
			this.$("body").removeClass("dragover");
		},
		/** Handle files selected from the file input */
		fileUpload: function(e) {
			this.addFiles(e.target.files);
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

<<<<<<< HEAD
	/** 
		* The files view shows the list of svgs "uploaded"
		* @constructor
	*/
	Views.FilesView = Backbone.View.extend( /** @lends Views.FilesView */ {
		template: "templates/file-list.html",
		initialize: function() {
			this.listenTo(this.collection, "all", this.render);
		},
=======
	Views.ListView = Backbone.View.extend({
>>>>>>> 35065171b4ddfb373ab1052849472a34f4ce388f
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
		* The files view shows the list of svgs "uploaded"
		* @constructor
	*/
	Views.FilesView = Views.ListView.extend( /** @lends Views.FilesView */ {
		template: _.template($("#file-list-template").html()),
		initialize: function() {
			this.listenTo(this.collection, "all", this.render);
		},
		render: function() {
			var view = this,
				html = [];
			this.collection.each(function(model) {
				html.push(JST[view.template]($.extend(true, {}, model.toJSON(), {id: model.cid, valid: model.validateType()})));
			});
			this.$("ul").html(html.join(""));
			this.$el.fadeIn();
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

			$.when.apply(window, view.collection.isRead).done(function(){
					view.collection.each(function(model) {
<<<<<<< HEAD
						var data = model.toJSON();
						html += JST[view.template](data);
=======
						var data = $.extend(true, {}, model.toJSON(), {id: model.cid});
						html += view.template(data);
>>>>>>> 35065171b4ddfb373ab1052849472a34f4ce388f
					});

				if ( view.escapeHtml ) {
					html = html.replace(/</g, "&lt;");
				}

				view.$el.html(html);
				view.$el.fadeIn();

			});
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
		events: {
			"click #download": "download"
		},
		download: function(e) {
			e.preventDefault();
			var view = this,
				zip = new JSZip(),
				img = zip.folder("png");

				view.collection.each(function(model) {
					img.file(model.get("name") + ".png",
						model.get("pngDataUri").replace("data:image/png;base64,","") + "\n",
						{base64: true});
				});

				zip.file("icons.data.svg.css", $("#svg-css-results").text());
				zip.file("icons.data.png.css", $("#png-css-results").text());
				zip.file("icons.fallback.css", $("#fallback-css-results").text());
				zip.file("grunticon.loader.txt", '<!-- Unicode CSS Loader: place this in the head of your page -->\n<script>\n/* grunticon Stylesheet Loader | https://github.com/filamentgroup/grunticon | (c) 2012 Scott Jehl, Filament Group, Inc. | MIT license. */\nwindow.grunticon=function(e){if(e&&3===e.length){var t=window,n=!!t.document.createElementNS&&!!t.document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect&&!!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),A=function(A){var o=t.document.createElement("link"),r=t.document.getElementsByTagName("script")[0];o.rel="stylesheet",o.href=e[A&&n?0:A?1:2],r.parentNode.insertBefore(o,r)},o=new t.Image;o.onerror=function(){A(!1)},o.onload=function(){A(1===o.width&&1===o.height)},o.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}};\ngrunticon( [ "/example/output/icons.data.svg.css", "/example/output/icons.data.png.css", "/example/output/icons.fallback.css" ] );</script>\n<noscript><link href="/example/output/icons.fallback.css" rel="stylesheet"></noscript>');
				zip.file("preview.html", unescape($("#preview-html").html().replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&")));			

			var content = zip.generate();

			location.href = "data:application/zip;base64," + content;
		}
	});

	return Views;
});
