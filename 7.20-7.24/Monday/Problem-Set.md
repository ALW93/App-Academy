# **Problems and Solutions**

## **Different Array Lengths**

Write a function `diffArrayLen(arr1, arr2)` that takes two arrays. The
function should return true if the arrays have different lengths. The
function should return false otherwise.

```js
function diffArrayLen(arr1, arr2) {
  return arr1.length !== arr2.length;
}
```

---

## **Average Value**

Write a function `avgValue(array)` that takes in an array of numbers and
returns the average number.

```js
function avgValue(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
```

---

## **Tripler**

Write a function `tripler(array)` that takes in an array and returns a new array
containing 3 times every element of the original array.

```js
function tripler(array) {
  return array.map((n) => n * 3);
}
```

---

## **Odd Range**

Write a function `oddRange(end)` that takes in a number and returns an array
containing all positive odd numbers up to `end`.

```js
function oddRange(end) {
  return [...Array(end + 1).keys()].filter((n) => n % 2 === 1 && n > 0);
}
```

- To create an array from a given max, we can utilize the spread operator, Array(), and keys() methods.

---

## **Even Range**

Write a function `evenRange(start, end)` that returns an array containing all even
numbers between 'start' and 'end' in sequential order.

```js
function evenRange(start, end) {
  const _result = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      _result.push(i);
    }
  }
  return _result;
}
```

---

## **Reverse String**

Write a function `reverseString(string)` that takes in a hyphenated string and
returns a the hyphenated string reversed.

```js
function reverseString(string) {
  return string.split("-").reverse().join("-");
}
```

---

## **Intersect Arrays**

Write a function `intersect(arr1, arr2)`that takes in two arrays and returns a
new array containing the elements common to both arr1 and arr2.

Hint: use indexOf

```js
function intersect(arr1, arr2) {
  return arr2.filter((ele) => arr1.includes(ele));
}
```

---

## **Fuzz Bizz**

Write a function `fuzzBizz(max)` that returns an array of numbers under
the max. Each number should be either divisible by 2 or 7, BUT NOT BOTH.

```js
function fuzzBizz(max) {
  return [...Array(max).keys()].filter(
    (n) => (n % 2 === 0 || n % 7 === 0) && !(n % 2 === 0 && n % 7 === 0)
  );
}
```

---

## **Mirror Array**

Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

```js
function mirrorArray(array) {
  return array.slice(0).concat(array.reverse());
}
```

---

## **Remove Last Vowel**

Write a function `removeLastVowel(word)` that takes in a string and returns the string with its last vowel removed.

```js
const removeLastVowel = (word) => {
  for (let i = word.length - 1; i > -1; i--) {
    if ("aeiou".includes(word[i])) {
      return word.slice(0, i) + word.slice(i + 1);
    }
  }
  return word;
};
```

---

## **Pairs Maker**

Write a function `pairsMaker(arr)` that takes in a an array as an argument. The function should return a 2D array where the subarrays represent unique pairs of element from the input array.

```js
const pairsMaker = (arr) => {
  const _pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      _pairs.push([arr[i], arr[j]]);
    }
  }
  return _pairs;
};
```

---

## **Min Value**

Write a function `minValue(nums)` that takes in an array of numbers as an arg. The function should return the smallest number of the array. If the array is empty, the function should return null.

```js
const minValue = (nums) => {
  if (nums.length === 0) {
    return null;
  }
  return nums.reduce(function (a, b) {
    if (b < a) {
      return b;
    } else {
      return a;
    }
  });
};
```

---

## **Zip**

Write a function `zip` that accepts two arrays as arguments. The function should return a two dimensional array with subarrays of length 2 that contain elements at corresponding indices from the input arrays. You may assume that the input arrays have the same length.

```js
const zip = (arr1, arr2) => {
  const _container = [];
  for (let i = 0; i < arr1.length; i++) {
    _container.push([arr1[i], arr2[i]]);
  }
  return _container;
};
```

---

## **Unique**

Write a function `unique` that accepts an array as an argument. The function should return a new array containing elements of the input array, without duplicates.

**Set Method**

```js
const unique = (arr) => Array.from(new Set(arr));
```

- We can use the Array.from() to change a array-like object into an array.

**Mark's Filter Solution**

```js
const unique = (arr) => arr.filter((ele, i, self) => i === self.indexOf(ele));
```

- Because indexOf will always return the first index a certain element is found this is a big brain way to filter our repeats!

**For Each Method**

```js
let unique = function (array) {
  let uniques = [];
  array.forEach(function (el) {
    if (!uniques.includes(el)) {
      uniques.push(el);
    }
  });
  return uniques;
};
```

---

## **Digit Sums**

Write a function `evenishOrOddish` that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

**Proper Modulo Solution**

```js
const evenishOrOddish = (n) => {
  let num = n;
  let nums = [];
  while (num !== 0) {
    nums.push(num % 10);
    num -= num % 10;
    num /= 10;
  }
  let sum = nums.reduce((a, b) => a + b);
  return sum % 2 === 0 ? "Evenish" : "Oddish";
};
```

**Ugly One Liner Meme Solution**

```js
const evenishOrOddish = (n) =>
  n
    .toString()
    .split("")
    .reduce((a, b) => Number(a) + Number(b)) %
    2 ===
  0
    ? "Evenish"
    : "Oddish";
```

---
