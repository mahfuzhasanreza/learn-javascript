const numbers = [1,3,2,4];


const result = numbers.forEach(n=>console.log(n));
const result2 = numbers.forEach(n=>{
    console.log(n);
    return n*n;
});

console.log(result, result2);
