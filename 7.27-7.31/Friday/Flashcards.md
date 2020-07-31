# **Flashcards**

## **IIFE Flash Cards**

**1. When is an IIFE invoked?**

- Immediately after it has been defined.

**2. True or False: A single IIFE can be invoked multiple times throughout an application.**

- False! An IIFE is invoked once then never again.

**3. What does IIFE stand for?**

- Immediately-Invoked Function Expression

**4. What is is the value of the test variable when the below code is run?**

```js
const test = (function () {
  return "hello";
})();

console.log(test); // ???
```

- The value of the test variable will be "hello". When an IIFE is assigned to a variable the function will be invoked and then the return value of that function will be assigned as the variable's value.

**5. What will happen when the below function is run?**

```js
(function () {
  const test = "Hello world!";
})();

console.log(test); // ???
```

- An error will be thrown. The variables defined within an IIFE are not available in an outer scope.

**6. It is best practice to write an IIFE as what kind of function?**

- An anonymous function expression. Since an IIFE will not be reinvoked - it is best practice to keep it anonymous.

**7. How can IIFEs help to keep the global namespace from being polluted by variables that are only used once?**

- Using IIFEs ensures our global namespace remains unpolluted by one off variable names because those variables are only available in the scope of the IIFE. If an IIFE has been invoked then the variables are no longer available in any other scope - inlcuding the global scope.

---

## **Hoisting in Javascript Flash Cards**

**1. Which way of defining a new function will hoist the name of the function to the top of it's current scope?**

- A function using function declaration.

**2. What will happen when the below code snippet is run?**

```js
meFunction();

function meFunction() {
  console.log("hello!");
}
```

- "hello" will be printed to the console. Since this is a function declration the name of the hello function will be hoisted to the top of the scope and so it will be available in memory starting from the first line of the snippet.

**3. What will happen when the below function is invoked?**

```js
hello();

let hello = function () {
  console.log("hello!");
};
```

- An "ReferenceError: hello is not defined" error will be thrown. A let declared Function Expression is not hoisted so the "hello" let variable will be unavailable.

**4. What will be printed when the below function is run?**

```js
let party = "pineapple";

function party(num) {
  console.log("party time!");
}

console.log(party);
```

- A ReferenceError will be thrown. As soon as the function declaration is run an error will be thrown because the above let variable has the same "party" name.

**5. What will happen when the below code snippet is run?**

```js
var foo = "apple";

function foo(num) {
  return "banana";
}

console.log(foo);
```

- "apple" will be printed to the terminal. When declaring a variable using var that variable assignment will take precedence over any declared functions with the same name.

**6. What will happen when the below code snippet is run?**

```js
var foo;

function foo(num) {
  return "I'm a function";
}

console.log(foo);
```

- The foo function will be printed to the console. Function declaration takes presedence over var variable declaration (but not variable assignment).

---

## **Falsey Values in JavaScript**

**1. Is an empty string, (""), a truthy or falsey value in JS?**

- An empty string is falsey.

**2. Name the seven falsey values in JavaScript.**

- false, 0, NaN, null, undefined, "" (empty string), and 0n. 0n is the BigInts primitive data type falsey value.

**3. Is ("false") truthy or falsey in JavaScript?**

- Truthy! A non-empty string like "false", no matter the characters within, will always be truthy.

**4. Is an empty object, ({}), truthy or falsey in JavaScript?**

- {} is truthy! This is a tricky one - because an empty string ("") is falsey!

**5. Is an empy array, ([]), truthy or falsey in JavaScript?**

- An empty array is truthy!

**6. Is 0 truthy or falsey in JavaScript?**

- 0 is falsey!

**7. What will be printed to the console when the below code is run?**

```js
if (NaN || 0 || "" || null || undefined) {
  console.log("hello");
} else {
  console.log("goodbye");
}
```

- "goodbye" will be printed because all of the values within the if conditional are falsey.

**8. What will be printed when the below code is run?**

```js
if (0 || "" || "0") {
  console.log("hello");
} else {
  console.log("goodbye");
}
```

- A non empty string ("0") will evaluate to true so the above code will print "hello"

---
