"use strict"
const num = prompt("Enter natural number 0<N<=20", "");

if (!(/^\d+$/.test(num)) || num > 20 || num == 0) {
	console.error('Incorrect!');
} else {
	let pyramid = "";
	let k = num * 3 - 3;
	let i = 1;
	while (k >= 0) {
		pyramid += ' '.repeat(k) + '[~]'.repeat(i) + ' '.repeat(k) + '\n';
		i += 2;
		k -= 3;
	}
	console.log(pyramid);
}
