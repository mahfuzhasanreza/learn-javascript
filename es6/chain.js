// data access

const data = [{ id: 1, name: 'mahfuz', address: 'sylhet' }];
console.log(data[0].address);

const product = {
    count: 200,
    data: [
        { id: 1, name: 'hp', price: 40000 },
        { id: 2, name: 'lenovo', price: 50000 }
    ]
}
console.log(product.data[1].price);

const user = {
    id: 5,
    name: 'Hasan',
    address: {
        street: {
            first: 'rainbow villa',
            second: 'notunbazar',
            third: 'dhaka-1212'
        },
        city: 'Dhaka'
    }
}
console.log(user.address.street.second);

const user2 = {
    id: 300,
    name: 'reza',
    address: {
        city: 'Sylhet',
        country: 'Bangladesh'
    }
}
// console.log(user2.address.street.second); // error

console.log(user2.address.street?.second); // optional chaining [not in es6, implement after es6]
// not error, undefined

console.log(user.address.street?.second);
