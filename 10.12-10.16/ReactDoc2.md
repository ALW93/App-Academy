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

**React Router Navigation**

- `Link`, `NavLink`, `Redirect`, `history` props of React Router are used to help your user navigate routes.

**Adding links for navigation**

- Issues on-click navigation event to a route defined in app.
- Usage renders an anchor tag with a correctly set `href` attribute.

```js
import { BrowserRouter, Route, Link } from "react-router-dom";
```

- `Link` takes two properties: `to` and `onClick`.

  - `to` : route location that points to an absolute path.
  - `onClick` : clickHandler.

- `NavLink` works just like `Link` but has a bit of extra functionality.
  - Adds extra styling, when the path it links to matches the current path.
  - As it's name suggests, it is used to Nav Bars.
  - Takes three props:
    - `activeClassName` : allows you to set a CSS class name for styling. (default set to 'active')
    - `activeStyle` : style object that is applied inline when it's `to` prop. matches the current URL.
    - `exact` prop is a boolean that defaults to false; you can set it to true to apply requirement of an exact URL match.
      - exact can also be used as a flag instead of a reg. property value.
      - benefit of adding this is so that you don't trigger other matches.

**Switching between routes**

- **`<Switch>`** : Component allows you to only render one route even if several match the current URL.

  - You may nest as many routes as you wish but only the first match of the current URL will be rendered.

- Very useful if we want a default component to render if none of our routes match.

```js
<Switch>
  <Route path="some/url" component={SomeComponent} />
  <Route path="some/other/url" component={OtherComponent} />
  <Route component={DefaultComponent} />
</Switch>
```

- `DefaultComponent` will only render if none of the other URLs match up.

- **`<Redirect>`** : Helps redirect users.
  - Only takes a single prop: `to`.

```js
<Route
  exact
  path="/"
  render={() => (this.props.currentUser ? <Home /> : <Redirect to="/login" />)}
/>
```

**History**

- `History` allows you to update the URL programmatically.
- Contains two useful methods:
  - `push` : Adds a new URL to the end of the history stack.
  - `replace` : Replaces the current URL on the history stack, so the back button won't take you to it.

```js
// Pushing a new URL (and adding to the end of history stack):
const handleClick = () => this.props.history.push("/some/url");

// Replacing the current URL (won't be tracked in history stack):
const redirect = () => this.props.history.replace("/some/other/url");
```

---

## **Nested Routes**

**Why nested routes?**

- Create routes that tunnel into main components vs getting rendered on the main page as it's own thing.

**What are nested routes?**

```js
const Profile = (props) => {
  // Custom call to database to fetch a user by a user ID.
  const user = fetchUser(props.match.params.userId);
  const { name, id } = user;

  return (
    <div>
      <h1>Welcome to the profile of {name}!</h1>

      <Link to={`/users/${id}/posts`}>{name}'s Posts</Link>
      <Link to={`/users/${id}/photos`}>{name}'s Photos</Link>

      <Route path="/users/:userId/posts" component={UserPosts} />
      <Route path="/users/:userId/photos" component={UserPhotos} />
    </div>
  );
};
```

**Alt. version using `props.match`**

```js
// Destructure `match` prop
const Profile = ({ match: { url, path, params }) => {

  // Custom call to database to fetch a user by a user ID.
  const user = fetchUser(params.userId);
  const { name, id } = user;

  return (
    <div>
      <h1>Welcome to the profile of {name}!</h1>

      <Link to={`${url}/posts`}>{name}'s Posts</Link>
      <Link to={`${url}/photos`}>{name}'s Photos</Link>

      <Route path={`${path}/posts`} component={UserPosts} />
      <Route path={`${path}/photos`} component={UserPhotos} />
    </div>}
  );
};
```

- As you can see above, our end URL isn't even defined until we apply those flexible values in.

---

## **React Builds**

- **`Build`** : Process of converting code into something that can actually execute or run on the target platform.
  - In regards to React, the minimum a build should do is convert JSX to something that browsers can understand.

**Reviewing common terminology**

- **`Linting`** : Process of using a tool to analyze your code to catch common errors, bugs, inconsistencies etc...
- **`Transpilation`** : Process of converting source code, like JS, from one version to another.
- **`Minification`** : Process of removing all unnecessary characters in your code.
- **`Bundling`** : Process of combining multiple code files into a single file.
- **`Tree Shaking`** : Process of removing unused or dead code from your application before it's bundled.

**Configuration or code?**

- `Configuration` allows developers to create build tasks by declaring either JSON, XML, or YAML without explicitly writing every step in the process.
- `Coding` or `Scripting` simply requires code.

**Babel and webpack (yes, that's intentionally a lowercase 'w')**

- **`Babel`** : Code Transpiler that allows you to use all of the latest features and syntax wihtout worrying about what browsers support what.

- **`webpack`** : Allows developers to use JS modules w/o requiring users to use a browser that natively supports ES modules.

- Create React App uses webpack and Babel under the hood to build applications.

**The Create React App build process**

- What happens when you run `npm start`:
  1. .env variables are loaded.
  2. list of browsers to support are checked.
  3. config'd HTTP port checked for availability.
  4. application compiler is configured and created.
  5. `webpack-dev-starter` is started
  6. `webpack-dev-starter` compiles app.
  7. `index.html` is loaded into browser
  8. file watcher is started to watch for changes.

**Ejecting**

- There is a script in Create React App called `eject` that allows you to 'eject' your application and expose all the hidden stuff.

**Preparing to deploy a React application for production**

- **Defining Env Variables**

```
REACT_APP_FOO: some value
REACT_APP_BAR: another value
```

```js
console.log(process.env.REACT_APP_FOO);
```

```html
Can be referenced in your index.html like so: <title>%REACT_APP_BAR%</title>
```

**Configuring the supported browsers**

```js
{
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

- If you specify older browsers it will affect how your code get's transpiled.

**Creating a production build**

- Run `npm run build` to create a production build.
  - Bundles React in production mode and optimizes the build for the best performance.

---
