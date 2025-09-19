// Hoisting is the JS behavior which moves the "variables" and "function declaration" to top od scope ( BEFORE CODE EXCEUTION).
// Note : Only declaration is hoisted not INITIALIZATION.

console.log(a); // undefined --> Because only var a (decleration) is moved to top not initialization.
var a = 20;
console.log(a) //20 --> we have initialization so we have 20.

// What about let/const?
//  these are also hoisted but they will remain in Temporal Dead Zone. 
// An illegal access of variable from start of scope to declaration of variable.

// TDZ starts here
// console.log(b); // ReferenceError: Cannot access 'b' before initialization ( accessing variable before declaration);
let b = 100;
console.log(b) // 100

//TDZ exists becuase it ensures variables have safe declaration before using.
// This avoids accidental bugs caused by Hoisting of Var

// TDZ + Block scope

let c = 100;
{ 
    // console.log(c); //Cannot access 'c' before initialization TDZ of inner scope
    let c = 101;
    console.log(c) //101

}

// const in TDZ

// const behaves like let but should initialize immediately;

// const v;

// const v;
//       ^

// SyntaxError: Missing initializer in const declaration

// <---------------------------------------------->

// Hoisitng in Functions
// hoisiting moved function declerations to top of scope;

sayHi();

function sayHi(){
    console.log("Hi");
}

// Hi --> Function declarations are hoisted with full defination.

// But function expressions are different.

// sayBye(); // uncomment this line to see error.

var sayBye = function(){
    console.log("Bye");
}


// TypeError: sayBye is not a function