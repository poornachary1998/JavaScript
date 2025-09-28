// In JS, we have special loops

//1. for... in
// Iterates over key Properties of an object.

const person = {name: "Alice", age: 25, place:"hyd"}

for(let key in person){
    console.log(`The key "${key}" of object person is "${person[key]}"`)
}

// use for objects, not arrays. (As order is not guranteed)

//2. for... of
// Iterates over values of iterables such as arrays, strings, sets, maps.

let numbers = [10,20,30];
for (let val of numbers){
    console.log(val);
}
//10 20 30

let strrr = "ABC";
for(let char of strrr){
    console.log(char)
}
// A 
// B 
// C