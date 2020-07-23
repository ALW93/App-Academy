# **Notes**

## **Callbacks: Using a Function as an Argument**

**What is a callback?**

- A **`callback`** is always a function that is being passed into another function.

```js
let foobar = function (callback) {
  console.log("foo");
  callback();
  console.log("bar");
};

let sayHello = function () {
  console.log("hello");
};

foobar(sayHello); // prints
// foo
// hello
// bar
```

- Although we named our parameter _callback_, we could name it anything we like.

```js
let foobar = function (callback) {
  console.log("foo");
  callback();
  console.log("bar");
};

foobar(function () {
  console.log("hello");
}); // prints
// foo
// hello
// bar
```

- **`Anonymous Callback`** : When we use a function expression directly.
- Typically we want to assign our callback to a name if we plan on using it multiple times, an anonymous callball is better if it's just single use.

**A More Interesting Example**

```js
let add = function (num1, num2, cb) {
  let sum = num1 + num2;
  let result = cb(sum);
  return result;
};

let double = function (num) {
  return num * 2;
};

console.log(add(2, 3, double)); // 10
```

- **Variable expression function** being passed in as an argument.

```js
let add = function (num1, num2, cb) {
  let sum = num1 + num2;
  let result = cb(sum);
  return result;
};

console.log(add(60, 4, Math.sqrt)); // 8
```

- **`Math.sqrt`** built in function being passed directly in as an argument.

**Refactoring for an Optional Callback**

- We can add in a conditional to make the callback optional. (This is a very common pattern in Javascript!)

```js
let add = function (num1, num2, cb) {
  if (cb === undefined) {
    return num1 + num2;
  } else {
    return cb(num1 + num2);
  }
};

console.log(add(9, 40)); // 49
console.log(add(9, 40, Math.sqrt)); // 7
```

---

## **Callback Functions as First Class Objects**

- **`First-Class Object`** : A type that supports the same basic operations as most other types. (i.e. Numbers, Strings & Booleans)
- First-Class Objects must be able to do **three things**:

  - They can be stored in variables.
    - Function Expression Notation.
  - They can be passed as arguments.
    - Callback Functions.
  - They can be returned in functions.
    ```js
    function foo() {
      return function () {
        return "I'm a cat";
      };
    }
    ```

* As we have just proved above, functions are indeed first-class objects!
* **`Higher-Order Function`** : A function that should either accept another function as an argument, or return a function as an output.
* Callback Functions are passed into Higher-Order Functions.

---

## **Callback Functions Demo**

Interesting Interaction.

```js
let foo = function () {
  let bar = function () {
    console.log("interesting");
  };
  return bar;
};

console.log(foo()); // [function: bar]

let res = foo();
console.log(rest); // interesting.
```

- Saving our function into a variable will
