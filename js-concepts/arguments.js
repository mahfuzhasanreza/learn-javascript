function sum(a, b, c) { // parameters: a, b, c
    console.log(arguments); // array like object
    console.log(arguments[4]);

    const args = [...arguments];
    console.log(args); // array

    const result = a + b + c;
    return result;
}

console.log(sum(1, 2, 3, 4, 23, 43)); // arguments: 1, 2, 3, 4, 23, 43

console.log(sum.length); // no of parameter 

// console.log(arguments); // not valid
