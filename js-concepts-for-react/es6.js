const numbers = [1, 4, 2];
const student = {
    name: 'mahfuz',
    age: 17
}

// 1. template string
const name = `My name is ${student.name}`;

// 2. arrow function
const getNumber = () => 3;
const getNumber2 = num => num;
const getSum = (x, y) => x + y;
const getSum2 = (x, y) => {
    x += y;
    return x
}

// spread operator 

// const newNumbers = numbers;
// numbers.push(7);
// console.log(newNumbers);

// const newNumbers = [numbers];
// numbers.push(7);
// console.log(newNumbers);

const newNumbers = [...numbers];
numbers.push(7);
console.log(newNumbers);

const newNumbers2 = [...numbers, 10];