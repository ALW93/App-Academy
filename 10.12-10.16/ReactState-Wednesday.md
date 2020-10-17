# **Notes**

## **Using Custom CRA Templates**

**Using a Custom Template**

`npx create-react-app my-app --template @appacademy/simple`

- Keep in mind that using `create-react-app` automatically initializes a git repository for you!

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

- To add an event listener to an element, just define a method to handle the event and associate that method with the element event you are listening for.
  **Example**

```js
import React from "react";

class AlertButton extends React.Component {
  showAlert = () => {
    window.alert("Button Clicked!");
  };

  render() {
    return (
      <button type="button" onClick={this.showAlert}>
        Submit
      </button>
    );
  }
}
```

- Note that when refering the handler method in onClick we're not invoking showAlert simply just passing a reference.

**Preventing default behavior**

- HTML Elements in the browser often have a lot of default behavior.

  - I.E. Clicking on an `<a>` element navigates so a resource denoted by `<href>` property.

- Here is an example of where using `e.preventDefault()` could come in handy.

```js
import React from "react";

class NoDefaultSubmitForm extends React.Component {
  submitForm = (e) => {
    e.preventDefault();
    window.alert("Handling form submission...");
  };

  render() {
    return (
    <form onSubmit={this.submitForm}>
      <button>Submit</button>
    </form>;
    )}
}
```

- The button contained within the form will end up refreshing the page before `this.submitForm` method can be completed.
- We can stick an `e.preventDefault()` into the actual method to get around this problem.
- **`e`** : Parameter that references a **`Synthetic Event`** object type.

**Using `this` in event handlers**

```js
// ./src/AlertButton.js

import React from "react";

class AlertButton extends React.Component {
  showAlert = () => {
    window.alert("Button clicked!");
    console.log(this);
  };

  render() {
    return (
      <button type="button" onClick={this.showAlert}>
        Click Me
      </button>
    );
  }
}

export default AlertButton;
```

- When we console log `this` we see the AlertButton object.
- If we were to write the showAlert method with a regular class method like:

```js
showAlert() {
  console.log(this);
}
```

- We would get `undefined` => remember that fat arrow binds to the current context!

**Reviewing class methods and the `this` keyword**

- Let's refresh on binding.

```js
class Boyfriend {
  constructor() {
    this.name = "Momato Riruru";
  }

  displayName() {
    console.log(this.name);
  }
}

const Ming = new Boyfriend();
Ming.displayName(); // => Momato Riruru

const displayAgain = Ming.displayName;
displayAgain(); // => Result in a Type Error: Cannot read property 'name' of undefined.
```

- The first time we use our `displayMethod` call, it is called directly on the instance of the boyfriend class, which is why `Momato Riruru` was printed out.

- The second time it was called, the ref of the method is stored as a variable and method is called on that variable instead of the instance; resulting in a type error (it has lost it's context)

- Remember we can use the **`bind`** method to rebind context!

  - We can refactor to get the second call working like this:

  ```js
  const displayAgain = Ming.displayName.bind(Ming);
  displayAgain(); // => Now Momato Riruru will be printed out.
  ```

- To continue using function declarations vs fat arrow we can assign context in a constructor within a class component.

```js
import React from "react";

class AlertButton extends React.Component {
  constructor() {
    super();
    this.showAlert = this.showAlert.bind(this); // binding context
  }

  showAlert() {
    console.log(this);
  }

  render() {
    return (
      <button type="button" onClick={this.showAlert}>
        Submit
      </button>
    );
  }
}

export default AlertButton;
```

- **`Experimental Syntax`** : Syntax that has been proposed to add to ECMAScript but hasn't officially been added to the language specification yet.

- It's good to pick one approach and use it consistently, either:
  1. Class Properties & Arrow Functions
  2. Bind Method & This Keyword

**The `SyntheticEvent` object**

- **Synthetic Event Objects**: Cross Browser wrappeds around the browser's native event.

  - Includes the use of stopPropagation() and preventDefault();

- Attributes of the Synthetic Event Object:
  |Attributes|
  |---|
  | boolean bubbles |
  |boolean cancelable|
  | DOMEventTarget currentTarget|
  |boolean defaultPrevented|
  |number eventPhase|
  |boolean isTrusted|
  |DOMEvent nativeEvent|
  |void preventDefault()|
  |boolean isDefaultPrevented()|
  |void stopPropagation()|
  |boolean isPropagationStopped()|
  |void persist()|
  |DOMEventTarget target|
  |number timeStamp|
  |string type |

- **`nativeEvent`** : property defined in a synthetic event object that gives you access to the underlying native browser event (rarely used!)

---

## **Forms in React**

_Exercise being done in a separate file_

**Random Notes**

- `onChange` : detects when a value of an input element changes.
  - Assigning `onChange` to our input fields makes our component's state update in real time during user input.
- Dont forget to add `preventDefault` onto form submissions to deal with the default behavior of the browser refreshing the page!
- `submittedOn: new Date(),` Can be added to a form, most likely will persist into a DB.

- **Controlled Components**

  - We use the `onChange` event handlers on form fields to keep our component's state as the `"one source of truth"`

- Adding an `onChange` event handler to every single input can massively bloat your code.

  - Try assiging it to it's own method to apply everywhere.

- `textarea` is handled differently in react: it takes in a value property to handle what the inner text will be.

```js
// ./src/ContactUs.js

import React from "react";

class ContactUs extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
      phoneType: "",
      comments: "",
      validationErrors: [],
    };
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // Vanilla JS Function for validating inputs
  validate(name, email) {
    const validationErrors = [];

    if (!name) {
      validationErrors.push("Please provide a Name");
    }

    if (!email) {
      validationErrors.push("Please provide an Email");
    }

    return validationErrors;
  }

  onSubmit = (e) => {
    // Prevent the default form behavior
    // so the page doesn't reload.
    e.preventDefault();

    // Retrieve the contact us information from state.
    const { name, email, phone, phoneType, comments } = this.state;

    // Get Validation Errors - proceeding destructuring values from this.state.
    const validationErrors = this.validate(name, email);

    // If we have errors...
    if (validationErrors.length > 0) {
      this.setState({ validationErrors });
    } else {
      // Proceed normally
      // Create a new object for the contact us information.
      const contactUsInformation = {
        name,
        email,
        phone,
        phoneType,
        comments,
        submittedOn: new Date(),
      };

      console.log(contactUsInformation);

      // Reset the form state.
      this.setState({
        name: "",
        email: "",
        phone: "",
        phoneType: "",
        comments: "",
        validationErrors: [],
      });
    }
  };

  render() {
    const {
      name,
      email,
      phone,
      phoneType,
      comments,
      validationErrors,
    } = this.state;

    return (
      <div>
        <h2>Contact Us</h2>
        {validationErrors.length > 0 && (
          <div>
            The following errors were found:
            <ul>
              {validationErrors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="text"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              id="phone"
              name="phone"
              type="text"
              onChange={this.onChange}
              value={phone}
            />
            <select name="phoneType" onChange={this.onChange} value={phoneType}>
              <option value="">Select a phone type...</option>
              {this.props.phoneTypes.map((phoneType) => (
                <option key={phoneType}>{phoneType}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="comments">Comments:</label>
            <textarea
              id="comments"
              name="comments"
              onChange={this.onChange}
              value={comments}
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

ContactUs.defaultProps = {
  phoneTypes: ["Home", "Work", "Mobile"],
};

export default ContactUs;
```

- We can use validation libraries like `validate` to make our validation functions more complex.

```js
import isEmail from "validator/es/lib/isEmail";

  validate(name, email) {
    const validationErrors = [];

    if (!name) {
      validationErrors.push("Please provide a Name");
    }

    if (!email) {
      validationErrors.push("Please provide an Email");
    } else if (!isEmail(email)) {
      validationErrors.push("Please provide a valid Email");
    }

    return validationErrors;
  }
```

**Note About Client-side vs server-side validation**

- Server-side validation is not optional.
- Tech-savvy users can manipulate client-side validations.
- Sometimes the 'best approach' is to skip implementing validations on the client-side and rely completely on the server-side validation.

---

## **Component Lifecycle**

![life](https://i.gyazo.com/2cf79a8f98c2afc7a2a13bdf123a70f4.png)

- Component Lifecycle is simply a way of describing the key moments in the lifetime of a component.
  1. Loading (Mounting)
  2. Updating
  3. Unloading (Unmounting)

**The lifecycle of a React component**

- Each `Class Component` has several `lifecycle methods` that you can add to run code at specific times.

  - `componentDidMount` : Method called after your component has been added to the component tree.
  - `componentDidUpdate` : Method called after your component has been updated.
  - `componentWillUnmount` : Method called just before your component is removed from the component tree.

- **`Mounting`**

  1. `constructor` method is called
  2. `render` method is called
  3. React updates the `DOM`
  4. `componentDidMount` is called

- **`Updating`**

  - When component receives new `props`
    1. `render` method is called
    2. React updates the `DOM`
    3. `componentDidUpdate` is called
  - When `setState` is called
    1. `render` method is called
    2. React updates the `DOM`
    3. `componentDidUpdate` is called

- **`Unmounting`**
  - The moment before a class component is removed from the component tree:
  - `componentDidMount` will be called.

**Avoiding the legacy lifecycle methods**

- Occasionally you will encounter some deprecated lifecycle methods:

  - UNSAFE_componentWillMount
  - UNSAFE_componentWillReceiveProps
  - UNSAFE_componentWillUpdate

- Just know they will be removed soon from React's API, peace.

**Using the class component lifecycle methods**

_Exercise done in sep. directory_

- Assorted Notes:
  - Common Use for `componentDidMount` lifecycle method is for fetching data from an API.

---
