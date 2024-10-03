// function declaration 
function add(a, b) {
    return a + b;
}

const sum = add(5, 10);
console.log(sum);

// function expression 
const add2 = function (a, b) {
    return a + b;
}

// arrow function 
const printHello = () => console.log('Hello');
const printA = a => console.log(a);
const add3 = (a, b) => a + b;