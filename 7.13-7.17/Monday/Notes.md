# **Notes**

## **How to learn effectively**

**Learning**: The acquisition of skills and the ability to apply them in the future.

**What makes an Effective learner?**

- They are active listeners.
- They are engaged with the material.
- They are receptive of feedback.
- They are open to difficulty.

**Why do active learning techniques feel difficult?**

- It feels difficult because you are constantly receiving feedback, and so you are constantly adapting and perfecting the material.

**Desirable Difficulty**

- The skills we wish to obtain is often a difficult one.
- We want challenging but possible lessons based on current level of skill.

**Effective learners space their practice**

- Consistent effort > cramming => for **durable knowledge**

---

## **Hello World**

- **console.log** : command used to print something onto the screen.

* **syntax** : the exact arrangement of the symbols, characters, and keywords in our code.
* **//** : notation for creating a code comment in JS.
* **code comment** : useful for annotating pieces of code to explain how something works, ignored by computer.

> "Simplicity is prerequisite for reliability." -- Edsger W. Dijkstra

---

## **The Number Data Type**

The **number** data type in JS is used to represent any numerical values, including integers and decimal numbers.

**Basic Arithmetic Operators**

Operators are the symbols that perform particular operations.

- **+** (addition)
- **-** (subtraction)
- **asterisk** (multiplication)
- **/** (division)
- **%** (modulo)

JS evaluates more complex expressions using the general math order of operations aka PEMDAS.

- **PEMDAS** : Parentheses, Exponents, Multiplication, Division, Modulo, Addition, Subtraction.
- _To force a specific order of operation, use the group operator ( ) around a part of the expression._

**Modulo** : Very useful operation to check divisibility of numbers, check for even & odd, whether a number is prime, and much more! _(Discrete Math concept, circular problems can be solved with modulo)_

- Whenever you have a smaller number % a larger number, the answer will just be the initial small number.
  ```js
  console.log(7 % 10); // => 7;
  ```

---

## **The String Data Type**

The **string** data type is a primitive data type that used to represent textual data.

- can be wrapped by either **single** or **double** quotation marks, _best to choose one and stick with it for consistency_.
- If your string contains quotation marks inside, can layer single or double quotation marks to allow it to work.

  ```js
  "That's a great string"; (valid)

  'Shakespeare wrote, "To be or not to be"'; (valid)

  'That's a bad string'; (invalid)
  ```

  - Alt. way to add other quotes within strings is to use template literals.

  ```js
  `This is a temp'l'ate literal ${function}` // use ${} to invoke functions within.
  ```

- **.length** : property that can be appended to data to return the length.
  - empty strings have a length of zero.
- **indices** : indexes of data that begin at 0, can call upon index by using the bracket notation [ ].
  ```js
  console.log("bootcamp"[0]); // => "b"
  console.log("bootcamp"[10]); // => "undefined"
  console.log("boots"[1 * 2]); // => "o"
  console.log("boots"["boot".length - 1]); // => "t"
  ```
  - we can pass expressions through the brackets as well since JS always evaluates expressions first.
- The index of the last character of a string is always one less than it's length.
- **indexOf()** : method used to find the first index of a given character within a string.
  ```js
  console.log("bagel".indexOf("b")); // => 0
  console.log("bagel".indexOf("z")); // => -1
  ```
  - if the character inside the indexOf() search does not exist in the string, the output will be -1.
  - the indexOf() search will return the first instanced index of the the char in the string.
  - **concatenate** : word to describe joining strings together into a single string.

---

## **The Boolean Data Type**

The **boolean** data type is the simplest data type since there are only two values: **true** and **false**.

- **Logical Operators** (B*oolean Operators*) are used to establish logic in our code.

  - **!** (not) : reverses a boolean value.
    ```js
    console.log(!true); // => false
    console.log(!!false); // => false
    ```
  - **&&** (and) **Truth Table**

    | Input | Input | Output |
    | ----- | ----- | ------ |
    | T     | T     | T      |
    | T     | F     | F      |
    | F     | T     | F      |
    | F     | F     | F      |

  - **||** (or) **Truth Table**

    | Input | Input | Output |
    | ----- | ----- | ------ |
    | T     | T     | T      |
    | T     | F     | T      |
    | F     | T     | T      |
    | F     | F     | F      |

- **Logical Order of Operations** : JS will evaluate !, then &&, then ||.
- **De Morgan's Law** : Common mistake in boolean logic is incorrectly distributing ! across parentheses.

  ```js
  !(A || B) === !A && !B;
  !(A && B) === !A || !B;
  ```

  - In summary, to correctly distribute ! across parentheses we must also flip the operation within.

- **Short-Circuit Evaluation** : Because JS evalutes from left to right, expressions can "short-circuit". For example if we have true on the left of an || logical comparison, it will stop evaluating and yield true instead of wasting resources on processing the rest of the statement.
  ```js
  console.log(true || !false); // => stops after it sees "true ||"
  ```
  ***

## **Comparison Operators**

All comparison operators will result in a boolean output.

**The relative comparators**

- **>** (greater than)
- **<** (less than)
- **>=** (greater than or equal to)
- **<=** (less than or equal to)
- **===** (equal to)
- **!==** (not equal to)

> Fun Fact: "a" < "b" is considered valid JS Code because string comparisons are compared lexicographically (meaning dictionary order), so "a" is less than "b" because it appears earlier!

> If there is ever a standstill comparison of two string lexicographically (i.e. app vs apple) the comparison will deem the shorter string lesser.

**Difference between == and ===**

- **===** : Strict Equality, will only return true if the two comparisons are entirely the same.
- **==** : Loose Equality, will return true even if the values are of a different type, due to coercion. (Avoid using this)

---

## **Variables**

Variables are used to store information to be referenced and manipulated in a program.

- We initialize a variable by using the **let** keyword and a **=** single equals sign (assignment operator).
  ```js
  let bootcamp = "App Academy";
  console.log(bootcamp); // "App Academy"
  ```
- JS variable names can contain any alphanumeric characters, underscores, or dollar signs (cannot being with a number).
- If you do not declare a value for a variable, undefined is automatically set.
  ```js
  let bootcamp;
  console.log(bootcamp); // undefined
  ```
- We can change the value of a previously declared variable (let, not const) by re-assigning it another value.
- **let** is the updated version of **var**; there are some differences in terms of hoisting and global/block scope - will be covered later in the course (common interview question!)

**Assignment Shorthand**

```js
let num = 0;
num += 10; // same as num = num + 10
num -= 2; // same as num = num - 2
num /= 4; // same as num = num / 4
num *= 7; // same as num = num * 7
```

- In general, any nonsensical arithmetic will result in **NaN** ; usually operations that include undefined.

- **declaration** : process of simply introducing a variable name.
- **initialization** : process of both declaring and assigning a variable on the same line.

---

## **Functions**

A function is a procedure of code that will run when called. Functions are used so that we do not have to rewrite code to do the same thing over and over. (Think of them as 'subprograms')

- **Function Declaration** : Process when we first initially write our function.
  - Includes three things:
    - Name of the function.
    - A list of _parameters_ ()
    - The code to execute {}
- **Function Calls** : We can call upon our function whenever and wherever* we want. (*wherever is only after the initial declaration)
  - JS evaluates code top down, left to right.
  - When we execute a declared function later on in our program we refer to this as **invoking** our function.
  - Every function in JS returns undefined unless otherwise specified.
  - When we hit a **return** statement in a function we immediately exit the function and return to where we called the function.
- When naming functions in JS always use camelCase and name it something appropriate.
  > Greate code reads like English and almost explains itself. Think: Elegant, readable, and maintainable!

---

## **Parameters and Arguments**

- **Parameters** : Comma seperated variables specified as part of a function's declaration.
- **Arguments** : Values passed to the function when it is invoked.

- _If the number of arguments passed during a function invocation is different than the number of paramters listed, it will still work._
- However, is there are not enough arguments provided for parameters our function will likely yield **Nan**.

---
