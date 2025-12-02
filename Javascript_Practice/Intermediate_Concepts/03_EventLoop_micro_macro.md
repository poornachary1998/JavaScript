📘 Event Loop, Microtask Queue & Macrotask Queue — Interview Notes
🔥 Top 10 Points You MUST Know
1. JavaScript is Single-Threaded

JavaScript has one Call Stack, so it executes one line of code at a time.

2. Event Loop Handles Async Code

The Event Loop constantly checks:

If the Call Stack is empty

Then moves tasks from queues → stack

3. Two Important Queues Exist

Microtask Queue

Macrotask (Task) Queue

4. Microtasks Have Higher Priority

Microtasks always run before any macrotask.

Examples:

Promise .then()

Promise .catch()

Promise .finally()

queueMicrotask()

MutationObserver

5. Macrotasks Run After Microtasks

Examples:

setTimeout

setInterval

setImmediate (Node.js)

requestAnimationFrame

DOM events

Network events

6. Event Loop Execution Order

Synchronous code

All microtasks

One macrotask

Repeat

7. Microtasks Can Add More Microtasks

Before switching to macrotasks, the event loop will finish all microtasks.

8. Macrotasks Run One at a Time

After finishing a macrotask, microtasks run again before the next macrotask.

9. Promises Always Run Before setTimeout

Even if setTimeout(..., 0) occurs first, Promises run first because:
👉 Microtask queue > Macrotask queue

10. Browser Web APIs Handle Async Operations

Web APIs like fetch, DOM events, setTimeout work outside JS thread and push callbacks to respective queues.

⭐ Interview Example
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

Output:
A
D
C
B

Explanation:

Synchronous: A → D

Microtasks: C (Promise)

Macrotasks: B (setTimeout)

👉 Microtasks always execute before macrotasks.

📊 Event Loop Diagram (Text Version)
┌────────────────────────────┐
│        Call Stack          │
└────────────────────────────┘
            ▲
            │
     Event Loop
            │
            ▼
┌────────────────────────────┐
│     Microtask Queue        │
│ (Promises, queueMicrotask) │
└────────────────────────────┘
            ▲
            │
┌────────────────────────────┐
│     Macrotask Queue        │
│ (setTimeout, events...)    │
└────────────────────────────┘