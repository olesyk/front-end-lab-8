'use strict'
const cypherPhrase = (obj, str) => {
	const array = str.split("")
	const transform = letter => obj[letter] || letter;
	const output = getTransformedArray(array, tranform);
	return output.join('');
}