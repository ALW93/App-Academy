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

---

## **Reconciliation**

---

## **Typechecking With PropTypes**

---
