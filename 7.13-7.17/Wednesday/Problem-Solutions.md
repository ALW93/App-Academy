# **Problems and Solutions**

## **Reverse String**

Write a function reverseString(str) that takes in a string. The function should return a new string where the order the characters is reversed.

```js
function reverseString(str) {
  let newStr = "";
  for (var i = str.length - 1; i > -1; i--) {
    newStr += str[i];
  }
  return newStr;
}
```

---

## **Range**

Write a function range(min, max) that takes in two numbers. The function should return an array containing all numbers from min to max inclusive.

Define this function using function expression syntax.

```js
function range(min, max) {
  let result = [];
  for (var i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}
```

---

## **Log Between Stepper Recall**

Write a function logBetweenStepper(min, max, step) that takes in 3 numbers as parameters. The function should print out numbers between min and max at step intervals. See the following examples.

Hint: this function only needs to print using console.log it does not need to return.

```js
function logBetweenStepper(min, max, step) {
  for (var i = min; i <= max; i += step) {
    console.log(i);
  }
}
```

---

## **Reverse Sentence**

Write a function reverseSentence(sentence) that takes in a sentence as an arg. The function should return a new sentence where the order of the words is reversed. Note that you should reverse the order among words, not the order among characters.

```js
function reverseSentence(sentence) {
  return sentence.split(" ").reverse().join(" ");
}
```

---

## **My Includes**

Write a function myIncludes(arr, target) that accepts an array and an target value as args. The function should return a boolean indicating whether the target is found in the array. Solve this without Array#includes or Array#indexOf.

```js
function myIncludes(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}
```

---

## **Initials**

Write a function initials(name) that accepts a full name as an arg. The function should return the initials for that name.

```js
function initials(name) {
  let arr = name.split(" ");
  let initials = [];
  for (var i = 0; i < arr.length; i++) {
    initials.push(arr[i][0]);
  }
  return initials.join("").toUpperCase();
}
```

---

## **Sum Array Recall**

Write a function sumArray(array) that takes in an array of numbers and returns the total sum of all the numbers.

```js
function sumArray(array) {
  return array.reduce((a, b) => a + b);
}
```

---

## **Factors Of**

Write a function factorsOf(num) that takes in a number as an arg. The method should return an array containing all positive numbers that are able to divide into num with no remainder.

Define this function using function expression syntax.

```js
function factorsOf(num) {
  let result = [];
  if (num === 0) return []; //edge case
  for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  return result;
}
```

---

## **My Index Of**

Write a function myIndexOf(arr, target) that takes in an array and target value as args. The function should return the first index where the target is found in the array. If the target is not found, it should return -1. Solve this without using Array#indexOf.

```js
function myIndexOf(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
```

---

## **Vowel Counter Recall**

Write a function, countVowels(word), that takes in a string word and returns the number of vowels in the word.
Vowels are the letters "a", "e", "i", "o", "u".

```js
function countVowels(word) {
  const VOWEL = "aeiou";
  let count = 0;
  for (var i = 0; i < word.length; i++) {
    if (VOWEL.indexOf(word[i]) > -1) {
      count++;
    }
  }
  return count;
}
```

---

## **Has Vowel**

Write a function hasVowel(str) that takes in a string. The function should return a boolean, true if the string contains at least one vowel, false otherwise. Vowels are the letters a, e, i, o, u.

```js
function hasVowel(str) {
  const VOWEL = "aeiou";
  for (var i = 0; i < str.length; i++) {
    if (VOWEL.indexOf(str[i]) > -1) {
      return true;
    }
  }
  return false;
}
```

---

## **Odd Numbers**

Write a function oddNumbers(min, max) that takes in two numbers as args. The function should return an array containing all odd numbers between min and max, exclusive.

Define this function using function expression syntax.

```js
let oddNumbers = function (min, max) {
  let result = [];
  for (var i = min + 1; i < max; i++) {
    if (Math.abs(i % 2) === 1) {
      result.push(i);
    }
  }
  return result;
};
```

---

## **Fizz Buzz Array**

Write a function fizzBuzz(max) that accepts a number as an arg. The function should return an array containing all positive numbers less than max that are divisible by either 3 or 5, but not both.

```js
function fizzBuzz(max) {
  let result = [];
  for (var i = 1; i < max; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
      result.push(i);
    }
  }
  return result;
}
```

---

## **First Vowel**

Write a function firstVowel(str) that takes in a string and returns the first vowel that appears sequentially in the string.

```js
function firstVowel(str) {
  const VOWEL = "aeiou";
  str = str.toLowerCase(); // for edge cases
  for (var i = 0; i < str.length; i++) {
    if (VOWEL.indexOf(str[i]) > -1) {
      return str[i];
    }
  }
  return null;
}
```

---

## **Even Numbers**

Write a function evenNumbers(max) that takes in a number as an arg. The function should return an array containing all positive, even numbers that are less than max.

Define this function using function expression syntax.

```js
let evenNumbers = function (max) {
  let result = [];
  for (var i = 2; i < max; i += 2) {
    result.push(i);
  }
  return result;
};
```

---

## **Is Prime Recall**

Define a function isPrime(number) that returns true if number is prime. Otherwise, false. A number is prime if it is only divisible by 1 and itself.

```js
function isPrime(number) {
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}
```

---

## **Last Vowel**

Write a function lastVowel(str) that takes in a string and returns the last vowel that appears sequentially in the string. Note that the string may contain capitalization.

Hint: You may find the String#toLowerCase or String#toUpperCase methods useful

```js
function lastVowel(str) {
  let newStr = str.toLowerCase();
  const VOWEL = "aeiou";
  for (var i = str.length - 1; i > -1; i--) {
    if (VOWEL.indexOf(newStr[i]) > -1) {
      return str[i];
    }
  }
  return null;
}
```

---

## **Pit Pat**

Write a function pitPat(max) that accepts a number as an arg. The function should return an array containing all positive numbers less than or equal to max that are divisible by either 4 or 6, but not both.

```js
function pitPat(max) {
  let result = [];
  for (var i = 1; i <= max; i++) {
    if ((i % 4 === 0 || i % 6 === 0) && !(i % 4 === 0 && i % 6 === 0)) {
      result.push(i);
    }
  }
  return result;
}
```

---

## **Remove Last Vowel**

Write a function removeLastVowel(word) that takes in a string and returns the string with its last vowel removed.

```js
function removeLastVowel(word) {
  const VOWEL = "aeiou";
  let wordArr = word.split("");
  for (var i = wordArr.length - 1; i > -1; i--) {
    if (VOWEL.indexOf(wordArr[i]) > -1) {
      wordArr.splice(i, 1);
      return wordArr.join("");
    }
  }
  return word;
}
```

---

## **Pairs Maker**

Write a function pairsMaker(arr) that takes in a an array as an argument. The function should return a 2D array where the subarrays represent unique pairs of element from the input array.

```js
function pairsMaker(arr) {
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      result.push([arr[i], arr[j]]);
    }
  }
  return result;
}
```

---

## **Min Value**

Write a function minValue(nums) that takes in an array of numbers as an arg. The function should return the smallest number of the array. If the array is empty, the function should return null.

```js
function minValue(nums) {
  if (nums.length === 0) return null;
  return Math.min(...nums);
}

//Math.min, and use spread operator to allow this to assess arrays (...)
```

---

## **Two Sum**

Write a function twoSum(arr, target) that accepts an array and a target number as args. The function should a return a boolean indicating if two distinct numbers of the array add up to the target value. You can assume that input array contains only unique numbers.

```js
function twoSum(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
}
```

---

## **Rotate Right**

Write a function rotateRight(array, num) that takes in an array and a number as args. The function should return a new array where the elements of the array are rotated to the right num times. The function should not mutate the original array and instead return a new array.

Define this function using function expression syntax.

HINT: you can use Array#slice to create a copy of an array

```js
function rotateRight(array, num) {
  let result = array.slice(0);
  for (var i = 0; i < num; i++) {
    let ele = result.pop();
    result.unshift(ele);
  }
  return result;
}
```

---

## **Two Dimensional Sum**

Write a function twoDimensionalSum(arr) that takes in a 2D array of numbers and returns the total sum of all numbers.

```js
function twoDimensionalSum(arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    let subArr = arr[i];
    for (var j = 0; j < subArr.length; j++) {
      sum += subArr[j];
    }
  }
  return sum;
}
```

---

## **Rotate Left**

Write a function rotateLeft(array, num) that takes in an array and a number as args. The function should rotate the elements of the array to the left num times, mutating the original array. The function should return undefined.

Define this function using function expression syntax.

```js
function rotateLeft(array, num) {
  for (var i = 0; i < num; i++) {
    let ele = array.shift();
    array.push(ele);
  }
}
```

---

## **Pig Latin Recall**

Pig Latin is a fun take on the English language where you move any consonant cluster from the start of the word to the end of the word; when words begin on a vowel, you simply add "-yay". Vowels are "aeiou".

Write a function pigLatinWord that takes in a word string and translates the word into Pig Latin. For this problem use the String#slice method. The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

Hint: Remember the String#includes method!

```js
function pigLatinWord(word) {
  const VOWEL = "aeiou";
  if (VOWEL.indexOf(word[0]) > -1) return word + "yay";
  for (var i = 0; i < word.length; i++) {
    if (VOWEL.indexOf(word[i]) > -1) {
      return word.slice(i) + word.slice(0, i) + "ay";
    }
  }
}
```

---

## **Least Common Multiple**

Write a function leastCommonMultiple(num1, num2) that accepts two numbers as arguments. The functions should return the smallest number that is divisible by both num1 and num2.

**Normal Solution**

```js
function leastCommonMultiple(num1, num2) {
  let upperBound = num1 * num2;
  let lowerBound = Math.max(num1, num2);
  for (var i = lowerBound; i <= upperBound; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      return i;
    }
  }
}
```

**GCD Recursive Solution**

```js
function lcm(num1, num2) {
  return (num1 * num2) / gcd(num1, num2);
}

var gcd = function (a, b) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
};
```

---
