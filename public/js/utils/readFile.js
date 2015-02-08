import $ from "jquery";

/**
 * Promisify the file reader
 * @param  {File} file The file to read
 * @return {Promise}      A promise that resolves when the file is read
 */
export default function readFile(file) {
	var dfd = $.Deferred();
	var reader = new FileReader();

	reader.onload = e => dfd.resolve(e.target.result);

	reader.onerror = err => dfd.reject(err);

	reader.readAsText(file);

	return dfd.promise();
}