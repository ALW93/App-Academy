# **Notes**

## **All About Scope in Javscript**

The **`scope`** of a program in JS is the set of variables that are available for use within the program.

**Advantages of utilizing scope**

- **`Security`** : Adds security by ensuring variables can only be access by pre-defined parts of our program.
- **`Reduced Variable Name Collisions`** : Restricts re-using variable names; helps prevent overwriting variable names.

**Different Kinds of Scope**

- **`Global Scope`**
  - The widest and outermost scope.
  - Represented by the **`window`** obj in the browser and the **`global`** obj in Node.js.
  - Try to avoid these as much as possible.
- **`Local Scope`**
  - Scope within a function.
  - Includes function arguments, variables declared within function, also **any variables already declared when the function was defined**
- **`Block Scope`**
  - Contents within curly braces.

**Scope Chaining: Variables and Scope**

```js
let name = "Fiona";

// we aren't passing in or defining and variables
function hungryHippo() {
  console.log(name + " is hungry!");
}

hungryHippo(); // => "Fiona is hungry"
```

- A key scoping rule is that an inner scope **does** have access to variables in the outer scope.
- **`Scope Chaining`** : When a variable is not found within the immediate scope, JS will keep searching outwards until it matches the one we are referencing.
- Important to note while inner scopes can search outwards, outer scopes cannot reference inner variables!

**Lexical Scope**

- **`Lexing Time`** : When you run a piece of JS code that is parsed before it is run.

* JS language does not have dynamic scope.

---

## **Different Variables in Javascript**

- _A variable always evaluates to the value it contains no matter how you declare it._

**The different ways to declare variables**

- **`let`** : can be re-assigned; block-scoped.
- **`const`** : no re-assignment; block scoped.
- **`var`** : May or may not be re-assigned; scoped to a function.

**Hoisting and Scoping with Variables**

**`Hoisting`** is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

**Function-Scoped Variables**

- As we learned, var creates function-scoped variables, this means our declared var keyword variable will be confined to the scope of our current function.

**Hoisting with function-scoped variables**

```js
function test() {
  // var hoistedVar;
  console.log(hoistedVar); // =>  undefined
  var hoistedVar = 10;
}
```

- Even though we initially declared & initizalized our variable underneath the console.log var variables are "hoisted" to the top, but only in declaration.

**Block-Scoped Variables**

Things that create block-scopes:

- If Statements
- While Loops
- Switch Statements
- For Loops

**Properties of Constants**

- They are block-scoped like let.
- JS will enforce constants by raising an error if you try to change them.
- Constants that are assigned to Reference Types are **mutable**

**Hoisting with block-scoped variables**

- Unlike vars in function scopes, let and const in their block scopes do not get their declarations hoisted.
- Instead they are not initalized until their definitions are evaluated - instead of undefined we will get an error.
- **`Temporal Dead Zone`** : The time before a let or const variable is declared.

**Function Scope vs Block Scope**

- The downside of the flexibility of var is that it can easily overwrite previously declared variables.
- The block-scope limitations of let and const were introduced to easily avoid accidentally overwriting variable values.

**Global Variables**

- Any variables declared without a declaration term will be considered **`global scope`**.
- Every time a variable is declared on the global scope, the change of collision increases.
- Use the proper declarations to manage your code: Avoid being a sloppy programmer!

---

## **Closures**

**Calculating Closures**

- **Closure** : The combination of a function and the lexical environment within which that function is declared.
- **Use** : A closure is when an inner function uses, or changes, variables in an outer function.
- Very important for creativity, flexibility, and security of your code.
- **`Lexical Environment`** : Consists of any variables available within the scope in which a closure was declared (local inner, outer, and global).

**Closures and Scope**
Basic Closure Rules:

- Closures have access to all variables in it's lexical environment.
- A closure will keep reference to all the variables when it was defined **even if the outer function has returned**.

**Applications of Closures**

- **Private State**
  - JS does not have a way of declaring a function as exclusively private, however we can use closures to make a private state.
- **Passing Arguments Implicitly**

  - We can use closures to pass down arguments to helper functions.

  ```js
  function isPalindrome(string) {
    function reverse() {
      return string.split("").reverse().join("");
    }

    return string === reverse();
  }
  ```

---

## **Context in Javascript**

- **`Scope`** : Refers to the visibility and availability of variables.
- **`Context`** : Refers to the value of the **`this`** keyword when code is executed.

**What about `this` ?**

- **`This`** : Keyword that exists in every function and evaluates to the object that is currently invoking that function.
- **Method-Style Invocation** : syntax goes like `object.method(arg)`. (i.e. array.push, str.toUpperCase()
- **`Context`** refers to the value of this within a function and **`this`** refers to where a function is invoked.

**Issues with Scope and Context**

- If `this` is called using normal function style invocation, our output will be the contents of the global object.

**When Methods have an Unexpected Context**

```js
let dog = {
  name: "Bowser",
  changeName: function () {
    this.name = "Layla";
  },
};

let change = dog.changeName;
console.log(change()); // undefined

console.log(dog); // { name: 'Bowser', changeName: [Function: changeName] }

console.log(this); // Object [global] {etc, etc, etc,  name: 'Layla'}
```

- In the above example we get undefined when we assign our this function to a variable bc there is no obj to reference except the global one!
- **`global.setTimeout()`** : popular method of setting a function to run on a timer.

  - Accepts a callback and a number of milliseconds to wait before invoking the callback.

        ```js
        let hello = function () {
          console.log("hello!");
        };

        // global. is a method of the global object!
        global.setTimeout(hello, 5000); // waits 5 seconds then prints "hello!"
        ```

**Strictly Protecting the Global Object**

We can run JS in strict mode by tagging `use strict` at the top of our program.

- If we try to invoke this on our global function in strict mode we will no longer be able to access it and instead just get undefined.

**Changing Context using Bind**

"The simplest use of **`bind()`** is to make a function that, no matter how it is called, is called with a particular this value".

```js
let cat = {
  purr: function () {
    console.log("meow");
  },
  purrMore: function () {
    this.purr();
  },
};

let sayMeow = cat.purrMore;
console.log(sayMeow()); // TypeError

let boundCat = sayMeow.bind(cat);

boundCat(); // prints "meow"
```

**Binding with Arguments**

- We can also use bind() to bind arguments to a function.

  ```js
  let aboundFunc = func.bind(context, arg1, arg2, etc...);
  ```

  ```js
  const sum = function (a, b) {
    return a + b;
  };

  const add3 = sum.bind(null, 3);

  console.log(add3(10)); // 13
  ```

  ```js
  const multiply = function (a, b) {
    return a * b;
  };

  const double = multiply.bind(null, 2);
  const triple = multiply.bind(null, 3);

  console.log(double(3)); // 6
  console.log(triple(3)); // 9
  ```

---

## **Arrow Functions aka Fat Arrows**

- **`=>`** : A more concise way of declaring a function and also considers the behavior of `this` and context.

**Arrow Functions Solving Problems**

```js
let average = function (num1, num2) {
  let avg = (num1 + num2) / 2;
  return avg;
};

let averageArrow = (num1, num2) => {
  let avg = (num1 + num2) / 2;
  return avg;
};
```

As you can see the arrow function is shorter and easier to read.

**Anatomy of an Arrow Function**

- If there is only a single parameter there is no need to add parenthesis before the arrow function.
- However if there are zero parameters then you must add an empty set of parentheses.

**Single Expression Arrow Functions**

- Arrow functions, _unlike_ normal functions, carry over context, binding `this` lexically.
- Value of `this` inside an arrow function is not dependent on how it is invoked.
- Because arrow functions already have a _bound context_, you can't reassign `this`.

---
