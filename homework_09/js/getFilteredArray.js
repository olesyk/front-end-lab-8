'use strict'
const getFilteredArray = (array, predicate) => {
	const output = [];
	const predicated = [];
	forEach(array, item => predicated.push(predicate(item)));
	for (let i = 0; i < array.length; i++) {
		if (predicated[i]) {
			output.push(array[i]);
		}
	}
	return output;
}