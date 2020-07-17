# **Anki flashcards**

**1. What does Array#splice accept as arguments?**

- Array#splice has two required arguments: a target index and a number of elements to remove

- If you only pass the first argument (target index), it will just cut out the rest of the array from that target index.

- Array#splice can additionally accept any number of additional arguments representing values to be inserted

---

**2. What do the Array#slice and String#slice methods accept as arguments?**

- Both methods accept a start index and end index representing the range of indices to be sliced as a new array or string. The start index is inclusive, while the end index is exclusive.

---

**3. Describe what the Array#push method does.**

- The Array#push method accepts one or more values as arguments and adds those values as new elements to the end of the array, mutating the array. The method will return the new length of the array.

---

**4. Name the array method that removes the last element from an array (mutating the array) and returns that removed element.**

- Array#pop

---

**5. Name the array method that removes the first element of an array (mutating the array) and returns the removed element.**

- Array#shift

---

**6. Describe what the Array#unshift method does.**

- The Array#unshift method accepts one or more values as arguments and will add those values to the front of the array, mutating the array. The method returns the new length of the array.

---

**7. Describe what the String#split method does.**

- The String#split method accepts a "separator" string as an argument and returns an array containing the resulting substrings when the string is cut along instances of the "separator".

  ```
  For example:

  let sentence = "follow the yellow brick road";
  let words = sentence.split(" ");
  console.log(words); // [ 'follow', 'the', 'yellow', 'brick', 'road' ]
  ```

---

**8. Describe what the Array#join method does.**

- The Array#join method accepts a "separator" string as an argument and returns a string where elements of the array are concatenated together with the "separator" between each element.

  ```
  For example:

  let words = ["run", "around", "the", "block"];
  console.log(words.join("\_")); // 'run_around_the_block'
  ```

---

**9. What does the term "mutability" mean in programming?**

- "Mutability" refers to an object's ability to undergo change. Mutable objects can be modified, while immutable objects cannot be changed after they are created.

---

**10. Identify which of the following JavaScript data types are mutable: number, string, boolean, array**

- Arrays are mutable.

- Numbers, strings, and booleans are all immutable.

---
