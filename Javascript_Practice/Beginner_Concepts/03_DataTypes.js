// JavaScript has two main categories of data types:

// Primitive Types (immutable, stored by value)

// Reference Types (mutable, stored by reference)

// 1. Primitive Data Types

// ⚡ Stored in stack memory → each variable holds a copy of the value.
// ⚡ Immutable → cannot be changed after creation.

// Primitives = string, number, boolean, undefined, null, symbol, bigint


// typeof "Hello"; // "string"
// typeof 123;     // "number"
// typeof true;    // "boolean"
// typeof undefined; // "undefined"
// typeof null;    // ❌ "object" (bug in JS, interview favorite!)
// typeof {};      // "object"
// typeof [];      // "object"
// typeof function() {}; // "function"


// 2. Reference Data Types

// ⚡ Stored in heap memory → variable stores a reference (memory address).
// ⚡ Mutable → contents can be changed.

// Types:

// Object

// let user = { name: "Alice", age: 25 };
// console.log(typeof user); // "object"


// Array

// let arr = [1, 2, 3];
// console.log(typeof arr); // "object"


// Special kind of object with numeric keys.

// Function

// function greet() { return "Hi"; }
// console.log(typeof greet); // "function"


// Special object callable with ().

// Date, RegExp, Map, Set, WeakMap, WeakSet

// let d = new Date();
// console.log(typeof d); // "object"

// Mutable vs Immutable

// Primitives → Immutable (changing creates a new copy).

// References → Mutable (changing affects all references).

// // Immutable (primitive)
// let a = "JS";
// let b = a;
// b = "React";
// console.log(a, b); // "JS", "React"

// // Mutable (reference)
// let obj1 = { lang: "JS" };
// let obj2 = obj1;
// obj2.lang = "React";
// console.log(obj1.lang); // "React"