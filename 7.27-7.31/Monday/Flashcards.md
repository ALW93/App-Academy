# **Flashcards**

## **Asynchronous**

**1. What are the arguments that the `setTimeout` and `setInterval` methods can accept?**

- 1. a callback function
  1. a delay time in milliseconds
  1. any number of additional arguments to be passed to the callback

**2. What does the `setTimeout` method return in the Node environment?**

- The `setTimeout` method returns a Timeout object that can be passed to `clearTimeout` to cancel the timeout.

**3. What does the `setTimeout` method return in the browser environment?**

- The `setTimeout` method returns a number representing the unique ID associated with that timeout. The ID number can be passed to `clearTimeout` to cancel the callback from running.

**4. Is JavaScript single-threaded or multi-threaded?**

- Single-threaded.

**5. What is the difference between single-threaded and multi-threaded execution?**

- Single-threaded execution means that only one command can be processed at a time. In multi-threaded execution, more than one command can be processed at a time.

**6. What are the two main data structures that comprise JavaScript's event loop?**

- The call stack and event queue.

**7. When a function is called, what occurs on the call stack?**

- A new stack frame that corresponds to that function call is pushed to the top of the stack.

**8. When a function returns, what occurs on the call stack?**

- The stack frame on top will be popped from the stack.

**9. In the JavaScript event loop, what is the message queue used for?**

- The message queue is used to track events that have occured but cannot be processed yet because the stack is already busy processing other commands. Once the stack is available, the "message" or event handler that is at the front of the queue will be moved to the stack for evaluation.

**10. When an event triggers, what occurs in the JavaScript runtime's message queue?**

- A new message that corresponds to that event is enqueued (added to the back of the queue).

**11. In what order will the following code print to the console?**

```js
console.log("first");

setTimeout(function () {
  console.log("second");
}, 0);

console.log("third");
```

- first
  third
  second

**12. What must occur for items to be dequeued (removed) from the JavaScript runtime's message queue?**

- The call stack must become empty. This happens when current task is finished executing.

**13. What is the difference between synchronous and asynchronous code?**

- In synchronous code, the commands execute one after the other in order. This means that completion of a "slow" function will block execution of further functions. In asynchronous code, the commands are not guaranteed to occur one after the other; an asynchronous function will not block execution of further functions.

---
