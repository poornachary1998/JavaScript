// JavaScript has three main ways:

// var → Function-scoped, hoisted, can be re-declared.

// let → Block-scoped, not hoisted to be used before declaration, can be reassigned.

// const → Block-scoped, must be initialized, cannot be reassigned (but object values can mutate!).

var x = 30;
let y = 20;
const z = 10;

function demo(){
if(true){
    var x = 100;
    let y = 90;
    const z = 80
}
console.log(x);
console.log(y);
console.log(z);
}

demo();

// o/p: 100 20 10

// var is function-scoped → It ignores blocks and hoists to the nearest function.

// let and const are block-scoped → They disappear once the block ends.

// If a variable isn’t found in the current scope, JS looks outward (lexical scope).