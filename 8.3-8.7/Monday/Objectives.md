# **Objectives**

## **Browser Basics**

**1. Explain the difference between the BOM (browser object model) and the DOM(document object model).**

- The **`Browser Object Model`** is the hierarchy of browser objects - the document object is a part of the hierarchy. The DOM is also managed by the BOM.
- The **`Document Object Model`** is the collection of HTML elements or Nodes that can be accessed or manipulated.

**2. Given a diagram of all the different parts of the Browser identify each part. Use the Window API to change the innerHeight of a user's window.**

![diagramBOM](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-DOM-API/browser-basics/assets/browser.png)

- **`User Interface`**: The browser interface that users interact with, includes everything except the requested page content (such as the address bar, bookmarks menu etc)
- **`Browser Engine`**: Manages the interaction between the UI and the rendering engine.
- **`Rendering Engine`**: Renders the requested page content. For example, if the requested content is HTML, the HTML and CSS will be parsed and rendered.
- **`Networking`** : Handles all netword calls, for example HTTP requests.
- **`Javascript Interpreter`** : Parses and executes our JS code.
- **`UI Backend`** : Uses Operating System user interface methods.
- **`Data Storage`** : Persistence of data stored in the browser, i.e. cookies.

```js
// First Open a new window
// Arguments are: URL, Name, ...Features
newWindow = window.open(
  "http://www.google.com",
  "Google",
  "width=100, height=100"
);
// Use resizeTo() Window API method to change the width & height
newWindow.resizeTo(500, 500);
// conducted in pixels
```

**3. Identify the context of an anonymous functions running in the Browser (the window).**

- When we call an anonymous function in the global scope, the context will default to the **`global context`**.

**4. Given a JS file and an HTML file, use a script tag to import the JS file and execute the code therein when all the elements on the page load (using DOMContentLoaded)**

```html
<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript" src="someFile.js"></script>
  </head>
</html>
```

```js
window.addEventListener("DOMContentLoaded", (event) => {
  // some code
});
```

- We can import a JS file into our HTML by placing a script tag into our head meta data and indicating a type and source URL.
- To ensure our code doesn't run until our page loads, we can add an event listener to our window object, calling for execution only after our DOM is fully loaded.

**5. Given a JS file and an HTML file, use a script tag to import the JS file and execute the code therein when the page loads**

- We can add a async or defer attribute to our script tag if we wish to execute our code when the entire page loads, not just the DOM.
- **Note**: Async and defer essentially do the same thing, Async is not supported in older browsers so you would have to use defer - however async is considered the standard go-to in most modern browsers.

```html
<!DOCTYPE html>
<html>
  <head>
    <script async defer type="text/javascript" src="someFile.js"></script>
  </head>
</html>
```

**6. Identify three ways to prevent JS code from executing until an entire HTML page is loaded**

- **In order of preference**:
  1. Adding the async or defer attribute to your script tag.
  2. Use DOMContentLoaded event in our external JS file.
  3. Place the JS import script tag all the way at the bottom of your HTML file.

**7. Label a diagram on the Request/Response cycle.**

![RRdiagram](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-DOM-API/browser-basics/assets/request-response-cycle.png)

- The left side contains the **client-side** or **browser**
- The right side is the **server side** - a database where we can store data.
- The middle is the **internet**, which comprises a series of **client requests** and **server responses**.

**8. Explain the Browser's main role in the request/response cycle.**

- Parsing HTML,CSS, JS
- Rendering that information to the user by constructing a DOM tree and rendering it

**9. Given several detractors - identify which real-world situations could be implemented with the Web Storage API (shopping cart, forms saving inputs etc.)**

- As a reminder, the Web Storage API allows browsers to store key-value pairs.
- Also note that cookies are different from Web Storage.
- Cookies are meant more for server side, while Web Storage is meant for client-use.
- Some useful mechanisms include:
  1. Storing info about user (shopping cart info, saved form inputs)
  2. Storing session information
  3. Storing persistent data (data that remains even after a refresh)
  4. Storing key-value pairs that aren't needed server side.

**10. Given a website to visit that depends on cookies (like Amazon), students should be able to go to that site add something to their cart and then delete that cookie using the Chrome Developer tools in order to empty their cart.**

- You can delete cookies from your Dev Tools by going to the application tab and manually deleting them with right-click drop down menu.
- Just in case we need to do on the test, some students have mentioned that the Amazon demo only works if you are not logged-in.

---
