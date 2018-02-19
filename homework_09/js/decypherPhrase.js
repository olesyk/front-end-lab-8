'use strict'
const decypherPhrase = (obj, str) => {
	const reverseObj = {};
	for (let key in obj) {
		if (obj.hasOwnProperty(key)){
			reverseObj[obj[key]] = key;
		}
	}
	return cypherPhrase(reverseObj, str);
}