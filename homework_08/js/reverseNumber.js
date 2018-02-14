"use strict"
const reverseNumber = num => {
	let arrayOfNumbers = num.toString().split("");
	if (arrayOfNumbers[0] === "-") {
		let reverseArray = arrayOfNumbers.slice(1).reverse(); 
		reverseArray.unshift(arrayOfNumbers[0]); 
		num= Number(reverseArray.join(''));
	} else {
		num = Number(arrayOfNumbers.reverse().join(''));
	}
	return num;
}