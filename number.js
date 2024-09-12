/*
parseInt
parseFloat
*/

var orangePrice = 20;
var chocolatePrice = 0.5;
var applePrice = '20';

console.log(orangePrice+applePrice);

var ricePrice = parseInt('20');
console.log(typeof ricePrice);

var penPrice = parseInt('Twenty');
console.log(typeof penPrice);
console.log(orangePrice+penPrice);

var bookPrice = parseFloat('22.5');
console.log(typeof bookPrice);
console.log(orangePrice+bookPrice);


var first = 0.2;
var second = 0.3;
var total = first + second;
console.log(total);

// problem
var first = 0.1;
var second = 0.2;
var total = first + second;
console.log(total);
// Solve 
console.log(total.toFixed(2));
console.log(parseFloat(total.toFixed(2)));


var num = 50 / 0;
console.log(num);
num = -50 / 0;
console.log(num);