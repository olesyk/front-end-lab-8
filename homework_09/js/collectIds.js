'use strict'
const collectIds = array => {
	const filtered = getFilteredArray(array, item => item.rating > 3.0);
	const output = getTransformedArray(filtered, item => item.id);
	return output;
}