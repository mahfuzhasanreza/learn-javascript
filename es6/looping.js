const numbers = [1, 2, 3, 5];

// for (let i = 0; i < numbers.length; i++) { }
// while


for (const num of numbers) {
    console.log(num);
}


const name = 'Mahfuz Hasan Reza';
for (const char of name) {
    console.log(char);
}

// for of use on array or string, not in object
// for in use on object

const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isClean: true
};

// // error
// for (const key of glass) {
//     console.log(key);
// }

for (const key in glass) {
    console.log(key);
    console.log(glass[key]); // value
}

// optional
const keys = Object.keys(glass);
for (const key of keys) {
    console.log(key);
    console.log(glass[key]);
}