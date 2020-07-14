# **Notes**

## **Function Expressions**

We want to further our thinking of functions as expressions that can be stored in variables - just like other data types!

---

## **Functions as first-class objects**

- **First-class objects** : a fancy term that indicates we can treat functions as "normal" values which can be stored inside variables.

  ```
  let calculateAverage = function(a,b) {
    return (a + b) / 2;
  };

  console.log(calculateAverage(10, 20)); // 15
  ```

  - Now we can call the function by simply stating the variable name.
  - Note one of the major differences is that we do not write the name of the function after the function keyword.
  - This is called **Function Expression** vs **Function Declaration**
  - (**Extra Info**) We typically choose Function Decalarations if we'd like to use our functions globally, whereas Expressions would be preferable if you'd like to keep your global scope light and maintain clean syntax.

- Function Expressions are labeled as Expresssions b/c when we assign expressions to variables such as:
  ```
  let myNum = 4 + 4;
  console.log(myNum); // 8
  ```
- The expression evaluates to a single value, our Function Expressions evaluates in the same way.
- We can further illustrate how the function is truly stored as a variable when we call the name of the function without paramaters.

  ```
  let myFunc = function() {
      console.log("Hello");
  }

  console.log(myFunc); // => prints [Function: myFunc]
  ```

- **Anonymous Function** : Term used to describe a function expression before it is assigned to any variable.

---

## **Two Dimensional Arrays**

**Multidimensional Arrays**

When we store arrays as elements of other arrays we call them **multidimensional arrays**

```
let twoDArray = [
[1,2,3],
[4,5,6]
];

console.log(twoDArray[1]); // [1,2,3]
console.log(twoDArray[1][0]); // 1
```

- We can simply add a second pair of brackets to directly access the data inside a nested array with a given index.

**Iterating through 2D Arrays**

- In order to access and iterate 2D Arrays, we can use a **double for loop**.

  ```
  let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  for (var i = 0; i < array.length; i++) {
    let subArr = array[i];
    for (var j = 0; j < subArr.length; j++) {};
  }
  ```

- Convention is to denote j after i, k after j, etc.. when choosing a letter for index. (Careful to not repeat them within your functions, it will mess everything up!)
- To break down what is happening in a double for loop,here is a helpful illustration:
  ![pic of double for loop](https://cdn.discordapp.com/attachments/222504021074640898/732723364111581245/image0.jpg)

---

**When is a 2D array practical?**

- Just keep in mind 2D arrays will be very useful for "grids"
- Think: Tic-Tac-Toe, Chess, Sudoku, Excel

---

## **Mutability**

**Mutability** : The ability to change. (mutable and immutable)

_When we refer to mutability in JS we are looking to see which methods will modify existing data and which methods do not._

**What is mutability?**
One way in which Strings and Arrays differ, is that String data is immutable.

```
let myArr = ["b", "e", "a", "m"];
myArr[0] = "s";
console.log(myArr); // 'seam'

let myStr = "beam";
myStr[0] = "s";
console.log(myStr); // 'beam'
```

- There are some arrray methods that will manipulate array data, but there are **ZERO** methods that will manipulate strings.

```
let word = "piñata";
let newWord = word.toUpperCase();
console.log(word); // 'piñata'
console.log(newWord); // 'PIÑATA'
```

- The .toUpperCase() method is not actually altering the original string data.

**Mutable or Immutable, that is the Question**

| Mutable | Immutable |
| ------- | --------- |
| Array   | Number    |
| Object  | String    |
|         | Boolean   |

- Quick rule of thumb here it remember data types that can store **multiple values** are mutable, **singular value** data types are immutable!

**The mutability misconception**

```
let myNum = 42;
myNum += 8;
console.log(myNum); //59
```

- Our number data is not actually being changed, we are simply re-assigning our variable with a new number because myNum += 8 => myNum = myNum + 8.

---

## **Array Splice Method**

**What can Array.splice do?**

- This method will mutate our array, not return a new array.
- It is used to remove and insert elements into an array.
- array.splice(starting index, # of items to remove, element to replace slice)

```
let colors = ["red", "yellow", "blue", "green", "orange", "brown", "gray"];
let returnVal = colors.splice(2, 3);

console.log(colors); // [ 'red', 'yellow', 'brown', 'gray' ]
console.log(returnVal); // [ 'blue', 'green', 'orange' ]
```

- If we only populate the first two parameters, we simply just 'slice' out a portion of our array.
- If we assign a variable to our slice method we can store the 'sliced' out data.

**Using splice to insert**

```
let colors = ["red", "yellow", "blue"];
let returnVal = colors.splice(1, 1, "RebeccaPurple", "CornflowerBlue");

console.log(colors); // [ 'red', 'RebeccaPurple', 'CornflowerBlue', 'blue' ]
console.log(returnVal); // []
```

- As you can see, by adding beyond the first two arguments, we can add new elements into the area we intially removed data.

---

## **Split and Join Methods**

**String.split**

Method that can be called on a string and uses a "separator" string as an argument.

```
let sentence = "follow the yellow brick road";

console.log(sentence.split(" ")); // [ 'follow', 'the', 'yellow', 'brick', 'road' ]

console.log(sentence.split("the")); // [ 'follow ', ' yellow brick road' ]

console.log(sentence.split("o")); // [ 'f', 'll', 'w the yell', 'w brick r', 'ad' ]
```

- The argument for this method indicates what character(s) to split our string on. In the above example you can see our string being split on spaces, "the", and "o".
- Pro Tip: Good for removing certain repeated words from data.

**Array.join**

Method that can be called on an array and uses a "joiner" string as as argument.

```
let words = ["run", "around", "the", "block"];
let sentence = words.join(" ");
console.log(sentence); // 'run around the block'
console.log(words); // [ 'run', 'around', 'the', 'block' ]

console.log(words.join("_")); // 'run_around_the_block'
console.log(words.join("HI")); // 'runHIaroundHItheHIblock'
```

- Works same aay as string.split but we are joining our array on an argument. (FYI this method **does not** mutate original array data!)

**Clever Combination**

We can combine these two methods to accomplish cool behavior! (will be really useful for future problem solving by changing strings to arrays and back)

```
let str = "I don't know what I want to eat";
let newStr = str.split("I").join("we");
console.log(newStr); // 'we don't know what we want to eat'
```

---
