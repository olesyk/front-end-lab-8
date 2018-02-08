let isCorrectInput = n => !isNaN(parseFloat(n)) && isFinite(n) && n > 0;

let isNotTriangle = (x, y, z) => (x >= y + z) || (y >= x + z) || (z >= x + y);


let incorrectData = (x, y, z) => !isCorrectInput(x) || !isCorrectInput(y) || !isCorrectInput(z) || isNotTriangle(x, y, z);

let typeOfTriangle = (x, y, z) => {
	let str;
	if ((x * x == y * y + z * z) || (y * y == x * x + z * z) || (z * z == y * y + x * x)) {
		str = "right triangle";
	} else if ((x == y) && (x == z)) {
		str = "equilateral ";
	} else if ((x == y) || (y == z) || (x == z)) {
		str = "isosceles";
	} else {
		str = "scalene";
	};
	return str;
}
let squareOfTriangle = (x, y, z) => {
	const p = (x + y + z) / 2;
	const S = Math.sqrt(p * (p - x) * (p - y) * (p - z));
	return Math.round(S * 100) / 100;
}


const a = +prompt("Enter side of the triangle", "");
const b = +prompt("Enter side of the triangle", "");
const c = +prompt("Enter side of the triangle", "");

if (incorrectData(a, b, c)) {
	console.log("Incorrect data");
} else {
	console.log(`Type of triangle is ${typeOfTriangle(a, b, c)} and square is ${squareOfTriangle(a, b, c)}.`);
}