# **Problems and Solutions**

## **Try to catch me**

Write a function safeGet(array, index) that returns the value
array[index]. If performing array[index] throws an error, then
catch it and return undefined.

```js
function safeGet(array, index) {
  try {
    return array[index];
  } catch (e) {
    return undefined;
  }
}
```

---

## **Yeller**

Write a function yeller(words) that takes in an array of words. The function should return a new array where each element of the original array is yelled. Solve this using Array#map. If using the Array#map throws an error, catch it and return an empty array.

```js
let yeller = function (words) {
  try {
    return words.map(function (word) {
      return word.toUpperCase() + "!";
    });
  } catch (e) {
    return [];
  }
};
```

**condensed**

```js
function yeller(words) {
  try {
    return words.map((word) => word.toUpperCase() + "!");
  } catch (e) {
    return [];
  }
}
```

---

## **Choosey Endings**

Write a function `chooseyEndings` that accepts an array of words and a suffix string as arguments. The function should return a new array containing the words that end in the given suffix. If the value passed in is not an array, return an empty array.

`HINT:` There are built in JavaScript functions that will help with determining if a strings ends a certain way. Go see if you can find it on MDN!

`str.endsWith()` : Method that determines whether a strings ends with a specified string.

**Solution with Try-Catch Block**

```js
function chooseyEndings(array, str) {
  try {
    return array.filter((word) => word.endsWith(str));
  } catch (e) {
    return [];
  }
}
```

**Solution with Array.isArray method**

```js
let chooseyEndings = function (words, suffix) {
  if (!Array.isArray(words)) {
    return [];
  }
  return words.filter(function (word) {
    return word.endsWith(suffix);
  });
};
```

---

## **Common Factors**

Write a function `commonFactors` that accepts two numbers as arguments. The function should return an array containing positive numbers that are able to divide both arguments.

```js
function commonFactors(num1, num2) {
  let result = [];
  for (let i = 0; i <= num1; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      result.push(i);
    }
  }
  return result;
}
```

---

## **Has Double Letter**

Write a function `hasDoubleLetter(str)` that accepts a string. The function should return a boolean indicating whether the string contains two of the same character consecutively. If the value passed into the function is not a string, return null.

```js
function hasDoubleLetter(str) {
  if (typeof str !== "string") return null;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      return true;
    }
  }
  return false;
}
```

---

## **First and Last**

Write a function `firstAndLast` that takes in an array of numbers and returns the sum of the first and last element if there is an even number of elements in the array. If there is an odd number of elements in the array, then the function should return the difference between the first and last elements of the array. If your code throws an error, catch it and return null.

```js
function firstAndLast(array) {
  try {
    if (array.length % 2 === 0) {
      return array[0] + array[array.length - 1];
    } else {
      return array[0] - array[array.length - 1];
    }
  } catch (e) {
    return null;
  }
}
```

---

## **Adjacent Sums**

Write a function `nextSums` that accepts an array of numbers as an argument. The function should return a new array containing the sum of the elements that are next to each other in the input array. Check if the value passed in is an array If it is not an array, throw an error message to enter the catch block and return an empty array.

```js
function nextSums(array) {
  try {
    if (!Array.isArray(array)) {
      throw "Not An Array!";
    }
    let result = [];
    for (let i = 0; i < array.length - 1; i++) {
      result.push(array[i] + array[i + 1]);
    }
    return result;
  } catch (e) {
    return [];
  }
}
```

---

## **Choose Primes Recall**

Write a function `choosePrimes(nums)` that takes in an array of numbers as args. The function should return a new array containing the primes from the original array. A prime number is a number that is only divisible by 1 and itself.
Hint: consider creating a helper function to check if a number is prime!

**Filter Solution**

```js
function choosePrimes(nums) {
  return nums.filter((num) => isPrime(num));
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
```

**For Each alternative**

```js
let choosePrimes = function (nums) {
  let primes = [];

  nums.forEach(function (num) {
    if (isPrime(num)) {
      primes.push(num);
    }
  });

  return primes;
};
```

---

## **Double Sequence**

Write a function `doubleSequence` that accepts a base and a length as arguments. The function should return an array representing a sequence that contains "length" elements. The first element of the sequence is always the "base", the subsequent elements can be generated by doubling the previous element of the sequence.

**For Loop Solution**

```js
function doubleSequence(base, length) {
  if (length < 1) return [];
  let result = [base];
  for (let i = 0; i < length - 1; i++) {
    result.push(result[result.length - 1] * 2);
  }
  return result;
}
```

**While Loop Solution**

```js
let doubleSequence = function (base, length) {
  if (length === 0) {
    return [];
  }

  let seq = [base];
  while (seq.length < length) {
    let last = seq[seq.length - 1];
    let next = last * 2;
    seq.push(next);
  }

  return seq;
};
```

---

## **Dynamic Fizz Buzz**

Write a function `dynamicFizzBuzz` that accepts three arguments (max, num1, and num2). The function should return an array containing positive numbers less than max that are divisible by num1 or num2, but not both.

**Filter Solution**

```js
function dynamicFizzBuzz(max, num1, num2) {
  let arr = [...Array(max).keys()];
  return arr.filter(num => (num % num1 === 0 || num % num2 === 0) && !(num % num1 === 0 && num % num2 === 0));
}
}
```

**For Loop Solution**

```js
let dynamicFizzBuzz = function (max, num1, num2) {
  let nums = [];
  for (let i = 1; i < max; i++) {
    if (
      (i % num1 === 0 || i % num2 === 0) &&
      !(i % num1 === 0 && i % num2 === 0)
    ) {
      nums.push(i);
    }
  }
  return nums;
};
```

---

## **Reverb**

Write a function `reverb` that accepts a word as an argument. The function should return a new word where all letters that come after the last vowel (including the vowel itself) are repeated at the end of the word. If the value passed in is not a string, say someone passes in a number as an argument, then return null.

```js
function reverb(word) {
  if (typeof word !== "string") return null;
  for (let i = word.length; i > -1; i--) {
    if ("AEIOUaeiou".includes(word[i])) {
      return word + word.slice(i);
    }
  }
}
```

---

## **Pair Product**

Write a function `pairProduct` that accepts an array of numbers and a product as arguments. The function should return a boolean indicating whether or not a pair of distinct elements in the array result in the product when multiplied together. You may assume that the input array contains unique elements.
**Single For Loop Solution**

```js
function pairProduct(array, product) {
  for (let i = 0; i < array.length; i++) {
    let test = product / array[i];
    if (test !== array[i]) {
      return array.includes(test);
    }
  }
}
```

**Double For Loop Solution**

```js
let pairProduct = function (numbers, product) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] * numbers[j] === product) {
        return true;
      }
    }
  }
  return false;
};
```

---

## **Snake to Camel**

Write a function `snakeToCamel` that takes in a snake_cased string and returns a PascalCased version of the string. snakecase is where each word is separated with underscores (``). PascalCase is a string where the first char of each word is capital, all other chars lowercase.

```js
function snakeToCamel(string) {
  let words = string.toLowerCase().split("_");
  return words
    .map(function (word) {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join("");
}
```

---

## **Product With Reduce Recall**

Write a function `productWithReduce(nums)` that takes in an array of numbers. The function should return the total product of multiplying all numbers of the array together. You can assume that nums will not be an empty array. Solve this using Array#reduce.

```js
function productWithReduce(nums) {
  return nums.reduce((a, b) => (a *= b));
}
```

---

## **Strange Sums**

Write a function `strangeSums` that accepts an array of numbers as an argument. The method should return a count of the number of distinct pairs of elements that have a sum of zero. You may assume that the input array contains unique elements.

**Double For Loop Solution**

```js
function strangeSums(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 0) {
        sum++;
      }
    }
  }
  return sum;
}
```

---

## **Triplet True**

Write a function `tripletTrue` that accepts a string as an argument. The function should return a boolean indicating whether or not the the string contains three of the same character consecutively.

```js
function tripletTrue(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1] && string[i] === string[i + 2]) {
      return true;
    }
  }
  return false;
}
```

---

## **Three Increasing**

Write a function `threeIncreasing` that accepts an array of numbers as an argument. The function should return a boolean indicating whether or not the array contains three consecutive numbers in consecutive increasing order, like 7, 8, 9.

```js
function threeIncreasing(array) {
  for (let i = 0; i < array.length; i++) {
    let avg = (array[i] + array[i + 2]) / 2;
    if (array[i + 1] === avg) {
      return true;
    }
  }
  return false;
}
```

---

## **Uncompress Recall**

Write a function `uncompress(str)` that takes in a "compressed" string as an arg. A compressed string consists of a character immediately followed by the number of times it appears in the "uncompressed" form. The function should return a the uncompressed version of the string. See the examples.

Hint: you can use the built-in Number function should convert a numeric string into the number type. For example. Number("4") // => 4

**Double For Loop**

```js
function uncompress(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i += 2) {
    for (let j = 0; j < Number(str[i + 1]); j++) {
      newStr += str[i];
    }
  }
  return newStr;
}
```

---

## **Zip**

Write a function `zip` that accepts two arrays as arguments. The function should return a two dimensional array with subarrays of length 2 that contain elements at corresponding indices from the input arrays. You may assume that the input arrays have the same length.

```js
function zip(arr1, arr2) {
  let container = [];
  for (let i = 0; i < arr1.length; i++) {
    container.push([arr1[i], arr2[i]]);
  }
  return container;
}
```

---

## **Unique**

Write a function `unique` that accepts an array as an argument. The function should return a new array containing elements of the input array, without duplicates.

**Set Solution**

```js
function unique(array) {
  let result = new Set(array);
  return Array.from(result);
}
```

**For Each Solution**

```js
function unique(array) {
  let result = [];
  array.forEach(function (num) {
    if (!result.includes(num)) {
      result.push(num);
    }
  });
  return result;
}
```

---

## **Hipsterfy Recall**

Write a function `hipsterfy(sentence)` that takes in a sentence string and returns the sentence where every word is missing it's last vowel.

**Map Solution**

```js
function hipsterfy(sentence) {
  sentence = sentence.split(" ");
  return sentence
    .map(function (word) {
      return removeVowel(word);
    })
    .join(" ");
}

function removeVowel(word) {
  for (let i = word.length; i > -1; i--) {
    if ("aeiou".includes(word[i])) {
      return word.slice(0, i) + word.slice(i + 1);
    }
  }
}
```

**For Each Solution**

```js
let removeLastVowel = function (word) {
  let vowels = "aeiou";

  for (let i = word.length - 1; i >= 0; i--) {
    let char = word[i];
    if (vowels.includes(char)) {
      return word.slice(0, i) + word.slice(i + 1);
    }
  }

  return word;
};

let hipsterfy = function (sentence) {
  let newWords = [];
  let words = sentence.split(" ");

  words.forEach(function (word) {
    newWords.push(removeLastVowel(word));
  });

  return newWords.join(" ");
};
```

---

## **Zany Zip**

Write a function `zanyZip` that accepts two arrays as arguments. The function should return a two dimensional array with subarrays of length 2 that contain elements at corresponding indices from the input arrays. If one of the arrays is shorter than the other, then substitute null for the missing elements.

```js
function zanyZip(arr1, arr2) {
  let container = [];
  for (let i = 0; i < arr1.length || i < arr2.length; i++) {
    container.push([arr1[i] || null, arr2[i] || null]);
  }
  return container;
}
```

---

## **Silly Strings**

Write a function `sillyString` that accepts a word as an argument. The functions should return a new word where every vowel of the original word is followed by 'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.

```js
function sillyString(word) {
  let str = "";
  for (let i = 0; i < word.length; i++) {
    if ("aeiou".includes(word[i])) {
      str += word[i] + "b" + word[i];
    } else {
      str += word[i];
    }
  }
  return str;
}
```

---

## **Shortest Word**

Write a function `shortestWord` that accepts a sentence as an argument. The function should return the shortest word in the sentence. If there is a tie, return the word that appears later in the sentence.

```js
function shortestWord(sent) {
  sent = sent.split(" ");
  let shortest = sent[0];
  sent.forEach(function (word) {
    if (word.length <= shortest.length) {
      shortest = word;
    }
  });
  return shortest;
}
```

---

## **More Dot Less Dash**

Write a function `moreDotLessDash` that accepts a string as an argument. The function should return a boolean indicating whether or not the string contains more dots (.) than dashes (-).

```js
function moreDotLessDash(str) {
  let dots = 0;
  let dashes = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ".") dots++;
    if (str[i] === "-") dashes++;
  }
  return dots > dashes;
}
```

---

## **Next Prime**

Write a function `nextPrime` that accepts a number as an argument. The function should return the nearest prime number that is greater than the given number.

```js
function nextPrime(num) {
  let i = num;
  while (true) {
    i++;
    if (isPrime(i)) {
      return i;
    }
  }
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
```

---

## **Matrix Addition**

A 2-dimensional array is also known as a "matrix". Write a function `matrixAddition` that accepts two matrices as arguments. The two matrices are guaranteed to have the same "height" and "width". The function should return a new matrix representing the sum of the two arguments. To add matrices, we add the values at the same positions.

```js
function matrixAddition(m1, m2) {
  let container = [];
  for (var i = 0; i < m1.length; i++) {
    let sub1 = m1[i];
    let sub2 = m2[i];
    for (var j = 0; j < m1.length; j += m1.length) {
      container.push([sub1[j] + sub2[j], sub1[j + 1] + sub2[j + 1]]);
    }
  }
  return container;
}
```

```js
let matrixAddition = function (m1, m2) {
  let sum = [];
  for (let row = 0; row < m1.length; row++) {
    let subArray = [];
    for (let col = 0; col < m1[0].length; col++) {
      subArray.push(m1[row][col] + m2[row][col]);
    }
    sum.push(subArray);
  }
  return sum;
};
```

---

## **Is Perfect Square**

Write a function `isPerfectSquare` that accepts a number as an argument. The method should return a boolean indicating whether or not the argument is a perfect square. A perfect square is a number that is the product of some number multiplied by itself. For example, since 64 = 8 _ 8 and 144 = 12 _ 12, 64 and 144 are perfect squares; 35 is not a perfect square.

```js
function isPerfectSquare(num) {
  for (let i = 0; i <= num; i++) {
    if (i * i === num) {
      return true;
    }
  }
  return false;
}
```

---

## **Prime Factors**

Write a function `primeFactors` that accepts a number as an argument. The function should return an array containing all of the prime numbers that can divide the given number.

```js
function primeFactors(n) {
  let result = [];
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      if (n % i === 0) {
        result.push(i);
      }
    }
  }
  return result;
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
```

---

## **Prev Prime**

Write a function `prevPrime` that accepts a number as an argument. The function should return the nearest prime number that is smaller than the given argument. Since 2 is the smallest prime number, return null if no number can be returned.

```js
let prevPrime = function (n) {
  if (n <= 2) {
    return null;
  }
  let i = n - 1;
  while (true) {
    if (isPrime(i)) {
      return i;
    }
    i--;
  }
};

let isPrime = function (n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
```

---

## **Has Three Vowels**

Write a function `hasThreeVowels` that accepts a string as an argument. The function should return a boolean indicating whether or not the string contains at least three different vowels.
**For Loop Solution**

```js
function hasThreeVowels(str) {
  let count = [];
  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i]) && count.indexOf(str[i]) === -1) {
      count.push(str[i]);
    }
  }
  return count.length >= 3;
}
```

**For Each Solution**

```js
let hasThreeVowels = function (string) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  vowels.forEach(function (vowel) {
    if (string.includes(vowel)) {
      count++;
    }
  });

  return count >= 3;
};
```

---

## **Fibonacci Sequence**

Write a function `fibonacciSequence` that accepts a number as an argument. The function should return an array representing the fibonacci sequence up to the given length. The first and second numbers of the sequence are 1 and 1. To generate subsequent numbers of the sequence, we take the sum of the previous two numbers of the sequence.

**For Loop Solution**

```js
function fibonacciSequence(num) {
  if (num === 0) return [];
  if (num === 1) return [1];
  let result = [1, 1];
  for (let i = 2; i < num; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}
```

**While Loop Solution**

```js
let fibonacciSequence = function (length) {
  if (length === 0) {
    return [];
  } else if (length === 1) {
    return [1];
  }

  let seq = [1, 1];
  while (seq.length < length) {
    let last = seq[seq.length - 1];
    let secondLast = seq[seq.length - 2];
    let next = last + secondLast;
    seq.push(next);
  }
  return seq;
};
```

---

## **Is Anti Prime**

Write a function `isAntiPrime` that accepts a number as an argument. The method should return true if the given number has more divisors than all positive numbers less than the given number. For example, 24 is an anti-prime because it has more divisors than any positive number less than 24.

```js
function isAntiPrime(n) {
  let result = n;
  let i = 1;
  while (i < n) {
    if (divisorCount(i) > divisorCount(result)) {
      result = i;
    }
    i++;
  }
  return result === n;
}

function divisorCount(n) {
  let divisors = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisors++;
    }
  }
  return divisors;
}
```

---

## **Pyramid Array**

Write a function `pyramidArray(base)` that takes in an array of numbers representing the base of a pyramid. The function should return a two-dimensional array representing the completed pyramid. To generate an element of the next level of the pyramid, we sum the elements below and to the left and below and to the right.

```js
function pyramidArray(base) {
  let pyr = [base];
  while (pyr.length <= base.length) {
    pyr.unshift(layerGen(pyr[pyr.length - 1]));
  }
  return pyr;
}

function layerGen(arr) {
  let lay = [];
  for (let i = 0; i < arr.length - 1; i++) {
    lay.push(arr[i] + arr[i + 1]);
  }
  return lay;
}
```

---

## **Repeating Translate Recall**

Write a function `repeatingTranslate` that accepts a sentence as an argument.
The function should translate the sentence according to the following rules:

- words that are shorter than 3 characters are unchanged
- words that are 3 characters or longer are translated according to the
  following rules:
  - if the word ends with a vowel, simply repeat the word twice (example:
    'like'->'likelike')
  - if the word ends with a non-vowel, repeat all letters that come after the
    word's last vowel, including the last vowel itself (example: 'trash'->'trashash')

Note that if words are capitalized in the original sentence, they should remain
capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

```js
function repeatingTranslate(sent) {
  sent = sent.split(" ");
  let result = [];
  sent.forEach(function (word) {
    if (word.length < 3) {
      result.push(word);
    } else {
      result.push(transformWord(word));
    }
  });
  return result.join(" ");
}

function transformWord(word) {
  if ("AEIOUaeiou".includes(word[word.length - 1])) {
    return word + word;
  } else {
    for (let i = word.length - 1; i > -1; i--) {
      if ("AEIOUaeiou".includes(word[i])) {
        return word + word.slice(i);
      }
    }
  }
}
```

---

## **Fib**

Write a function `fib` that accepts a number n as an argument. The function should return the "n-th" number of the Fibonacci sequence. The first two numbers of the Fibonacci sequence are 1; to generate subsequent numbers of the Fibonacci sequence, we take the sum of the previous two numbers of the sequence.

**Constant Time Solution**

```js
function fib(n) {
  let p1 = (1 + Math.sqrt(5)) / 2;
  let p2 = (1 - Math.sqrt(5)) / 2;
  return Math.floor((p1 ** n - p2 ** n) / Math.sqrt(5));
}
```

**Linear Solution**

```js
function fib(n) {
  let f = [1, 1];
  let i = 2;
  while (i < n) {
    f.push(f[f.length - 1] + f[f.length - 2]);
    i++;
  }
  return f[n - 1];
}
```

---

## **Pascal's Triangle**

Pascal's triangle is a 2-dimensional array with the shape of a pyramid. The top of the pyramid is the number 1. To generate further levels of the pyramid, every element is the sum of the element above and to the left with the element above and to the right. Nonexisting elements are treated as 0 when calculating the sum.

Write a function `pascalsTriangle` that accepts a positive number, n, as an argument and returns a 2-dimensional array representing the first n levels of Pascal's triangle. See the file for examples.

```js
function pascalsTriangle(n) {
  let tri = [[1]];
  while (tri.length < n) {
    let previous = tri[tri.length - 1];
    tri.push(layerGen(previous));
  }
  return tri;
}

function layerGen(arr) {
  let layer = [];
  for (let i = 0; i <= arr.length; i++) {
    if (i === 0) {
      layer.push(1);
    } else if (i === arr.length) {
      layer.push(1);
    } else {
      layer.push(arr[i] + arr[i - 1]);
    }
  }
  return layer;
}
```

---
