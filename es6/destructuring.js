const actor = {
    name: 'mahfuz',
    age: 20,
    phone: '012321',
    money: 123332
}

const phoneNo = actor.phone;
console.log(phoneNo);
console.log(phoneNo);
console.log(phoneNo);


// object destructuring
// if right side is an object left side of destructuring will be object as well
const { phone: cell, age } = actor // use property name as a variable that contains the property value

console.log(cell);
console.log(age);

// array destructuring
const numbers = [1, 2, 3];
const [first, second] = numbers;
const [m, , n] = numbers;

console.log(first, second);
console.log(m, n);


function doubleThem(a, b) {
    return [a * 2, b * 2];
}
const [x, y] = doubleThem(1, 2);
console.log(x, y);