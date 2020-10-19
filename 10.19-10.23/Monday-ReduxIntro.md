# **Notes**

## **Redux Explained**

- JS Framework for managing the frontend state of a web application.

  - Gives us ability to store information in an organized manner in a web app and quickly retrieve that information from anywhere in the app.

- **`Redux`**
  - Client Side Data Management
  - Controls "Frontend State"
  - NOT Your Database
  - NOT Component State
  - Just used for managing Data

![pic](https://i.gyazo.com/60842c925c90bf2c1d310360ea7ab5b0.png)

- Visual of how an app without React manages it's data.

  - A lot of prop threading happening.

- Data stored in a sep. location - `global data`.

**The Anatomy of Redux**

- **`Store`**
  - Holds the Frontend State
  - Provides an API for the Frontend State
- **`Action`**
  - POJOs
  - Outline Changes to Frontend State
- **`Reducers`**
  - Functions
  - Make Changes to Frontend State

**Where did Redux come from?**

- There are three central philosophies of Redux:
  1. `A Single Source of Truth` : state is stored in a POJO
  2. `State is Read Only` : State is immutable, modified by dispatching actions.
  3. `Changes are Made with Pure Functions` : Reducers that receive the actions and return updated state are pure functions of the old state and action.

**When is it appropriate to use Redux?**

- When doing a project with simpler global state requirements, it may be better to choose React's Context API over Redux.

- Redux offers more flexibility and support for middleware along with richer developer tools.

**Vocabulary**

- **`State`**

  - _Redux is a State Manager_
  - State is all the information stored by that program at a particular point in time.
  - Redux's main job is to store the state and make it directly available to your entire app.

- **`Store`**

  - _Redux stores state in a single store_.
  - Redux store is a single JS object with a couple of methods (not a class!)
    - Methods include:
      `getState`, `dispatch(action)`, and `subscribe(listener)`

- **`Actions`**

  - _Redux store is updated by dispatching actions_
  - Action is just a POJO that includes a mandatory `type` property.
  - Contain info to update the store.
  - We dispatch actions in response to User actions or AJAX requests.

- **`Pure Functions`**

  - _Redux Reducers are Pure Functions_
  - Functions are pure when their behavior depends only on it's arguments as has no side effects.
  - Simply takes in an argument and outputs a value.

- **`Reducer`**

  - _Redux handles actions using reducers_
  - A function that is called each time an action is dispatched.
  - Takes in an `action` and `current state`
  - Required to be pure functions so their behavior is predictable.

- **`Middleware`**

  - _Customize response to dispatch actions by using Middleware_
  - Middleware is an optional component of Redus that allows custom responses to dispatched actions.
  - Most common use is to dispatch async requests to a server.

- **`Time Traveling Dev Tools`**

  - _Redux can time travel wow_
  - Time travel refers to Redux's ability to revert to a previous state because reducers are all pure functions.

- **`Thunks`**
  - _Convenient format for taking async actions in Redux_
  - General concept in CS referring to a function who's primary purpose is to call another function.
  - Most commonly used to make async API requests.

---

## **Flux and Redux**

**What is Flux?**

- Front-end application architecutre.
- A pattern in which to structure an application.
- Unidirectional Data Flow - offers more predictability.
  ![flux](https://s3.amazonaws.com/lecture-assets/redux-flux.png)

- `Actions` : Begins the data flow of data, simple object that contains a type; type indicates the type of change to be performed.

- `Dispatcher` : Mechanism for distributing actions to the store.

- `Store` : The entire state of the application, responsible for updating the state of your app.

- `View` : Unit of code that's responsible for rendering the user interface. Used to re-render the application when actions and changes occur.

![graph](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/fullstack/react/assets/flux-loop.png)

**Redux**

![rdx](https://assets.aaonline.io/fullstack/react/assets/redux.gif)

- Library that facilitates the implementation of Flux.
- Redux Three Principles
  - `Single Source of Truth`
  - `State is Read-Only`
  - `Only Pure Functions Change State`

---

## **Store**

- Simply an object that holds the application state wrapped in an API.
- **`Three methods`**:
  - **`getState()`** : Returns the store's current state.
  - **`dispatch(action)`** : Passes an action into the store's reducer to tell it what info to update.
  - **`subscribe(callback)`** : Registers a callback to be triggered whenever the store updates.

**Updating the Store**

```js
store.dispatch(action);

// Add Orange Action
const addOrange = {
  type: "ADD_FRUIT",
  fruit: "orange",
};

// Reducer for Orange Action
const fruitReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FRUIT":
      return [...state, action.fruit];
    default:
      return state;
  }
};

// Run the Dispatch
console.log(store.getState()); // []
store.dispatch(addOrange);
console.log(store.getState()); // [ 'orange' ]
```

**Subscribing to the store**

- Whenever a store process a dispatch(), it triggers all its subscribers.
- **`Subscribers`** : callbacks that can be added to the store via subscribe().

```js
const display = () => {
  console.log(store.getState());
};

const unsubscribeDisplay = store.subscribe(display);

store.dispatch(addOrange); // [ 'orange', 'orange' ]

// display will no longer be invoked after store.dispatch()
unsubscribeDisplay();

store.dispatch(addOrange); // no output
```

**Reviewing a simple example**

```js
// app.js

const { createStore } = require("redux");

// Define the store's reducer.
const fruitReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FRUIT":
      return [...state, action.fruit];
    default:
      return state;
  }
};

// Create the store.
const store = createStore(fruitReducer);

// Define an 'ADD_FRUIT' action for adding an orange to the store.
const addOrange = {
  type: "ADD_FRUIT",
  fruit: "orange",
};

// Log to the console the store's state before and after
// dispatching the 'ADD_FRUIT' action.
console.log(store.getState()); // []
store.dispatch(addOrange);
console.log(store.getState()); // [ 'orange' ]

// Define and register a callback to listen for store updates
// and console log the store's state.
const display = () => {
  console.log(store.getState());
};
const unsubscribeDisplay = store.subscribe(display);

// Dispatch the 'ADD_FRUIT' action. This time the `display` callback
// will be called by the store when its state is updated.
store.dispatch(addOrange); // [ 'orange', 'orange' ]

// Unsubscribe the `display` callback to stop listening for store updates.
unsubscribeDisplay();

// Dispatch the 'ADD_FRUIT' action one more time
// to confirm that the `display` method won't be called
// when the store state is updated.
store.dispatch(addOrange); // no output
```

## **Reducers**

- Reducer function receives the current `state` and `action`, updates the state appropriately based on the `action.type` and returns the following state.

- You can bundles different action types and ensuing logic by using a switch/case statement.

```js
const fruitReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FRUIT":
      return [...state, action.fruit];
    case "ADD_FRUITS":
      return [...state, ...action.fruits];
    case "SELL_FRUIT":
      const index = state.indexOf(action.fruit);
      if (index !== -1) {
        // remove first instance of action.fruit
        return [...state.slice(0, index), ...state.slice(index + 1)];
      }
      return state; // if action.fruit is not in state, return previous state
    case "SELL_OUT":
      return [];
    default:
      return state;
  }
};
```

**Reviewing how Array#slice works**

```js
const fruits = ["apple", "apple", "orange", "banana", "watermelon"];

// The index of the 'orange' element is 2.
const index = fruits.indexOf("orange");

// `...fruits.slice(0, index)` returns the array ['apple', 'apple']
// `...fruits.slice(index + 1)` returns the array ['banana', 'watermelon']
// The spread syntax combines the two array slices into the array
// ['apple', 'apple', 'banana', 'watermelon']
const newFruits = [...fruits.slice(0, index), ...fruits.slice(index + 1)];
```

- Approach that can be used to remove an element without mutating the original array.

**Avoiding state mutations**

- **Your reducer must always return a new object if the state changes.**

**GOOD**

```js
const goodReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      const nextState = Object.assign({}, state);
      nextState.count++;
      return nextState;
    default:
      return state;
  }
};
```

**BAD**

```js
const badReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      state.count++;
      return state;
    default:
      return state;
  }
};
```

---

## **Actions**

- Actions are the only way to trigger changes to the store's state.

**Using action creators**

```js
const addOrange = {
  type: "ADD_FRUIT",
  fruit: "orange",
};

store.dispatch(addOrange);
console.log(store.getState()); // [ 'orange' ]
```

- fruit is the `payload key` and orange is the `state data`

- **`Action Creators`** : Functions created from extrapolating the creation of an action object.

```js
const addFruit = (fruit) => ({
  type: "ADD_FRUIT",
  fruit,
});
```

- Use parenthesis for implicit return value.
- We can now add whatever fruit we'd like.

```js
store.dispatch(addFruit("apple"));
store.dispatch(addFruit("strawberry"));
store.dispatch(addFruit("lychee"));
console.log(store.getState()); // [ 'orange', 'apple', 'strawberry', 'lychee' ]
```

**Preventing typos in action type string literals**

```js
const ADD_FRUIT = "ADD_FRUIT";
const ADD_FRUITS = "ADD_FRUITS";
const SELL_FRUIT = "SELL_FRUIT";
const SELL_OUT = "SELL_OUT";

const addFruit = (fruit) => ({
  type: ADD_FRUIT,
  fruit,
});

const addFruits = (fruits) => ({
  type: ADD_FRUITS,
  fruits,
});

const sellFruit = (fruit) => ({
  type: SELL_FRUIT,
  fruit,
});

const sellOut = () => ({
  type: SELL_OUT,
});
```

- Using constant variables helps reduce simple typos in a reducer's case clauses.

---

## **Debugging Arrow Functions**

- It is important to learn how to use debugger statements with arrow functions to effectively debug Redux cycle.

**Understanding the limitations of implicit return values**

```js
const addFruit = (fruit) => {
  return {
    type: "ADD_FRUIT",
    fruit,
  };
};

const addFruit = (fruit) => {
  debugger;
  return {
    type: "ADD_FRUIT",
    fruit,
  };
};
```

- You must use explicit return statement arrow function to use a debugger.

---
