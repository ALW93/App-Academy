# **Objectives**

## **POJO (Plain Old Javascript)**

- **Label variables as either `Primitive` vs. `Reference`**

  - **Primitive** : Boolean, Null, Undefined, Number, String.
  - **Reference** : Object (Arrays are a type of object)
  - Remember that **primitive** types are immutable!

- **Identify when to use `.` vs `[]` when accessing values of an object**

  - **When accessing object keys**: Bracket notation needs to refer to that key in quotations, dot notation doesn't.

  - **When accessing object keys via a variable**: Bracket notation can refer to that key w/o use of quotations, dot notation can't do this at all.

  - Choose the square bracket when the property name is determined at runtime, or if the property name is not a valid identifier.

  - Choose the dot property acccesor when the property name is known ahead of time.

- **Use the `obj[key] !== undefined` pattern to check if a given variable that contains a key exists in an object**

  ```js
  function keyInObjectArray(objArray, keyString) {
  for (let i = 0; i < objArray.length; i++) {
    let obj = objArray[i];
    if (obj[keyString] !== undefined) {
      return true;
    }
  }
  return false;
  ```

- **Utilize `Object.keys` and `Object.values` in a function**
  ```js
  function breakDownObj(obj) {
    return [...Object.keys(obj), ...Object.values(obj)];
  }
  ```
- **Iterate through an object using a for in loop**
  ```js
  function appleCounter(appleObj) {
    let counter = 0;
    for (let key in appleObj) {
      let mini = key.toLowerCase();
      if (mini.includes("apple")) {
        counter++;
      }
    }
    return counter;
  }
  ```

* **Define a function that utilizes `...rest syntax` to accept an arbitrary number of arguments**

  ```js
  function restSum(...nums) {
    return [...nums].reduce((a, b) => a + b);
  }
  ```

* **Use `...spread syntax` for Object literals and Array literals**
  ```js
  function spreadItOut(array1, array2) {
    return [...array1, ...array2];
  }
  ```

- **Destructure an array to reference specific elements**

  ```js
  let bigArray = ["apple", 14, 32, 100, { name: "party" }, ["pineapple"]];

  [fruit, num1, num2, num3, party, pineapple] = bigArray;
  ```

* **Destructure an object to reference specific values**
  ```js
  let mario = {
    name: "mario",
    profession: "plumber",
    siblings: {
      name: "Luigi",
      fears: "ghosts",
    },
  };
  ```
  ```js
  let {
    siblings: { fears },
  } = mario;
  ```
* **Write a function that accepts a array as an argument and returns an object representing the count of each character in the array**
  ```js
  function stringConverter(string) {
    let count = {};
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      if (count[char] === undefined) {
        count[char] = 1;
      } else {
        count[char]++;
      }
    }
    return count;
  }
  ```

## **Pair Programming**

- **Differentiate between the `"Driver"` and `"Navigator"` roles in a pair programming session.**

  - **`The Driver`** : In charge of typing and asking questions, can let go or larger picture. Driver also suggests ways to improve/re-factor the code.
  - **`The Navigator`** : In charge of what's being typed and maintaining project momentum. They should lead the discussion and also double check the code for errors as it is being typed.

- **Describe at least three benefits of effective pair programming.**

  - Prevents focusing so much on a problem that you forget to communicate with your teammates.

  - Helps us share knowledge faster.
  - Statistics have shown that pair programming slow down programming time by 15% _however_ it also reflected that the number of errors are also reduced by 15%.

- **Demonstrate empathetic communication and be able to explain the meaning of `"You are not your code"`.**

  - Simplification of the human-centric vs code-centric style communication.
  - Don't ignore what might be a problem, but do not point fingers and keep it about the code.
  - Helpful for managing criticism, keep your ego out of your code.

- **Identify negative interactions during a pair programming session.**

  - Don't point fingers, don't be a jerk lol.

- **Identify the exact steps of a/A's pair programming process.**

  - **`Partner Up`** : Get your pal.
  - **`Check-In`** : Get to know eachother, discuss time constraints, goals, etc.
  - **`Start Coding`** : Drivers code, Navigators Guide.
  - **`Hand Off`** : App Academy employs a 15 min. interval.
  - **`Follow-Up`** : The last check in, this is a good time wrap up and review your code. This step helps commit your progress to memory.

- **Describe the importance of pair programming competency while interviewing for jobs.**
  - Being good at pair programming indicates you are competent at working with others which is extrememely important in getting hired b/c you will most likely be working on a team!

---
