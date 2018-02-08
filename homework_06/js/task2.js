function correctAmount(n) {
	return !isNaN(parseFloat(n)) && isFinite(n) && (n >= 0);
};

var euro = +prompt("Input amount of Euro", "");
var dollar = +prompt("Input amount of USD", "");
var euroRate = 33.85650;
var dollarRate = 27.46090;
var r = Math.round(euroRate / dollarRate * 100) / 100;

var str1, str2;
if (!correctAmount(euro)) {
	str1 = "Incorrect amount for Euro!\n";
} else {
	str1 = euro + ' euros are equal ' + (Math.round(euro * euroRate * 100) / 100) + ' UAH, ';
}

if (!correctAmount(dollar)) {
	str2 = "Incorrect amount for USD!\n";
} else {
	str2 = dollar + ' dollars are equal ' + (Math.round(dollar * dollarRate * 100) / 100) + ' UAH, ';
}

console.log(str1 + str2 + 'one euro is equal ' + r + ' dollars.');