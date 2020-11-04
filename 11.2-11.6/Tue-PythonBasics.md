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

## **Variables and Expressions**

- **Duck-Typing** : Programming Style which avoids checking an object's type to figure out what it can do.

  - Duck Typing is the fundamental approach of Python.

- Assignment of a value automatically declares.

```py
a = 7
b = 'Marbles'
print(a)         # => 7
print(b)         # => Marbles
```

- You can chain variable assignments to give multiple var names the same value.
  - Use with caution as this is highly unreadable

```py
count = max = min = 0
print(count)           # => 0
print(max)             # => 0
print(min)             # => 0
```

- The value and type of a variable can be re-assigned at any time.

```js
a = 17
print(a)         # => 17
a = 'seventeen'
print(a)         # => seventeen
```

- `NaN` does not exist in Python, but you can 'create' it like so:
  `print(float("nan"))`

- Python replaces `null` with `none`.
  - `none` is an object and can be directly assigned to a variable.
  - Using none is a convenient way to check to see why an action may not be operating correctly in your program.

---

## **Boolean Data Type**

- One of the biggest benefits of Python is that it reads more like English than JS does.
  ![pic](https://i.gyazo.com/3d9fb881df9245a42024aae4ee38a1c5.png)

```py
# Logical AND
print(True and True)    # => True
print(True and False)   # => False
print(False and False)  # => False

# Logical OR
print(True or True)     # => True
print(True or False)    # => True
print(False or False)   # => False

# Logical NOT
print(not True)             # => False
print(not False and True)   # => True
print(not True or False)    # => False
```

- By default, Python considers an object to be true UNLESS it is one of the following:

  - Constant `None` or `False`
  - Zero of any numeric type.
  - Empty Sequence or Collection.

- `True` and `False` must be capitalized

---

## **Comparison Operators**

- Python uses all the same equality operators as JS.

- In Python, equality operators are processed from left to right.

- Logical operators are processed in this order:

  1. **NOT**
  2. **AND**
  3. **OR**

- Just like in JS, you can use `parentheses` to change the inherent order of operations.

- **Short Circuit** : Stopping a program when a `true` or `false` has been reached.
  ![pic](https://i.gyazo.com/ccbe5511757813a61e3833d13c43fd8b.png)

---

## **Identity vs Equality**

```py
print (2 == '2')    # => False
print (2 is '2')    # => False

print ("2" == '2')    # => True
print ("2" is '2')    # => True

# There is a distinction between the number types.
print (2 == 2.0)    # => True
print (2 is 2.0)    # => False
```

- In the Python community it is better to use `is` and `is not` over `==` or `!=`

---

## **If Statements**

```py
if name == 'Monica':
    print('Hi, Monica.')
```

```py
if name == 'Monica':
    print('Hi, Monica.')
else:
    print('Hello, stranger.')
```

```py
if name == 'Monica':
    print('Hi, Monica.')
elif age < 12:
    print('You are not Monica, kiddo.')
elif age > 2000:
   print('Unlike you, Monica is not an undead, immortal vampire.')
elif age > 100:
   print('You are not Monica, grannie.')
```

- Remember the order of `elif` statements matter.

---

## **While Statements**

```py
spam = 0
while spam < 5:
  print('Hello, world.')
  spam = spam + 1
```

- `Break` statement also exists in Python.

```py
spam = 0
while True:
  print('Hello, world.')
  spam = spam + 1
  if spam >= 5:
    break
```

- As are `continue` statements

```py
spam = 0
while True:
  print('Hello, world.')
  spam = spam + 1
  if spam < 5:
    continue
  break
```

---

## **Try/Except Statements**

- Python equivalent to `try/catch`

```py
a = 321
try:
    print(len(a))
except:
    print('Silently handle error here')

    # Optionally include a correction to the issue
    a = str(a)
    print(len(a)
```

```py
a = '321'
try:
    print(len(a))
except:
    print('Silently handle error here')

    # Optionally include a correction to the issue
    a = str(a)
    print(len(a))
```

- You can name an error to give the output more specificity.

```py
a = 100
b = 0
try:
    c = a / b
except ZeroDivisionError:
    c = None
print(c)
```

- You can also use the `pass` commmand to by pass a certain error.

```py
a = 100
b = 0
try:
    print(a / b)
except ZeroDivisionError:
    pass
```

- The `pass` method won't allow you to bypass every single error so you can chain an exception series like so:

```py
a = 100
# b = "5"
try:
    print(a / b)
except ZeroDivisionError:
    pass
except (TypeError, NameError):
    print("ERROR!")
```

- You can use an `else` statement to end a chain of `except` statements.

```py
# tuple of file names
files = ('one.txt', 'two.txt', 'three.txt')

# simple loop
for filename in files:
    try:
        # open the file in read mode
        f = open(filename, 'r')
    except OSError:
        # handle the case where file does not exist or permission is denied
        print('cannot open file', filename)
    else:
        # do stuff with the file object (f)
        print(filename, 'opened successfully')
        print('found', len(f.readlines()), 'lines')
        f.close()
```

- `finally` is used at the end to clean up all actions under any circumstance.

```py
def divide(x, y):
    try:
        result = x / y
    except ZeroDivisionError:
        print("Cannot divide by zero")
    else:
        print("Result is", result)
    finally:
        print("Finally...")
```

- Using duck typing to check to see if some value is able to use a certain method.

```py
# Try a number - nothing will print out
a = 321
if hasattr(a, '__len__'):
    print(len(a))

# Try a string - the length will print out (4 in this case)
b = "5555"
if hasattr(b, '__len__'):
    print(len(b))
```

---

## **Pass**

- Pass Keyword is required to write the JS equivalent of :

```js
if (true) {
}

while (true) {}
```

```py
if True:
  pass

while True:
  pass
```

---

## **Functions**

- **Function** definition includes:
  - The `def` keyword
  - The name of the function
  - A list of parameters enclosed in parentheses.
  - A colon at the end of the line.
  - One tab indentation for the code to run.

```py
def printCopyright():
    print("Copyright 2020. Me, myself and I. All rights reserved.")
```

- You can use default parameters just like in JS

```py
def greeting(name, saying="Hello"):
    print(saying, name)

greeting("Monica")
# Hello Monica

greeting("Barry", "Hey")
# Hey Barry
```

- Keep in mind, default parameters must always come after regular parameters.

```py
# THIS IS BAD CODE AND WILL NOT RUN
def increment(delta=1, value):
    return delta + value
```

- You can specify arguments by name without destructuring in Python.

```py
def greeting(name, saying="Hello"):
    print(saying, name)

# name has no default value, so just provide the value
# saying has a default value, so use a keyword argument
greeting("Monica", saying="Hi")
```

- The `lambda` keyword is used to create anonymous functions and are supposed to be `one-liners`.

`toUpper = lambda s: s.upper()`

---
