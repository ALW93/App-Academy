# **Objectives**

## **JSON**

**1. Identify and generate valid JSON-formatted strings**

- JSON formatted strings can contain [] for arrays, and {} for objects.
- Valid JSON values: objects, arrays, strings, numbers, booleans, and null.
- Keys to Objects must be double quoted in JSON.

**2. Use JSON.parse to deserialize JSON-formatted strings**

```js
const JSONString = '[1, 2, 3, 4, "apple", "banana, "pear"]';
const myList = JSON.parse(JSONString);
console.log(myList[4]); // "apple"
```

**3. Use JSON.stringify to serialize JavaScript objects**

```js
const fruits = ["apple", "banana", "pear"];
const JSONString = JSON.stringify(fruits);
console.log(JSONString); // ["apple", "banana", "pear"]
```

**4. Correctly identify the definition of "deserialize"**

- When we take some data and turn it into a string, so our program can send it to another computer.

**5. Correctly identify the definition of "serialize"**

- When we take some text and turn it into data.

---

## **Storage**

**1. Write JavaScript to store the value "I <3 falafel" with the key "eatz" in the browser's local storage.**

```js
localStorage.setItem("eatz", "I <3 falafel");
```

**2. Write JavaScript to read the value stored in local storage for the key "paper-trail".**

```js
localStorage.getItem("paper-trail");
```

---
