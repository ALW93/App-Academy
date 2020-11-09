# **Notes**

## **Classes In Python**

- Classes are a way of combining information and behavior.
- Classes are blueprints to make objects.

```js
class AngryBird {
  constructor() {
    this.x = 0;
    this.y = 0;
  }
}
```

```py
class AngryBird:
    def __init__(self):
        """
        Construct a new AngryBird by setting its position to (0, 0).
        """
        self.x = 0
        self.y = 0
```

- Both JS and PY use the `class` keyword to declare classes.
- `constructor` == `__init__`
- `this` == `self`

```py
bird = AngryBird()
print(bird.x, bird.y)  #> 0 0
```

```py
class AngryBird:
    def __init__(self):
        """
        Construct a new AngryBird by setting its position to (0, 0).
        """
        self.x = 0
        self.y = 0

    def move_up_by(self, delta):
        self.y += delta
```

- Note how you do not need to define `self` it is already bound to the class.

- It is good practice to write a comment at the beginning of your class, describing the class.

**Dunder Methods**

- Double Underscore Methods, special built in functions that PY uses in certain ways.
- i.e. `__init__()` lets you make sure all relevant attributes are set to their proper values when an object is created from the class.

- The `self` keyword refers to the current object that you are working with.

- Method is a function that is part of a class.

```py
class AngryBird:
    def __init__(self):
        self.x = 0
        self.y = 0

    def move_up_by(self, delta):
        self.y += delta


bird = AngryBird()
print(bird)
print(bird.y)
bird.move_up_by(5)
print(bird.y)
```

- _Use one leading underscore only for non-public methods and instance variables_

```py
class AngryBird:
    def __init__(self, x=0, y=0):
        """
        Construct a new AngryBird by setting its position to (0, 0).
        """
        self._x = x
        self._y = y

    def move_up_by(self, delta):
        self._y += delta

    def get_x(self):
        return self._x

    def get_y(self):
        return self._y
```

- _All instance variables should be considered non-public_

- \***\*slots\*\*** : Dunder class variable used to reserve memory for the instance variables that you know will you will use.

```py
class AngryBird:
    __slots__ = ['_x', '_y']

    def __init__(self, x=0, y=0):
        """
        Construct a new AngryBird by setting its position to (0, 0).
        """
        self._x = x
        self._y = y

    def move_up_by(self, delta):
        self._y += delta

    def get_x(self):
        return self._x

    def get_y(self):
        return self._y
```

- You can use `__repr__()` to override the behavior of printing out a class in a verbose manner.

```py
class AngryBird:
    __slots__ = ['_x', '_y']

    def __init__(self, x=0, y=0):
        """
        Construct a new AngryBird by setting its position to (0, 0).
        """
        self._x = x
        self._y = y

    def move_up_by(self, delta):
        self._y += delta

    def get_x(self):
        return self._x

    def get_y(self):
        return self._y

    def __repr__(self):
        return f"<AngryBird ({self._x}, {self._y})>"
```

---

## **Properties for Classes**

- Getters and Setters are used in object-oriented programming to add validation logic around getting and setting a value.

**Getters**
```py
bird = AngryBird()

print(bird.get_x(), bird.get_y())
```
- Getting the x and y values of our class can get very cumbersome.
- **Decorators** : Allow us to change the way methods get invoked.
    - Always start with the @ symbol.
    - Can be applied to methods, classes, and parameters.
    - Built in decorator named `property` that you can apply to a method to make it readable.

```py
 @property
    def x(self):
        return self._x

 @property
    def y(self):
        return self._y

 bird = AngryBird()

 print(bird.x, bird.y)
```

**Setters**
```py
class AngryBird:
    def __init__(self, x=0, y=0):
        """
        Construct a new AngryBird by setting its position to (0, 0).
        """
        self._x = x
        self._y = y

    def move_up_by(self, delta):
        self._y += delta

    @property
    def x(self):
        return self._x

    @x.setter
    def x(self, value):
        if value < 0:
            value = 0
        self._x = value

    @property
    def y(self):
        return self._y

    @y.setter
    def y(self, value):
        if value < 0:
            value = 0
        self._y = value
```
---

## **List Comprehensions**
- List comprehensions are the equivalent of wrapped up filter namp array methods while also allowing nested loops.

- `new_list = [expression for member in iterable]`

- **expression** : member itself, a call to a methd, or any other valid expression that returns a value.

- **member** : object or value in the list or iterable.

- **iterable** : iterable.

`new_list = [expression for member in iterable (if conditional)]`

- Adding a conditional into a list comprehension.

```py
sentence = 'Mary, Mary, quite contrary, how does your garden grow?'
def is_consonant(letter):
    vowels = "aeiou"
    return letter.isalpha() and letter.lower() not in vowels

consonants = [i for i in sentence if is_consonant(i)]

print(consonants)
# Prints ['M', 'r', 'y', 'M', 'r', 'y', 'q', 't', 'c',
# 'n', 't', 'r', 'r', 'y', 'h', 'w', 'd', 's', 'y',
# 'r', 'g', 'r', 'd', 'n', 'g', 'r', 'w']
```

**When to not use list comprehensions**
- List comprehensions may make your code run more slowly or use more memory.
- You can use nest lists to create matrices.
```py
matrix = [[i for i in range(5)] for _ in range(6)]

print(matrix)
# Prints
# [
#     [0, 1, 2, 3, 4],
#     [0, 1, 2, 3, 4],
#     [0, 1, 2, 3, 4],
#     [0, 1, 2, 3, 4],
#     [0, 1, 2, 3, 4],
#     [0, 1, 2, 3, 4]
# ]
```
