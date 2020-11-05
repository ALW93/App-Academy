# **Notes**

## **Formatted Strings**

- Remember that in Python `join()` is called on a string with an array/list passed in as the argument.

```py
shopping_list = ['bread','milk','eggs']
print(','.join(shopping_list))
```

- Python has a very powerful formatting engine.
- `format()` is also applied directly to strings.

```py
# Comma Thousands Separator
 print('{:,}'.format(1234567890))
  '1,234,567,890'

# Date and Time
d = datetime.datetime(2020, 7, 4, 12, 15, 58)
print('{:%Y-%m-%d %H:%M:%S}'.format(d))
'2020-07-04 12:15:58'

# Percentage
points = 190
total = 220
print('Correct answers: {:.2%}'.format(points/total))
Correct answers: 86.36%

# Data Tables
width=8
print(' decimal      hex   binary')
print('-'*27)
for num in range(1,16):
    for base in 'dXb':
        print('{0:{width}{base}}'.format(num, base=base, width=width), end=' ')
    print()
```

---

## **Getting Input from the Command Line**

- Python runs synchronously, all programs and processes will stop when listening for a user input.
- The `input` function shows a prompt to a user and waits for them to type 'ENTER'.

---

## **Scripts vs Programs**

- **Programming Script** : A set of code that runs in a linear fashion.
- The largest difference between scripts and programs is the level of complexity and purpose. Programs typically have many UI's.

- Python can be used to display html, css, and JS.
- We will be using Python as an API (Application Programming Interface)

---

## **Structured Data**

- **Sequence** : The most basic data structure in Python where the index determines the order.

  - List
  - Tuple
  - Range

- **Collections** : Unordered data structures, hashable values.

  - Dictionaries
  - Sets

- **Iterable** : Generic name for a sequence or collection; any object that can be iterated through.
  - Can be mutable or immutable.

---

## **Built In Data Types**

- **Lists** are the python equivalent of arrays.

```py
empty_list = []
departments = ['HR','Development','Sales','Finance','IT','Customer Support']

# You can instantiate
specials = list()

# Test if a value is in a list.
print(1 in [1, 2, 3]) #> True
print(4 in [1, 2, 3]) #> False
```

- **Tuples** : Very similar to lists, but they are `immutable`

```py
# Instantiated with parentheses
time_blocks = ('AM','PM')

# Sometimes instantiated without
colors = 'red','blue','green'
numbers = 1, 2, 3

# Tuple() built in can be used to convert other data into a tuple
tuple('abc')        # returns ('a', 'b', 'c')
tuple([1,2,3])      # returns (1, 2, 3)
```

- Think of tuples as constant variables.

- **Ranges** : A list of numbers which can't be changed; often used with `for` loops.
  - Declared using one to three parameters.
  1. **Start** : opt. default 0, first # in sequence.
  2. **Stop** : `required` next number past the last number in the sequence.
  3. **Step** : opt. default 1, difference between each number in the sequence.

```py
range(5)            # [0, 1, 2, 3, 4]
range(1,5)          # [1, 2, 3, 4]
range(0, 25, 5)     # [0, 5, 10, 15, 20]
range(0)            # [ ]
```

```js
for let (i = 0; i < 5; i++)
for let (i = 1; i < 5; i++)
for let (i = 0; i < 25; i+=5)
for let(i = 0; i = 0; i++)
```

- Keep in mind that `stop` is not included in the range.

- **`Dictionaries`** : Mappable collection where a hashable value is used as a key to ref. an object stored in the dictionary.
  - Mutable.

```py
a = {'one':1, 'two':2, 'three':3}
b = dict(one=1, two=2, three=3)
c = dict([('two', 2), ('one', 1), ('three', 3)])
```

> a, b, and c are all equal

- Declared with curly braces of the built in `dict()`

- Benefit of dictionaries in Python is that it doesn't matter how it is defined, if the keys and values are the same the dictionaries are considered equal.

- Use the `in` operator to see if a key exists in a dictionary.

- **Sets** : Unordered collection of distinct objects; objects that **need** to be hashable.

  - Always be unique, duplicate items are auto dropped from the set.
  - **Common Uses**:
    - Removing Duplicates
    - Membership Testing
    - Mathematical Operators: Intersection, Union, Difference, Symmetric Difference.
    - Standard Set is mutable, Python has a immutable version called `frozenset`.

- Sets created by putting comma seperated values inside braces:

```py
school_bag = {'book','paper','pencil','pencil','book','book','book','eraser'}
print(school_bag)

# Also can use set constructor to automatically put it into a set.
letters = set('abracadabra')
print(letters)
```

---

## **Built-In Functions**

**Functions using iterables**

- **filter(function, iterable)** : creates new iterable of the same type which includes each item for which the function returns true.

- **map(function, iterable)** : creates new iterable of the same type which includes the result of calling the function on every item of the iterable.

- **sorted(iterable, key=None, reverse=False)** : creates a new sorted list from the items in the iterable.

  - Output is always a `list`
  - `key`: opt function which coverts and item to a value to be compared.
  - `reverse`: optional boolean.

- **enumerate(iterable, start=0)** : starts with a sequence and converts it to a series of tuples

```py
quarters = ['First', 'Second', 'Third', 'Fourth']
print(enumerate(quarters))
print(enumerate(quarters, start=1))

# (0, 'First'), (1, 'Second'), (2, 'Third'), (3, 'Fourth')
# (1, 'First'), (2, 'Second'), (3, 'Third'), (4, 'Fourth')
```

- **zip(\*iterables)** : creates a zip object filled with tuples that combine 1 to 1 the items in each provided iterable.

**Functions that analyze iterables**

- **len(iterable)** : returns the count of the number of items.

- **max(\*args, key=None)** : returns the largest of two or more arguments.

- **max(iterable, key=None)** : returns the largest item in the iterable.

  - `key` optional function which converts an item to a value to be compared.

- **min** works the same way as `max`

- **sum(iterable)** : used with a list of numbers to generate the total.

  - There is a faster way to concatenate an array of strings into one string, so do not use sum for that.

- **any(iterable)** : returns True if any items in the iterable are true.

- **all(iterable)** : returns True is all items in the iterable are true.

**Working with dictionaries**

- **dir(dictionary)** : returns the list of keys in the dictionary.

**Working with sets**

- **Union** : The pipe | operator or `union(*sets)` function can be used to produce a new set which is a combination of all elements in the provided set.

```py
a = {1, 2, 3}
b = {2, 4, 6}
print(a | b)        # => {1, 2, 3, 4, 6}
```

- **Intersection** : The & operator ca be used to produce a new set of only the elements that appear in all sets.

```py
a = {1, 2, 3}
b = {2, 4, 6}
print(a & b)        # => {2}
```

- **Difference** : The - operator can be used to produce a new set of only the elements that appear in the first set and NOT the others.

- **Symmetric Difference** : The ^ operator can be used to produce a new set of only the elements that appear in exactly one set and not in both.

```py
a = {1, 2, 3}
b = {2, 4, 6}
print(a - b)        # => {1, 3}
print(b - a)        # => {4, 6}
print(a ^ b)        # => {1, 3, 4, 6}
```

---

## **For Statements**

- In python, there is only one for loop.

  - Always Includes:
    - The `for` keyword
    - A variable name
    - The `in` keyword
    - An iterable of some kid
    - A colon
    - On the next line, an indented block of code called the `for` clause.

- You can use `break` and `continue` statements inside for loops as well.

- You can use the range function as the iterable for the `for` loop.

```py
print('My name is')
for i in range(5):
   print('Carlita Cinco (' + str(i) + ')')

total = 0
for num in range(101):
    total += num
print(total)
```

- Looping over a list in Python

```py
for c in ['a', 'b', 'c']:
    print(c)

lst = [0, 1, 2, 3]
for i in lst:
    print(i)
```

- Common technique is to use the len() on a pre-defined list with a for loop to iterate over the indices of the list.

```py
supplies = ['pens', 'staplers', 'flame-throwers', 'binders']
for i in range(len(supplies)):
    print('Index ' + str(i) + ' in supplies is: ' + supplies[i])
```

- You can loop and destructure at the same time.

```py
l = [[1, 2], [3, 4], [5, 6]]
for a, b in l:
    print(a, ', ', b)

# Prints 1, 2
# Prints 3, 4
# Prints 5, 6
```

- You can use `values()` and `keys()` to loop over dictionaries.

```py
spam = {'color': 'red', 'age': 42}
for v in spam.values():
    print(v)

# Prints red
# Prints 42

for k in spam.keys():
    print(k)

# Prints color
# Prints age
```

- For loops can also iterate over both keys and values.

```py
# Getting tuples
for i in spam.items():
    print(i)

# Prints ('color', 'red')
# Prints ('age', 42)


# Destructuring to values
for k, v in spam.items():
    print('Key: ' + k + ' Value: ' + str(v))

# Prints Key: age Value: 42
# Prints Key: color Value: red
```

- Looping over string

```py
for c in "abcdefg":
    print(c)
```

---

## **More On Functions**

- **Variable-length positional arguments** : (\*args)

```py
def add(a, b, *args):
    total = a + b;
    for n in args:
        total += n
    return total

add(1, 2)  # Returns 3

add(2, 3, 4, 5) # Returns 14
```

- **keyword arguments** : (\*kwargs)

```py
def print_names_and_countries(greeting, **kwargs):
    for k, v in kwargs.items():
        print(greeting, k, "from", v)

print_names_and_countries("Hi",
                          Monica="Sweden",
                          Charles="British Virgin Islands",
                          Carlo="Portugal")
# Prints
# Hi Monica from Sweden
# Hi Charles from British Virgin Islands
# Hi Carlo from Portugal
```

- When you order arguments within a function or function call, the args need to occur in a particular order:
  - 1. formal positional args.
  - 2. \*args
  - 3. keyword args with default values
  - 4. \*\*kwargs

```py
def example(arg_1, arg_2, *args, **kwargs):
  pass

def example2(arg_1, arg_2, *args, kw_1="shark", kw_2="blowfish", **kwargs):
  pass
```

---

## **Importing in Python**

- Modules are similar to packages in Node.js
- Come in different types: Built-In, Third-Party, Custom.
- All loaded using `import` statements.

**Terms**

- **module** : Python code in a separate file.
- **package** : Path to a directory that contains modules.
- \***\*init**.py\*\* : Default file for a package.
- **submodule** : Another file in a module's folder.
- **function** : Function in a module.

- A module can be any file but it is usually created by placing a special file `__init__.py` into a folder.
  ![pic](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/python/topics/modules/assets/module-tree.svg)

- Try to avoid importing with wildcards in Python.

- Use multiple lines for clarity when importing.

```py
from urllib.request import (
  HTTPDefaultErrorHandler as ErrorHandler,
  HTTPRedirectHandler as RedirectHandler,
  Request,
  pathname2url,
  url2pathname,
  urlopen,
)
```

---

## **Watching Out for Python 2**

- Python 3 removed `<>` and only uses `!=`

- `format()` was introduced with P3
- All strings in P3 are unicode and encoded.
- `md5` was removed.
- `ConfigParser` was renamed to `configparser`
- `sets` were killed in favor of `set()` class.

- `print` was a statement in P2, but is a function in P3.

---
