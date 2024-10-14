// JSON => stringify, parse

const student = {
    name: 'mahfuz',
    age: 17
}
const studentJSON = JSON.stringify(student);

console.log(student);
console.log(studentJSON);

const studentObj=JSON.parse(studentJSON);
console.log(studentObj);