# **Objectives**

## **Expressions and Intro to Functions**

- **Given a working REPL interface, write and execute a statement that will print “hello world” using console.log**
  - `console.log("hello world!");`

* Identify that strings are a list of characters defined by using double or single quotes\*\*

- The **string** data type is a primitive data type that used to represent textual data.

- can be wrapped by either **single** or **double** quotation marks, _best to choose one and stick with it for consistency_.

- **Given an arithmetic expression using +, -, \*, /, %, compute its value**

  ```js
  console.log(25 % 7); // 4
  console.log(9 + 4); // 13
  console.log(2 + 4 * 5); // 22
  console.log(9 / 2); // 4.5
  console.log(10 - 3); // 7
  ```

- **Given an expression, predict if its value is NaN**
  - In general, any nonsensical arithmetic will result in **NaN** ; usually operations that include undefined.

* **Construct the truth tables for &&, ||, !**

  - **Not Truth Table**

    | Input  | Ouput |
    | ------ | ----- |
    | !true  | false |
    | !false | true  |

  - **Or Truth Table**
    | Input | Input | Output |
    | ----- | ----- | ------ |
    | T | T | T |
    | T | F | T |
    | F | T | T |
    | F | F | F |
  - **Not Truth Table**
    | Input | Input | Output |
    | ----- | ----- | ------ |
    | T | T | T |
    | T | F | F |
    | F | T | F |
    | F | F | F |

- **Given an expression consisting of >, >=, ===, <, <=, compute it’s value**
  ```js
  console.log(24 > 3 && false); // false
  ```
- **Apply De Morgan’s law to a boolean expression**

  ```js
  !(A || B) === !A && !B;
  !(A && B) === !A || !B;
  ```

- **Given an expression that utilizes operator precedence, compute its value**

  ```js
  console.log((2 + 4) * 5); // 30
  ```

- **Given an expression, use the grouping operator to change it’s evaluation**

  ```js
  console.log(2 + 3 * 4); // => 14
  console.log((2 + 3) * 4); // => 20
  ```

- **Given expressions using == and ===, compute their values**

  ```js
  console.log(43 === "43"); // => false
  console.log(43 === "43"); // => true
  ```

- **Given a code snippet using postfix ++, postfix --, +=, -=, /=, \*=, predict the value of labeled lines**

  ```js
  let x = 7;
  x++;
  x - 2;
  x *= 3;
  console.log(x); // 24

  let i = 4;
  i + 3;
  console.log(i); // 4

  let i = 4;
  i += 3;
  console.log(i); // 7
  ```

* **Create and assign a variable using let to a string, integer, and a boolean. Read its value and print to the console.**

  ```js
  let sent = "Hello I am a string.";
  let int = 2901;
  let bool = !true;
  ```

* **Define a function using function declaration**

  ```js
  function cat(name) {
    if (name === "Berber") {
      return "He's the best boy in the whole world!";
    } else {
      return "Where is Berber?";
    }
  }
  ```

* **Define a function that calculates the average of two numbers, call it, pass in arguments, and print it’s return value**

  ```js
  function avgOfTwo(num1, num2) {
    return (num1 + num2) / 2;
  }

  console.log(avgOfTwo(5, 11)); // => 8
  ```

* **Identify the difference between parameters vs arguments**
  - **Parameters** : Comma seperated variables specified as part of a function's declaration.
  - **Arguments** : Values passed to the function when it is invoked.
  ---
