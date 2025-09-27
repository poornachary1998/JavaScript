// Type Coercion: Javascript automatically converts values behind the scenes when operators are used.

//COMMON CASES:

// 1. String + Number
console.log("5" + 2) //"52" -> (String + Number = Concatenation);

console.log("5" - 2) //3 => (String - Number = substraction);


//2. Boolean to Number true = 1 false = 0
console.log(true + 1); // 2 (1+1)
console.log(false + 1); //-1 (0-1)
console.log(true - 1); // 0 -> (1-1)
console.log(false - 1); // -1 -> (0 - 1)
console.log(true * 5); //5 -> ( 1 * 5)
console.log(false *  5); //0 -> (0 * 5)

//3.Equality Checks

console.log(5 === "5") // false 
console.log( 5 == "5"); // true

//<------------ Interview Questions--------------->
// 1.
console.log([] + []);
//o/p:  "" 
// Explaination: Javscript tries to convert non primitive( arrays / objects ) to primitive types,
//  when they are used with operators such as "+".

// For arrays, the default conversion is through toString() so [] => ""

// so, ("" + "") ==> ""

// 2.
console.log([]+{});
//Output:
//("" + [obj obj]) => "[obj obj]"


//3.
console.log({} + []);
//Output: will be both "[obj obj]" and 0

// if {} is an empty block then 
//  ( + "") = "" = 0

// If {} is not an empty block then [obj obj]
// [obj obj] + "" => "[obj obj]"


// 4.
console.log(true + true) //2
console.log(true - false) // 1

//5.
console.log(null == undefined) // true;
console.log( null === undefined) // false;

//6.
console.log("5" -2 ) // 3;

console.log("5" + 2 ) // "52"

// 7.
console.log(0 == false); // true
console.log(0 === false); // false -> types are diff

//8.
console.log([] == ![]) //true

//Explanation: In JavaScript, all objects (including arrays) are truthy, even if empty.
// if([]) {console.log("yes")} o/p: yes

// now ![]  will be false
// other hand [] = "" = 0

// so 0 == false // true

//9.
console.log(null >= 0)

//Explaination:

// Step 1: Understand the operator
// >= is a relational operator (like <, >, <=, >=).
// In JavaScript, when you compare a value with a number, both sides are coerced into numbers (not booleans).
// Number(null);  ==> 0;
// So null becomes 0.
// 0 >= 0
//so true is answer

//10.
console.log( null > 0); // false;

// Explaination:
//same above logic  0 > 0 so false


