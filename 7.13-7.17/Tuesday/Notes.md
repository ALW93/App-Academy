# **Notes**

## **Conditionals**

**Control Flow** : The order in which instructions are executed within a program.

**Control Structures** : Expressions that alter the control flow based on given parameters.

**Conditional Statements** : A control structure that is used to perform different actions based on different conditions.

- **[]** : square brackets;
- **{}** : curly braces;
- **()** : parenthesis;

---

## **Writing Conditional Statements**

- **If Statements** : The simplest type of conditional statement.
- **Else If Statements** : conditional statements chained after **if statements** to test additional statements.
- **Else Statement** : statement that will evaluate if prior conditions are deemed falsey.

  ```js
  if (test expression {
      // execute this;
  })

  if (x === 3) {
      console.log("this is a three!");
  } else if (x === 4) {
      console.log("this is a four!");
  } else {
      console.log("this is neither a three nor four!");
  }
  ```

- There can be any amount of **else if** statements, however there will only be one **if** statement and one **else** statement.
- Think of them as a **chain**.
  > Fun Fact : Nesting the else/if and else chains are called 'cuddled else's'; this is common JS style but functionally they help the reader see more information in a more concise way.

* **Guard Clauses** : useful to refactor conditional logic and to reduce the number of lines in your functions.

  ```js
  (before guard clause)
  if (true) {
    return x;
  } else {
    return y;
  }

  (after guard clause)
  if (true) return x;
  return y;
  ```

---

## **Mutually Exclusive Conditions**

**When to use If Statements**

If we are working with a situation that is mutually exclusive, then we should use an If/Else Statement.

> Age old principal for writing good code: DRY (Don't repeat yourself)!

- **Collectively Exhaustive** : Set of events if at least one of those events must occur within a specific scenario. (Think of covering all **edge cases**)
- **Edge Cases** : problem or situation that occurs only at an extreme (maximum or minimum) operating parameter.

---

## **Basic Loops**

**Loops** : Are a fundamental control structure that will repeatedly execute a section of code while a condition is true.

**While Loops** : Will execute a block of code as long a specified condition is true.

```js
while (condition) {
  // code block to be executed
}

let index = 0;
while (index < 10) {
  console.log("The number is " + index);
  index++;
}
```

- The most important thing to remember when writing loops is to always be **working towards your condition**, if we omitted the index++ our loop would run infinitely; likely crashing w/e we were working on.

**Important Loop Knowledge**

- Don't forget to always start your loops with a zero index.

- **iteration** : the act of repeating a procedure; looping is an **iterative technique**

**For Loops**
For loops can be broken down into three sections:

- The **initial expression**
- The **condition**
- The **loopEnd expression**

```js

for (<initital expression>;<condition>;<loopEnd expression>) {};

```

- For loops are usually used with an integer counter.

**Translating From One Loop to Another**

Here is an example of the same loop expressed as a while and for loop.

```js

function forLoopDoubler (array) {
for (let i = 0; i < array.length; i++>) {
array[i] = array[i] \* 2
}
return array;
};

function forLoopDoubler (array) {
let i = 0;
while (i < array.length>) {
array[i] = array[i] \* 2;
i++;
}
return array;
};

```

---

## **Arrays**

**Using Arrays**

- Arrays are very flexible data containers, we can input elements, replace elements, and also remove elements.
- .**length** property also works on arrays.
- Arrays that consist of multiple values are store in sequential order; arrays will always start at a zero index.

**Working with Arrays**

- Arrays can hold different types of data and can mix & match; however it is considered good practice to lump similar data types together if possible.
- indexOf() function can be used with arrays.
- If you concatenate two arrays with the + operator it will convert your combined arrays into strings.
- If you use the **.concat** method, it will combine two arrays into a single array.

---
