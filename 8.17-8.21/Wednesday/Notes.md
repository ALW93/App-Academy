# **Notes**

## **Modern Promises with Async and Await**

```js
function walkTheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("happy dog");
    }, 1000);
  });
}

function doChores() {
  console.log("before walking the dog");
  walkTheDog().then((res) => {
    console.log(res);
    console.log("after walking the dog");
  });
  return "done";
}

console.log(doChores());
```

> Classic example of promise handling using two functions.
