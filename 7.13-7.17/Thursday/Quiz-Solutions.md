# **Homework Quiz Review & Solutions**

## **Variables Quiz**

1. `let name = 'Jane';`

   **What process does the code above perform?**

   - Answer: Variable Initialization
   - Initialization is the process of both declaring and assigning a variable on the same line.

2. `let name;`

   **What process does the code above perform?**

   - Answer: Variable Declaration
   - Declaration is the process of simply introducing a variable name into the coding environment, without giving it a value.

3. **Which operator is used to perform variable assignment?**

   - Answer: =
   - Single equals (=) is the assignment operator

4. ```js
   let num;
   console.log(num * 2);
   ```
   **What will the code above print out?**
   - Answer: NaN
   - Any arithmetic including undefined will result in Not-a-Number (NaN)
5. ```js
   let i = 4;
   i += 3;
   console.log(i);
   ```
   **What will the code above print out?**
   - Answer: 7
   - The += operator will modify a variable's value.
6. ```js
   let i = 4;
   i + 3;
   console.log(i);
   ```
   **What will the code above print out?**
   - Answer: 4
   - The + operator will not modify a variable's value by itself.
7. ```js
   let name;
   console.log(name);
   ```
   **What will the code above print?**
   - Answer: undefined
   - A newly declared variable will contain undefined as it's default value.
8. ```js
   let x = 7;
   x++;
   x - 2;
   x *= 3;
   console.log(x);
   ```
   **What will the code above print out?**
   - Answer: 24
   - ++ will increase a variable by 1, changing it's vale. \*= will multiply variable, changing it's value

## **Control Flow Quiz**

1. `let groceries = ["apples", "potatoes", "milk"];`
   **What is the above groceries variable?**
   - Answer: Array
   - A list of comma separated values surrounded by square brackets [] is an array.
2. ```js
   let age = 30;

   if (age > 30) {
     console.log("older than 30");
   } else {
     console.log("younger than 30");
   }
   ```

   **Predict what will happen in the above example. Which console.logs will actually print?**

   - Answer: prints "younger than 30"
   - This is an example of a mutually exclusive condition! Since age is set to 30 and the first condition will only be met if age is greater than 30 then the else statement will be run - printing "younger than 30".

3. `let groceries = ["apples", "potatoes", "milk"];`

   **Which of the following are the correct ways to access the value of "milk" in the above groceries array?**

   - Answers: groceries[groceries.length - 1] & groceries[2]
   - Since "milk" is the last value in the groceries array we can access in through it's index directly - if we count up from 0 we get 2. Or we can look at the length of the above array minus 1 to get the same answer!

4. `let puppies = ["Laser", "Katy", "Jet", "Layla"];`

   **What is the value we'd receive if we read the value at puppies[1]?**

   - Answer: "Katy"
   - Array indices always start at 0. So if we access the puppies array at the index of 1 we'd get "Katy"!

5. ```js
   function potatoSpeak() {
     console.log("I am potato!");
   }
   function sadSpeak() {
     console.log("I am NOT potato :(");
   }

   function isThisPotato(word) {
     if (word === "potato") {
       potatoSpeak();
     } else {
       sadSpeak();
     }
   }
   ```

   **In the code snippet above we have written a function that accepts one word and if that word is "potato" the potatoSpeak function is called - otherwise the sadSpeak function is called. The condition inside the isThisPotato function above is an example of what kind of conditional?**

   - Answer: Mutually exclusive
   - Since the word is either "potato" or not "potato" it means that the scenario we are faced with is mutually exclusive. Meaning that the condition can only be true or false but not both (the word is either "potato" or not).

6. **Fill in the blank for the following: A(n) \_ is an ordered list of values defined by using square brackets.**
   - Answer: Array
   - An array is a list of comma separated values surrounded by square brackets [].

## **Comparison Operators Quiz**

1. `console.log(25 % 2 === 0);`
   **What will the code above print out?**
   - Answer: False
   - Only even numbers will have a remainder of 0 when divided by 2.
2. `console.log(42 === '42');`
   **What will the code above print out?**
   - Answer: False
   - The === operator returns true if both sides are equal, without type coercion.
3. `console.log(true || (4 / 2 === 0 && !false));`
   **What will the code above print out?**
   - Answer: True
   - The OR operator will return true when at least one side is true. (Short-Circuit!)
4. `console.log(42 === 42);`
   **What will the code above print out?**
   - Answer: True
   - The === operator returns true if both sides are equal, without type coercion.
5. `console.log(42 == '42');`
   **What will the code above print out?**
   - Answer: True
   - The == operator returns true if both sides are equal, with type coercion.
6. `console.log(true && (4 + 2 === 5));`
   **What will the code above print out?**
   - Answer: False
   - The AND operator will return false when at least one side is false.
7. `console.log((24 > 3) && false);`
   **What will the code above print out?**
   - Answer: False
   - The AND operator will return false when at least one side is false.
8. `console.log(26 % 2 === 0);`
   **What will the code above print out?**
   - Answer: True
   - Only even numbers will have a remainder of 0 when divided by 2.

---
