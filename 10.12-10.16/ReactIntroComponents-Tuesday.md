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

**Thinking in Components**

- Components are pieces of reusable front-end pieces.
- Components should be Single Responsibility Principle compliant.

---

## **Create Element**

**`React.createElement Demo`**

- Can import non-local dependencies with `import 'package-link'`

```js
const App = () => React.createElement("h1", null, "Hello, Programmers!");

const target = document.querySelector("main");
const app = React.createElement(App, null);
// Give React the element tree and the target
ReactDOM.render(app, target);
```

- Remember when importing modules from other files you have to denote the file type in the import statement.

**HTML Original**

```html
<section class="clue">
  <h1 class="clue__title">Clue$ 268530</h1>
  <div class="clue__question">
      2009: I dreamed a Dream
  </div>
  <div class="clue__category">
      <<unparsed>>
  </div>
  <div class="clue__amount">
      $800
  </div>
</section>
```

**React Version**

```js
const Clue = () =>
  React.createElement(
    "section",
    { className: "clue" },
    React.createElement("h1", { className: "clue__title" }, "Title"),
    React.createElement("div", { className: "clue__question" }, "?"),
    React.createElement("div", { className: "clue__category" }, "Category"),
    React.createElement("div", { className: "clue__amount" }, "$800")
  );
```

- Because `class` is a reserved keyword in JS, in React we can use `className` to assign a class to an element.
- Remember the data that goes into createElement: element type, data to pass into the element, and then children.
- **`props`** : Properties;
- To handle certain values that are initially undefined, we can use `defaultProps`.

```js
Clue.defaultProps = {
  category: {},
};
```

- You can change in the devTools Network tab the internet speed to check for values that may be undefined to hangle with defaultProps.

- If we fetch multiple pieces of data, we can render many things by using `map`.
- You need to assign a unique key to each of the clues.
  - We need to keep track of them individually so that React can easily refer to a specific one if there is an issue.
    `clue => { key:clue.id, ...clue }`

```js
const App = (props) =>
  React.createElement(
    "h1",
    null,
    props.clues.map((clue) =>
      React.createElement(Clue, { key: clue.id, ...clue })
    )
  );

export default App;
```

- Note: JSX is preferred over React.createElement;

---

## **Notes from Hello Programmer Exercise**

- When you import modules from websites they must have CORs activated.

- These import statements, import `global variables`.
- When we want to move our code into production we need to change the imports into the production minified versions.

```js
import "https://unpkg.com/react@16/umd/react.production.min.js";
import "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js";
```

- While we will never actually be creating full apps with just React.createElement => it is the enginer that is running under the hood!

```js
import "https://unpkg.com/react@16/umd/react.development.js";
import "https://unpkg.com/react-dom@16/umd/react-dom.development.js";

const Links = () =>
  React.createElement(
    "ul",
    { id: "nav-links" },
    React.createElement(
      "li",
      { className: "is-selected" },
      React.createElement("a", { href: "http://appacademy.io" }, "App Academy")
    ),
    React.createElement(
      "li",
      null,
      React.createElement("a", { href: "https://aaonline.io" }, "a/A Open")
    )
  );

// Set up React Element: Type, Imported Data, Child (Child is Text in this Scenario)
// HelloWorld is a function based component
const HelloWorld = () => React.createElement("h1", null, "Hello, Programmers");

const AllTogether = () =>
  React.createElement(
    "div",
    null,
    React.createElement(HelloWorld, null),
    React.createElement(Links, null)
  );

// Target the Element to append new Ele
const target = document.querySelector("main");

// Assign your 'App' to your created Elements
// We are creating an element from the HelloWorld function.
const app = React.createElement(AllTogether, null);

// Render from the Virtual Dom to the Actual Dom
ReactDOM.render(app, target);
```

---

## **Introduction to JSX**

- **`JSX`** : Javascript Extension, a new language created by React developers to have an easier way of interacting with the React API.

**How to use JSX**

- We will use **`babel`** to convert version of modern JS into an older version of JS.
  **React Create Element**

```js
const ExampleComponent = (props) =>
  React.createElement(
    React.Fragment,
    null,
    React.createElement("h1", null, "Hello!"),
    React.createElement("img", { src: "https://via.placeholder.com/150" }),
    React.createElement("a", { href: props.searchUrl }, props.searchText)
  );
```

**JSX Version**

```js
const ExampleComponent = (props) => (
  <React.Fragment>
    <h1>Hello!</h1>
    <img src="https://via.placeholder.com/150" />
    <a href={props.searchUrl}>{props.searchText}</a>
  </React.Fragment>
);
```

- Keep in mind that self closing tags in React must have a `forward slash` to close it.
  ![syn](https://gyazo.com/ede2a5d5791902aad53f82b7b4854b51)

- **Properties and Data**

```js
<img src="https://via.placeholder.com/150" />;
// becomes..
React.createElement("img", { src: "https://via.placeholder.com/150" });
// if we want to pass in data vs just a string literal
<a href={props.searchUrl}>{props.searchText}</a>;
// so it becomes..
React.createElement("a", { href: props.searchUrl }, props.searchText);
// if you want the text search uppercase..
<a href={props.searchUrl}>{props.searchText.toUpperCase()}</a>;
```

- Comments in JSX have the following syntax:

```js
<div>
  <h2>This is JSX</h2>
  {/* This is a comment in JSX */}
</div>
```

- **`Property Names`**:

  - **`checked`** : Attribute of input components such as checkbox or radio, use it to set whether the component is checked or not.
  - **`className`** : Used to specify a CSS class.
  - **`dangerouslySetInnerHTML`** : React's equivalent of innerHTML because it is risky to cross-site scripting attacks.
  - **`htmlFor`** : Because `for` is protected keyword, React elements use this instead.
  - **`onChange`** : Event fired whenever a form field is changed.
  - **`style`** : Accepts a JS object with camelCase properties rather than a CSS string.
  - **`value`** : Supported by Input, Select, and TextArea components; use it to set the value of the component.

- Note: React uses camel-case!!!

**The JSX semicolon gotcha**

```js
function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <div>Welcome to JSX.</div>
    </div>
  );
}
```

**create Element equivalent**

```js
is equivalent to

function App() {
  return (
    React.createElement(
      'div',
      null,
      React.createElement('h1', null, 'Hello!'),
      React.createElement('div', null, 'Welcome to JSX.'),
    )
  );
}
```

- We wrap what want to return in parenthesis so JS doesn't auto add semi-colons after every line and run the code incorrectly.
- Just remember if you decided to use the return keyword in a function to 'return some JSX', then make sure you wrap the JSX in parenthesis.

---

`npx create-react-app my-app`

- Single line used to initiate a React application.
- React has a great toolchain where you can see changes live as you're editing your application.
- React errors will be rendered directly onto the browser window.
- A downside is that it installs a lot of bloat files.
- Examples of React create Element and JSX equivalent

```js
React.createElement(
  "a",
  {
    className: "active",
    href: "https://appacademy.io",
  },
  "App Academy"
);
// JSX Version
<a className="active" href="https://appacademy.io">
  App Academy
</a>;
```

```js
React.createElement(
  OwnerDetails,
  {
    owner: props.data.owner,
    number: props.index + 1,
  },
  props.name
);
// JSX Version
<OwnerDetails owner={props.data.owner} number={props.index + 1}>
  {props.name}
</OwnerDetails>;
```

**More Complex JSX Example**

```js
const BookPanel = (props) => {
  <section className="book" id={`book-${props.id}`}>
    <h1 className="book__title">{props.title}</h1>
    <img src={props.coverUrl} />
    <div className="book__desc">{props.description}</div>
  </section>;
};
```

---
