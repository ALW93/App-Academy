# **Notes**

## **JSX In Depth**

- Remember that JSX is just syntactic sugar for the built in `React.createElement(component, props, ...children)`
- React Library must always be in scope from your JSX code.
- Use Dot Notation for JSX Type
- User-Defined Components Must Be Capitalized `<Foo />` vs `<div>`
- Cannot use a general expression as the React element type.

(`Incorrect`)

```js
  function Story(props) {
  // Wrong! JSX type can't be an expression.
    return <components[props.storyType] story={props.story} />;
  };
```

(`Corrected`)

```js
function Story(props) {
  // Correct! JSX type can be a capitalized variable.
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}
```

**Props in JSX**

- Several ways to specify props in JSX.
- **`Javascript Expressions as Props`**
  ```js
  <MyComponent foo={1 + 2 + 3 + 4} />
  ```
- **`String Literals`**

  ```js
  <MyComponent message="hello world" />

  <MyComponent message={'hello world'} />

  <MyComponent message="&lt;3" />

  <MyComponent message={'<3'} />
  ```

- **`Props Default to “True”`**

  ```js
  <MyTextBox autocomplete />

  <MyTextBox autocomplete={true} />
  ```

- **`Spread Attributes`**

  ```js
  function App1() {
    return <Greeting firstName="Ben" lastName="Hector" />;
  }

  function App2() {
    const props = { firstName: "Ben", lastName: "Hector" };
    return <Greeting {...props} />;
  }
  ```

**Children in JSX**

- **`props.children`** : The content between opening and closing tag.

**JavaScript Expressions as Children**

```js
function Item(props) {
  return <li>{props.message}</li>;
}

function TodoList() {
  const todos = ["finish doc", "submit pr", "nag dan to review"];
  return (
    <ul>
      {todos.map((message) => (
        <Item key={message} message={message} />
      ))}
    </ul>
  );
}
```

**Functions as Children**

- `props.children` works like any other prop, meaning it can pass any sort of data.

```js
// Calls the children callback numTimes to produce a repeated component
function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}

function ListOfTenThings() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}>This is item {index} in the list</div>}
    </Repeat>
  );
}
```

**Booleans, Null, and Undefined Are Ignored**

- `false`, `null`, `undefined`, and `true` are all valid children.

  - They will **not** render.

- You can use these to conditionally render items.

```js
<div>
  {showHeader && <Header />}
  <Content />
</div>
```

- In this example, the component will only render if `showHeader` evals to True.

```js
// Before work-around
<div>
  {props.messages.length &&
    <MessageList messages={props.messages} />
  }
</div>
// After work-around
<div>
  {props.messages.length > 0 &&
    <MessageList messages={props.messages} />
  }
</div>
```

- Note that certain falsy values such as zero will still be rendered by React, you can work around this by ensuring situations like the above eval. into a boolean.

- In the times you want booleans to be rendered out, simply **convert it into a string** first.

```js
<div>My JavaScript variable is {String(myVariable)}.</div>
```

## **Reconciliation**

**The Diffing Algorithm**

- **`Diffing`** : When the state of a component changes React creates a new virtual DOM tree.

- Elements of Different Types

  - Every time the root elements have different types, React tears down the old tree and builds the new tree from scratch.

- DOM Elements Of the Same Type

  - When comparing two DOM elements of the same type, React keeps the same underlying DOM node and only updates the changes attributes.

  ```js
  <div className="before" title="stuff" />

  <div className="after" title="stuff" />
  ```

  ```js
  <div style={{ color: "red", fontWeight: "bold" }} />

  <div style={{color: 'green', fontWeight: 'bold'}} />
  ```

- Component Elements Of The Same Type

  - When components update, instances will remain the same, so that state maintains across renders.
  - React will only update the props, to match the new element.

- Recursing On Children

  - React will iterate both lists of children and generate a mutation whenever there's a difference.
  - This is why we use `keys`.
    - Makes it easier for React to match children in the original tree with children in the subsequent tree.

- Tradeoffs
  - Important to remember that reconciliation algorithm is an _implementation detail_.
  - Re-rendering only to apply the differences following the rules stated in the previous sections.

---

## **Typechecking With PropTypes**

- As your application grows, you can use React's `typechecking` to catch bugs.
- `propTypes` is a special property to run typechecking.
  - exports range of built in validators to ensure your received data is valid.
  - propTypes is only checked in development mode.

```js
import PropTypes from "prop-types";

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

Greeting.propTypes = {
  name: PropTypes.string,
};
```

**Requiring Single Child**

- Use `PropTypes.element` to specify only a single child can be passed to a component as children.

```js
import PropTypes from "prop-types";

class MyComponent extends React.Component {
  render() {
    // This must be exactly one element or it will warn.
    const children = this.props.children;
    return <div>{children}</div>;
  }
}

MyComponent.propTypes = {
  children: PropTypes.element.isRequired,
};
```

**Default Prop Values**

- Use `defaultProps` to assign default values for props.

```js
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Specifies the default values for props:
Greeting.defaultProps = {
  name: "Stranger",
};

// Renders "Hello, Stranger":
ReactDOM.render(<Greeting />, document.getElementById("example"));
```

```js
class Greeting extends React.Component {
  static defaultProps = {
    name: 'stranger'
  }

  render() {
    return (
      <div>Hello, {this.props.name}</div>
    )
  }
```

---
