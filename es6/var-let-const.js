// var : no reason to use var
// let : allow it to reassign
// const : do not allow it to reassign


const a = 10;
// a = 20; // not allowed, [in let: it allowed]

const number = [1, 2, 3, 4, 5];
// number = [4, 5]; // not allowed
number[1] = 10; // allowed
number.push(8, 9, 12); // allowed

// object
const student = {
    name: 'mahfuz',
    class: 12
}
// student = { name: 'hasan' } // not allowed, [in let: it allowed]
student.name = 'hasan'; // allowed


// loop 
const sum = 0;
let total = 0;
for (let i = 0; i < 10; i++) { // const: not allowed, because here we do i++
    // sum = sum + i; // not allowed, [in let: it allowed]
    const num = i; // allowed
    total = total + num;
}