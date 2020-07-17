# **Problems and Solutions**

## **Is Five**

Define a function isFive that will return true if a number is equal to 5 and false if it is not.

```js
function isFive(num) {
	return num === 5 ? true : false;
}
```

---

## **Whisper Recall**

Write a function whisper that takes in a string and returns a "whispered" version of that string.

HINT: try using the .toLowerCase() function on a string to see what it does!

```js
function whisper(str) {
  return "..." + str.toLowerCase() + "..."
}
```

---

## **Is Odd**

Write a function isOdd that takes in a number as an argument and returns true if the number is odd and returns false otherwise.

Write two versions of this function, using conditionals and without using conditionals.

```js
function isOdd(num) {
 return Math.abs(num) % 2 === 1 ? true : false;
}

function isOdd2(num) {
 if (Math.abs(num) % 2 === 1) {
   return true;
 } else {
   return false;
 }
}
```

---

## **Log Between**

Define a function logBetween(lowNum, highNum) that will print every number from lowNum to highNum, inclusive. Inclusive means that the range includes lowNum and highNum.

Hint: this function only needs to print using console.log it does not need to return.

```js
function logBetween (min, max) {
  for (var i = min; i <= max; i++) {
    console.log(i);
  }
}
```

---

## **Average of Four Recall**

Write a function averageOfFour(num1, num2, num3, num4) that takes in four numbers.
The function should return the average of all of the numbers.

```js
function averageOfFour (num1, num2, num3, num4) {
  let arr = [num1, num2, num3, num4];
  return arr.reduce((a,b) => (a+b)) / arr.length;
}
```

---

## **Print Fives**

Write a function printFives(max) that prints out the multiples of 5 that are less than max.
Try to solve this in two ways, using a conditional (if) and without using a conditional.

```js
function printFives(max) {
  for (var i = 0; i < max; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}

function printFives2(max) {
  for (var i = 0; i < max; i+= 5) {
    console.log(i);
  }
}
```

---

## **Log Between Stepper**

Write a function logBetweenStepper(min, max, step) that takes in 3 numbers as parameters. The function should print out numbers between min and max at step intervals. See the following examples.

Hint: this function only needs to print using console.log it does not need to return.

```js
function logBetweenStepper(min, max, step) {
  for (var i = min; i <= max; i+=step) {
    console.log(i);
  }
}
```

---

## **Three or Seven**

Write a function threeOrSeven that takes in a number and returns true if the number is divisible by either 3 or 7 and false otherwise.

Write two versions of this function, using conditionals and without using conditionals.

```js
function threeOrSeven(num) {
  return (num % 3 === 0 || num % 7 === 0) ? true : false;
}
```

---

## **Sum Array**

Write a function sumArray(array) that takes in an array of numbers and returns the total sum of all the numbers.

```js
function sumArray(array) {
    return array.reduce((a,b) => (a+b));
}
```

---

## **Add Arrays**

Write a function combineArray(array1, array2) that takes in two arrays of numbers and returns the two arrays combined into a single array.

Hint: Use the Array#concat method but be aware that calling this method won't permanently change, also known as mutate, either array.

```js
function combineArray(array1, array2) {
    return array1.concat(array2);
}
```

---

## **Doubler**

Write a function doubler(numbers) that takes an array of numbers and returns a new array
where every element of the original array is multiplied by 2.

```js
function doubler(numbers) {
  let result = [];
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2);
  }
  return result;
}
```

---

## **Vowel Counter**

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
};
```

---

## **Is Substring**

So far you've learned how to write your own loops but there are some methods that will iterate for you. One such method is the String#indexOf() method.

Write a function isSubstring that takes in two strings, searchString and subString. The function should return true if subString is a part of thesearchString, regardless of upper or lower case, and false if otherwise.

```js
function isSubstring(searchString, subString) {
  let lower = searchString.toLowerCase();
  return (lower.indexOf(subString) > -1 ) ? true : false;
}
```

---

## **Fizz Buzz**

Define a function fizzBuzz(max) that takes a number and prints
every number from 0 to max that is divisible by either 3 or 5, but not
both.

```js
function fizzBuzz(max) {
  for (var i = 0; i < max; i ++) {
    if (i % 3 === 0 && i % 5 === 0) {
      continue;
    } else if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
    }
  }
}
```

---

## **Array Index Of**

So far you've learned how to write your own loops but there are some methods that will iterate for you. One such method is the Array#indexOf() method. The indexOf() method returns the first index that it finds for the element given, or -1 if the element is not found.

Write a function named wordWithinArray(array,word) using Array#indexOf. The function takes in both a word and an array of words as arguments and returns a boolean that returns true if that string is located inside of the array, or false if it does not.

```js
function wordWithinArray(array, word) {
  return (array.indexOf(word) > -1) ? true : false;
}
```

---

## **Echo Recall**

Write a function echo that takes in a string and console.logs that string "echo-ized".

```js
function echo(string) {
  console.log string.toUpperCase() + " ... " + string + " ... " + string.toLowerCase();
}
```

---

## **String Included**

Write a function named eitherStringIncluded(sentence, word1, word2) that accepts a sentence and two words as arguments. The eitherStringIncluded function should return true if either word1 or word2 is found in the sentence, and false if neither is found.
Hint: the String#includes method will return true or false if a given string is included in another string.

```js
function eitherStringIncluded(sentence, word1, word2) {
  return (sentence.includes(word1) || sentence.includes(word2)) ? true : false;
}
```

---

## **Pig Latin**

Pig Latin is a fun take on the English language where you move any consonant cluster from the start of the word to the end of the word; when words begin on a vowel, you simply add "-yay". Vowels are "aeiou".

Write a function pigLatinWord that takes in a word string and translates the word into Pig Latin. For this problem use the String#slice method. The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

Hint: Remember the String#includes method!

```js
function pigLatinWord(word) {
  const VOWEL = "aeiou";
  if (VOWEL.indexOf(word[0]) > -1) {
    return word + "yay";
  } else {
    for (var i = 0; i < word.length; i++) {
      if (VOWEL.indexOf(word[i]) > -1) {
        return word.slice(i) + word.slice(0,i) + "ay";
      }
    }
  }
}
```

---

## **For Loop Translation**

The following function is named aCounter(word). The function takes in a word and returns the number of a's within that word. The function counts both lowercase (a) and uppercase (A). Your job is to translate the following function to use a for loop instead of the while loop it is currently using. If you forget the syntax for a for loop go back and check out the reading.

```js
function aCounter(word) {
  let index = 0;
  let count = 0;
  while (index < word.length) {
    let char = word[index];
    if (char === "a" || char === "A") {
      count += 1;
    }
    index++;
  }
  return count;
}

function aCounter(word) {
  word = word.toLowerCase();
  let count = 0;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === "a") {
      count ++;
    }
  }
  return count;
}
```

---

## **Is Prime**

Define a function isPrime(number) that returns true if number is prime. Otherwise, false. A number is prime if it is only divisible by 1 and itself.

```js
function isPrime(number) {
  let array = [];
  for (var i = 0; i <= number; i++) {
    if (number % i === 0) {
      array.push(i);
    }
  }
  return (array.length === 2) ? true : false;
}
```

---

## **While Loop Translation**

The following function is named eCounter(word). The function takes in a string word and returns the number of e's in the word. The function counts both lowercase (e) and uppercase (E). Your job is to translate the following function to use a while loop instead of a for loop! If you forget the syntax for a while loop go back and check out the reading.

```jss
function eCounter(word) {
  word = word.toLowerCase();
  let i = 0
  let counter = 0;
  while (i <= word.length - 1) {
    if (word[i] === "e") {
      counter ++;
    }
    i++;
  }
  return counter;
}
```

---
