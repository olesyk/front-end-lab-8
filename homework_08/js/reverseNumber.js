'use strict'
const reverseNumber = num => {
	const arrayOfNumbers = num.toString().split("");
	const firstChar = arrayOfNumbers.shift();
	const insertFirstCharAt = firstChar === '-' || firstChar === '+' ? 0 : arrayOfNumbers.length;
	arrayOfNumbers.reverse().splice(insertFirstCharAt, 0, firstChar);
	return Number(arrayOfNumbers.join(''));
}