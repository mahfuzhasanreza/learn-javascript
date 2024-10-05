// always use ===
// equal comparison doesn't work for non-primitive type

const f = 2;
const s = '2';
if (f == s) {
    console.log('Equal', f, s);
}
if (f === s) {
    console.log('Equal');
}

const a = 1;
const b = true;
if (a == b) {
    console.log('Equal');
}
if (a === b) {
    console.log('Equal');
}

const first = [];
const second = first;
// first==second : true
// first===second : true

// 1==false : false 
// 0==false : true
// '0'==false : true
// 2==true : false
// 1==true : true
// {}=={} : false [not check value, it checks reference, because of non-primitive data type]
// {}==={} : false
// {x:5}=={x:5} : false
// {x:5}==={x:5} : false
// []==[] : false
// []===[] : false


// type coercion
// type conversion
// type casting