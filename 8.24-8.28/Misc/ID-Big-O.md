# **Identifying Time Complexity**

---

# **Constant**

- Takes roughly the same number of steps for any input size.

```js
function constant1(n) {
  return n * 2 + 1;
}
// always takes one step regardless of n's value.
```

```js
function constant2(n) {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}
// always loops 100 times regardless of input n.
```

```js
function returnFirst(array) {
  return array[0];
}
```

# **Logarithmic**

- Halves the size of the input.
- Exponential is the inverse of log.
- Typically Divide and Conquer Style Algorithms

```js
function log(n) {
  if (n <= 1) return;
  log(n / 2);
}
// recursively calling log function again but dividing input by 2 every time.
```

```js
function log(n) {
  let i = n;
  while (i > 1) {
    i /= 2;
  }
}
// repeatedly looping in our while and cutting n by 2 until n is not greater than 1;
```

# **Linear**

- Will access each item of the input 'once'.

```js
function linear(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}
// for loop increases based on size of n;
```

```js
function linear(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(i);
  }
}
// same thing as above except increases with array length;
```

```js
function linear(n) {
  if (n === 1) return;
  linear(n - 1);
}
// we use recursion here but as you can see the amt of recursive calls still scale linearly based on n input size. (if we were calling linear(n / 2) then this time complexity would be O(log(n)));
```

```js
const printAll = (li) => {
  li.forEach((ele) => {
    console.log(ele);
  });
};
```

```js
const find = (li, value) => {
  for (let i = 0; i < li.length; i++) {
    if (li[i] === value) return true;
  }
  return false;
};
```

```js
const printAlot = (li) => {
  for (let i = 0; i < li.length; i++) {
    for (let j = 0; j < 10; j++) {
      console.log(li[j]);
    }
  }
};
// We have a double for loop but our inner is a fixed loop, therefore not making it polynomial time.
```

```js
function actuallyLin(n) {
  if (n <= 1) return;
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
  actuallyLin(n / 2);
}
```

# **Linear Logarithmic( Linearithmetic & Quasilinear )**

- Sees features from both linear and logarithmic classes.
- Will use both recursion and iteration.

```js
function logLinear(n) {
  if (n <= 1) return;
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
  logLinear(n / 4);
  logLinear(n / 4);
  logLinear(n / 4);
  // logLinear(n / 2);
}
// runtime is log linear
// T(nlog(n)); Merge sort;
```

```js
const splitButIterate = (li) => {
  if (li.length < 2) return li;
  const midIdx = li.length / 2;
  splitButIterate(li.slice(0, midIdx));
  splitButIterate(li.slice(midIdx));

  li.forEach((ele) => console.log(ele));
};
```

# **Polynomial**

- C is a fixed constant.

```js
function quadratic(n) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      console.log(i, j);
    }
  }
}
// double for loops, loops n twice! O(n^2);
```

```js
function cubic(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {}
    }
  }
}
// triple for loops, loops n three times! O(n^3);
```

# **Exponential**

- C constant is now the number of recursive calls made in each stack frame.
- C is the # of splits in your tree diagram.
- Exponential is the inverse of log.

```js
function expo(n) {
  if (n === 1) return;
  exponential(n - 1);
  exponential(n - 1);
}
```

```js
function expo(n) {
  if (n === 1) return;
  exponential(n - 1);
  exponential(n - 1);
  exponential(n - 1);
}
```

# **Factorial**

- O(n!)

```js
function factorial(n) {
  if (n === 1) return n;
  for (let i = 0; i < n; i++) {
    factorial(n - 1);
  }
}
```

---
