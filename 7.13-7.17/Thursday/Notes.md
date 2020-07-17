# **Notes**

## **Helper Functions**

Helper functions can help us simplify complicated problems.

- Think of it as **Dividing and Conquering** or **Putting pieces together**.

```js
// Question: Given an array of integers, return a new array with only the evens.

// (Main Function) >>

let extractEvens = function (numArr) {
  let evens = [];
  for (let i = 0; i < numArr.length; i++) {
    let num = numArr[i];
    if (isEven(num)) {
      evens.push(num);
    }
  }
  return evens;
};

// (Helper Function) >>
let isEven = function (num) {
  return num % 2 === 0;
};
```

---

## **For Each**

**For Each** : A method that executes a provided function once _for each_ array element.

- Helps to replace the need for a standard for-loop.

```js
let parks = ["Yellowstone", "Zion", "Roosevelt"];

parks.forEach(function (park) {
  console.log(park);
});

// Yellowstone Zion Roosevelt
```

- Arguments that you can pass into the parameters **(This applies to all of these methods by the way!)**:

  - Element (Required)
  - Index (Optional)
  - Actual Array (Optional)

  ```js
  array.forEach(element, index, array);
  ```

  - Keep in mind that you can name these arguments anything you want!

- **Caveats to Keep in Mind** : forEach can only iterate in order, if you need to reverse iterate or skip around it is better to just default to a regular for loop.
- Note: forEach cannot stop until it has iterated through every element.
- **Remember** forEach does not output any explicit return value.

---

## **Map**

**Map** : Method that creates a _new array_ populated with the results of calling a provided function on every element in the calling array.

- It is the direct solution for the classic problem of generating a new array from a function.
- When should we use map?
  - Map is good whenever we have to create a new array of the same length as the original array and we need to translate each of the elements.

```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

---

## **Filter**

**Filter** : Method that creates a new array with all elements that pass the test implemented by the provided function.

- Solves the problem of having to choose particular elements from an array and populating a new array with them.

- Our statement inside a filter always wants to return a **boolean critera**.

- **Difference between Map & Filter**
  - Map will always return an array of the same length.
  - Filter will always return a shorter array.

```js
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

> Fun Fact: It is very common to even chain filter into map!

---

## **Reduce**

**Reduce** : Method that executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

**Arguments**

1. **accumulator** (value that we maintain as we iterate)
2. **element**
3. **optional starting value**

```js
let sum = nums.reduce(function (accum, el) {
  return accum + el;
}, 100);
```

```js
*Using reduce function to find a max or min num in an array*

let max = nums.reduce(function(accum,el) {
    if (el > accum) {
        return el;
    } else {
        return accum;
    }
});
```

```js
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```

- Default current value is first element of array.

> "Think of the accumulator like it's a baton in a relay race." -- Bart Sensei

---
