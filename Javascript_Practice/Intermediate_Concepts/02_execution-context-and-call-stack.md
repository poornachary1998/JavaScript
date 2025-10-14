# 🎯 Execution Context & Call Stack

> Understanding how JavaScript manages code execution is crucial for mastering the language.  
> Execution Context is the environment where code runs, and the Call Stack tracks function calls.

---

## 🧠 1. What is Execution Context?

An **Execution Context** is an abstract concept that holds information about the environment within which the current code is being executed. It's like a container that stores all the necessary information needed to run a piece of code.

### Types of Execution Context

1. **Global Execution Context (GEC)**
   - Created when JavaScript starts running
   - Only one per program
   - Creates global object (`window` in browsers, `global` in Node.js)

2. **Function Execution Context (FEC)**
   - Created when a function is invoked
   - New context for each function call
   - Contains function-specific information

3. **Eval Execution Context**
   - Created when code is executed inside `eval()` function
   - Rarely used in modern JavaScript

---

## 🏗️ 2. Structure of Execution Context

Each execution context has three main components:

### 2.1 Variable Environment
- Stores variable declarations (`var`)
- Function declarations
- Formal parameters

### 2.2 Lexical Environment  
- Stores `let` and `const` declarations
- Has reference to outer environment (scope chain)

### 2.3 This Binding
- Determines the value of `this` keyword
- Depends on how function is called

```
Execution Context
├── Variable Environment
│   ├── Environment Record
│   └── Reference to outer environment
├── Lexical Environment  
│   ├── Environment Record
│   └── Reference to outer environment
└── This Binding
```

---

## 🔄 3. Execution Context Lifecycle

### Phase 1: Creation Phase (Memory Allocation)

During this phase:
- **Hoisting** occurs
- Variables are allocated memory
- Functions are stored entirely
- `this` value is determined

```js
// Example Code
console.log(x); // undefined (not error!)
console.log(getName); // [Function: getName]

var x = 5;
function getName() {
  return "John";
}
```

**Memory allocation:**
```
Global Execution Context (Creation Phase)
├── x: undefined
├── getName: [Function]
└── this: window/global
```

### Phase 2: Execution Phase (Code Execution)

During this phase:
- Code is executed line by line
- Variables get their actual values
- Functions are invoked

```js
// After execution phase
console.log(x); // 5
console.log(getName()); // "John"
```

**After execution:**
```
Global Execution Context (Execution Phase)
├── x: 5
├── getName: [Function]
└── this: window/global
```

---

## 📚 4. Call Stack

The **Call Stack** is a data structure that keeps track of function calls in your program. It follows the **LIFO** (Last In, First Out) principle.

### How Call Stack Works

1. When script starts, GEC is pushed to stack
2. When function is called, new FEC is pushed
3. When function returns, its context is popped
4. Stack becomes empty when program ends

### Visual Representation

```js
function first() {
  console.log("First function");
  second();
  console.log("First function end");
}

function second() {
  console.log("Second function");
  third();
  console.log("Second function end");
}

function third() {
  console.log("Third function");
}

first(); // Start execution
```

**Call Stack Evolution:**

```
Step 1: Program starts
┌─────────────────┐
│ Global Context  │
└─────────────────┘

Step 2: first() called
┌─────────────────┐
│ first() Context │
├─────────────────┤
│ Global Context  │
└─────────────────┘

Step 3: second() called
┌─────────────────┐
│ second() Context│
├─────────────────┤
│ first() Context │
├─────────────────┤
│ Global Context  │
└─────────────────┘

Step 4: third() called
┌─────────────────┐
│ third() Context │
├─────────────────┤
│ second() Context│
├─────────────────┤
│ first() Context │
├─────────────────┤
│ Global Context  │
└─────────────────┘

Step 5: third() finishes (popped)
┌─────────────────┐
│ second() Context│
├─────────────────┤
│ first() Context │
├─────────────────┤
│ Global Context  │
└─────────────────┘

Step 6: second() finishes (popped)
┌─────────────────┐
│ first() Context │
├─────────────────┤
│ Global Context  │
└─────────────────┘

Step 7: first() finishes (popped)
┌─────────────────┐
│ Global Context  │
└─────────────────┘
```

---

## 🔍 5. Detailed Example with Execution Context

Let's trace through a complete example:

```js
var globalVar = "I'm global";

function outerFunction(x) {
  var outerVar = "I'm outer";
  
  function innerFunction(y) {
    var innerVar = "I'm inner";
    console.log(globalVar); // Access global
    console.log(outerVar);  // Access outer
    console.log(innerVar);  // Access inner
    console.log(x, y);      // Access parameters
  }
  
  innerFunction(20);
}

outerFunction(10);
```

### Execution Context Creation:

**1. Global Execution Context:**
```
Global EC (Creation Phase)
├── Variable Environment
│   ├── globalVar: undefined
│   └── outerFunction: [Function]
├── Lexical Environment: null
└── this: window/global

Global EC (Execution Phase)
├── Variable Environment
│   ├── globalVar: "I'm global"
│   └── outerFunction: [Function]
├── Lexical Environment: null
└── this: window/global
```

**2. outerFunction Execution Context:**
```
outerFunction EC (Creation Phase)
├── Variable Environment
│   ├── x: 10
│   ├── outerVar: undefined
│   └── innerFunction: [Function]
├── Lexical Environment
│   └── Reference to: Global EC
└── this: window/global

outerFunction EC (Execution Phase)
├── Variable Environment
│   ├── x: 10
│   ├── outerVar: "I'm outer"
│   └── innerFunction: [Function]
├── Lexical Environment
│   └── Reference to: Global EC
└── this: window/global
```

**3. innerFunction Execution Context:**
```
innerFunction EC (Creation Phase)
├── Variable Environment
│   ├── y: 20
│   └── innerVar: undefined
├── Lexical Environment
│   └── Reference to: outerFunction EC
└── this: window/global

innerFunction EC (Execution Phase)
├── Variable Environment
│   ├── y: 20
│   └── innerVar: "I'm inner"
├── Lexical Environment
│   └── Reference to: outerFunction EC
└── this: window/global
```

---

## 🎭 6. Hoisting in Detail

Hoisting is a result of how execution contexts are created:

### Variable Hoisting

```js
console.log(a); // undefined (not ReferenceError)
console.log(b); // ReferenceError: Cannot access 'b' before initialization
console.log(c); // ReferenceError: Cannot access 'c' before initialization

var a = 1;
let b = 2;
const c = 3;
```

**Why this happens:**

```
Creation Phase Memory Allocation:
├── var a: undefined (hoisted)
├── let b: <uninitialized> (temporal dead zone)
└── const c: <uninitialized> (temporal dead zone)
```

### Function Hoisting

```js
// Function Declaration - Fully Hoisted
console.log(foo()); // "Hello from foo"

function foo() {
  return "Hello from foo";
}

// Function Expression - Only variable is hoisted
console.log(bar); // undefined
console.log(bar()); // TypeError: bar is not a function

var bar = function() {
  return "Hello from bar";
};
```

---

## 🔗 7. Scope Chain

The scope chain is created through the lexical environment's reference to outer environments:

```js
var global = "Global Variable";

function level1() {
  var level1Var = "Level 1 Variable";
  
  function level2() {
    var level2Var = "Level 2 Variable";
    
    function level3() {
      var level3Var = "Level 3 Variable";
      
      // Scope chain: level3 → level2 → level1 → global
      console.log(level3Var); // Found in level3
      console.log(level2Var); // Found in level2  
      console.log(level1Var); // Found in level1
      console.log(global);    // Found in global
    }
    
    level3();
  }
  
  level2();
}

level1();
```

**Scope Chain Visualization:**
```
level3() Execution Context
├── Own variables: level3Var
├── Reference to: level2() EC
│   ├── Variables: level2Var
│   ├── Reference to: level1() EC
│   │   ├── Variables: level1Var  
│   │   ├── Reference to: Global EC
│   │   │   └── Variables: global
│   │   └── Reference to: null
```

---

## ⚠️ 8. Common Pitfalls & Stack Overflow

### Stack Overflow

The call stack has limited size. Too many function calls can cause stack overflow:

```js
function recursiveFunction() {
  recursiveFunction(); // Infinite recursion
}

recursiveFunction(); // RangeError: Maximum call stack size exceeded
```

### Closures and Execution Context

```js
function createCounter() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (separate execution context)
```

Each `createCounter()` call creates a new execution context with its own `count` variable.

---

## 🛠️ 9. Debugging with Call Stack

### Browser DevTools

1. Open DevTools (F12)
2. Go to Sources tab
3. Set breakpoints
4. Check Call Stack panel during execution

### Call Stack in Error Messages

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  throw new Error("Something went wrong!");
}

a();

/*
Error Output:
Error: Something went wrong!
    at c (file.js:10:9)
    at b (file.js:6:3)
    at a (file.js:2:3)
    at file.js:13:1
*/
```

---

## 📝 10. Key Takeaways

1. **Execution Context** provides the environment for code execution
2. **Call Stack** manages the order of execution contexts
3. **Hoisting** occurs during the creation phase
4. **Scope Chain** is established through lexical environment references
5. **Understanding these concepts** helps debug and write better JavaScript

### Memory Tips

- 🏗️ **Creation** → **Execution** (two phases)
- 📚 **Stack** = LIFO (Last In, First Out)
- 🔗 **Scope Chain** = Lexical Environment references
- 🎭 **Hoisting** = Memory allocation before execution

---

## 🚀 11. Practice Exercise

Try to trace the execution context and call stack for this code:

```js
var x = 10;

function multiply(a, b) {
  var result = a * b;
  return result;
}

function calculate() {
  var num1 = 5;
  var num2 = 3;
  var answer = multiply(num1, num2);
  console.log("Answer:", answer);
}

calculate();
```

**Challenge:** Draw the call stack at each step and identify what's in each execution context!

---

> 💡 **Next:** Learn about Closures and how they work with Execution Contexts!