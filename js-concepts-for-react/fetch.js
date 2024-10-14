// fetch

fetch('url')
    .then(response => response.json())
    .then(data => console.log(data));

// keys, values
const student = {
    name: 'mahfuz',
    age: 17
}

const keys = Object.keys(student);
const values = Object.values(student);

// for each 
const numbers = [32, 21, 11];
numbers.forEach((number) => console.log(number));
numbers.map(number => number * 2);

// for-of on array like object (exm. getElementsByClassName, querySelectorAll)
// loop on an object using for-in

// add or remove from an array 

const newNumber = 2;
// copy numbers array and then add newNumber
const newNumbers = [...numbers, newNumber];
// create a new array without one specific item
// remove 11 means create a new array without the 11
const remaining = numbers.filter(num => num !== 11);
console.log(remaining);