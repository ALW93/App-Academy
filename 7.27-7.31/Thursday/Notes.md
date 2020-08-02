# **Notes**

## **Recursion Basics**

Recursion is the process of calling a function within itself.

- **`Recurse`** : Proper term to refer specifically to functions that are being called from within themselves.

- **`Base Case`** : Also known as the terminating case, this describes the situation where our data stops recursing.

- **`Recursive Case`** : Situation where the function recurses.

- **`Recursive Step`** : Step taken to get our recursive case closer to our base case.

---

## **Recursion vs Iteration**

- Recursive functions risk placing extra load on a call stack.
- **Stack Overflow** : State where our stack reaches it's limit.
- Two things are required to make a recursive function avoid stack overflow.
  - A base case.
  - A recursive step.
- **Direct Recursion** : Functions directly calling themselves.
- **Indirect Recursion** : Recursive Loops across multiple functions.

**When to Iterate, When to Recur**

- Iterative approaches will break down when our data becomes very complex, or very large.
- One should consider recursion when:
  - Inputs are unpredictable, large, or highly complex.

---
