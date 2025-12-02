# JavaScript Interview Preparation 🚀

This repository is a **complete roadmap** to master JavaScript for **interviews (MAANG / Product-based companies)**.  
It covers **Beginner → Intermediate → Advanced** concepts with theory, coding exercises, and polyfills.  

---

## 🟢 Beginner (Foundations — must be crystal clear)
These are basics, but interviewers expect you to explain them deeply.

1. Variables & Data Types (var, let, const, typeof, primitive vs reference types)  - Done
2. Type Conversion & Coercion  - Done
3. Operators (== vs ===, logical operators, ternary, spread/rest)  -- Done
4. Control Structures (if, switch, loops, for…in, for…of)  -- Done
5. Functions Basics (declaration, expression, arrow functions)  -- Done
6. Scope & Lexical Environment  --Done
7. Hoisting  --Done
8. Closures  -- Done
9. The `this` keyword (global, object, function, arrow fn, bind/apply/call)  --- Done
10. Prototype & Inheritance  --Done
11. Objects & Arrays Basics (create, iterate, destructure, freeze, seal)  -- Done
12. ES6 Basics → let/const, template literals, default params, destructuring, spread/rest  -- Done

---

## 🟡 Intermediate (Where real interviews begin)
Here you’ll start building **polyfills, async code, and DOM stuff**.

13. Execution Context & Call Stack  -- Done
14. Event Loop, Microtask Queue, Macrotask Queue  -- Done
15. Timers (setTimeout, setInterval, requestAnimationFrame)  -- Done
16. Call/Apply/Bind   --- Done.  
17. Currying  
18. Polyfills (forEach, map, filter, reduce, bind, call, apply)  
19. Deep Copy vs Shallow Copy (JSON, structuredClone, recursion)  
20. Event Bubbling, Capturing & Delegation  
21. Promises (then, catch, finally)  
22. Async/Await  
23. Promise.all, Promise.race, Promise.allSettled  
24. Error Handling (try/catch, async errors)  
25. Modules & Imports/Exports (ESM vs CommonJS)  
26. Generators & Iterators  
27. Set, Map, WeakSet, WeakMap  
28. Symbol & BigInt  
29. LocalStorage, SessionStorage, Cookies  
30. Debounce & Throttle (implement)  
31. Memoization (implement)  
32. JavaScript Engine & Garbage Collection  -- Done

---

## 🔴 Advanced (MAANG-level, tough interview Qs)
Now you’re getting into **design patterns, optimizations, and internals**.

33. Custom Polyfills → debounce, throttle, once, compose, pipe, flatten array, deepClone  
34. Custom Implementation → Promise, Promise.all, async/await, call/apply/bind, EventEmitter  
35. Event Loop Deep Dive → Node.js vs Browser  
36. Shadow DOM, Custom Elements, Web Components  
37. Service Workers & Caching  
38. WebSockets & Server-Sent Events (SSE)  
39. JavaScript Patterns (singleton, factory, observer, module, publish-subscribe, prototype)  
40. Functional Programming Concepts (pure functions, immutability, higher-order functions)  
41. OOP in JS (classes, constructor, private fields, static methods)  
42. Memory Management & Leaks  
43. Performance Optimization (reflow vs repaint, requestIdleCallback, web workers)  
44. Security in JS (XSS, CSRF basics, sanitization)  
45. Event Loop Advanced (task vs microtask vs rendering pipeline)  
46. Front-End System Design with JS (SPA routing, lazy loading, bundling, module federation)  

---

## 📌 How to Use This Repo
- Pick **1 concept per day** (2–3 hrs deep dive).  
- **Learn → Code → Push to GitHub → Write short notes**.  
- Maintain consistency: **daily commits = daily progress**.  
- Revise weekly and connect concepts with **React + System Design**.  

---

💡 By following this roadmap for **2 months**, you’ll have:  
- ✅ A strong grasp of JavaScript (beginner → advanced)  
- ✅ A GitHub repo full of polyfills, examples, and mini-projects  
- ✅ Confidence for **DSA + Frontend interviews at 25 LPA+ companies**  

---



✅ 40 JavaScript Problem-Solving Questions (5+ Years Experience)

I grouped them by difficulty + real-world category.

A. Medium-Level Logic (Warm-Up)
1. Implement debounce(fn, delay)

Runs function after user stops triggering it.

2. Implement throttle(fn, delay)

Ensures function runs once every X ms.

3. Polyfill: Array.prototype.map
4. Polyfill: Function.prototype.bind
5. Remove duplicates from an array (multiple ways)

Using Set

Using filter

Using reduce

6. Flatten an array without using .flat()
flatten([1,[2,[3,4]],5]) // [1,2,3,4,5]

7. Convert nested object to a single-level object
{ a: { b: 2 }, c: 3 } → { "a.b": 2, "c": 3 }

8. Find missing number from 1…N
9. Count frequency of characters in a string
10. Deep clone an object without JSON.stringify
B. Advanced Logic Problems (5+ YOE)
11. Implement a custom Promise

With:

resolve

reject

then

catch

12. Promise all polyfill
13. Promise race polyfill
14. Write an LRU Cache

Using Map (real interview FAVORITE).

15. Event Emitter
on(), off(), emit()

16. Implement Memoization function
const memo = (fn) => { … }

17. Create a retry mechanism for failed API

Retry 3 times with delay.

18. Limit concurrent API calls

Example: allow only 3 parallel calls → queue the rest.

19. Implement a task scheduler

Runs tasks in sequence or parallel.

20. Create a Pub/Sub system
C. Event Loop / Async / Execution Context Problems

These ALWAYS appear in senior interviews.

21. Predict output involving

microtasks (Promise, queueMicrotask)

macrotasks (setTimeout)

async/await

Example:

console.log("A");

setTimeout(() => console.log("B"));

Promise.resolve().then(() => console.log("C"));

async function test() {
  console.log("D");
  await Promise.resolve();
  console.log("E");
}
test();

console.log("F");


Interview expects you to explain why the output is A D F C E B.

D. Closures, Scope, Hoisting
22. Fix closure inside a loop
for (var i=1; i<=3; i++) {
 setTimeout(() => console.log(i), 1000);
}

23. Build a counter with private variable
const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2

24. Implement once(fn)

Function runs only once.

25. Explain output:
var a = 10;
function test() {
  console.log(a);
  var a = 20;
}
test();

E. DOM & Browser-Based JS Problems
26. Build a custom event delegation system
27. Implement Infinite Scroll logic
28. Implement a virtualized list

(Like React Window)

29. Build a simple reactive system (Vue-like reactivity)
30. Polyfill for addEventListener
F. Real-World System Design + JS Coding
31. Build an autocomplete search with debounce
32. Create a simple scheduler like setInterval using setTimeout
33. Implement a simple router (SPA routing)
34. Chunk a large array into smaller batches
35. Build a polling function

Poll API every 2 seconds until condition becomes true.

36. Create an in-memory database with CRUD
37. Convert CSV to JSON (manually parse it)
38. Implement parallel + sequential execution of tasks
39. Cache HTTP GET calls

If same URL is requested → return cached response.

40. Build a custom asyncQueue class

Supports:

enqueue

dequeue

pause

resume