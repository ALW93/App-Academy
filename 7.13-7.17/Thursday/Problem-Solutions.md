# **Problems and Solutions**

## **Array Sum**

Write a function sumArray(arr) that accepts an array as an arg. The function should return the total sum of all values in the array. Solve this using Array#forEach.

**For Each Solution**

```js
function sumArray(arr) {
  let total = 0;
  arr.forEach(function (num) {
    total += num;
  });
  return total;
}
```

**Condensed For Each Solution**

```js
function sumArray(arr) {
  let total = 0;
  arr.forEach((num) => (total += num));
  return total;
}
```

---

## **Avg Val**

Write a function avgVal(arr) that accepts an array as an arg. The function should return the average of all values in the array. If the array is empty, it should return null. Solve this using Array#forEach.

**For Each Solution**

```js
function avgVal(arr) {
  let sum = 0;
  if (arr.length === 0) return null;
  arr.forEach(function (num) {
    sum += num;
  });
  return sum / arr.length;
}
```

**Condensed For Each Solution**

```js
function avgVal(arr) {
  let sum = 0;
  arr.forEach((num) => (sum += num));
  return sum / arr.length || null;
}
```

---

## **My Index Of Recall**

Write a function myIndexOf(arr, target) that takes in an array and target value as args. The function should return the first index where the target is found in the array. If the target is not found, it should return -1. Solve this without using Array#indexOf.

**For Loop Solution**

```js
function myIndexOf(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
```

---

## **Tripler**

Write a function tripler(nums) that takes in an array as an arg. The function should return a new array containing three times every number of the original array. Solve this using Array#map.

**Map Solution**

```js
function tripler(nums) {
  return nums.map(function (num) {
    return num * 3;
  });
}
```

**Condensed Map Solution**

```js
function tripler(nums) {
  return nums.map((num) => num * 3);
}
```

---

## **Long Words**

Write a function longWords(words) that takes in an array of words. The function should return an array containing only the words that are longer than 5 characters. Solve this using Array#filter.

**Filter Solution**

```js
function longWords(words) {
  return words.filter(function (word) {
    return word.length > 5;
  });
}
```

**Condensed Filter Solution**

```js
function longWords(words) {
  return words.filter((word) => word.length > 5);
}
```

---

## **Remove E Words**

Write a function removeEWords(sentence) that accepts a sentence string as an arg. The function should return a new string, containing only the words that don't have the letter "e" in them. Solve this using Array#filter.

**Filter Solution**

```js
function removeEWords(sentence) {
  let arr = sentence.split(" ");
  return arr
    .filter(function (word) {
      return !word.includes("e");
    })
    .join(" ");
}
```

**Condensed Filter Solution**

```js
function removeEWords(sentence) {
  let arr = sentence.split(" ");
  return arr.filter((word) => !word.includes("e")).join(" ");
}
```

---

## **Max Value**

Write a function maxValue(nums) that takes in an array of numbers as an arg. The function should return the largest number of the array. If the array is empty, the function should return null. You must use Array#forEach in your solution.

**For Each Solution**

```js
function maxValue(nums) {
  let max = nums[0];
  nums.forEach(function (num) {
    if (num > max) {
      max = num;
    }
  });
  return max || null;
}
```

## **Two Sum Recall**

Write a function twoSum(arr, target) that accepts an array and a target number as args. The function should a return a boolean indicating if two distinct numbers of the array add up to the target value. You can assume that input array contains only unique numbers.

**Double For Loop Solution**

```js
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
}
```

---

## **Two Dimensional Product**

Write a function twoDimensionalProduct(array) that takes in a 2D array of numbers as an argument. The function should return the total product of all numbers multiplied together. Solve this using the Array#forEach method.

**Chained forEach Solution**

```js
let twoDimensionalProduct = function (arr) {
  let product = 1;

  arr.forEach(function (subArr) {
    subArr.forEach(function (num) {
      product *= num;
    });
  });

  return product;
};
```

**Flat Method Single For Each Solution**

```js
function twoDimensionalProduct(array) {
  let arr = array.flat();
  let result = 1;
  arr.forEach(function (num) {
    return (result *= num);
  });
  return result;
}
```

**Condensed Flat Method Single For Each Solution**

```js
function twoDimensionalProduct(array) {
  let arr = array.flat();
  let result = 1;
  arr.forEach((num) => (result *= num));
  return result;
}
```

**Harry's Chained Reduce Solution**

```js
let twoDimensionalProduct = function (array) {
  return array.reduce((product, subArray) => {
    return (
      product *
      subArray.reduce((accum, num) => {
        return accum * num;
      })
    );
  }, 1);
};
```

**Condensed Version of Above**

```js
let twoDimensionalProduct = (a) =>
  a.reduce((p, subA) => p * subA.reduce((acc, n) => acc * n), 1);
```

---

## **Popper**

Write a function popper(array, num) that takes in an array and a number as args. The function should remove the last num elements from the array, mutating the original array. The function should return a new array containing the elements that were removed.

Define this function using function expression syntax.

**Straightforward Solution**

```js
let popper = function (array, num) {
  return array.splice(array.length - num);
};
```

**For Loop Solution**

```js
let popper = function (array, num) {
  let removed = [];

  for (let i = 0; i < num; i++) {
    let el = array.pop();
    removed.push(el);
  }

  return removed;
};
```

---

## **Choose Primes**

Write a function choosePrimes(nums) that takes in an array of numbers as args. The function should return a new array containing the primes from the original array. A prime number is a number that is only divisible by 1 and itself. Hint: consider creating a helper function to check if a number is prime!
**Helper Solution w/ Filter in Main**

```js
function choosePrimes(nums) {
  return nums.filter(function (num) {
    return isPrime(num);
  });
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

**Helper Solution w/ forEach in Main**

```js
let isPrime = function (num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

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

## **Fizz Buzz Recall**

Write a function fizzBuzz(max) that accepts a number as an arg. The function should return an array containing all positive numbers less than max that are divisible by either 3 or 5, but not both.

**Filter Solution**

```js
function fizzBuzz(max) {
  let nums = [...Array(max).keys()];
  return nums.filter(
    (num) =>
      (num % 3 === 0 || num % 5 === 0) && !(num % 3 === 0 && num % 5 === 0)
  );
}
```

**For Loop Solution**

```js
let fizzBuzz = function (max) {
  let nums = [];

  for (let i = 1; i < max; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      nums.push(i);
    }
  }

  return nums;
};
```

---

## **Longest Word**

Write a function longestWord(sentence) that takes in a sentence string as an argument. The function should return the longest word in the sentence. You must use Array#forEach in your solution.

**For Each Solution**

```js
function longestWord(sentence) {
  let words = sentence.split(" ");
  let longest = "''";
  words.forEach(function (word) {
    if (word.length > longest.length) {
      longest = word;
    }
  });
  return longest;
}
```

---

## **Sum With Reduce**

Write a function sumWithReduce(nums) that takes in an array of numbers. The function should return the total sum of all numbers in the array. Solve this using Array#reduce.

**Condensed Reduce Solution**

```js
function sumWithReduce(nums) {
  return nums.reduce((a, b) => a + b, 0);
}
```

**Reduce Solution**

```js
function sumWithReduce(nums) {
  return nums.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
}
```

---

## **Abbreviate**

Write a function abbreviate(word) that takes in a string arg. The function should return a new string where all of its vowels are removed.

**Condensed Filter Solution**

```js
function abbreviate(word) {
  return word
    .toLowerCase()
    .split("")
    .filter((char) => ("aeiou".includes(char) ? "" : char))
    .join("");
}
```

**Filter Solution**

```js
function abbreviate(word) {
  let wordArr = word.toLowerCase().split("");
  wordArr = wordArr.filter(function (char) {
    if ("aeiou".includes(char)) {
      return "";
    } else {
      return char;
    }
  });
  return wordArr.join("");
}
```

**For Loop Solution**

```js
let abbreviate = function (word) {
  let vowels = "aeiou";
  let newWord = "";

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (!vowels.includes(char.toLowerCase())) {
      newWord += char;
    }
  }

  return newWord;
};
```

---

## **Product With Reduce**

Write a function productWithReduce(nums) that takes in an array of numbers. The function should return the total product of multiplying all numbers of the array together. You can assume that nums will not be an empty array. Solve this using Array#reduce.

**Reduce Solution**

```js
function productWithReduce(nums) {
  return nums.reduce(function (a, b) {
    return (a *= b);
  });
}
```

**Condensed Reduce Solution**

```js
function productWithReduce(nums) {
  return nums.reduce((a, b) => (a *= b));
}
```

---

## **Remove Last Vowel Recall**

Write a function removeLastVowel(word) that takes in a string and returns the string with its last vowel removed.
**For Loop w/ Splice Solution**

```js
function removeLastVowel(word) {
  let words = word.split("");
  for (var i = word.length; i > -1; i--) {
    if ("aeiou".includes(word[i])) {
      words.splice(i, 1);
      return words.join("");
    }
  }
  return word;
}
```

**For Loop w/ Slice Solution**

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
```

---

## **Abbreviate Words**

Write a function abbreviateWords(sentence) that takes in a sentence string. The function should return a new sentence where words that are longer than 4 characters have their vowels removed. Hint: Consider creating a helper function to remove all vowels in a string.

**Helper Solution w/ Map**

```js
function abbreviateWords(sentence) {
  let words = sentence.split(" ");
  let newSent = words.map(function (word) {
    if (word.length > 4) {
      return vowelRemover(word);
    } else {
      return word;
    }
  });
  return newSent.join(" ");
}

let vowelRemover = function (word) {
  let newWord = "";
  for (let i = 0; i < word.length; i++) {
    if ("aeiou".includes(word[i])) {
      continue;
    }
    newWord += word[i];
  }
  return newWord;
};
```

---

## **Max With Reduce**

Write a function maxWithReduce(nums) that takes in an array of numbers. The function should return the largest number of the array. You can assume that the array will not be empty. Solve this using Array#reduce.

**Reduce Solution**

```js
function maxWithReduce(nums) {
  return nums.reduce(function (accum, current) {
    if (current > accum) {
      return current;
    } else {
      return accum;
    }
  });
}
```

---

## **Contains Word**

Write a function containsWord(sentence, targetWord) that accepts two strings as args. The function should return a boolean indicating whether the targetWord is found inside of the sentence. Solve this without using #indexOf or #includes.

**For Loop Solution**

```js
function containsWord(sentence, targetWord) {
  let arr = sentence.toLowerCase().split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetWord) {
      return true;
    }
  }
  return false;
}
```

---

## **Uncompress**

Write a function uncompress(str) that takes in a "compressed" string as an arg. A compressed string consists of a character immediately followed by the number of times it appears in the "uncompressed" form. The function should return a the uncompressed version of the string. See the examples.

Hint: you can use the built-in Number function should convert a numeric string into the number type. For example. Number("4") => 4

**Double For Loop Solution**

```js
let uncompress = function (str) {
  let newStr = "";

  for (let i = 0; i < str.length; i += 2) {
    let char = str[i];
    let num = Number(str[i + 1]);

    for (let times = 0; times < num; times += 1) {
      newStr += char;
    }
  }

  return newStr;
};
```

**Single For Loop using Repeat Function**

```js
function uncompress(str) {
  let newStr = "";
  for (var i = 0; i < str.length; i += 2) {
    newStr += str[i].repeat(Number(str[i + 1]));
  }
  return newStr;
}
```

---

## **Hipsterfy**

Write a function hipsterfy(sentence) that takes in a sentence string and returns the sentence where every word is missing it's last vowel.

**Helper using Map**

```js
function hipsterfy(sentence) {
  let sentArr = sentence.split(" ");
  return sentArr
    .map(function (word) {
      return vowelRemover(word);
    })
    .join(" ");
}

let vowelRemover = function (word) {
  const VOWEL = "aeiou";
  let idx;
  for (var i = word.length; i > -1; i--) {
    if (VOWEL.includes(word[i])) {
      idx = i;
      break;
    }
  }
  return word.slice(0, i) + word.slice(i + 1);
};
```

**Helper using For Each**

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

## **Least Common Multiple Recall**

Write a function leastCommonMultiple(num1, num2) that accepts two numbers as arguments. The functions should return the smallest number that is divisible by both num1 and num2.

**For Loop Solution**

```js
function leastCommonMultiple(num1, num2) {
  for (let i = num2; i <= num1 * num2; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      return i;
    }
  }
}
```

**Harry's Recursive Solution single Function**

```js
function leastCommonMultiple(num1, num2) {
  let gcd = function (num1, num2) {
    if (num1 === 0) return num2;
    if (num2 === 0) return num1;

    return gcd(num2, num1 % num2);
  };
  return (num1 * num2) / gcd(num1, num2);
}
```

---

## **Rotate**

Write a function rotate(array, num) that takes in an array and a number as args. When the num is positive, the elements of the array should be rotated to the right. When the num is negative, the elements of the array should be rotated to the left. The function should mutate the original array.

Define this function using function expression syntax.

**For Loop & Conditional Solution**

```js
let rotate = function (array, num) {
  if (num > 0) {
    for (var i = 0; i < num; i++) {
      let ele = array.pop();
      array.unshift(ele);
    }
  } else {
    for (var i = 0; i < Math.abs(num); i++) {
      let ele = array.shift();
      array.push(ele);
    }
  }
  return array;
};
```

---

## **Addition Mutator**

Write a function additionMutator that accepts an array and a number as an arguments.
The function should mutate the input array such that every element has the given number added to it.

**For Loop Solution**

```js
function additionMutator(array, num) {
  for (let i = 0; i < array.length; i++) {
    array[i] += num;
  }
}
```

---

## **Alternating Words**

Write a function alternatingWords that accepts an array of words as an argument. The function should mutate the input array such that the words alternate between fully uppercase or lowercase. The first word should be uppercase.

**For Loop Solution**

```js
function alternatingWords(array) {
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      array[i] = array[i].toUpperCase();
    } else {
      array[i] = array[i].toLowerCase();
    }
  }
}
```

---

## **Repeating Translate**

Write a function `repeatingTranslate` that accepts a sentence as an argument.
The function should translate the sentence according to the following rules:

- words that are shorter than 3 characters are unchanged
- words that are 3 characters or longer are translated according to the
  following rules:
  - if the word ends with a vowel, simply repeat the word twice (example:
    'like'->'likelike')
  - if the word ends with a non-vowel, repeat all letters that come after the
    word's last vowel, including the last vowel itself (example:
    'trash'->'trashash')

Note that if words are capitalized in the original sentence, they should remain
capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.

**Single Helper Solution**

```js
let repeatingTranslate = function (sentence) {
  let words = sentence.split(" ");
  let newWords = words.map(function (word) {
    if (word.length < 3) {
      return word;
    } else {
      return translateWord(word);
    }
  });
  return newWords.join(" ");
};

let translateWord = function (word) {
  let vowels = "aeiou";
  let lastChar = word[word.length - 1];
  if (vowels.includes(lastChar)) {
    return word + word;
  }

  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      return word + word.slice(i);
    }
  }
};
```

**Double Helper Solution**

```js
function repeatingTranslate(sent) {
  let words = sent.split(" ");
  return words
    .map(function (word) {
      if (word.length >= 3) {
        return wordFilter(word);
      } else {
        return word;
      }
    })
    .join(" ");
}

function wordFilter(word) {
  let lastIdx = word.length - 1;
  if ("aeiou".includes(word[lastIdx])) {
    return word + word;
  } else {
    return word + transform(word);
  }
}

let transform = function (word) {
  for (var i = word.length; i > -1; i--) {
    if ("aeiou".includes(word[i])) {
      return word.slice(i);
    }
  }
};
```

---
