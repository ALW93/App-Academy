# **Notes**

## **Promises**

When you declare a function normally:

```js
function loudLog(message) {
  console.log(message.toUpperCase());
}
```

- Just declaring it like that does not actually run the function.
- It _does_ create a Function object and stores that in a variable named **loudLoud**.
- **Promises** are wrappers around asychronous code.

```js
readFile("~/Documents/todos.txt", "utf8", function (err, content) {
  console.log("YOUR FILE CONTAINS:");
  console.log(content);
});
```

- Javascript is idiomatic, so if you're only going to call a function once just set it directly into the callback of your readfile in this example.
- To take it up a notch, JS now just wants you to write the callback with an arrow function.

```js
readFile("~/Documents/todos.txt", "utf8", (err, content) => {
  console.log("YOUR FILE CONTAINS:");
  console.log(content);
});
```

- **`Promise`** : a commitment that sometime in the future, your code will get a value from some operation (like reading a file or getting JSON from a Website) or your code will get an error from that operation (like the file doesn't exist or the Web site is down).

  - Promises exist in three states:

  1. **`Pending`** : Promise object has not resolved. Once it does, the state of the Promise object may transition to either the fulfilled or rejected state.
  2. **`Fulfilled`** : Whatever operation the Promise represented succeeded and your success handler will get called. After fulfillment, the Promise:
     - _must not transition to any other state_
     - _must have a value, which must not change_
  3. **`Rejected`** : Whatever operation the Promise represented failed and your error handler will get called. When it is _rejected_:
     - _must not transition to any other state_
     - _must have a reason, which must not change_

- Promise objects use the following methods to go through these stages.
  - **`then`(successHandler, errorHandler)**
  - **`catch`(errorHandler)**

* **`Success Handler`** : function that has one parameter, the value that a fulfilled _promise_ has.

* **`Error Handler`** : funvtion that has one parameter, the reason that the _promise_ failed.

**Handling Success with Then**

```js
readFilePromise("manifest.txt").then((manifest) => {
  const fileList = manifest.split("\n");
  console.log("Reading", fileList.length, "files");
});
```

- Each promise has a then() method that handles what will happen when the Promise comes out fof the **pending** state.
- Each then, returns another Promise that transitions out of it's pending state when the **then** that created it completes.
- You can pass a second argument into the then method as the **error handler**; (essentially saying, if this then does not resolve, then this error handler will do something.)

```js
readFilePromise("manifest.txt")
  .then((manifest) => manifest.split("\n"))
  .then((fileList) => fileList.length)
  .then(
    (numberOfFiles) => console.log("Reading", numberOfFiles, "files"),
    (reason) => console.err("Badness happened", reason)
  );
```

- You can also use a **catch** error handler at the end of your then chain to catch any error that may happen along the way.

```js
readFilePromise("manifest.txt")
  .then((manifest) => manifest.split("\n"))
  .then((fileList) => fileList.length)
  .then((numberOfFiles) => console.log("Reading", numberOfFiles, "files"))
  .catch((reason) => console.err("Badness happened", reason));
```

**Using Promise.all**

- Promise.all is a method that accepts an array of values and returns another Promise object called a **`SUPER PROMISE`**; it converts all non-promise values into Promise objects that are immediately in the fulfilled state.
  - If any of the promises in the array fail, then the whole thing falls to an error.
  - All of the inner promises need to be fulfilled for the super promise to reach a **fulfilled state**.

**Flattening Promises**

```js
readFilePromise("manifest.txt")
  .then((manifestContent) => manifestContent.split("\n"))
  .then((manifestList) => manifestList[0])
  .then((fileName) => readFilePromise(fileName))
  .then((otherFileContent) => console.log(otherFileContent));

// Interpreted as:
// 1. Read the file of the manifest.txt file and pass the
//    content to the first then.
// 2. Split the content from manifest.txt on newline chars
//    to get the full list of files.
// 3. Return just the first entry in the list of files.
// 4. RETURN A PROMISE THAT WILL READ THE FILE NAMED ON THE
//    FIRST LINE OF THE manifest.txt! The next then method
//    doesn't get called until this Promise object completes!
// 5. Get the content of the file just read and print it.
```

- You can pass another promise object inside a promise then chain, and the current then chain will not continue until the promise on the inside is resolved.

---
