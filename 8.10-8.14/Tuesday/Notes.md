# **Notes**

## **Constructor Functions**

**Defining a constructor function**
_Example of an object using object initialiation_

```js
const fellowshipOfTheRing = {
  title: "The Fellowship of the Ring",
  series: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
};
```

- The above literal is a "Book" object type.
- **`Object Type`** is defined by it's attributes and behaviors.

  - **`Behaviors`** are represented by methods.

- **`Constructor Functions`** : Handle the creation of an object - it's a factory for creating objects of a specific type.
  - There are a few specific things to constructors worth noting:
    - **The name of the constructor function is capitalized**
    - **The Function does not explicityly return a value**
    - **Within the body, the _this_ keyword references the newly created object**

```js
function Book(title, series, author) {
  this.title = title;
  this.series = series;
  this.author = author;
}
```

## **Invoking a constructor function**

- We can invoke a constructor function using the **`new`** keyword.

```js
function Book(title, series, author) {
  this.title = title;
  this.series = series;
  this.author = author;
}

const fellowshipOfTheRing = new Book(
  "The Fellowship of the Ring",
  "The Lord of the Rings",
  "J.R.R. Tolkien"
);

console.log(fellowshipOfTheRing); // Book { title: 'The Fellowship of the Ring', ... }
```

- _Four Things will happen when invoking a constructor function_
  1. A new empty object is created {};
  2. The new obj's **`prototype`** is set to the object referenced by the constructors prototype property.
  3. **`This`** is bound to the new object.
  4. The new object is returned after the constructor function has completed.

**Understanding New Object Instances**

- **`Instance`** : term to describe an objected created from a constructor function.
- Every instance created is a unique object and therefore not equal to each other.

**Using the instanceof operator to check an object's type**

```js
console.log(fellowshipOfTheRing instanceof Book); // true
```

- By using the `instanceof` operator we can verify that an object was created from a certain object type.
  - _The instanceOf operator works by checking to see if the prototype object of the left side of the operator is the same as the prototype object of the right side of the operator._

**Invoking a constructor function without the new keyword**

- If we invoke a constructor function without the **`new`** keyword, we may result in one of two unexpected outcomes:
  1. In **non-strict** mode, this will be bound to the **global object** instead.
  2. In **`strict`** mode, this will become undefined.
     - You can enable strict mode by typing `"use strict"` at the top of your file.

**Defining Sharable Methods**

- _Avoid the temptation to store an object method inside a constructor function, it is inefficient with computer memory usage b/c each object instance would have it's own method definition._

* **`Prototype`** : An object that is delegated to when a reference to an object property or method can't be resolved.

  - Every instance created by a constructor function shares the same prototype.

* **`Object.setPrototypeOf()`** and **`Object.getPrototypeOf()`** are just used to set a prototype of one object to another object; and also the verify a prototype.
  - **`proto`** : aka "dunder proto" is a property used to gain easy access to an object's prototype - it is widely supported by browsers but is considered deprecated.

```js
function Book(title, series, author) {
  this.title = title;
  this.series = series;
  this.author = author;
}

// Any method defined on the `Book.prototype` property
// will be shared across all `Book` instances.
Book.prototype.getInformation = function () {
  return `${this.title} by ${this.author}`;
};

const fellowshipOfTheRing = new Book(
  "The Fellowship of the Ring",
  "The Lord of the Rings",
  "J.R.R. Tolkien"
);

console.log(fellowshipOfTheRing.getInformation());
```

- Every method we define on a constructor function's prototype property will be shared across all instances of that object type.

**The Problem with Arrow Functions**

- We **cannot** use arrow functions when defining methods on a constructor function's prototype property.
  - Arrow functions don't include their own **this** binding; therefore it will not reference the current instance - always stick with the function () keyword.

---

**Putting the Class in Javascript Classes**
In ES2015, JS gained the **`class`** keyword - replacing the need to use only constructor functions & prototypes to mimic classes!

- **`class`** : keyword that gives developers a formal way to create a class definition to specify an object type's attributes and behavior; also used to create objects of that specific type.

**Defining a ES2015 class**

```js
class Book {
  constructor(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;
  }
}
```

- Class names also begin only with capital letters.
