function greeting(greetingHandler, name) {
    console.log(greetingHandler);
    console.log(greetingHandler(name));
    greetingHandler(name);
}

// const name = 'mahfuz';
// greeting(name);
// const number = [1, 4, 2];
// greeting(number);

function greetingHandler(name) {
    console.log('Good night', name);
}

function greetEvening(name) {
    console.log('Good evening', name);
}

greeting(greetingHandler, 'mahfuz');
greeting(greetEvening, 'reza');