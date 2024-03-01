// Synchronous Operation:
// console.log('First');
// console.log('Second');
// console.log('Third');

// Asynchronous Operation:
// The third statement may happen first!
// Allows the code to execute without waiting for setTimeout to finish, non-blocking
console.log('First');
setTimeout(() => {
  console.log('Second');
}, 5000); // This code delays the log for 5 seconds!
console.log('Third');

/* Asynchronous programming in JavaScript refers to a programming paradigm where operations can be initiated and completed independently of the main program flow. This means that while one operation is being processed, the program can continue to execute other tasks without waiting for the first operation to finish. Asynchronous programming is essential for handling tasks that may take a significant amount of time to complete, such as fetching data from a server, reading files, or executing long-running computations.

JavaScript uses an event-driven, non-blocking I/O model for handling asynchronous operations. This is achieved through mechanisms such as callbacks, promises, and async/await. */
