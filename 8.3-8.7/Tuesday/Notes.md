# **Notes**

## **Element Selection Placement 1**

**What is the DOM?**

- The DOM is an object oriented representation of an HTML document or Web Page, meaning that the document is represented as objects or nodes.

![dom](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-DOM-API/element-selection/assets/DOM_tree.png)

> The DOM Hierarchy

**Referncing the DOM**

- **`document.getElementById`** : used to reference a single html element via an id.

  ```js
  <div id="”catch-me-if-you-can”">HI!</div>

  const divOfInterest = document.getElementById(“catch-me-if-you-can”)
  ```

- **`document.querySelectorAll`** : used to reference multiple html elements via a class.

  ```js
  <span class="“cloudy”"></span>
  <span class="“cloudy”"></span>
  <span class="“cloudy”"></span>
  <span class="“cloudy”"></span>
  <span class="“cloudy”"></span>
  <span class="“cloudy”"></span>
  <span class="“cloudy”"></span>

  const cloudySpans = document.querySelectorAll("span.cloudy");
  ```

  - This generates a static **`Node List`**; A Node List is not an array but it is possible to iterate over one using for Each.
  - Static means changes in the DOM do not affect it's contents.

**Creating New DOM Elements**

```js
const addElement = () => {
  // create a new div element
  const newElement = document.createElement("h1");

  // set the h1's id
  newElement.setAttribute("id", "sleeping-giant");

  // and give it some content
  const newContent = document.createTextNode("Jell-O, Burled!");

  // add the text node to the newly created div
  newElement.appendChild(newContent);

  // add the newly created element and its content into the DOM
  document.body.appendChild(newElement);
};
// run script when page is loaded
window.onload = addElement;
```

- We can also use JS to create elements to the HTML page!

---

## **Element Selection Part 2**

**Inserting Elements in JS File and Script Block**

```js
const addElements = () => {
  // create a new div element
  const newElement = document.createElement("h1");

  // set the h1's id
  newElement.setAttribute("id", "sleeping-giant");

  // and give it some content
  const newContent = document.createTextNode("Jell-O, Burled!");

  // add the text node to the newly created div
  newElement.appendChild(newContent);

  // add the newly created element and its content into the DOM
  document.body.appendChild(newElement);

  // append a second element to the DOM after the first one
  const lastElement = document.createElement("div");
  lastElement.setAttribute("id", "lickable-frog");
  document.body.appendChild(lastElement);
};
// run script when page is loaded
window.onload = addElements;
```

**Referencing a JS File vs. Using a Script Block**

- You can also put JS directly into your HTML document by placing it in the script tag

```js
<!DOCTYPE html>
<html>
  <head>
    <title>My Cool Website</title>
    <script type="text/javascript">
      const addListElement = () => {
        const listElement = document.createElement("ul");
        const listItem = document.createElement("li");
        listItem.setAttribute("id", "dreamy-eyes");
        listElement.appendChild(listItem);
        document.body.prepend(listElement);
      };
      window.onload = addListElement;
    </script>
  </head>
  <body></body>
</html>
```

---

## **Element Selection Placement 3**

- We previously used `window.onload` to load functions after our pages loaded to ensure all of our objects are within the DOM.

- JS does not need to wait for Stylesheets, images, and subframes to load before running.

- **`DOMContentLoaded`** : event that fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

```js
window.addEventListener("DOMContentLoaded", (event) => {
  document.body.className = "i-got-loaded";
});
```

- Here we are using DOMContentLoaded to add CSS Classes to page elements immediately after they are loaded.

---

## **Element Selection Placement 4**

**Console Logging Element Values**

```js
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <ul id="your-best-friend">
      <li>Has your back</li>
      <li>Gives you support</li>
      <li>Actively listens to you</li>
      <li>Lends a helping hand</li>
      <li>Cheers you up when you're down</li>
      <li>Celebrates important moments with you</li>
    </ul>
  </body>
</html>

window.addEventListener("DOMContentLoaded", (event) => {
  const parent = document.getElementById("your-best-friend");
  const childNodes = parent.childNodes;
  for (let value of childNodes.values()) {
    console.log(value);
  }
});
```

**Using Element.innerHTML**

```js
<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="example.js"></script>
  </head>
  <body>
    <ul id="your-worst-enemy"></ul>
  </body>
</html>

// generate a random number for each list item
const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

// listen for DOM ready event
window.addEventListener("DOMContentLoaded", event => {
  // push 6 LI elements into an array and join
  const liArr = [];
  for (let i = 0; i < 6; i++) {
    liArr.push("<li>" + getRandomInt(10) + "</li>");
  }
  const liString = liArr.join(" ");

  // insert string into the DOM using innerHTML
  const listElement = document.getElementById("your-worst-enemy");
  listElement.innerHTML = liString;
});
```

**Inserting a Date Object into the DOM**

```js
<title id="title"></title>;

const date = new Date();

window.addEventListener("DOMContentLoaded", (event) => {
  const title = document.getElementById("title");
  const time = () => {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    title.innerHTML = hours + ":" + minutes + ":" + seconds;
  };
  setInterval(time, 1000);
});
```

---
