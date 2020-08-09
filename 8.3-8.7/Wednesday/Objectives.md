# **Objectives**

**1. Given an HTML page that includes `<button id="increment-count">`I have been clicked `<span id="clicked-count">0</span> times</button>`, write JavaScript that increases the value of the content of span#clicked-count by 1 every time button#increment-count is clicked.**

```js
const clickCounter = () => {
  const button = document.getElementById("increment-count");
  const clickCount = document.getElementById("clicked-count");
  let count = 0;
  button.addEventListener("click", (event) => {
    count++;
    clickCount.innerHTML = count;
  });
};
window.addEventListener("DOMContentLoaded", (event) => {
  clickCounter();
});
```

**2. Given an HTML page that includes `<input type="checkbox" id="on-off"><div id="now-you-see-me">Now you see me</div>`, write JavaScript that sets the display of div#now-you-see-me to "none" when input#on-off is checked and to "block" when input#on-off is not checked.**

```js
const toggle = () => {
  const checkbox = document.getElementById("on-off");
  const message = document.getElementById("now-you-see-me");
  checkbox.addEventListener("click", (event) => {
    if (checkbox.checked) {
      message.style.display = "block";
    } else {
      message.style.display = "none";
    }
  });
};
```

**3. Given an HTML file that includes `<input id="stopper" type="text" placeholder="Quick! Type STOP">`, write JavaScript that will change the background color of the page to cyan five seconds after a page loads unless the field input#stopper contains only the text "STOP".**

```js
const stopPage = () => {
  const input = document.getElementById("stopper");
  if (input.value === "STOP") {
    alert("Phew, you stopped it!");
  } else {
    document.body.style.backgroundColor = "red";
    alert("You died.");
  }
};

window.addEventListener("DOMContentLoaded", (event) => {
  setTimeout(stopPage, 5000);
});
```

**4. Given an HTML page with that includes `<input type=”text” id=”fancypants”>`, write JavaScript that changes the background color of the textbox to #E8F5E9 when the caret is in the textbox and turns it back to its normal color when focus is elsewhere.**

```js
const bgColor = () => {
  const input = document.getElementById("fancypants");
  input.addEventListener("focus", (event) => {
    input.style.backgroundColor = "#E8F5E9";
  });
  input.addEventListener("blur", (event) => {
    input.style.backgroundColor = "white";
  });
};
window.addEventListener("DOMContentLoaded", (event) => {
  bgColor();
});
```

**5 .Given an HTML page that includes a form with two password fields, write JavaScript that subscribes to the forms submission event and cancels it if the values in the two password fields differ.**

```js
const passwordChecker = () => {
  const password = document.getElementById("password");
  const confirm = document.getElementById("confirm-password");
  const form = document.getElementById("signup-form");
  form.addEventListener("submit", (event) => {
    if (password.value === confirm.value) {
      alert("Form Submitted!");
    } else {
      event.preventDefault();
      alert("Passwords must match!");
    }
  });
};

window.addEventListener("DOMContentLoaded", (event) => {
  passwordChecker();
});
```

**6.Given an HTML page that includes a div styled as a square with a red background, write JavaScript that allows a user to drag the square around the screen.**

```js
```

**7. Given an HTML page that has 300 DIVs, create one click event subscription that will print the id of the element clicked on to the console.**

```js
const selectDiv = () => {
  document.body.addEventListener("click", (event) => {
    console.log(event.target.id);
  });
};
window.addEventListener("DOMContentLoaded", selectDiv);
```

**8. Identify the definition of the bubbling principle.**

- When an event happens on an element, it first runs the handlers on it, then on it's parent, then all the way up on other ancestors.

---
