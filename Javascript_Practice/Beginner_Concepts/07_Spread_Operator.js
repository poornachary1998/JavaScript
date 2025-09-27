// Spread Operator:
// Used to expand / unpack all elemenets from array / properties in object.

//usage Examples:
// 1. Exapnding an Array;

let arr = [1,2,3];
let arr1 = [...arr, 4];

console.log(arr1);

//2. Copying Arrays.

let arr2 = [11,22,33];

let arr3 = [...arr2];

arr3.push(44,55);

console.log(arr2); //[11,22,33]
console.log(arr3); //[11,22,33,44,55];

//3. Merging Objects:
let obj = {name: "Alice", age: 32, place: "hyd"};
let obj1 = {place:"dubai", lang: "english"};

console.log({...obj,...obj1 })

// { name: 'Alice', age: 32, place: 'dubai', lang: 'english' }
// Last property overrides the earlier ones.