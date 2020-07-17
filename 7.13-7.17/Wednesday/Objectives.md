# **Objectives**

## **Intermediate Functions**

- **Identify that strings are immutable and arrays are mutable**

  - | Mutable | Immutable |
    | ------- | --------- |
    | Array   | Number    |
    | Object  | String    |
    |         | Boolean   |

  - Quick rule of thumb here it remember data types that can store **multiple values** are mutable, **singular value** data types are immutable!

- **Define a function using both function declaration and function expression syntax**

  ```js
  function myPet(cat) {
    return "My pet's name is " + cat + "!";
  }

  let myPet = function (cat) {
    return "My pet's name is " + cat + "!";
  };

  // don't forget the semi-colon after a function expression! :)
  ```

- **Utilize Array#push, #pop, #shift, #unshift to mutate an array**

  ```js
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  array.pop();
  array.shift();

  console.log(array); // [2, 3, 4, 5, 6, 7, 8, 9]

  array.unshift("one", 1.5);
  array.push(9.5, "ten");

  console.log(array); // ['one', 1.5, 2, 3, 4, 5, 6, 7, 8, 9, 9.5, 'ten']
  ```

- **List the arguments that can be used with Array#splice**

  - **Argument One** : Starting Index;
  - **Argument Two** : (Optional) # of elements to remove;
  - **Arguments ...N** : (Optional) elements to insert;

- **Write a function that sums up elements of an array, given an array of numbers as an argument**

  ```js
  let nums = [1, 2, 3, 4, 5];
  function sumNum(arr) {
    let total = 0;
    for (var i = 0; i < nums.length; i++) {
      total += arr[i];
    }
    return total;
  }

  console.log(sumNum(nums)); // 15
  ```

- **Utilize Array#forEach, #map, #filter, #reduce in a function** (Thursday Material)

  - **Array.forEach** : method that executes a provided function once for each array element.

    ```js
    const arr = [1, 2, 3];

    arr.forEach((num) => console.log(num * 2)); // 2, 4, 6
    ```

  - **map** : creates a new array populated with the results of calling a provided function on every element in the calling array.

    ```js
    const arr = ["bob", "susan", "michael"];
    const newArr = arr.map((name) => name + "!!!");
    console.log(newArr); // [ 'bob!!!', 'susan!!!', 'michael!!!' ]
    ```

  - **filter** : creates a new array that passes the test implemented by the provided function.
    ```js
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evens = nums.filter((n) => n % 2 === 0);
    console.log(evens); // [ 2, 4, 6, 8, 10 ]
    ```
  - **reduce** : executes a **reducer** function (that you provide) on each element of the array, resulting in a single output value.
    ```js
    function sumArray(array) {
      return array.reduce((a, b) => a + b);
    }
    console.log(sumArray([5, 6, 4])); // => 15
    console.log(sumArray([7, 3, 9, 11])); // => 30
    ```

* **Define a function that takes in an array of numbers and returns a new array containing only the primes**
  _(Uses Thursday Material: Helper Functions)_

  ```js
  let nums = [1, 3, 42, 14, 21, 30, 11];

    function getPrimes(arr) {
        let result = [];
        for (var i = 0; i < nums.length; i++) {
            if (arr[i] === 1) continue;
            if (isPrime(arr[i])) {
                result.push(arr[i]);

        }
        return result;
    }

    function isPrime(number) {
        for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
        }
        return number > 1;
    }

    console.log(getPrimes(nums)); // 3, 11
  ```

* **Define a function that takes in a 2D array of numbers and returns the total sum of all elements in the array**
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

- **Define a function that takes in an array of elements and returns a 2d array where the subarrays represent unique pairs of elements**

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

- **Define a function that takes in an array of numbers as an argument and returns the smallest value in the array; if the array is empty return null**
  ```js
  function minValue(nums) {
    if (nums.length === 0) return null;
    return Math.min(...nums);
  }
  ```

---
