# **Flashcards**

## **Node JS**

**1. Name two objects that are available in browser runtimes but not in NodeJS.**

- Common answers include `window`, `document`, and `location`.

**2. The "global object" in the Node runtime can be referenced with the name `global`. What name can be used in browser runtimes to reference the "global object"?**

- `window`

**3. The 'fs' module contains synchronous and asynchronous versions of many of its methods. Why might one prefer to use the asynchronous versions of these methods?**

- Operations on our file system can take some time because data from our hard drive must be read or written. Performing these operations asynchronously prevents the single thread of our JavaScript program from being blocked during these operations.

**4. What is the name of the node module that allows us to perform operations on our local file system?**

- fs

**5. What is the name of the node module that allows us to take user input?**

- readline

**6. What site should be used as a documentation reference for JavaScript in browser runtimes?**

- MDN, Mozilla Developer Network (https://developer.mozilla.org/en-US/docs/Web/JavaScript)

**7. What site should be used as a documentation reference for JavaScript in the Node runtime?**

- NodeJS.org (https://nodejs.org/api/)

---

## **Git Reset**

**1. git reset --hard <commit hash>**

- - Moves HEAD ref to <commit hash>

* Discards all code changes after <commit hash>!

* DANGEROUS! Use with caution.

**2. git reset --soft <commit hash>**

- - Resets HEAD ref to <commit hash>

* Leaves changes in the staging area

**3. git reset <commit hash>**

- Same as `git reset --mixed <commit hash>`

- Moves HEAD ref to <commit hash>

- Changes moved to working directory; must be re-`git add`ed.

**4. git reset HEAD myfile.js**

- Removes myFile.js from the staging area

---
