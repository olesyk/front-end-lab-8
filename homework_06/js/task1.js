'use strict'
let a = prompt("Enter side of the triangle");
let b = prompt("Enter side of the triangle");
let c = prompt("Enter side of the triangle");

const isCorrectInput = n => /^\d+(\.\d+)?$/.test(n);

const incorrectData = (x, y, z) => !isCorrectInput(x) || !isCorrectInput(y) || !isCorrectInput(z);

const isNotTriangle = (x, y, z) => (x >= y + z) || (y >= x + z) || (z >= x + y);

const typeOfTriangle = (x, y, z) => {
	let str;
	const squareX = Math.pow(x, 2);
	const squareY = Math.pow(y, 2);
	const squareZ = Math.pow(z, 2);
	const equalXY = x === y;
	const equalXZ = x === z;
	const equalYZ = y === z;
	if ((squareX === squareY + squareZ) || (squareY === squareX + squareZ) || (squareZ === squareX + squareY)) {
		str = "right triangle";
	} else if (equalXY && equalXZ) {
		str = "equilateral";
	} else if (equalXY || equalYZ || equalXZ) {
		str = "isosceles";
	} else {
		str = "scalene";
	};
	return str;
}
const squareOfTriangle = (x, y, z) => {
	const p = (x + y + z) / 2;
	const S = Math.sqrt(p * (p - x) * (p - y) * (p - z));
	return Math.round(S * 100) / 100;
}

if (incorrectData(a, b, c)) {
	console.log("Incorrect data");
} else {
	a = parseFloat(a);
	b = parseFloat(b);
	c = parseFloat(c);
	const message = isNotTriangle(a, b, c) ? "Incorrect data" : `Type of triangle is ${typeOfTriangle(a, b, c)} and square is ${squareOfTriangle(a, b, c)}.`;
	console.log(message);
}