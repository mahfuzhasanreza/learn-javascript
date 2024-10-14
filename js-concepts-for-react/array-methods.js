const products = [
    {
        name: 'laptop',
        price: 32000,
        brand: 'lenovo'
    },
    {
        name: 'laptop2',
        price: 3220,
        brand: 'dell'
    },
    {
        name: 'laptop3',
        price: 54444,
        brand: 'hp'
    },
    {
        name: 'laptop4',
        price: 320005,
        brand: 'lenovo'
    },
    {
        name: 'laptop5',
        price: 32333,
        brand: 'asus'
    }
];

// map: return an array
const brands = products.map(product => product.brand);
console.log(brands);

// for each: no return
products.forEach(product => console.log(product.name));

// filter: return an array
const cheap = products.filter(product => product.price < 50000);
console.log(cheap);

const specificName = products.filter(product => product.name.includes('4'));
console.log(specificName);

// find: return first element
const special = products.find(product => product.name.includes('l'));
console.log(special);