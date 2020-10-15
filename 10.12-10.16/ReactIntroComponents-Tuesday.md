# **Notes**

## **Introduction to React**

- Simply a nice library that turns data into DOM.
- **`Tree Diffing`** : Fast comparison and patching of data by comparing the current virtual DOM and new virtual DOM - updating only the pieces that change.
- `It's just a tree with some fancy diffing`

---

## **Create Element**

**From JavaScript To DOM**

- The `React.createElement` function has the following form:

```js
React.createElement(type, [props], [...children]);
```

- **`Type`** : Type of element to create, i.e. a string for an HTML element or a reference to a function or class that is a React component.
- **`Props`** : Object that contains data to render the element.
- **`Children`** : Children of the elemet, as many as you want.

**Creating elements**

- Our rendering goal:

```html
<ul>
  <li class="selected">
    <a href="/pets">Pets</a>
  </li>
  <li>
    <a href="/owners">Owners</a>
  </li>
</ul>
```

- There are five tags to create:

  - One `ul`
  - Two `li`
  - Two `a`

- There are certain attributes we want to appear in the DOM for these tags as well:

  - Each `li` has a `class` (or `className` in React)
  - Both `a` ele's have `href` attributes

- Also keep in mind the parent child relationships happening between the tags.
  - `ul` is the parent of both `li`
  - Each `li` has an `a` element as a child
  - Each `a` has a `text content` child

![pic](https://gyazo.com/8c9a121612c806360941d693b085b3b1)

```js
React.createElement(
  "ul",
  null,
  React.createElement(
    "li",
    { className: "selected" },
    React.createElement("a", { href: "/pets" }, "Pets")
  ),
  React.createElement(
    "li",
    null,
    React.createElement("a", { href: "/owners" }, "Owners")
  )
);
```

**Converting to virtual DOM**

- After you set up your `React.createElement`, you use `React.render` to take the value returned from cE and a DOM node to insert into the conversion of the real DOM.

```js
// Put the element tree in a variable
const navList = React.createElement(
  "ul",
  null,
  React.createElement(
    "li",
    { className: "selected" },
    React.createElement("a", { href: "/pets" }, "Pets")
  ),
  React.createElement(
    "li",
    null,
    React.createElement("a", { href: "/owners" }, "Owners")
  )
);

// Get a DOM node for React to render to
const mainElement = document.querySelector("main");

// Give React the element tree and the target
ReactDOM.render(navList, mainElement);
```

- JS Code => Virtual DOM => Real Dom

**Updates**

- If you call React.render a second or multiple times it just checks the existing Virtual DOM and it knows which smaller areas to change.

---
