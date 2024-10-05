// primitive types are pass by value
let n1 = 5, n2 = 7;
function add(n1, n2) {
    n1 = 1;
    return n1 + n2;
}
console.log(n1);
console.log(add(n1, n2));


let s1 = { name: 'mahfuz', age: 20 }; // non-primitive
let s2 = { name: 'hasan', age: 10 };

function fn(s1, s2) {
    s1.age = 12;
}
fn(s1, s2); // pass by reference
console.log(s1.age);