# **Notes**

## **React Context**

- You can use **`React Context`** to pass data through a component tree without having to manually thread props.
  - Convenient way to share & update `global data`.

**Creating a Context**

```js
// PupContext.js
import { createContext } from "react";

const PupContext = createContext();

export default PupContext;
```

- We use **`React.createContext`** to create context.
  - Keep in mind if you invoke this method with aruguments, those arguments will be set as default context.

**Adding a Provider to the App component**

- In order to pass context over to child components we need to wrap them in a provider component.
  - The provider component takes in a value property that points to the information that needs to be passed to the children.

```js
<MyContext.Provider value={/* some value */}>
  <ChildComponent />
</MyContext.Provider>
```

**Setting up a Consumer**

```js
<MyContext.Consumer>
  {(value) => <Component value={value} />}
</MyContext.Consumer>
```

- Keep in mind that `Context.Consumer` expects a function as a child.
  - The function has a value prop passed in from `Context.Provider`

---
