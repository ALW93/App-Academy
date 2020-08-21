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
