# **Objectives**

**1. Given HTML that includes `<div id=”catch-me-if-you-can”>HI!</div>`, write a JavaScript statement that stores a reference to the HTMLDivElement with the id “catch-me-if-you-can” in a variable named “divOfInterest”.**

```js
const divOfInterest = document.getElementByID("catch-me-if-you-can");
```

**2. Given HTML that includes seven SPAN elements each with the class “cloudy”, write a JavaScript statement that stores a reference to a NodeList filled with references to the seven HTMLSpanElements in a variable named “cloudySpans”.**

```js
const cloudySpans = document.querySelectorAll("span.cloudy");
// OR
const cloudySpans = document.getElementByClassName("cloudy");
```

**3. Given an HTML file with HTML, HEAD, TITLE, and BODY elements, create and reference a JS file that in which the JavaScript will create and attach to the BODY element an H1 element with the id "sleeping-giant" with the content "Jell-O, Burled!".**

```html
<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="header.js"></script>
  </head>
  <body></body>
</html>
```

```js
function addHeader() {
  const header = document.createElement("h1");
  header.setAttribute("id", "sleeping-giant");
  header.appendChild(this.document.createTextNode("Jello-O, Burled!"));
  document.body.appendChild(header);
}
window.addEventListener('DOMContentLoaded', (event) {
    addHeader();
});
```

**4. Given an HTML file with HTML, HEAD, TITLE, SCRIPT, and BODY elements with the SCRIPT's SRC attribute referencing an empty JS file, write a script in the JS file to create a DIV element with the id "lickable-frog" and add it as the last child to the BODY element.**

```html
<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="someFile.js"></script>
  </head>
  <body></body>
</html>
```

```js
function addFrog() {
  const newFrog = document.createElement("div");
  newFrog.setAttribute("lickable-frog");
  document.body.appendChild(newFrog);
}
window.addEventListener("DOMContentLoaded", (event) => {
  addFrog();
});
```

**5. Given an HTML file with HTML, HEAD, TITLE, SCRIPT, and BODY elements with no SRC attribute on the SCRIPT element, write a script in the SCRIPT block to create a UL element with no id, create an LI element with the id "dreamy-eyes", add the LI as a child to the UL element, and add the UL element as the first child of the BODY element.**

```html
<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript">
      window.addEventListener("DOMContentLoaded", (event) => {
        const Ul = document.createElement("ul");
        const Li = document.createElement("li");
        Li.setAttribute("id", "dreamy-eyes");
        Ul.appendChild(Li);
        document.body.appendChild(Ul);
      });
    </script>
  </head>
  <body></body>
</html>
```

**6. Write JavaScript to add the CSS class "i-got-loaded" to the BODY element when the window fires the DOMContentLoaded event.**

```js
window.addEventListener("DOMContentLoaded", (event) => {
  document.body.setAttribute("class", "i-got-loaded");
});
```

**7. Given an HTML file with a UL element with the id "your-best-friend" that has six non-empty LIs as its children, write JavaScript to write the content of each LI to the console.**

```js
function listItems() {
  const ulEle = document.querySelectorAll("your-best-friend");
  const liEle = ulEle.querySelectorAll("li");
  liEle.forEach((ele) => {
    console.log(ele.innerText);
  });
}
window.addEventListener("DOMContentLoaded", (event) => {
  logList();
});
```

**8. Given an HTML file with a UL element with the id "your-worst-enemy" that has no children, write JavaScript to construct a string that contains six LI tags each containing a random number and set the inner HTML property of ul#your-worst-enemy to that string.**

```js
function randomNum(n) {
  return Math.floor(Math.random() * n);
}

function listGen() {
  const newLi = [];
  for (let i = 0; i < 6; i++) {
    newLi.push(`<li>${randomNum(n)}</li>`);
  }
  const ulEle = document.getElementById("your-worst-enemy");
  ulEle.innerHTML = newLi.join("");
}
window.addEventListener("DOMContentLoaded", (event) => {
  listGen();
});
```

**9. Write JavaScript to update the title of the document to the current time at a reasonable interval such that it looks like a real clock.**

```js
function getTime() {
  const now = new Date();
  const hourStr = String(now.getHours());
  const minStr = String(now.getMinutes());
  const secStr = String(now.getSeconds());
  return `${hourStr}:${minStr}:${secStr}`;
}

window.addEventListener("DOMContentLoaded", (event) => {
  const title = document.getElementsByTagName("title")[0];
  title.innerHTML = getTime();

  setInterval(function () {
    title.innerHTML = getTime();
  }, 1000);
});
```

---
