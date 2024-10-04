const product = [
    { id: 1, name: 'hp', price: 2000 },
    { id: 2, name: 'dell', price: 20002 },
    { id: 3, name: 'lenovo', price: 22000 },
    { id: 4, name: 'mac', price: 80000 },
]

// map 
const names = product.map(product => product.name);
console.log(names);

// forEach
product.forEach(p => console.log(p.id));

// filter
const expensive = product.filter(p => p.price < 50000);
console.log(expensive);

// find 
const affordable = product.find(p => p.price < 50000);
console.log(affordable);

// reduce
const total = product.reduce((acum, current) => acum + current.price, 0);
console.log(total);