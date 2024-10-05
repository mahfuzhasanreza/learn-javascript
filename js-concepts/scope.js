function add(a, b) {
    // hoisting : var current;
    if (a > 5) {
        const sum = a + b;
        var current = sum; // it do hoisting
    }
    // console.log(sum); // error
    console.log(current);
}
// console.log(a, b); // error
add(1, 2);

