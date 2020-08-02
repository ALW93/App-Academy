# **Objectives**

## **JS Trivia**

**1. Given a code snippet of a unassigned variable, predict its value.**

- let name;
  - undefined
- var name;
  - undefined
- const name;
  - throws an error - syntax error: missing initalizer.

**2. Explain why functions are “First Class Objects” in JavaScript**

- Functions are considered first class objects in JS because they can be assigned to variables, can be passed as arguments in parameters, and can also be returned from inside other functions.

**3. Define what IIFEs are and explain their use case**

- IIFE's are Immediately Invoked Function Expressions, they are used when you only want to invoke a certain function once in your program
- They are beneficial because they help reduce global variable clutter and help us to also avoid name collisions when importing large libraries.

**4. (Whiteboarding) Implement a closure**

**5. Identify JavaScript’s falsey values**

- 0
- ""
- NaN
- Undefined
- 0n
- false
- null

**6. Interpolate a string using back-ticks**

```js
console.log(`Hello my name is ${BERVAR} nice to meet you`);
```

**7. Identify that object keys are strings or symbols**

- If you use the built in Object.keys() method our symbol properties will not be includes.
- To get an array of our symbols within an object we can use Object.getOwnPropertySymbols().

**8. A primitive type is data that is not an object and therefore cannot have methods(functions that belong to them).**

- Objects are the only ones who have methods.
- The string methods are actually just a string object that overlaps.

**9. Given a code snippet where variable and function hoisting occurs, identify the return value of a function.**

- let => cannot access before initialization
- var => undefined
- const => same as let

---
