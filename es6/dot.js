const person = {
    name: 'Mahfuz',
    job: 'Founder at Learn With Mahfuz',
    2: 'second',
    'add-dress': 'Sylhet'
}

console.log(person.job);
// console.log(person[job]); // error
console.log(person['job']);
// console.log(person.2); // error
console.log(person['2']);
// console.log(person.add-dress); // error
console.log(person["add-dress"]);
