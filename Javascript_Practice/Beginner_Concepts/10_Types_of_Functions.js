//Function:
// A block of code which will perform some specific task, They help make code reusable, organized and modular.

//1.Function Declearation:
//Defination with function Keyword, can be called before it is defined.

function greet(name){
    return `Hi ${name}`
}

console.log(greet("Raj"))
//pros: Hoisted and reusable.
//cons: cannot be felxible always.

//2.Function expression:
//Function stored in a variable, not hoisted until funciton is declared.

const greet1 = function (name) {
    return `Hi ${name}`
}

console.log(greet1("Rajesh"))

//pros: useful for callbacks.
//cons: cannot be hoisted before function defination.

//3. Arrow Functions ES6 Features:
// Shorter syntax using =>
// Dont have their own, this, arguments, and super

const greet2 = (name) =>{
    return `Hi ${name}`
}
console.log(greet2("heyyy"))

//If there is one single return then
const greet3 = name => `Hi ${name}`

console.log(greet3("short"))