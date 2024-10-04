const numbers = [2, 3, 2, 1, 5];

const doubled = [];
for (const num of numbers) {
    doubled.push(num * 2);
}
console.log(doubled);


// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally return the array
function doubleIt(num) {
    return num * 2;
}
// const doubleIt = n => n*2;
const result = numbers.map(doubleIt);
console.log(result);


const output = numbers.map(n => n * 2);
console.log(output);