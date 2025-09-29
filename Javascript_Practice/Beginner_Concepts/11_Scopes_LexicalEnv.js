// Scope: Determines where variables functions and objects are accessible in your code.

//Types of Scopes:

//1. Global Scope:

// Variables declared outside of function.
// Can be accessed everywhere in code.

let globalVar= "Raju";

function scope1(){
    return `Hi ${globalVar}`;
}
scope1()

// 2.Function Scope/ Local Scope.
// Variables declared and accessed only inside functions.

function local(){
    let b = 10;
    return `The value is ${b}`;
}
local()

// console.log(b); // Error. Not accessible.

//3. Block scope:
// variables declated with let and cost  inside {} Can be accessed only inside {} block are called block scope.

if(true){
    const block = 'test';
    console.log(block)
}
// console.log(block) // Error

// Lexical Enviornment:
function lex(){
    let a = 10;
    lex2()
    function lex2(){
        
        console.log(a)
    }
}
lex();
// console.log(a)

//Notes:
// 🔹 Step 1: Global Lexical Environment

// When the program starts, the Global Lexical Environment is created.

// It contains:

// lex function definition

// Reference to outer = null (no parent above global)

// 🔹 Step 2: Execution of lex()

// When lex() is called:

// A new Lexical Environment for lex is created.

// Environment Record stores:

// a = 10

// lex2 function definition

// Outer Reference → Global Environment

// 🔹 Step 3: Execution of lex2()

// Inside lex, lex2() is invoked.

// A new Lexical Environment for lex2 is created.

// Environment Record is empty (no local variables in lex2).

// Outer Reference → Lexical Environment of lex.

// When console.log(a) runs:

// JS first checks lex2’s environment → no a.

// Goes to outer (lex) → finds a = 10.

// ✅ Prints 10.

// 🔹 Step 4: Execution of console.log(a) (Global)

// After lex() finishes, execution goes to:

// console.log(a);


// At global scope, JS looks for a.

// a was declared inside lex, not global.

// ❌ Not found → ReferenceError: a is not defined.

// 🔹 Output
// 10
// ReferenceError: a is not defined

// 🔹 Key Notes from This Example

// Lexical Environment links inner functions to outer variables.

// That’s why lex2() can access a from lex.

// Scope Chain ensures lookup goes outward until global scope.

// Variables declared inside a function (a in lex) are not accessible globally.

// After the function execution, its lexical environment is destroyed, but closures can preserve it if returned.