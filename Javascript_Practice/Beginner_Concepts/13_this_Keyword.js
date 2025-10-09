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

//  5. "this" inside a object's Method.

const obj = {
    a: 10,
    x : function () {
        console.log(this);
    }
}

obj.x();

// Output: { a: 10, x: [Function: x] }
//Explanation: the "this" will reference to whole object.
// so if we console.log(this.a) then output will be 10.

//6. "this" keyword in call, apply, bind (sharing method);

//these are used to share methods between the functions.
// They’re used to control the value of this (the context in which the function runs) and to pass arguments explicitly.
//call():

const std1={
    name: "Rahul",
    callName: function () {
        console.log(this.name)
    }
}
std1.callName();

//o/p: Rahul

const std2 = {
    name : "poorna",
}

//Now std2 doesnot have callName method.
//Now we want to share the function from std1 to std 2. so that it will override the value of "this" in std1 & gives value of std 2;

std1.callName.call(std2);

//value of this will be = std2.

//7. "this" inside a arrow function.

// The enclosing lexical context (also known as lexical scope or lexical environment) 
// refers to the area of code where a variable or function is physically defined and thus accessible to inner functions.

// 🔹 1. Lexical means “by position in code”

// “Lexical” comes from how the code is written — not how it runs.
// So the lexical context of a function is determined by where it’s written in the source code, not where it’s called from.

// 🔹 2. Enclosing lexical context

// When a function is defined inside another function, the outer function becomes the enclosing lexical context for the inner one.

// This means:

// The inner function has access to variables and functions declared in its enclosing (outer) scope.

// Even after the outer function finishes execution, the inner function can still “remember” those variables — that’s the basis of closures.


const obj11 = {
    a: 10,
    x: () =>{
    console.log(this);
    }
}
obj11.x();

//Output: 
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//Explination: 
// As the obj is in the global scope then global object will be the value of "this", 
// because global space is the "enclosing lexical context"

//8. "this" inside a nested arrow function.

//From above explaination solve below:
const obj22 = {
    a: 20,
    y : function () {
        const z = () =>{
            console.log(this)
        }
    }()
}
obj22.y()

//Output : {a:20, x:function}
// Explination: The Enclosing lexical context of "this" is x: function () {____}
//"this" is inside x:function() so it behavees like this.
// const obj22 = {
//     a: 20,
//     y : function () {
//         console.log(this)
//     }
//     //     const z = () =>{
//     //         console.log(this)
//     //     }
//     // }()
// }
// obj22.y()