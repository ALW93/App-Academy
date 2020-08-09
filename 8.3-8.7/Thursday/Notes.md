# **Notes**

## **Cookies and Web Storage**

**Cookies**

**What is a cookie?**

- A small filed stored on a user's computer that holds a bite-sized amount of data, under 4KB. The are included with HTTP requests.

**What are cookies used for?**

- Store stateful information about a user (personal info, browser habits, history, form input information.)
- Storing a **session cookie** on user login/validation. (These are lost once the browser window is closed)
- **Persistent Cookies** : can be used to ensure a cookie survives past a specified expiration date.

**How to create a cooke in Javascript**
`document.cookie = aNewCookieHere;`

- Syntax for creating a new cookie.

```js
const firstCookie = "favoriteCat=million";
document.cookie = firstCookie;
document.cookie; // Returns "favoriteCat=million"
```

- We can also delete a cookie by setting an expiration date like so.

```js
document.cookie = "favoriteCat=; expires = Thu, 01 Jan 1970 00:00:00 GMT";
document.cookie; // ""
```

- You can also manually delete cookies by going into your Dev Tools and right clicking on a cookie.

**Web Storage API**

- **Web Storage API** : Provides mechanisms by which browsers can store key-value pairs, in a much more intuitive fashion than using cookies.
- Local Storage & Session Storage are included.
- **Local Storage** :
  - Stores data with no expiration date
  - Deleted when clearing the browser cache
  - Has the maxiumum storage limit in the browser
- **Session Storage** :
  - Stores data only for a single session
  - Stores until a browser window or tab is closed
  - Never transfers data to the server
  - Has a storage limit of 5MB (cookies are 4KB)

```js
let field = document.getElementById("field");

if (sessionStorage.getItem("autosave")) {
  field.value = sessionStorage.getItem("autosave");
}

field.addEventListener("change", function () {
  sessionStorage.setItem("autosave", field.value);
});
```

- Both methods use getItem() and setItem()

```js
if (!localStorage.getItem("bgcolor")) {
  populateStorage();
}
setStyles();

const populateStorage = () => {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);
};

const setStyles = () => {
  var currentColor = localStorage.getItem("bgcolor");
  var currentFont = localStorage.getItem("font");
  var currentImage = localStorage.getItem("image");

  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = "#" + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
};
```

1. Our conditional checks to see if our local storage contains a data item called `bgcolor`
2. If it does contain the data:
   - We run setStyles() to update the page styles.
3. If it does not contain the data:
   - We first run populateStorage() to set the items, and then run setStyles() to update them.

**When would we use the Web Storage API?**

- Ideal for storing multiple key-value pairs.
- This Data can only be saved as strings.
- Some common use cases are:
  - Storing information about a shopping cart.
  - Saving input data on forms.
  - Tracking user preferences & buying habits.
- We can access our storage by going to the **Application Tab** on our dev tools.

---

## **JSON**

**`JSON`** is an open-standard file format that "uses human-readable text to transmit objects consisting of key-value pairs and array data types".

**JSON is a format!**

- Remember that JSON is simply a format for data - it's just text!
- _JSON is just a string, it's just text_

| Javascript Literal Value | JSON    |
| ------------------------ | ------- |
| true                     | "true"  |
| false                    | "false" |
| 12.34                    | "12.34" |
| null                     | "null"  |

**String literals in JSON**

- **JSON always uses double quotes for strings.**
- **`Serialization`** : When we turn some data into string to be sent to another computer.
- **`Deserialization`** : When we take some text and turn it into data.

**Using the Built-in JSON Object**

- **JSON.stringify(value)** : truns the value passed into it into a string.
- **JSON.parse(str)** : turns a JSON-formatted string into a JS object.

```js
const array = [1, 'hello, "world"', 3.14, { id: 17 }];
console.log(JSON.stringify(array));
// prints [1, "hello, \"world\"", 3.14, {"id":17}]
```

```js
const str = '[1,"hello, \\"world\\"",3.14,{"id":17}]';
console.log(JSON.parse(str));
// prints an array with the following entries:
//   0: 1
//   1: "hello, \"world\""
//   2: 3.14
//   3: { id: 17 }
```

- You will almost never write raw JSON, most of the times you will just use JSON.stringify(), or call a data service that returns JSON formatted content.

**Brain Teaser**
What will the following print?

```js
const a = [1, 2, 3, 4, 5];
console.log(a[0]); // 1

const s = JSON.stringify(a);
console.log(s[0]); // [

const v = JSON.parse(s);
console.log(v[0]); /// 1
```

---

## **Web Storage**

- One Typical use for local storage is caching data fetched from a server onto the client side.

**Storing Data in Local Storage**

- Web Storage exists in the window as object containing key-value pairs.

**Reading Data in Local Storage**

```js
localStorage.setItem('eatz', 'I <3 falafel');
localStorage.setItem('coffee', 'black');
localStorage.setItem('doughnuts', '["glazed", "chocolate", "blueberry",
"cream-filled"]');

const eatz = localStorage.getItem('eatz');
const coffee = localStorage.getItem('coffee');
const doughnuts = localStorage.getItem('doughnuts');

console.log(eatz); // 'I <3 falafel'
console.log(coffee); // 'black'
console.log(doughnuts); // '["glazed", "chocolate", "blueberry", "cream-filled"]'
```

- Use setItem() to assign a key-value pair to local storage.
- Use getItem() to fetch the value of a key, which is passed in as it's argument.

**JSON and Local Storage**

- We can construct a JS value or object from JSON by parsing it.

```js
const doughnuts = JSON.parse(localStorage.getItem("doughnuts"));
```

--
