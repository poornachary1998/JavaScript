// Rest Operator:
// used to collect or pack all remaining arguemnets into array

//1. Function Parameters;
function sum(...nums){
    return nums.reduce((acc, curr) => acc+curr, 0)
}
console.log(sum(1,2,3,4))
//here ...nums packs all arguments into an array.

//2. Destructing Objects
let person = {name: "Alice", age: 25, place: "dubai"};

let {name, ...rest}= person;

console.log(name);
console.log(rest);
// Output:::
// Alice
// { age: 25, place: 'dubai' }

// 3. Destructuring Arrays
let arr = [12,14,16];

let [first, ...resst] = arr;

console.log(first);
console.log(resst)
// Output:::
// 12
// [ 14, 16 ]