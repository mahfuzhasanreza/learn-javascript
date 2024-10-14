// truthy: ' ', 5, true, {}, []
// falsy: '', 0, false, null, undefined

// ternary
const money = 200;
let food = money > 100 ? 'yes' : 'no';

// number to string
console.log(52 + '');

// string to number
console.log(+'432');

// &&, ||
let isActive = false;
const showUser = () => console.log('display user');
isActive ? showUser() : '';
// if the left side is true then right side will be executed
isActive && showUser();
// if the left side is false then right side will be executed
isActive || showUser();

// toggle boolean
isActive = !isActive;