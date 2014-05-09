define(function(require) {
	var Backbone = require("backbone");
	var $ = require("jquery");

	return Backbone.View.extend({
		events: {
			"drop": "fileDrop",
			"dragover": "highlight",
			"dragleave": "highlightOff"
		},

		/**
		 * Add a list of files to the file collection
		 * @param {FileList} fileList The FileList object that should be added
		 */
		addFiles: function(fileList) {
			var len = fileList.length;
			var collection = this.collection;

			// loop through the file list and convert it to an array
			for (var i = 0; i < len; i++) {
				this.collection.addFile(fileList[i]);
			}

			// when all files are read
			$.when.apply(null, collection.isRead()).done(function(){
				collection.trigger("readDone");
			});
		},

		/** Handle dropped files */
		fileDrop: function(e) {
			e.preventDefault();
			e.stopPropagation();

			this.addFiles(e.originalEvent.dataTransfer.files);
			this.highlightOff();
		},

		/** Highlight the page's background on drag over */
		highlight: function(e) {
			e.stopPropagation();
			e.preventDefault();

			e.originalEvent.dataTransfer.dropEffect = "copy";
			this.$("body").addClass("dragover");
		},

		/** Turn off the highlight when a file is dropped or the dragged off */
		highlightOff: function() {
			this.$("body").removeClass("dragover");
		}
	});
});