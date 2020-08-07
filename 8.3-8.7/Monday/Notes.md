# **Notes**

## **The Browser Object Model**

**The DOM vs the BOM**

- **`Document Object Model`** : Also known as the **`DOM`** contains a collection of nodes (HTML Elements), that can be access and manipulated.

  - The **`document`** object is a Web Page, and the DOM is the hierarchy of browser objects.

- **`Browser Object Model`** : Also known as the **`BOM`**, this is the hierarchy of browser objects.

- **`Window Object`** : Chief browser object which contains properties and methods that we can use to access different objects within the window.

  - **`window.navigator`** : returns a reference to the navigator object.
  - **`window.screen`** : returns a reference to the screen object associated with the window.
  - **`window.history`** : returns a reference to the history object.
  - **`window.location`** : gets and sets the location/current URL of the window object.
  - **`window.document`** : (can be shortened to document) returns a reference to the document that the window contains.

* All of the objects above can be shortened to their latter half (i.e. window.document => document)

**The Browser Diagram**

![img of browser diagram](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-DOM-API/browser-basics/assets/browser.png)

- **`User interface`**: Browser interface that the user interacts with such as the address bar, buttons, bookmarks, etc. Includes everything except for the requested page content.

- **`Browser Engine`** : Manages the interactions between the UI and the rendering machine.

- **`Rendering Engine`** : Displays and renders the requested page content.

- **`Networking`** : Handles network calls, such as HTTP requests.

- **`Javascript Interpreter`** : Parses and executes JS code.

- **`UI Backend`** : Used for drawing basic widgets like combo boxes and windows; uses operating system user interface methods.

- **`Data Storage`** : The persistence of data stored in the browser, such as cookies.

---

## **The Request/Response Cycle**

- Browsing the web is just a series of **`requests`** and **`responses`**.

- Think about the Request/Response cycle as the communication pattern between a client, browser, and a server.
  - An example is an **`HTTP Request`**, where we make a request to the server to fetch a URL.

**The Request Response Cycle Diagram**
![rr cycle](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-DOM-API/browser-basics/assets/request-response-cycle.png)

- The left side is the **`client`** side, the middle is the **`internet`**, and right side is the **`server`** side.

**The Browser's Role in the Request-Response Cycle**

- The Browser also does other things besides letting users make requests.

  - Parses HTML, CSS, and JS.
  - Renders information to the user by constructing and rendering a DOM tree.

- The **`Network Tab`** in your **`Developer's Tools`** will allow you to view all the requests and responses.

---

## **Running JS Scripts in the Browser**

**Using the Window API**

```js
// windowTest.js

// Open a new window
newWindow = window.open("", "", "width=100, height=100");

// Resize the new window
newWindow.resizeTo(500, 500);
```

- **resizeTo()** : Windows API method that changes the height and width of a user's window - must be chained with a window.open.

**Context, Scope, and Anonymous Function**

- Scope is function-based & Context is object-based.
- **`Execution Context`** refers more to scope than to context.
  - Divided into two phases:
    - **`Creation Phase`** : The interpreter creates a variable object(activation object) - the scope chain is then initialized.
    - **`Excution Phase`** : Code is interpreted and executed.
- IIFE's are a type of closure.

- The important things to note about context are:

  - Every function has a context and scope.
  - Context is the object that **`owns`** the function.
  - Context is most often determined by how a function is invoked.

---

**Running a script on DOMContentLoaded**

```js
window.addEventListener("DOMContentLoaded", (event) => {
  console.log("This script loaded when the DOM was ready.");
});
```

- DOMContentLoaded runs their script when the document has been loaded, without waiting for stylesheets, images, and subframes to load.

**Running a script on page load**
The alternative to DOMContentLoaded is, waiting for everything to load in the document before we run our script. For this we can use **`window.onload`**

```js
window.onload = () => {
  console.log(
    "This script loaded when all the resources and the DOM were ready."
  );
};
```

**Ways to prevent a script from running until page loads**
Some methods include:

1. Using DOMContentLoaded in an externel JS File.
2. Put a script tag importing external code at the bottom of HTML file.
3. Add attribute to our script tag such as async or defer.

```js
  <script async src="scriptA.js"></script>

  <script defer src="scriptB.js"></script>

  <script async defer src="scriptC.js"></script>
```

---
