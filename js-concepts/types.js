// strongly typed programming language
// int a = 5;
// string b = 'mahfuz';
// bool c = true;
// object student = { name: 'mahfuz', id: 1 };
// int[] numbers = [1, 2, 3];


// JS is a dynamic typed language 

// primitive type
const a = 2;
const b = 'mahfuz hasan';
const c = true;
console.log(typeof a, typeof b, typeof c);

// non-primitive type
const age = [23, 15, 17];
const student = { id: 1, class: 12 };
console.log(typeof age, typeof student);

// primitive type (store single value): number, string, boolean, null, undefined
// non-primitive type (store multiple value): array, object

let p = { job: 'wev dev' };
let q = p;
q.job = 'front end';
console.log(p, q);
q = { job: 'backend dev' };
console.log(p, q);