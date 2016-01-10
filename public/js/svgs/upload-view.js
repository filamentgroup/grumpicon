import {View} from "backbone";


/**
 * The drop area that handles the SVG drops
 */
export default class UploadView extends View {
	initialize() {
		this.events = {
			"drop": "fileDrop",
			"dragover": "highlight",
			"dragleave": "highlightOff",
			"click #upload-btn": "fileUploadBtnClick",
			"change #upload": "fileUpload"
		};
	}

	/**
	 * Add a list of files to the file collection
	 * @param {FileList} fileList The FileList object that should be added
	 */
	addFiles(fileList) {
		[].slice.call(fileList).forEach(file => this.collection.addFile(file));
	}

	/** Handle dropped files */
	fileDrop(e) {
		e.preventDefault();
		e.stopPropagation();

		this.addFiles(e.originalEvent.dataTransfer.files);
		this.highlightOff();
	}

	/** Highlight the page's background on drag over */
	highlight(e) {
		e.stopPropagation();
		e.preventDefault();

		e.originalEvent.dataTransfer.dropEffect = "copy";
		this.$("body").addClass("dragover");
	}

	/** Turn off the highlight when a file is dropped or the dragged off */
	highlightOff() {
		this.$("body").removeClass("dragover");
	}

	/** trigger a click on the actual file input */
	fileUploadBtnClick(e) {
		e.preventDefault();
		this.$("#upload").click();
	}

	/** take the files uploaded and add them to the collection */
	fileUpload(e) {
		this.addFiles(e.target.files);
	}
}