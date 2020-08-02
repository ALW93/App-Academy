# **Objectives**

## **Asynchronous JS**

**Identify JavaScript as a language that utilizes an event loop model**

- JS uses an **`event loop`** model of execution.
  - Components include the call stack and a message queue.

**Identify JavaScript as a single threaded language**

- **`Single-threaded execution`** : Only one command can be processed at a time.
  - **Javascript** is a single-threaded language, meaning at any instance during a program only one command is being executed.

**Describe the difference between asynchronous and synchronous code**

- **`Synchronous`** : Means there is an inherent order among the commands and this order of execution is guaranteed.
  Basically will evaluate top, down - left, right.

- **`Asynchronous`** : No guarantee in the total order that commands are executed.

**Execute the asynchronous function setTimeout with a callback.**

```js
function foo(food1, food2) {
  console.log(food1 + " for breakfast");
  console.log(food2 + " for lunch");
}

setTimeout(foo, 2000, "pancakes", "couscous");
```

**Given the function predict the output of "asyncy(callback);"**

```js
"function asyncy(cb) { setTimeout(cb, 1000); console.log("async") }"
```

```js
"function callback() { console.log("callback"); }",
```

**Use setInterval to have a function execute 10 times with a 1 second period. After the 10th cycle, clear the interval.**

```js
setInterval(function () {
  console.log("hello");
}, 5000);
```

**Write a program that accepts user input using Node’s readline module**

```js
const askGuess = () => {
  rl.question(
    "Berber asks: Can you guess how many snacks I want to eat right now? ",
    (answer) => {
      !checkGuess(Number(answer)) ? askGuess() : rl.close();
    }
  );
};
```

---
