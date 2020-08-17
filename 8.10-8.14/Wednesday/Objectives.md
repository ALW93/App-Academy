# **Objectives**

**1. The three pillars of object-oriented programming**

- **`Encapsulation`**
  - Put behavior and the data it works on together in a CLASS.
- **`Inheritance`**
  - JS supports a type of implementation inheritance through a mechnism called prototypal inheritance.
  - `Implementation`: Data and methods defined on a parent class are avail. on objects created from classes that inherit from those parent classes.
  - `Prototypal`: JS uses prototype objects to make its implementation inheritance work not just on classes but on all objects.
- **`Polymorphism`**
  - In OOP, polymorphism means that you can treat a variable as if it were on of its parent types.
    **2. How to apply the Law of Demeter**
- Law of Demeter helps to reduce coupling between components.
- "THE ONE DOT RULE"
- Easiest way to comply with the Law of Demeter is don't use more than one dot.
- A method of an object can only invoke the methods of the following type of objects:
  1. other methods on the object.
  2. any objects passed into parameters.
  3. any objects created in the method.
  4. any values stores in the instance variables.
  5. values in global variables.
