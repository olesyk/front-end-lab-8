'use strict'
const getFilteredArray = (array, predicate) => {
	const output = [];
	forEach(array, (item) => {
        if (predicate(item)) {
            output.push(item);
        }
    });
	return output;
}