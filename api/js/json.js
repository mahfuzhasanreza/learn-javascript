const user = { id: 1, name: 'Mahfuz', age: 18 };

// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);

console.log(user);
console.log(stringified);
/*
{ id: 1, name: 'Mahfuz', age: 18 }
{"id":1,"name":"Mahfuz","age":18}
*/

const shop = {
    owner: 'mahfuz',
    address: {
        street: '17/8, notunbazar',
        city: 'dhaka',
        country: 'bd'
    },
    products: ['laptop', 'mic', 'monitor'],
    revenue: 34555,
    isOpen: true,
    isNew: false
}

console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const shopObj = JSON.parse(shopJSON);
console.log(shopObj);