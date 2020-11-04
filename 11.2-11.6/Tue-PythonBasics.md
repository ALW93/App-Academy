# **Notes**

## **Basics**

- **PEP8** : Python Enhancement Proposals, style-guide for Python.

- `print` is the equivalent of `console.log`.

- `#` is used to make comments in your code.

```py
def foo():
    """
    The foo function does many amazing things that you
    should not question. Just accept that it exists and
    use it with caution.
    """
    secretThing()
```

- Python has a built in help function that let's you see a description of the source code without having to navigate to it.

---

## **Numbers**

- Python has three types of numbers:
  - **Integer**
    - Positive and Negative Counting Numbers.
    - No Decimal Point
    - Created by a literal non-decimal pt number or with the `int()` constructor.
    ```py
    print(3)         # => 3
    print(int(19))   # => 19
    print(int())     # => 0
    ```
    > Boolean is a subtype of integer in Python.
  - **Floating Point Number**
    - Decimal Numbers.
    ```py
    print(2.24)      # => 2.24
    print(2.)        # => 2.0
    print(float())   # => 0.0
    print(27e-5)     # => 0.00027
    ```
  - **Complex Numbers**
    - Consist of a real part and imaginary part.
    - The `i` is switched to a `j` in programming.
    ```py
    print(7j)              # => 7j
    print(5.1+7.7j))     # => 5.1+7.7j
    print(complex(3, 5))    # => 3+5j
    print(complex(17))     # => 17+0j
    print(complex())       # => 0j
    ```
- **Type Casting** : The process of converting one number to another.

```py
# Using Float
print(17)               # => 17
print(float(17))        # => 17.0

# Using Int
print(17.0)             # => 17.0
print(int(17.0))        # => 17

# Using Str
print(str(17.0) + ' and ' + str(17))        # => 17.0 and 17
```

- The arithmetic operators are the same between JS and Python, with two additions:

  - "\*\*" : Double asterisk for exponent.
  - "//" : Integer Division.

- > There are no spaces between math operations in Python.

- Integer Division gives the other part of the number from Module; it is a way to do round down numbers replacing `Math.floor()` in JS.

- There are no `++` and `--` in Python, the only shorthand operators are:
- ![pic](https://i.gyazo.com/745b12d4b84304462e53a69d8492c58d.png)

---

## **Strings**

- Python uses both single and double quotes.

- You can escape strings like so `'Jodi asked, "What\'s up, Sam?"'`

- Multiline strings use triple quotes.

```py
print('''My instructions are very long so to make them
more readable in the code I am putting them on
more than one line. I can even include "quotes"
of any kind because they won't get confused with
the end of the string!''')
```

- Use the `len()` function to get the length of a string.

  ```py
  print(len("Spaghetti"))    # => 9
  ```

- Python uses `zero-based indexing`
- Python allows negative indexing (thank god!)

  ```py
  print("Spaghetti"[-1])    # => i
  print("Spaghetti"[-4])    # => e
  ```

- Python let's you use ranges
  ```py
  print("Spaghetti"[1:4])  # => pag
  print("Spaghetti"[4:-1])    # => hett
  print("Spaghetti"[4:4])  # => (empty string)
  ```
  - The end range is exclusive just like `slice` in JS.

```py
# Shortcut to get from the beginning of a string to a certain index.
print("Spaghetti"[:4])  # => Spag
print("Spaghetti"[:-1])    # => Spaghett

# Shortcut to get from a certain index to the end of a string.
print("Spaghetti"[1:])  # => paghetti
print("Spaghetti"[-4:])    # => etti
```

- The `index` string function is the equiv. of `indexOf()` in JS

```py
print("Spaghetti".index("h"))    # => 4
print("Spaghetti".index("t"))    # => 6
```

- The `count` function finds out how many times a substring appears in a string.

```py
print("Spaghetti".count("h"))    # => 1
print("Spaghetti".count("t"))    # => 2
print("Spaghetti".count("s"))    # => 0
print('''We choose to go to the moon in this decade and do the other things,
not because they are easy, but because they are hard, because that goal will
serve to organize and measure the best of our energies and skills, because that
challenge is one that we are willing to accept, one we are unwilling to
postpone, and one which we intend to win, and the others, too.
'''.count('the '))                # => 4
```

- You can use `+` to concatenate strings, just like in JS.

- You can also use "\*" to repeat strings or multiply strings.

- Use the `format()` function to use placeholders in a string to input values later on.

```py
first_name = "Billy"
last_name = "Bob"
print('Your name is {0} {1}'.format(first_name, last_name))  # => Your name is Billy Bob
```

- Shorthand way to use format function is:
  `print(f'Your name is {first_name} {last_name}')`

- Some useful string methods.

  - Note that in JS `join` is used on an Array, in Python it is used on String.
    ![pic](https://i.gyazo.com/ed5094aa444e325b59ec3a11393b60f2.png)

- There are also many handy testing methods.
  ![pic](https://i.gyazo.com/af6244c64c06827fb19ac9cd86a75d17.png)

---
