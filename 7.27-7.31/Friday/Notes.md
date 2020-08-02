# **Notes**

## **IIFE's**

- **`Immediately Invoked Function Expressions`** : (IIFE's) are functions called immediately after they have been defined.

  ```js
  // 1. wrap the anonymous function in the grouping operator
  // 2. invoke the function!
  (function () {
    statements;
  })();
  ```

- This is the basic sytax of an IIFE.
- This syntax forces JS to run our function as a function expression immediately, and afterwards it will never be invoked again.

**IIFE's keep functions and variables Private**

- Benefits of IIFE's:
  - Ensures our global space is not overly polluted with function or variable names.
  - Can protect global variables from being overwritten.

* There is no point in naming an IIFE since it will only be invoked once.

---

## **Interpolation in Javascript**

- **Template Literal** : New way to create a string literal that expands on the syntax of the String primitive type allowing for interpolated expressions to be inserted easily into strings.
- **\${}** with backticks!

  ```js
  function boringSayHello(name) => {
      console.log("Hello " + name + "!");
  };

  function templateSayHello(name) => {
      console.log(`Hello ${name}!`);
  };

  boringSayHello("Joe"); // prints "Hello Joe!"
  templateSayHello("Joe"); // prints "Hello Joe!"
  ```

---

## **Object Keys & Symbols**

- **Symbol** : Unique primitive data type introduced in ES6 to create object properties - it's main purpose is to create unique object properties.
  ```js
  const sym1 = Symbol();
  console.log(sym1); // Symbol()
  ```
- Symbols are **unique** .

  ```js
  const sym1 = Symbol();
  const sym2 = Symbol();

  console.log(sym1 === sym2); // false
  ```

* We can pass in a description string to identify our symbol.
  - _Do not confused the description as a name to reference the symbol._
  ```js
  const symApple = Symbol("apple");
  console.log(symApple); // Symbol(apple)
  ```
  **Symbols vs Strings as keys in Objects**
  - **`Name Collision`** : When a program attempts to use the same variable name twice for different values.
    - Using symbols is a great way to avoid this!

**Iterating Through Objects using Symbol Keys**

The built-in **`Object.getOwnPropertySymbols()`** can be used to grab all the symbols in an object.

- Using symbols certainly have advantages when working your local code, but they really shine when you have to import larger libraries of code into your own projects - helps to avoid name collisions!

---

## **Primitive Data Types in Depth**

- There are 8 data types in JS, 1 reference and 7 primitive.
- **Primitive Types**
  - Boolean
  - Null
  - Undefined
  - Number
  - String
  - Symbol
  - BigInt
- **Reference Type**
  - Object
- Primitive types are immutable and also **`do not have built-in methods`**.
- The string methods are actually used with an object that wraps our string.

---

## **Unasssigned Variables in Javascript**

- The default value of let and var is undefined.
- Const **must** be assigned a value.

**The difference between default values and hoisting**

- Whenever a variable is declared with var, it's name will be hoisted to the top of the function but will be undefined.
- Let is also hoisted but there will be no defined valued, an error will be thrown if one attempts to access it's value.

---
