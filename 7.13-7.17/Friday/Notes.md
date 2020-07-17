# **Notes**

## **Determining Types**

> Fun Fact: Operators like +, %, and = are called binary operators because they take two operands.
> The **typeOf** operator returns the type of data you call it on.

```js
let s = "This is a string";
console.log(typeof s); // 'string'

let n = 6.28;
console.log(typeof n); // 'number'

let sum = function (a, b) {
  return a + b;
};
console.log(typeof sum); // 'function'
```

- Due to a very old bug in JS, typeOf used on an array will return it as an object.
- So we can use \*_Array.isArray_ to test to see if a value is an array.

```js
let a = [1, 2, 3];
Array.isArray(a); // true

let n = 6.28;
Array.isArray(n); // false

let f = function () {};
Array.isArray(f); // false
```

- Practical use in "real code" is if you believe that whoever is using your program will not respect your parameters.

---

## **Null & Unidentified Types**

The **null type** has one and only value: null.

**The meaning of Null**

- The meaning of Null is almost philosophical.
- The code you write determines the meaning of Null.
  - Null could mean _the absence of a value or no value_.
  - Null could mean _an unknown value_.
- We can check for null by using the strict equality operator.

**The absence of a value**

```js
function reverseTheSentence(sentence) {
  if (typeof sentence !== "string") {
    return null;
  }
  let parts = sentence.split(" ");
  parts.reverse();
  return parts.join(" ");
}
```

- In the above example we are passing in a string, splitting it into an array on a space, using the array method reverse to reverse the elements of the array, and joining the array back into a string on a space.
- Our conditional at the top assures we will return null if someone disrepsectfully passes in a data type that isn't a string!

## **Undefined**

**Undefined** is the only value of the undefined data type.

- Uninitialized variables have a value of undefined.
- In JS, **Null** is an object, and **Undefined** is a data type.
- Null can also be an assignment value.
- All functions will output undefined by default if there is no return statement.
- We can check for undefined by using the strict equality operator.

---

## **Structured Exception Handling (SEH)**

Tools to help handle certain exceptional code situations, such as hardware faults, gracefully.

- There are only three ways of handling exceptions right now in pgroamming:

  - **Error or Error Code Reporting** (C & Go)
  - **Continuable Exceptions** (Common Lisp)
  - **Stack Unwinding** (Found in almost every modern programming language including _**Javascript and Python**_)

- How it works is that when an error occurs, your Javascript interpreter will look for a handler to manage the error.

**Try and Catch**

- **Code Block** : If there are curly braces around some lines of code it is considered a code block.
  - Examples would be If, for, and function blocks!
- **Try** blocks tells JS it needs to watch for some errors in the code it's blocked off.
- **Catch** blocks tell JS what to do in the event there _is_ an error.
- **MAKE SURE** you fill out the catch block!

```js
function sumArray(array) {
  let sum = 0;

  try {
    for (let i = 0; i < array.length; i += 1) {
      sum += array[i];
    }
  } catch (e) {
    console.log(e);
    return null;
  } finally {
    console.log("you will always see this.");
  }

  return sum;
}
```

- The _**catch block**_ runs when an error occurs in the _**try block**_.
- The 'e' after catch represents the error thrown in the catch. (can also be named 'err' or 'error')
- The _**finally block**_ is the last block on the try-catch block, it always runs whether or not an error occurs.

```js
TypeError: Cannot read property 'length' of null
  at sumArray (/tmp/file.js:5:31)
  at Object.<anonymous> (/tmp/file.js:16:1)
  at Module._compile (internal/modules/cjs/loader.js:1158:30)
  at Object.Module._extensions..js (internal/modules/cjs/loader.js:1178:10)
  at Module.load (internal/modules/cjs/loader.js:1002:32)
  at Function.Module._load (internal/modules/cjs/loader.js:901:14)
  at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
  at internal/main/run_main_module.js:18:47
```

- The line after **TypeError** indicates the exception that has occured.
- The next 10 lines are known as a **Stack Trace**
- The first line in the Stack Trace indicate _where_ the error occured.

**How can I make my own Errors?**

You can create your own "errors" by creating an error object paired with an error message.

```js
throw Error("this happened because I wanted it to");
throw new Error("this happened because I wanted it to");
```

**How do I best use this?**

- Every try-catch block slows down your code, so you want to write as few of them as possible.
- You should practice **defensive coding** which checks for bad values before errors are thrown.
- To go back to the sum array example, instead you should try-catch block the parameter, since this is the area you'd run in to the most trouble.

```js
function sumArray(array) {
  if (array === null) {
    return null;
  }

  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  return sum;
}
```

> Fun Fact: If you divide an integer with zero in JS you will output infinity or neg. infinity.

```js
let guestList = ["Leonardo", "Michaelangelo", "Donatello", "Raphael"];
let queue = ["Bobby", "Donatello", "Raphael", "Tom"];

for (let i = 0; i < queue.length; i++) {
  let person = queue[i];
  try {
    if (!guestList.includes(person)) {
      throw new Error(person + "wasn't invited");
    } else {
      console.log("Welcome to the party," + person);
    }
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log("this always runs");
  }
}
```

- User generated error in our conditional initiated by 'throw new Error(//message)'
- In our catch block, we print out our custom error message by typing in 'e.message'.

---
