# **Notes**

## **Common Page Events**

- **Events** : When a user interacts with HTML Elements on a website.

**Handling a button click event**

- Typically some functionality occurs when a button is clicked:
  - Displaying new page elements.
  - Changing current elements.
  - Submitting a From
  - Etc.

```js
window.addEventListener("DOMContentLoaded", (event) => {
  const button = document.getElementById("increment-count");
  const count = document.getElementById("clicked-count");
  let clicks = 0;
  button.addEventListener("click", (event) => {
    clicks += 1;
    count.innerHTML = clicks;
  });
});
```

- We grab our two elements: a button, and a count from a span tag.
- We set an event listener on our button variable, so that everytime a click is registered our click count is incremented.
- Every time we click our innerHTML on the count is also updated to reflect the click count.

**Using addEventListener() vs onclick**

- **GlobalEventHandlers.onclick** : Alternative method to using an event listener.
- Differences:
  - EventListener: Can be bound to an event handler, and be called over and over. USE THIS IF YOU CAN.
  - OnClick: Is a property, can be overwritten. Not preferred but might be needed on older browser versions.

**Handling a checkbox check event**

```html
<html>
  <head>
    <script src="script.js">
  </head>
  <body>
    <h1>Pizza Toppings</h1>
    <input type="checkbox" id="on-off">
    <label for="on-off">Extra Cheese</label>
    <div id="now-you-see-me" style="display:none">Add $1.00</div>
  </body>
</html>
```

```js
window.addEventListener("DOMContentLoaded", (event) => {
  const checkbox = document.getElementById("on-off");
  const divShowHide = document.getElementById("now-you-see-me");
  checkbox.addEventListener("click", (event) => {
    if (checkbox.checked) {
      divShowHide.style.display = "block";
    } else {
      divShowHide.style.display = "none";
    }
  });
});
```

- checked is an attribute we of our checkbox element.
- if we had multiple checkboxes on a page, we could use CSS to assign classes to all our checkboxes and re-use them for multiple elements.

```js
window.onload = () => {
  const checkbox = document.getElementById("on-off");
  const divShowHide = document.getElementById("now-you-see-me");
  checkbox.addEventListener("click", (event) => {
    if (checkbox.checked) {
      divShowHide.classList.remove("hide");
      divShowHide.classList.add("show");
    } else {
      divShowHide.classList.remove("show");
      divShowHide.classList.add("hide");
    }
  });
};
```

```css
.show {
  display: block;
}
.hide {
  display: none;
}
```

- We can store our class behavior in CSS and use classList.add/remove to manipulate the behavior of our elements.

**Handling a user input value**

```js
window.addEventListener("DOMContentLoaded", (event) => {
  const stopCyanMadness = () => {
    const inputValue = document.getElementById("stopper").value;
    if (inputValue !== "STOP") {
      document.body.style.backgroundColor = "cyan";
    }
  };
  setTimeout(stopCyanMadness, 5000);
});
```

- After our DOM has loaded, we have a function that:
  - 1. Assigns our input element's value to a variable.
  - 2. Conditional if that value doesn't say STOP, our background will turn cyan.
  - 3. To give our user some time to input the value, we invoke the function with a setTimeout async call, and give them 5 seconds.

---

## **Input Focus and Blur Events**

**Event Handling: Input Focus and Blur**

**Listening for focus and blur events**

- A **focus event** fires when an element receives focus (i.e. user has clicked on an element)
- A **blur event** fires when an element has lost focus (i.e. when a user clicks out of that element)

```js
window.addEventListener("DOMContentLoaded", (event) => {
  const input = document.getElementById("fancypants");

  input.addEventListener("focus", (event) => {
    event.target.style.backgroundColor = "#E8F5E9";
  });
  input.addEventListener("blur", (event) => {
    event.target.style.backgroundColor = "initial";
  });
});
```

- We have to add two separate event listeners here because "focus" and "blur" are two sep. events.

---

## **Form Validation**

**Event Handling: Form Validation**
**Validate passwords before submitting a form**

```html
<html>
  <head>
    <script src="script.js">
  </head>
  <body>
    <form class="form form--signup" id="signup-form">
      <input class="form__field" id="name" type="text" placeholder="Name" style="display:block">
      <input class="form__field" id="email" type="text" placeholder="Email" style="display:block">
      <input class="form__field" id="password" type="text" placeholder="Password" style="display:block">
      <input class="form__field" id="confirm-password" type="text" placeholder="Password" style="display:block">
      <button class="form__submit" id="submit" type="submit">Submit</button>
    </form>
  </body>
</html>
```

```js
window.addEventListener("DOMContentLoaded", (event) => {
  const form = document.getElementById("signup-form");
  const checkPasswordMatch = (event) => {
    const passwordValue = document.getElementById("password").value;
    const passwordConfirmValue = document.getElementById("confirm-password")
      .value;
    if (passwordValue !== passwordConfirmValue) {
      event.preventDefault();
      alert("Passwords must match!");
    } else {
      alert("The form was submitted!");
    }
  };
  form.addEventListener("submit", checkPasswordMatch);
});
```

- **event.preventDefault** : prevents the typical submission behavior.
- We grab the form element b/c we want to add an event listener to it (since our target elements are contained within it).
- We created a function to be used as a callback in our event listener, where we check the values of our elements.

---

## **Drag and Drop API**

- Drag and drop can useful for users such as letting them drag files into a **drop zone**.
  **Basic Drag-and-drop functions**
- Steps for creating a drag and drop:
  - Mark an element as "draggable".
  - Create a **dragstart handler** (occurs when the use clicks the mouse and starts dragging)
  - Create a **drop handler** (occurs when the user releses the mouse click and "drops" the element)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Red Square is a Drag</title>
  <script type="text/javascript">
    const handleDragStart = e => {
      e.target.classList.add('is-being-dragged');
      e.dataTransfer.setData('text/plain', e.target.id);
      e.dataTransfer.dropEffect = 'move';
    };

    const handleDragEnter = e => {
      // Needed so that the "drop" event will fire.
      e.preventDefault();
      e.target.classList.add('is-active-drop-zone');
    };

    const handleDragLeave = e => {
      e.target.classList.remove('is-active-drop-zone');
    };

    const handleDragOver = e => {
      // Needed so that the "drop" event will fire.
      e.preventDefault();
    };

    const handleDrop = e => {
      const id = e.dataTransfer.getData('text/plain');
      const draggedElement = document.getElementById(id);
      draggedElement.draggable = false;
      e.target.appendChild(draggedElement);
    };

    window.addEventListener('DOMContentLoaded', () => {
      document
        .getElementById('red-square')
        .addEventListener('dragstart', handleDragStart);

      const dropZone = document.getElementById('drop-zone');
      dropZone.addEventListener('drop', handleDrop);
      dropZone.addEventListener('dragenter', handleDragEnter);
      dropZone.addEventListener('dragleave', handleDragLeave);
      dropZone.addEventListener('dragover', handleDragOver);
    });
  </script>
  <style>
    #drop-zone {
      align-items: center;
      border: 1px solid #DDD;
      color: #CCC;
      display: flex;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 2em;
      font-weight: bold;
      height: 200px;
      justify-content: center;
      position: absolute;
      right: 0;
      top: 100px;
      width: 200px;
    }

    #red-square {
      background-color: red;
      box-sizing: border-box;
      height: 100px;
      width: 100px;
    }

    .is-being-dragged {
      opacity: 0.5;
      border: 8px dashed white;
    }

    .is-active-drop-zone {
      background-color: blue;
      color:
    }
  </style>
  </style>
</head>
<body>
  <div id="red-square" draggable="true"></div>
  <div id="drop-zone">drop zone</div>
</body>
</html>
```

- First step is to assign the attribute draggable="true" to our red square div.
- Will finish deciphering a step by step for this later.

---

## **Click Events with Targets**

- **event.target** : property we can use to find out which element the event occured on.
- **event.currentTarget** : refers to the element to which the event handler has been attached, such as the parent element of the event.target.

**Use event.target to console.log the ID of a clicked div**

```html
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="example.css" />
    <script type="text/javascript" src="example.js"></script>
  </head>
  <body>
    <div id="div-1" class="box">1</div>
    <div id="div-2" class="box">2</div>
    <div id="div-3" class="box">3</div>
    <div id="div-4" class="box">4</div>
    <div id="div-5" class="box">5</div>
    <div id="div-6" class="box">6</div>
    <div id="div-7" class="box">7</div>
    <div id="div-8" class="box">8</div>
    <div id="div-9" class="box">9</div>
    <div id="div-10" class="box">10</div>
  </body>
</html>
```

```css
.box {
  border: 2px solid gray;
  height: 50px;
  width: 50px;
  margin: 5px;
}
```

```js
window.addEventListener("DOMContentLoaded", (event) => {
  document.body.addEventListener("click", (event) => {
    console.log(event.target.id);
  });
});
```

- We originally had 10 divs, by adding a class via CSS each of our 10 divs are now expressed as bordered boxes on our HTML page.
- When we add an event listener on our entire document's body, whenever we click on one of these boxes we can console.log targeted info about it.

---

## **The Bubbling Principle**

**What is the bubbling princple?**
The Bubble Principle means `that when an event happens on an element, it first runs the handlers on it, then on it's parent, then all the way up on other ancestors.`

```html
<html>
  <body>
    <main>
      <div>
        <p>This is a paragraph in a div in a main in a body in an html</p>
      </div>
    </main>

    <script>
      function handler(e) {
        console.log(e.currentTarget.tagName);
      }
      document.querySelector("main").addEventListener("click", handler);
      document.querySelector("div").addEventListener("click", handler);
      document.querySelector("p").addEventListener("click", handler);
    </script>
  </body>
</html>
```

- Everytime we click the p tag in our html file, our console lots the tag name of all the parents. `P, DIV, MAIN`.
- Think of the succession as bubbles popping, first the innermost bubble popped, then it's parent the div popped, and then the div's parent, the main popped.

**Stopping Event bubble with stopPropogation()**

```js
document.querySelector("video").addEventListener("click", (event) => {
  event.stopPropagation();
  video.play();
});
```

- We can stop annoying side effects of bubbling by using the stopPropogation() method on an event.

**Event Delegation**

- Bubbling is also very helpful, it allows us to make use of **event delegation**.
- **Event Delegation** : Means that we can delegate events to a single element/handler - a parent element that will handle all events on it's children elements.

```js
<ul id="my-list">
  <li>This is list item 1.</li>
  <li>This is list item 2.</li>
  <li>This is list item 3.</li>
  <li>This is list item 4.</li>
  <li>This is list item 5.</li>
</ul>
<script>
  document
    .getElementById('my-list')
    .addEventListener('click', e => {
      console.log(e.target.innerHTML);
      console.log(e.currentTarget.id);
    });
</script>
```

- The output will always print out the ID of the parent but will provide the innerHTML of each list item.

---
