// this keyword.
// We will be covering this keyword in many scenarios.
// 1. "this" in global scope
// 2. "this" inside a function.
// 3. "this" inside a "non - strict mode" (this Substitution)
// 4. "this" value depends on how "this" keyword is called.
// 5. "this" inside a object's Method.
// 6. call, apply, bind method ( sharing methods).
// 7. "this" inside a arrow function.
// 8. "this" inside a nested arrow function.
// 9. "this" inside DOM.


// 1. "this" in global scope
// Run in browser
'use strict';

console.log(this);

//Output: Window object -- because for browser the Javascript run time is global Object which is Window object
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// 2. "this" inside a function.

function x(){
    console.log(this)
}
x();

// Undefined

//Explanation: when we are in strict mode, and if we console.log( this) then value will be undefined.

//What happens if we remove or do same if we are in 'non-strict mode'.

//'use strict'; (assuming use strict is commented) then

function y (){
    console.log(y)
}
y();

//Output: Window object in non stirct mode 
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// Explaination and Case 3: // 3. "this" inside a "non - strict mode" (this Substitution)

// If the value of "this" keyword is null or undefined. Then "this" keyword will be replaced with global Object - ONLY IN NON STRICT MODE.
// (THIS SUBSTITUTION)


// 4. "this" value depends on how "this" keyword is called.

function z(){
    console.log(this);
}
z(); // Undefined because we are calling z() without any reference and this is inside a function.
window.z(); // output: Window object.. If you call x() with refernce of window object then we see output as "Window" object.