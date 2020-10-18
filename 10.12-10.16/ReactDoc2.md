# **Notes**

## **React Router Introduction**

- `React Router` is the answer for rendering different components for different pages.
  - A front-end library that allows you to control which components to display using the browser location.
  - `Client-side Routing`

**Getting started with routing**

- Install React Router with:
  ```js
  npm install --save react-router-dom@^5.1.2
  ```
- Import `Browser Router` from package.

  ```js
  import { BrowserRouter } from "react-router-dom";
  ```

  - `BrowserRouter` is the primary component of the router that wraps your route hierarchy.
    - Wrap it around components.
    - Creates a `React Context` that passes routing information down to all its descendant components.

- You can also use `HashRouter`, where it would generate a hash before the endpoint.

**Creating frontend routes**

- React Router helps your app render specific components based on the URL.
- The most common component is `<Route>`

  - Wrapped around another component, causing the comp. to only render if the a certain URL is matched.
  - **`Props`** : path, component, exact, and [render]

- Browser Router can only have a single child component.

  - The Browser Router wraps all routes within a parent div element.

```js
const Root = () => {
  const users = {
    1: { name: "Andrew" },
    2: { name: "Raymond" },
  };

  return (
    <BrowserRouter>
      <div>
        <h1>Hi, I'm Root!</h1>
        <Route exact path="/" component={App} />
        <Route path="/hello" render={() => <h1>Hello!</h1>} />
        <Route path="/users" render={() => <Users users={users} />} />
      </div>
    </BrowserRouter>
  );
};
```

- **component**
  - Indicates component to render.
- **path**
  - Indicates path to render a specific component.
- **exact**
  - Tells route to not pattern match and only render a certain route exclusively to it's associated component.
- **render**

  - Optional prop that takes in a function to be called.
  - Causes extra work for React.
  - Preferred for inline rendering of simple functional components.
  - Difference between `component` and `render` is that component returns new JSX that be re-mounted, but render returns the JSX that will be mounted only once.

  ```js
  // This inline rendering will work, but is unnecessarily slow.
  <Route path="/hello" component={() => <h1>Hello!</h1>} />

  // This is the preferred way for inline rendering.
  <Route path="/hello" render={() => <h1>Hello!</h1>} />
  ```

  - Also useful if you need to pass in specific props to a component.

  ```js
  // `users` to be passed as a prop:
  const users = {
    1: { name: "Andrew" },
    2: { name: "Raymond" },
  };
  <Route path="/users" render={() => <Users users={users} />} />;
  ```

**Route path params**

- Your component's props can hold information about URL's parameters.
  - Will match segments starting at `:` to the next `/`, `?`, `#`.

```js
<Route
  path="/users/:userId"
  render={(props) => <Profile users={users} {...props} />}
/>
```

- `{...props}` spreads out the router's props.
- `props.match.params` is used to access the match prop's parameters.
- Useful keys on the `match` object:
  - `isExact` : boolean that tells you whether or not the URL exactly matches the path.
  - `url` : the currentURL
  - `path` : Route path it matched against (w/o wildcards)
  - `params` : Matches for the individual wildcard segments.

---

## **Navigation**
