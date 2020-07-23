# **Objectives**

## **Callbacks**

Given multiple plausible reasons, identify why functions are called “First Class Objects” in JavaScript.
Given a code snippet containing an anonymous callback, a named callback, and multiple console.logs, predict what will be printed
Write a function that takes in a value and two callbacks. The function should return the result of the callback that is greater.
Write a function, myMap, that takes in an array and a callback as arguments. The function should mimic the behavior of Array#map.
Write a function, myFilter, that takes in an array and a callback as arguments. The function should mimic the behavior of Array#filter.
Write a function, myEvery, that takes in an array and a callback as arguments. The function should mimic the behavior of Array#every.

// 1. Given multiple plausible reasons, identify why functions are called "First Class Objects" in JavaScript.
// Here are some of the reasons:
// A function is an instance of the Object type
// You can store the function in a variable
let negate = function (num) {
return num _ -1;
};
// You can pass the function as a parameter to another function
function player(callback) {
console.log('Lebron');
callback();
}
player(function () {
console.log('Los Angeles');
});
// You can return the function from a function
function sport() {
return (function team() {
return "I'm a returned function"
})
}
let newFunc = sport();
console.log(newFunc())
// 2. Given a code snippet containing an anonymous callback, a named callback, and multiple console.logs, predict what will be printed
function player(callback) {
console.log('Lebron');
callback();
}
function sport() {
console.log('Basketball');
}
const teamInfo = function () {
console.log('Lakers');
sport();
player(sport);
player(function () {
console.log('Los Angeles');
});
console.log('California');
};
teamInfo();
// 3. Write a function that takes in a value and two callbacks. The function should return the result of the callback that is greater.
function greaterValue(value, cb1, cb2) {
// compare cb1 invoked with value to cb2 invoked with value
// return the greater result
let res1 = cb1(value);
let res2 = cb2(value);
if (res1 > res2) {
// if this is false, we move out of if statement
return res1;
}
return res2;
}
let negate = function (num) {
return num _ -1;
};
let addOne = function (num) {
return num + 1;
};
console.log(greaterValue(3, negate, addOne));
console.log(greaterValue(-2, negate, addOne));
// 4. Write a function, myMap, that takes in an array and a callback as arguments. The function should mimic the behavior of Array#map.
function myMap(arr, callback) {
// iterate through the array, perform the cb on each element
// return a new array with those new values
let mapped = [];
for (let i = 0; i < arr.length; i++) {
// remember that map passes three args with each element.
let val = callback(arr[i], i, arr);
mapped.push(val);
}
return mapped;
}
let double = function (num) {
return num _ 2;
};
console.log(myMap([1, 2, 3], double));
// 5. Write a function, myFilter, that takes in an array and a callback as arguments. The function should mimic the behavior of Array#filter.
function myFilter(arr, callback) {
let filtered = [];
for (let i = 0; i < arr.length; i++) {
let element = arr[i];
if (callback(element, i, arr)) {
filtered.push(element);
}
}
return filtered;
}
// 6. Write a function, myEvery, that takes in an array and a callback as arguments. The function should mimic the behavior of Array#every.
function myEvery(arr, callback) {
for (let i = 0; i < arr.length; i++) {
let element = arr[i];
if (callback(element, i, arr) === false) {
return false;
}
}
return true;
}
// Initialize calculation functions to variables to put in array.
let add = function (n1, n2) {
return n1 + n2;
};
let subtract = function (n1, n2) {
return n1 - n2;
};
let multiply = function (n1, n2) {
return n1 _ n2;
};
let divide = function (n1, n2) {
return n1 / n2;
};
let mod = function (n1, n2) {
return n1 % n2;
};
let isDivisible = function (n1, n2) {
if (mod(n1, n2) === 0) {
return true;
}
return false;
};
// Initialize array containing calculation functions
let funcArray = [add, subtract, multiply, divide, mod, isDivisible];
// Initialize function taking two numbers and an array
// of functions as parameters
let calculateAll = function (n1, n2, arrayOfFuncs) {
let ansArray = [];
arrayOfFuncs.forEach(function (callback) {
ansArray.push(callback(n1, n2));
});
return ansArray;
};
// Initialize a function taking two numbers, an array
// of functions, and a users choice of which to call
// as parameters
let calculateChosen = function (n1, n2, arrayOfFuncs, choice) {
return arrayOfFuncs[choice](n1, n2);
};
// Call the function, passing in 10, 2, and an
// array of functions
console.log(calculateAll(10, 2, funcArray));
// Call the function, passing in 10, 2, and the
// users choice of operation
console.log(calculateChosen(10, 2, funcArray, 1));
