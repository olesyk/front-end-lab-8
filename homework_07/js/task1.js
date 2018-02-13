"use strict"
const num = prompt("Enter natural number 0<N<=20", "");

if (!/^[1-9]+0?$/.test(num) || num > 20) {
	console.error('Incorrect!');
} else {
	let pyramid = "";
	let numberOfSpaces = num * 3 - 3;
	let numberOfBricks = 1;
	while (numberOfSpaces >= 0) {
		pyramid += ' '.repeat(numberOfSpaces) + '[~]'.repeat(numberOfBricks) + ' '.repeat(numberOfSpaces) + '\n';
		numberOfBricks += 2;
		numberOfSpaces -= 3;
	}
	console.log(pyramid);
}