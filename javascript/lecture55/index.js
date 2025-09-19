//event loop
// What is an Event Loop?/
// It’s commonly used in JavaScript (Node.js, browsers), Python (asyncio), and other asynchronous systems.

// 🔹 How It Works (JavaScript Example)

// Call Stack → Where your code runs line by line.

// Web APIs → Handle async tasks (setTimeout, fetch, event listeners)./

// Callback/Task Queue → Stores tasks once async work is finished.

// Event Loop → Watches the call stack.

// If the stack is empty, it takes the next task from the queue and pushes it onto the stack.
console.log("start");
setTimeout(() => {
    console.log("ankit kumar")
}, 5000);
console.log("end");
 