function add(num1, num2) {
    const result = num1 + num2;
    console.log(num1, num2, result);
}

add(5, 6);
add(5);
add();

// default value
function add2(num1, num2 = 0) {
    const result = num1 + num2;
    console.log(num1, num2, result);
}

add2(5, 6);
add2(5);
add2();

function fullName(first, last = '') {
    const full = first + ' ' + last;
    return full;
}

function friends(numbers = []) {

}

function person(human = {}) {

}