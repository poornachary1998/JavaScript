function example() {
var x = 10;
if (true) {
var x = 20; // re-declares x
console.log(x); // Output: 20
}
console.log(x); // Output: 20
}
let y = 10;
if (true) {
let y = 20; // Creates a new y within this block
console.log(y); // Output: 20
}
console.log(y); // Output: 10
const z = 30;
// z = 40; // Error: Assignment to constant variable