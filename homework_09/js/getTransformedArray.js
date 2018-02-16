'use strict'
const getTransformedArray = (array, callback) => {
	const output = [];
	forEach(array, item => output.push(callback(item)));
	return output;
}