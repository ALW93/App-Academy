# **Notes**

## **Using Custom CRA Templates**

**Using a Custom Template**

`npx create-react-app my-app --template @appacademy/simple`

- App Academy custom template for creating a react app.
- If using the default react create project you can delete the following files:
  - favicon.ico
  - robots.txt
  - logo192.png
  - logo512.png
  - manifest.json
- You can also simplify the `html` file into:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

**Simplifying the src folder**

- Remove:
  App.css
  App.test.js
  logo.svg
  serviceWorker.js
  setupTests.js

- Update the Following Files:

```js
// ./src/App.js

import React from "react";

function App() {
  return <h1>Hello world!</h1>;
}

export default App;
``;
```

```js
// ./src/index.js

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

---

## **React Class Components**

**Class Components**

- You can write React components using ES2015 Classes:
  **Function Component**

```js
// ./src/Message.js

import React from "react";

const Message = (props) => {
  return <div>{props.text}</div>;
};

export default Message;
```

**ES2015 Version**

```js
// ./src/Message.js

import React from "react";

class Message extends React.Component {
  render() {
    return <div>{this.props.text}</div>;
  }
}

export default Message;
```

- We can access props within a `class component` by using `this.props`
- Keep in mind Class Components are used just like function components.

```js
// ./src/index.js

import React from "react";
import ReactDOM from "react-dom";
import Message from "./Message";

ReactDOM.render(
  <React.StrictMode>
    <Message text="Hello world!" />
  </React.StrictMode>,
  document.getElementById("root")
);
```

**Setting and accessing props**

```js
class Message extends React.Component {
  constructor(props) {
    super(props);

    // TODO Initialize state, etc.
  }

  render() {
    return <div>{this.props.text}</div>;
  }
}
```

- If we define a constructor method in our Class Component, we have to define the `super` method with `props` passed through it.
- Side Note: Before React used ES2015 Classes, it used `React.createclass` function, if you ever need to use this antiquated method make sure you install a module called `create-react-class`

**Stateful components**

- One of the major reasons why you would choose to use a **Class Component** over a Function Component is to add and manage local or internal state to your component.

- Second of the major reasons is to be able to use a Class Component's lifecycle methods.

**What is state?**

- Props are data that are provided by the consumer or caller of the component.
  - Not meant to be changed by a component.
- State is data that is **`internal`** to the component.
  - Intended to be updated or mutated.

**When to use state**

- _Only Use State when it is absolutely necessary_
  - If the data never changes, or if it's needed through an entire application use props instead.
- State is more often used when creating components that retrieve data from APIs or render forms.

- **The general rule of thumb**: If a component doesn't need to use state or lifecyle methods, it should be prioritized as a **`function component`**.
- Functional:Stateless || Class:Stateful

**Initializing state**

- Use a class constructor method to initialize `this.state` object.

// Application Entry Point

```js
// ./src/index.js
import React from 'react'
import ReactDOM from 'react-dom';
import RandomQuote from './RandomQuote';

ReactDOM.render(
  <React.StrictMode>
    <RandomQuote />
  </React.StrictMode>
  document.getElementById('root');
)
```

// Class Component: RandomQuote

```js
import React from "react";

class RandomQuote extends React.Component {
  constructor() {
    super();

    const quotes = [
      "May the Force be with you.",
      "There's no place like home.",
      "I'm the king of the world!",
      "My mama always said life was like a box of chocolates.",
      "I'll be back.",
    ];

    this.state = {
      quotes,
      currentQuoteIndex: this.getRandomInt(quotes.length);
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  render() {
    return (
      <div>
        <h2>Random Quote</h2>
        <p>{this.state.quotes[this.state.currentQuoteIndex]}</p>
      </div>
    )
  }
}

export default RandomQuote;
```

**Updating State**

- Let's say we want to update our state with a new quote.
- We can set up event listeners in React similarly to how we did them before.

  ```js
  <button type="button" onClick={this.changeQuote}>
    Change Quote
  </button>
  ```

  - `onClick` is the event listener.
  - `{this.changeQuote}` is the event handler method.

- Our Class Component File should now look like this with the new additions:

```js
import React from "react";

class RandomQuote extends React.Component {
  constructor() {
    super();

    const quotes = [
      "May the Force be with you.",
      "There's no place like home.",
      "I'm the king of the world!",
      "My mama always said life was like a box of chocolates.",
      "I'll be back.",
    ];

    this.state = {
      quotes,
      currentQuoteIndex: this.getRandomInt(quotes.length);
    }
  }

  changeQuote = () => {
    const newIndex = this.getRandomInt(this.state.quotes.length);

    // Setting the 'new state' of currentQuoteIndex state property
    // to newly generated random index #.
    this.setState({
      currentQuoteIndex: newIndex;
    })
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  render() {
    return (
      <div>
        <h2>Random Quote</h2>
        <p>{this.state.quotes[this.state.currentQuoteIndex]}</p>
        <button type="button" onClick={this.changeQuote}>
          Change Quote
        </button>
      </div>
    )
  }
}

export default RandomQuote;
```

**Don't modify state directly**

- It is important to **`never`** modify your state directly!
  - ALWAYS use `this.setState` method to update state.
  - This is because when you only use this.state to re-assign, no re-rendering will occur => leaving our component out of sync.

**Properly updating state from the previous state**

- In our current example, the way we have `changeQuote` set up leaves us with occasionally producing the same index twice in a row.

  - One solution is to design a loop but keep in mind that state updates are handled asynchronously in React (your current value is not guaranteed to be the latest)

- A safe method is to pass an anonymous method to `this.setState` (instead of an object literal)

**Previous**

```js
changeQuote = () => {
    const newIndex = this.getRandomInt(this.state.quotes.length);

    this.setState({
      currentQuoteIndex: newIndex;
    })
  }
```

**Passing w/ Anon Method**

```js
changeQuote = () => {
  this.setState((state, props) => {
    const { quotes, currentQuoteIndex } = state;

    let newIndex = -1;

    do {
      newIndex = this.getRandomInt(quote.length);
    } while (newIndex === currentQuoteIndex);

    return {
      currentQuoteIndex: newIndex,
    };
  });
};
```

**Providing default values for props**

- In our current example, we pass in a static array of predefined quotes in our constructor.
  - The way it is set up right now leaves our list of quotes unchanged after initialization.
  - We can make quotes more dynamic by replacing our static array with a `props` argument passed into `super`.
  ```js
  constructor(props) {
    super(props);
  }
  ```
- We can now move our quotes array to our application entry point and pass it in as a prop.

// Application Entry Point

```js
// ./src/index.js
import React from 'react'
import ReactDOM from 'react-dom';
import RandomQuote from './RandomQuote';

// Re-assign our array here and pass it in as a prop in Render.
const quotes = [
      "May the Force be with you.",
      "There's no place like home.",
      "I'm the king of the world!",
      "My mama always said life was like a box of chocolates.",
      "I'll be back.",
      "This way I can define more quotes",
    ];

ReactDOM.render(
  <React.StrictMode>
    <RandomQuote quotes={quotes}/>
  </React.StrictMode>
  document.getElementById('root');
)
```

- One thing to note about this workaround is that the caller of the component _must_ set the quotes prop or the component will throw an error => so use `defaultProps`!

```js
// At the bottom of RandomQuote.js...
RandomQuote.defaultProps = {
  quotes: [
    "May the Force be with you.",
    "There's no place like home.",
    "I'm the king of the world!",
    "My mama always said life was like a box of chocolates.",
    "I'll be back.",
    "This way I can define more quotes",
  ],
};
```

- A good safety net in case the consumer/caller doesn't provide a value for the quotes array.
  - We can even remove it from our index.js now and an error will not be thrown.

---

## **Handling Events**
