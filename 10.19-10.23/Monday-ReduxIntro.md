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
