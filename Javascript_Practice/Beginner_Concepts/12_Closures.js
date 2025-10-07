// 🧠 Lexical Scope and Execution Context:
// In JavaScript, the call stack keeps track of which function is currently running.
// The Global Execution Context (GEC) is created first.
// When a function is called, a new Execution Context (EC) is created and pushed to the call stack.
// Once the function finishes executing, it’s popped off the stack.


// Closure:
//let see closure with simple example.

function z(){
    var a = 10;
     function y(){
        console.log(a)
     }
     y(); // calling immediatedly
}
z();
// console.log(z());

//Output: 10; 
//Behind the scenes: function y sees/ searches for value a inside it function, now as a is not in inside of y function.
// It will search in outer scope and we have a = 10 in outer scope (Lexical scope concept) so it returned 10.
// THIS IS CALLED CLOSURE...

//Closure: A function along with its lexical scope is called closure.

// ____________________________________________________________________________//

//In Javascript functions are heart
// we can assign functon to variable and also pass it as argument in JS.
// 💡 Functions in JavaScript Are First-Class Citizens

// That means:
// You can assign them to variables.
// You can pass them as arguments.
// You can return them from other functions.

// Example1:
var ex1 = function y(){
    console.log("Hi")
}
// Example2:
function x(ff){
    console.log(ff);
}
x(function y(){
    console.log(BYE)
})

function m(){
    var a = 10;
    function n(){
        console.log(a);
    }
    return n;           // we are returning whole y funciton here. 
}
var O = m();            //storing m() in O variable.
console.log(O);            //Once the value is stored, the m() is removed from call stack so there will be no m();
//.... 10000 lines code
m();                           // Now what happens if we call m(), as it is not there in call stack?

//Output: 10;
// Explanation:
// When a function returns another function, it still maintains the lexical scope (of parent). so we are getting value as 10;
// so when return n is exceuted, it returns fucntion n() + lexical scope of m() ===> closure

// When m() is called, it returns function n.

// Even though m() finishes and is removed from the call stack,
// the returned function n still remembers its lexical environment — the variable a.

// This is the closure — n + the lexical scope of m().

// ✅ In short:

// When a function returns another function, the inner function retains access to the outer function’s variables — even after the outer function has executed.