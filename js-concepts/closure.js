function kitchen() {
    let roast = 0;
    return function () {
        roast++;
        return roast;
    }
}

const firstServer = kitchen();
console.log(firstServer); // [Function (anonymous)]
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(kitchen()());
console.log(kitchen()());



function stopWatch() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}
const watch1 = stopWatch();
console.log(watch1());
console.log(watch1());
console.log(watch1());
const watch2 = stopWatch();
console.log(watch2());
console.log(watch2());