# **Notes**

## **Intro to Asynchronous JS**

- Every programming language has an unique aspect that distinguishes itself from the rest.
  - An example of a unique aspect about JS is it's heavy usage of callbacks.

**Synchronous vs Asynchronous Code**

- **`Synchronous`** : Means there is an inherent order among the commands and this order of execution is _guaranteed_.
  - Basically will evaluate top, down - left, right.
- **`Asynchronous`** : No guarantee in the total order that commands are executed.
  - Some examples of async methods:
  - **`setTimeout()`** : a method used to execute a callback after a given amount of time.
    - setTimeout's time delay is not an absolute guarantee, simply a **minimum**.
    ```js
    setTimeout(function () {
      console.log("time is up!");
    }, 1500);
    ```
  - **`setInterval()`** : Method that will continually execute a callback after a number of milliseconds, repeatedly.

**Can't believe it's async?**

- We cannot treat setTimeout as async under any circumstance.

  - The reason is that the time argument is not exact, it is the **`minimum amout of time`** that will elapse before executing the callback.

    ```js
    console.log("first");

    setTimeout(function () {
      console.log("second");
    }, 0);

    console.log("third");
    ```

    - Above is a great example of the earlier statement, showing that the actual delay may be more than 0.

**Why do we need asynchronous code?**

- The environment we run our programs is full of uncertainty.

- Because we are never in full control of the circumstances, the only thing we can control is our actual input code.

- **Some practical scenarios**:
  - Requesting data from an external server, we do not know when we will get a response back.
  - If we expect a user to interact with our programs we do not know when they will press certain buttons, scroll, etc.

---

## **Timeouts and Intervals**

```js
function foo() {
  console.log("food");
}

setTimeout(foo, 2000);
console.log("drink");
```

- In the above example, '`drink`' will print out before our `foo()` function executes due to our setTimeout.

- setTimeout is often referred to as **`non-blocking`** because they do not prevent code that follows their invocation from running.
- The time argument is optional, it will default to zero if there is no input.
- There are also an unlimited number of arguments you can provide.

```js
function foo(food1, food2) {
  console.log(food1 + " for breakfast");
  console.log(food2 + " for lunch");
}

setTimeout(foo, 2000, "pancakes", "couscous");
```

**Cancelling Timeouts**

```js
function foo() {
  console.log("food");
}

const val = setTimeout(foo, 2000);
console.log(val);

clearTimeout(val);
```

- If we run this, we get a special Timeout object - which is essentially useless except for being used as an argument to cancel an unexpired timeout.

- **`clearTimeout()`** : function used to cancel a setTimeout.
  - You can use clearTimeout in a conditional.

**Running Intervals**

- `setInterval` accepts the same arguments as `setTimeout`: **callback function, time, ...additional args)**

```js
function foo(food1, food2) {
  console.log(food1 + " and " + food2 + "!");
}

setInterval(foo, 1000, "pancakes", "couscous");
```

- The above code will repeatedly print out 'pancakes and couscous!', we can use `clearInterrval()` to cancel.

---

## **Threading**

![pic of thread](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-JavaScript/asynchronous-functions/assets/threading.png)

- **`Runtime`** : term used to describe the 'lifetime' of a program.

**Single-threaded vs multi-threaded execution**

- **`Thread of execution`** : term to describe a sequence of commands.
- **`Single-threaded execution`** : Only one command can be processed at a time.
  - **Javascript** is a single-threaded language, meaning at any instance during a program only one command is being executed.
- **`Multi-threaded`** : Multiple commands can be processed at the same time.

**Keeping the Thread from Unraveling**

- Because JS is single-threaded if a user inititates part of our program while something else is being executed, they will have to wait.

  ```js
  setTimeout(function () {
    console.log("times up!");
  }, 1000);

  let i = 0;
  while (true) {
    i++;
  }
  ```

* Here we have an example of a timeout function, followed by an infinite while loop.
* This program will hang indefinitely because our timeout will never get to run.

---

## **The Call Stack**

- **`Call Stack`** : Structure that JS uses to keep track of the valuation of function calls - uses the **`stack`** data structure.
- **`Stack`** : General pattern of organizing a collection of items.
  - New items must be placed on top of the pile (**pushing**)
  - At any point, the only item that can be removed is the top of the pile (**popping**)
- **`Stack Frames`** : Term to describe the items that are being pushed and popped.

**The Practical Consequences of the Call Stack**

- A program will typically exit once it's call stack is empty, the cases in which it does not is when it is **`Asynchronously Listening`**.

- **`An event can only be handled once the call stack is empty.`**

---

## **The Message Queue and Event Loop**

_Javascript is the tool that enables web pages to be interactive and dynamic._

**The Event Loop**

- JS uses an **event loop** model of execution.
  - Components include the call stack and a message queue (data structures).
- **`Message Queue`** : Keeps track of tasks that cannot be executed at the moment.

**The Message Queue**

- Uses the **`queue`** data structure.
- **`Queue`** : General patten of organizing a collection of things.

![illust of event loop](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-JavaScript/asynchronous-functions/assets/event-loop/03.png)

---

## **User Input with Readline**

- Gathering input from the user during runtime is an operation that is typically handled _asynchronously_ with events.

**Node's readline module**

- **`Module`** : A package of JS code that provides some useful functionality (i.e. Mocha for testing our code.)

```js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's up, doc? ", (answer) => {
  console.log("you responded: " + answer);
  rl.close();
});

// try to print 'DONE!' after the question
console.log("DONE!");
```

- The **readline** module is already pre-bundled with Node.

- **`readline`** : variable that is an object that contains all of the methods we can use from the module.
- **`createInterface`** : Allows us to read and print information from the terminal.
- **`Question`** : Method to ask the user something - accepts two arguments: a question message, and a callback.

**Callback Chaining**

```js
rl.question("What's up, doc? ", (answer) => {
  console.log("you responded: " + answer);
  rl.close();
  console.log("DONE!");
});
```

- To avoid the issue of wonky async behavior we can simply put the command we want to follow at the end of the callback.

- **`Callback Chaining`** : Pattern than allows us to perform a series of async functions one after the other. (Take care to manage our code neatly, otherwise it can get messy!)

**Example of messy code**

```js
// this code is a partial snippet from previous examples

rl.question("What's up, doc? ", (firstAnswer) => {
  console.log(firstAnswer + " is up.");

  rl.question("What's down, clown? ", (secondAnswer) => {
    console.log(secondAnswer + " is down.");

    rl.question("What's left, Jeff? ", (thirdAnswer) => {
      console.log(thirdAnswer + " is left.");
      rl.close();
    });
  });
});
```

- It is overly nested, we refer to code like this as **`callback hell`**.

**How it looks after it has been refactored**

```js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's up, doc? ", handleResponseOne);

function handleResponseOne(firstAnswer) {
  console.log(firstAnswer + " is up.");
  rl.question("What's down, clown? ", handleResponseTwo);
}

function handleResponseTwo(secondAnswer) {
  console.log(secondAnswer + " is down.");
  rl.question("What's left, Jeff? ", handleResponseThree);
}

function handleResponseThree(thirdAnswer) {
  console.log(thirdAnswer + " is left.");
  rl.close();
}
```

- By using named functions, our code structure looks much better!>
- **Rule of thumb**: use named functions when creating callback chains longer than two.

---
