1. setTimeout

Definition:
setTimeout schedules a function to run once after a specified delay.

Example:

setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);


When to use:

Delayed execution

Debouncing (e.g., search input API calls)

Showing loaders/skeletons briefly

Important:
Even if delay is 0 ms, the callback goes into the macrotask queue, so it runs after the current call stack + microtasks.

2. setInterval

Definition:
setInterval repeatedly executes a function at a fixed interval until cleared.

Example:

const id = setInterval(() => {
  console.log("Runs every 1 second");
}, 1000);

// Stop interval
clearInterval(id);


When to use:

Timers (countdown clocks)

Polling (checking server status repeatedly)

Important:

It does NOT guarantee exact timing — delay may increase if the call stack is busy.

Avoid for animation (use requestAnimationFrame instead).

3. requestAnimationFrame (rAF)

Definition:
requestAnimationFrame tells the browser: “Run this function before the next repaint (~60fps).”

Example:

function animate() {
  box.style.left = box.offsetLeft + 1 + "px";
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);


When to use:

Smooth animations

Game loops

Any performance-sensitive UI updates

Why better than setInterval for animations?
✔ Runs at optimal refresh rate (~60 fps)
✔ Pauses when tab is inactive → battery-efficient
✔ Jank-free animations

✅ Key Differences (interview gold)
Feature	setTimeout	setInterval	requestAnimationFrame
Runs	Once	Repeatedly	Before next paint
Queue	Macrotask	Macrotask	rAF queue (higher priority)
Accuracy	Medium	Low (drift)	High
Best for	Delays	Polling, timers	Animations
🔥 Event Loop Interaction (must mention!)

Timers use the Event Loop:

setTimeout & setInterval callbacks go to the macrotask queue

They run after all microtasks (Promise.then, async/await) finish

Example:

setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("microtask"));


Output:

microtask
timeout


Reason:
Microtasks → Macrotasks order.

🧠 Common Interview Traps (with perfect answers)
Q1. Will setTimeout(…, 0) run immediately?

A: No, it waits until the current call stack and microtasks finish.

Q2. Why should we avoid setInterval for animations?

A: Because setInterval does not sync with browser repaint and causes jank.
Use requestAnimationFrame for smooth 60fps animations.

Q3. How to stop a timer?
clearTimeout(id)
clearInterval(id)
cancelAnimationFrame(id)