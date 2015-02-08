import $ from "jquery";

/**
 * promisify the img loading process
 * @param  {string} src Source of the image
 * @return {Promise}     A promise that resovles when the image is loaded
 */
export default function createImage(src) {
	var dfd = $.Deferred();
	var img = new Image();

	img.onload = () => dfd.resolve(img);

	img.src = src;
	
	return dfd.promise();
}