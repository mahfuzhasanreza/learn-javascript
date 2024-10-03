const max = Math.max(5, 10);
console.log(max);

const numbers = [1, 2, 5, 2];
const arrayMax = Math.max(numbers); // NaN
console.log(arrayMax); // NaN

console.log(numbers);
console.log(...numbers); // spread operator: ...

const arrayMax2 = Math.max(...numbers);
console.log(arrayMax2);

// use spread operator to copy
const nums = [2, 4, 5];
const nums2 = nums;
nums.push(12);
console.log(nums2);
console.log(nums); // same as nums2, because num2 reference to nums

const nums3 = [nums2];
const nums4 = [...nums2]; // copy
console.log(nums3);
console.log(nums4);

nums2.push(1);
console.log(nums2);
console.log(nums4);

const nums5 = [...nums4, 12]; // add extra element while copy
console.log(nums5);