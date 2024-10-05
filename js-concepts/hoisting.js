for (var i = 0; i < 2; i++) {
}
console.log(i); // for hoisting

for (let j = 0; j < 2; j++) {
}
// console.log(j); // error


printHello(); // for hoisting
function printHello() {
    console.log('Hello');
}


// print2(); // error
const print2 = function () {
    console.log(2);
}

// print3(); // error
var print3 = function () { // hoisting only: var print3; - function() part undefined
    console.log(3);
}