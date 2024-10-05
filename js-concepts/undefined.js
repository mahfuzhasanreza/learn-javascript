/**
 * 8 ways to get undefined
 * 1. variable that is not initialized will give undefined
 * 2. function with no return
 * 3. parameter that is not passed will be undefined
 * 4. if return has nothing on the right side will return undefined
 * 5. property that doesn't exists on an object will give you undefined
 * 6. accessing array elements outside of the index range
 * 7. deleting an element inside an array
 * 8. set a value directly to undefined
 */

// 1
let a;
console.log(a);

// 2
function sum(a, b) {
    const sum = a + b;
}
const result = sum();
console.log(result);

// 3
function fn(a, b, c) {
    const sum = a + b + c;
    console.log(a, b, c);
}
fn(1, 2);

// 4
function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return
    }
    return a + b;
}
const total2 = noNegative(2, -5);
console.log(total2);

// 5
const fifth = { id: 1, name: 'mahfuz', age: 13 }
console.log(fifth.age, fifth.salary);

// 6
const sixth = [1, 2, 3, 2, 6];
console.log(sixth[12]);

// 7
const seventh = [1, 2, 3, 2, 6];
delete seventh[1]; // shouldn't do it. instead use splice
console.log(seventh);
console.log(seventh[1]);

// 8
const eight = undefined; // shouldn't do it. instead set null

console.log(typeof undefined);
console.log(typeof null); // object!