# **Flashcards**

## **Javascript Errors**

**1. How do you halt program execution with an instance of an error object in JavaScript?**

- Using the keyword throw you can throw your own runtime errors that will stop program execution.

**2. What kind of error is thrown when a variable or parameter is not of a valid type?**

- A TypeError is thrown when an operation cannot be performed because the operand is a value of the wrong type.

**3. What kind of error will be thrown when the below code is executed?**

```js
function callPuppy() {
  const puppy = "puppy";
  console.log(pupy);
}

callPuppy();
```

- ReferenceError: pupy is not defined

**4. What kind of error will be thrown when the below code is run?**

```js
function broken () {
  console.log("I'm broke")
}}
```

- SyntaxError: Unexpected token '}'

**5. What kind of error will the below code throw when executed?**

```js
const puppy = "puppy";

puppy = "apple";
```

- TypeError: Assignment to constant variable.

**6. What kind of error will the below code throw when executed?**

```js
let dog;

dog();
```

- TypeError: dog is not a function

**7. What type of block will allow you to run an erroring function then continue the execution of code after that function is run?**

- We can use try...catch blocks with functions that might throw an error to catch that error and continue code execution after that error was thrown

**8. What type of error is thrown when a non-existent variable is referenced?**

- The ReferenceError object represents an error when a non-existent variable is referenced.

**9. When is a JavaScript Error Object thrown?**

- The Error object is how JavaScript deals with runtime errors - so at code runtime!

**10. When kind of error is thrown when the JavaScript engine attempts to parse code that does not conform to the syntax of the JavaScript language?**

- A SyntaxError is thrown when there is an error in the syntax of the executed code.

---

## **TDD**

**1. Identify at least two reasons why developers use TDD.**

- 1. Writing tests before code ensures that the code written works.
  2. Only required code is written.
  3. TDD helps enforce code modularity.
  4. Better understanding of what the code should be doing.

**2. What are the three steps of the TDD workflow?**

- Red, Green, Refactor

**3. What does a developer do in the Green step in the TDD workflow?**

- Write the minimum amount of code to ensure the tests pass (a
  passing test will be green).

**4. What does a developer do in the Red step in the TDD workflow?**

- Write the tests and watch them fail (a failing test is red). It's
  important to ensure the tests initially fail so that you don't have false
  positives.

**5. What does a developer do in the Refactor step in the TDD workflow?**

- Refactor the code you just wrote. Your job is not over when the
  tests pass! One of the most important things you do as a software developer
  is to ensure the code you write is easy to maintain and read.

**6. What does TDD stand for?**

- Test Driven Development.

---
