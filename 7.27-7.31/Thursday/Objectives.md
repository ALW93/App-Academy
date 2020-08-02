# **Objectives**

## **Recursion**

**1. Given a recursive function, identify what is the base case and the recursive case.**

**2. Explain when a recursive solution is appropriate to solving a problem over an iterative solution.**

- One should consider recursion when:
  - Inputs are unpredictable, large, or highly complex.

**3. Write a recursive function that takes in a number, n, argument and calculates the n-th number of the Fibonacci sequence.**

```js
const fibo = (n) => {
  if (n <= 2) {
    return 1;
  }
  return fibo(n - 1) + fibo(n - 2);
};
```

**4. Write a function that calculates a factorial recursively.**

```js
const factorial = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};
```

**5. Write a function that calculates an exponent (positive and negative) recursively.**

```js
const expo = (n, p) => {
  if (p < 0) {
    return 1 / expo(n, Math.abs(p - 1));
  }
  if (p === 1) {
    return n;
  }
  return n * expo(n, p - 1);
};
```

**6. Write a function that sums all elements of an array recursively.**

```js
const sum = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sum(arr.slice(1));
};
```

**7. Write a function that flattens an arbitrarily nested array into one dimension.**

```js
const flatten = (arr) => {
  let newArr = [];
  arr.forEach(function (subArr) {
    if (Array.isArray(subArr)) {
      newArr.push(...flatten(subArr));
    } else {
      newArr.push(subArr);
    }
  });
  return newArr;
};
```

**8. Given a buggy recursive function that causes a RangeError: Maximum call stack and examples of correct behavior, debug the function.**

- Best way to debug a recursive function that is infinitely looping is to add a base case and recursive step.

---
