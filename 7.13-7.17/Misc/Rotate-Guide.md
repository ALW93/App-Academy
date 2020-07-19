# **Explanation for Rotate Right**

## Question

Write a function `rotateRight(array, num)` that takes in an array and a number as args.
The function should return a new array where the elements of the array are rotated to the right num times.
The function should not mutate the original array and instead return a new array.

Define this function using `function expression syntax`.

**HINT:** you can use Array#slice to create a copy of an array

---

**We are being asked for two things:**

1. To return an array with all the elements shifted over 'num' times.
2. To `NOT` mutate the original array

**Step 1.**
We need to start the function and create a variable to hold a COPY of our input array.

```js
let rotateRight = function (array, num) {
  let result = array.slice(0);
};
```

- We assign array.slice(0) to a variable called result.
- Slicing our input array simply creates a sliced copy of the data.
- Remember that by excluding a second argument in our slice parameter allows us to slice from the first argument all the way to the end.

**Step 2.**
We need to create a for loop to tell our function how many times we want to rotate.

```js
let rotateRight = function (array, num) {
  let result = array.slice(0);
  for (var i = 0; i < num; i++) {
    // some code here
  }
};
```

- By setting our second delimiter to i < num we will ask our loops to run num times.
- Running num times is the same as executing the code block within num times.

**Step 3.**
We need to put some executable code within our for loop to be run during every cycle.

```js
let rotateRight = function (array, num) {
  let result = array.slice(0);
  for (var i = 0; i < num; i++) {
    let ele = result.pop();
    result.unshift(ele);
  }
};
```

- Since we are rotating to the right, every change to our result array under the hood will look like this (if we ref. our first test case):
- `['a', 'b', 'c', 'd', 'e'];` (how it looks like at the start)
- `['e', 'a', 'b', 'c', 'd'];` (after one run of the for loop)
- `['d', 'e', 'a', 'b', 'c'];` (after second/last run of the for loop)
- To accomplish this we first need to '`pop`' off or remove our last element.
  - Two things happen when we use this built-in function.
    - Our copied array is mutated to lose it's last ele.
    - The removed element is stored in the variable we assigned to the function.
- Our second step is to add it to the start of our array, to do this we can use `unshift`.
  - By inputting the variable we are using to hold our removed element into the parameter of unshift we are adding our element to the front of the array.

**Step 4.**

Now that our for loop has ended and our copied array looks just like how the answer looks, we need to output the answer.

```js
let rotateRight = function (array, num) {
  let result = array.slice(0);
  for (var i = 0; i < num; i++) {
    let ele = result.pop();
    result.unshift(ele);
  }
  return result;
};
```

- We accomplish this by creating a `return` line AFTER the for loop.

## **End Result**

```js
let rotateRight = function (array, num) {
  let result = array.slice(0);
  for (var i = 0; i < num; i++) {
    let ele = result.pop();
    result.unshift(ele);
  }
  return result;
};
```

```js
let arr = ["a", "b", "c", "d", "e"];
console.log(rotateRight(arr, 2));
["d", "e", "a", "b", "c"];
console.log(arr);
["a", "b", "c", "d", "e"];
```

```js
let animals = ["wombat", "koala", "opossum", "kangaroo"];
console.log(rotateRight(animals, 3));
["koala", "opossum", "kangaroo", "wombat"];
console.log(animals);
["wombat", "koala", "opossum", "kangaroo"];
```

Copy and paste it into an editor and see how it turns out!

---
