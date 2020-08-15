# **Notes**

## **Object-Oriented Programming**

**`Encapsulation`**

- Puts the behavior and data together behind methods that hide the specific implementation so that code that uses it doesn't need to worry about the details of it.

**`Inheritance`**

- **`Implementation Inheritance`** : Means that data and methods defined on a parent class are available on objects created from classes that inherit from those parent classes.
- **`Prototypal Inheritance`** : Means that JS uses prototype objects to make its `implementation inheritance` actually work.
- **Parent Class** === **Prototype** === **Super Class** === **Base Class**
- **Inheritance** === **Subtyping**

```js
class MyClass {}

// is the same as
class MyClass extends Object {}
```

- When you declare a class with no explicit parent class, JS will make it a child of Object.

```js
class Charity {}

class Business {
  toString() {
    return "Give us your money.";
  }
}

class Restaurant extends Business {
  toString() {
    return "Eat at Joe's!";
  }
}

class AutoRepairShop extends Business {}

class Retail extends Business {
  toString() {
    return "Buy some stuff!";
  }
}

class ClothingStore extends Retail {}

class PhoneStore extends Retail {
  toString() {
    return "Upgrade your perfectly good phone, now!";
  }
}

console.log(new PhoneStore().toString()); // 'Upgrade your perfectly good phone, now!'
console.log(new ClothingStore().toString()); // 'Buy some stuff!';
console.log(new Restaurant().toString()); // 'Eat at Joe\'s!'
console.log(new AutoRepairShop().toString()); // 'Give us your money.'
console.log(new Charity().toString()); // [object object]
```

**The nuts and bolts of prototypal inheritance**
![pic](https://assets.aaonline.io/Module-JavaScript/oop/find-tostring-v3.png)

- When JavaScript uses a property (or method) from a prototype that it found through prototypal inheritance, then the **this** property points to the original object on which the first call was made.

```js
class Parent {
  constructor() {
    this.name = "PARENT";
  }
  toString() {
    return `My name is ${this.name}`;
  }
}

class Child extends Parent {
  constructor() {
    super();
    this.name = "CHILD";
  }
}

const parent = new Parent();
console.log(parent.toString()); // my name is Parent

const child = new Child();
console.log(child.toString()); // my name is Child
```

**Polymorphism**

- The ability to treat an object as if it were an instance of one of its parent classes.

---

## **The SOLID Principles Explained**

**SOLID** is an anagram for:

- **`The Single-Responsibility Principle`**
- **`The Open-Close Principle`**
- **`The Liskov Substitution Principle`**
- **`The Interface Segregation Principle`**
- **`The Dependency Inversion Principle`**

**`Single-Responsibility Principle`**

> A class should do one thing and do it well

- This principle is about limiting the impact of change.

**`The Liskov Substitution Principle`**
_Subtype Requirement: Let ϕ(x) be a property provable about objects x of type T. Then ϕ(y) should be true for objects y of type S where S is a subtype of T._

> You can substitute child class objects for parent class objects and not cause errors.

**`The Other Three`**

- The remaining three principles are important for languages that have **`static typing`** - which means a variable can have only one kind of thing in it.

- **`Open-Close Principle`**

  - > A class is open for extension and closed for modification.
  - Creating new functionality can happen in child classes, and not the original class.

- **`Interface Segregation Principle`**

  - > Method names should be grouped together into granular collections called "interfaces".

- **`Dependency Inversion Principle`**
  - > Functionality that your class depends on should be provided as parameters to methods rather than using new in the class to create a new instance.

---

## **Controlling Coupling with The Law of Demeter**

- **`Coupling`** : The degree of interdependence between two or more classes.
- The fewer the connections between classes, the less chance there is for the _ripple effect_.
- Here is the formal definition:

  > A method of an object can only invoke the methods (or use the properties) of the following kind of objects:

  - Methods on the object itself.
  - Any of the objects passed in as parameters to the method.
  - Any object created in the method.
  - Any values stores in the instance variables of the object.
  - Any values stored in global variables.

- Law of Demeter is more so of a guideline than a law.
- Easiest way to implement it is to _not us more than one dot_
- You cannot cheat by seperating extra calls onto different lines.

**When to ignore the Law of Demeter**

- When you work with objects that come from code that you didn't create - you will often have to break the LoD.

```js
document
  .getElementById("that-link")
  .addEventListener("click", (e) => e.preventDefault());
```

- This breaks the law but there is way about it because your code needs to know about both elements and you have to use the API provided by the DOM.
- UI's will break LoD because they are not object-oriented programns.

---
