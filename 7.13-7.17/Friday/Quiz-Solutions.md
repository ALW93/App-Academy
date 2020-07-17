# **Homework Quiz Review & Solutions**

## **Intermediate Functions**

1. **Which of the following types is mutable?**

   - Answer: Array
   - Arrays are mutable. Booleans, Numbers, and Strings are immutable.

2. **When is an object considered mutable?**

   - Answer: If it can be changed.
   - A mutable object can be changed. An immutable object cannot be changed.

3. ```js
   let arr = ["a", "b", "c", "d", "e", "f"];
   arr.splice(2, 3);
   console.log(arr);
   ```
   **What will the code snippet above print out?**
   - Answer: ['a','b','f]
   - Array#splice mutates the input array, removing 3 elements starting at index 2.
   -
4. **Which of the following best describes the ordered arguments that Array#splice accepts?**

   - Answer: targetIndex, removeAmount, insertionItem1, insertionItem2, ...
   - Array#splice accepts a target index, the number of elements to remove starting at that index, and any number of additional arguments to be inserted at that index

5. **Which of the following best describes why objects are considered "first-class" in JavaScript?**

   - Answer: can be stored in variables
   - A first-class object is something that can be stored in a variable.

6. ```js
   let sayHello = function () {
     console.log("hello");
   };
   ```

   **Which of the following best describes the code above?**

   - Answer: Function Expression Syntax
   - Assigning a variable to a function is "function expression" syntax.

7. **Which of the following methods does not mutate their input?**

   - Answer: Array.splice
   - The slice method does not mutate, instead it returns a copy. The remaining methods all mutate their input

8. ```js
   let arr = ["a", "b", "c", "d", "e"];
   arr.slice(1, 3);
   console.log(arr);
   ```
   ** What will the code snippet above print out?**
   - Answer: ['a', 'b', 'c', 'd', 'e']
   - Array#slice does not mutate the input array, so arr is unchaged.

---
