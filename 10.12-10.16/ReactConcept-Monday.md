# **Notes**

## **Front-End History**

- React makes it easier for you to make front-end elements.

**A front-end timeline**

- Some noteworthy front end libraries that have been used in the past few years:

  - 2005: Script.aculo.us
  - 2005: Dojo
  - 2006: YUI
  - 2010: Knockout
  - 2011: AngularJS
  - 2012: Elm
  - 2013: React (Considered the standard front-end library)

- **React** manages the creation and updating of DOM nodes in your Web page.

  - All it does is dynamically render stuff into your DOM.
  - What it doesn't do:
    - Ajax
    - Services
    - Local Storage
    - Provide a CSS framework

- **React** is unopinionated

  - Just contains a few rules for developers to follow, and it just works.

- **JSX** : Javascript Extension is a language invented to help write React Applications (looks like a mixture of JS and HTML)

- Here is an overview of the difference between rendering out vanilla JS to create elements, and JSX:

```js
fetch("https://example.com/api/people")
  .then((response) => response.json())
  .then((people) => {
    const html = "<ul>";
    for (let person of data.people) {
      html += `<li>${person.lastName}, ${person.firstName}</li>`;
    }
    html += "</ul>";
    document.querySelector("#people-list").innerHTML = html;
  });
```

```jsx
function PeopleList(props) {
  return (
    <ul>
      $
      {props.people.map((person) => (
        <li>
          {person.lastName}, {person.firstName}
        </li>
      ))}
    </ul>
  );
}

const peopleListElement = document.querySelector("#people-list");
fetch("https://example.com/api/people")
  .then((response) => response.json())
  .then((people) => {
    const props = { people };
    ReactDOM.render(<PeopleList props={props} />, peopleListElement);
  });
```

- This may seem like a lot of code but when you end up building many components, it becomes nice to put each of those functions/classes into their own files to organize your code.

**Using tools with React**

- **`React DevTools`** : New tool in your browser to see ow React is working in the browser
- **`create-react-app`** : Extensible command-line tool to help generate standard React applications.
- **`Webpack`** : In between tool for dealing with the extra build step involved.

![pic](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/react-redux/topics/intro-to-react/assets/webpack.png)

- **HMR** : (Hot Module Replacement) When you make changes to your source code the changes are delivered in real-time.

- React Developers created something called `Flux Architecture` to moderate how their web page consumes and modifies data received from back-end API's.

![fluxarch](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/react-redux/topics/intro-to-react/assets/flux-architecture.png)

**Choosing React**

- Basically, React is super important to learn and master.

---

## **React Concepts and Features**

There are many benefits to using React over just Vanilla JS.

- **`Modularity`**

  - To avoid the mess of many event listeners and template strings, React gives you the benefit of a lot of modularity.

- **`Easy to start`**

  - No specials tools are needed to use Basic React.
  - You can start working directly with **`createElement`** method in React.

- **`Declarative Programming`**

  - React is declarative in nature, utilizing either it's build in createElement method or the higher-level language known as JSX.

- **`Reusability`**
  - Create elements that can be re-used over and over.

**One-flow of data**

- React apps are built as a combination of parent and child components.

  - Parents can have one or more child components, all children have parents.
  - Data is never passed from child to the parent.

- **`Virtual DOM`** : React provides a Virtual DOM that acts as an agent between the real DOM and the developer to help debug, maintain, and provide general use.
  - Due to this usage, React handles web pages much more intelligently; making it one of the speediest Front End Libraries available.

---

## **ES6 Refresher**

**Exporting one item per file**

- Use `export default` statement in ES6 to export an item.

**ES6**

```js
export default class Wallet {
  // ...
}

// sayHello will not be exported
function sayHello() {
  console.log("Hello!");
}
```

**CommonJS** (Equivalent)

```js
class Wallet {
  // ...
}

// sayHello will not be exported
function sayHello() {
  console.log("Hello!");
}

module.exports = Wallet;
```

**Exporting multiple items per file**

- Use just thw `export` keyword (without default) to export multiple items per file.

**ES6** (Better to export them individually like this, rather than bunching them all into an object)

```js
export class Wallet {
  // ...
}

export function sayHello() {
  console.log("Hello!");
}

export const sayHi = () => {
  console.log("Hi!");
};

class Wallet {
  // ...
}

function sayHello() {
  console.log("Hello!");
}

const sayHi = () => {
  console.log("Hi!");
};

export { Wallet, sayHello, sayHi };
```

**CommonJS** (Equivalent)

```js
class Wallet {
  // ...
}

function sayHello() {
  console.log("Hello!");
}

const sayHi = () => {
  console.log("Hi!");
};

module.exports = {
  Wallet,
  sayHello,
  sayHi,
};
```

**Importing with ES6 vs CommonJS**
![pic](https://i.gyazo.com/c878559d41854ce51a288c50021511c9.png)

- Import statements in ES6 modules must **always** be at the top of the file, because all imports must occur before the rest of the file's code runs.

**ES6**

```js
import { Wallet } from "./wallet";
import * as fs from "fs";

const wallet = new Wallet();
```

**CommonJS**

```js
let { Wallet } = require("./wallet");

const wallet = new Wallet();

let fs = require("fs");
```

**Unnamed default imports**

- You can name unnamed items exported with export default any name when you import them.

```js
// exporting
export default class Wallet {
  // ...
}

// importing
import Money from "wallet.js";

const wallet = new Money();
```

- Just remember if you use `export` instead of `export default` then your import is already named and cannot be renamed.

```js
// exporting
export class Wallet {
  // ...
}
// importing
import { Wallet } from "wallet.js";

const wallet = new Wallet();
```

**Aliasing imports**

- Use as asterisk to import an entire module's contents.
  - Keep in mind you **must** use an **`as`** keyword to refer to it later.

```js
// export
export function sayHello() {
  console.log("Hello!");
}

export const sayHi = () => {
  console.log("Hi!");
};
//import
import * as Greetings from "greetings.js";

Greetings.sayHello(); // Hello!
Greetings.sayHi(); // Hi!
```

- You can also name identically named functions or items from different files.

```js
import { Wallet as W1 } from "./wallet1";
import { Wallet as W2 } from "./wallet2";

const w1 = new W1();
const w2 = new W2();
```

**Browser support for ES6 Modules**

- ES6 Modules can only be used when a JS file is specified as a module.
  `<script type="module" src="./wallet.js"></script>`
- You can get browser support for ES6 modules by adding module into your script tag.

---
