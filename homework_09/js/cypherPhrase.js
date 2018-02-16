'use strict'
const cypherPhrase = (obj, str) => {
	const array = str.split("")
	const tranform = letter => letter = obj[letter] || letter;
	const output = getTransformedArray(array, tranform);
	return output.join('');
}