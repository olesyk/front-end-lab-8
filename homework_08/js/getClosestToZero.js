'use strict'
const getClosestToZero = (...values) => {
	const uniq = Array.from(new Set(values));
	//'Set' because there were incorrect results during sorting a lot of ununiq values;
	return uniq.sort((a, b) => Math.abs(a) - Math.abs(b))[0];
}