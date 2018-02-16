'use strict'
const decypherPhrase = (obj, str) => {
	const obj2 = {};
	for (let key in obj) {
		obj2[obj[key]] = key;
	}
	return cypherPhrase(obj2, str);
}