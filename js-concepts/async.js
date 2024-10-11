console.log(1);
console.log(2);
// setTimeout(printThree);
setTimeout(printThree, 4000); // after 4000ms or 4s
setTimeout(() => {
    console.log("lazy work");
}, 4000);
console.log(4);
setTimeout(printThree());
console.log(5);

function printThree() {
    console.log(3);
}