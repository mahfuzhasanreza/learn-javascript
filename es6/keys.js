const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isClean: true
};

console.log(glass);
// { name: 'glass', color: 'golden', price: 12, isClean: true }

console.log(Object.keys(glass));
// all property name
// [ 'name', 'color', 'price', 'isClean' ]

console.log(Object.values(glass));
// all property values
// [ 'glass', 'golden', 12, true ]

console.log(Object.entries(glass));
/* array of array / two dimensional array
[
  [ 'name', 'glass' ],
  [ 'color', 'golden' ],
  [ 'price', 12 ],
  [ 'isClean', true ]
]
*/

// delete glass.isClean;
console.log(glass);

const { isClean, ...shortGlass } = glass;
console.log(shortGlass);

// freeze : read:yes, create:no, update:no, delete:no
Object.freeze(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
console.log(glass);

// seal : read:yes, create:no, update:yes, delete:no
// allow changing existing properties of an object, prevent adding new properties, don't allow removing the existing properties
Object.seal(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
console.log(glass);
