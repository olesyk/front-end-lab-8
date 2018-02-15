'use strict'
const reverseNumber = num => {
	const arrayOfNumbers = num.toString().split("");
	if (arrayOfNumbers[0] === "-") {
		const reverseArray = arrayOfNumbers.slice(1).reverse();
		reverseArray.unshift(arrayOfNumbers[0]);
		num = Number(reverseArray.join(''));
	} else {
		num = Number(arrayOfNumbers.reverse().join(''));
	}
	return num;
}