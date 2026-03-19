//Asynchronous code in JavaScript is executed in a single-threaded environment, meaning that while one piece of code is running, other code cannot run until the first piece has finished. However, JavaScript uses an event loop to handle asynchronous operations, allowing certain tasks (like timers, network requests, etc.) to be executed without blocking the main thread.
console.log("Start");

setTimeout(() => {
  console.log("Done (after 1 second)");
}, 1000);

console.log("End");

//synchronous code example
console.log("A");
console.log("B");
console.log("C");