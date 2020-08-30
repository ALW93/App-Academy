# **Memo and Tab Demo with Fibonacci**

```js
function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

> Normal Recursive Fibonacci

```js
function fibMemo(n, memo = { 0: 0, 1: 1 }) {
  if (n in memo) return memo[n];

  memo[n] = fibMemo(n - 1) + fibMemo(n - 2);
  return memo[n];
}
```

> Memoization Fibonacci 1

```js
function fib(n, memo) {
  memo = memo || {};

  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  return (memo[n] = fib(n - 1, memo) + fib(n - 2, memo));
}
```

> Memoization Fibonacci 2

```js
function tabFib(n) {
  let table = new Array(n);

  table[0] = 0;
  table[1] = 1;
  table[2] = 1;

  for (i = 3; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
    console.log(table);
  }

  return table[n];
}
```

> Tabulated Fibonacci

---
