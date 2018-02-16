'use strict'
const decypherPhrase = (obj, str) => {
	const reverseObj = {};
	for (let key in obj) {
		reverseObj[obj[key]] = key;
	}
	return cypherPhrase(reverseObj, str);
}