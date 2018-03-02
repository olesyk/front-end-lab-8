'use strict'
const correctAmount = n => /^\d+(\.\d+)?$/.test(n);
const euro = prompt("Input amount of Euro");
const dollar = prompt("Input amount of USD");
const euroRate = 33.85650;
const dollarRate = 27.46090;

const str1 = correctAmount(euro) ? `${euro} euros are equal ${Math.round(euro * euroRate * 100) / 100} UAH,` : `Incorrect amount for Euro,`;

const str2 = correctAmount(dollar) ? `${dollar} dollars are equal ${Math.round(dollar * dollarRate * 100) / 100} UAH,` : `Incorrect amount for USD,`;

console.log(`${str1} ${str2} one euro is equal ${Math.round(euroRate / dollarRate * 100) / 100} dollars.`);