// 1. array destructuring (serial matter)
const numbers = [32, 11];

// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [32, 11];
const [x, y] = numbers;
console.log(x, y);

// 2. object destructuring (serial doesn't matter)
const { name, age } = { id: 1, name: 'mahfuz', age: 17 };