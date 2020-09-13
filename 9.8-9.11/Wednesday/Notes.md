# **Notes**

## **Intro to AJAX**

- **`AJAX`** : Stands for Asynchronous Javascript and XML.

**Classic Full Page Reloads**

- Back in the day if you wanted to create something new on the document, it went post the data and return an entirely new page.
- This began to become very slow and inefficient as web pages became more responsive.
- A summary of how it used to work:
  - 1. Submit a requedt to the server.
  - 2. Server makes necessary changes to the database.
  - 3. Server prepares the entire HTML page for your request.
  - 4. Browser loads up the new document to reflect the change.

* At a high level, _AJAX is simply a group of different technologies that work together to allow a website to communicate with a server in the bg without requiring the website to need to reload_.

* Nowadays, XML has more or less been replaced by JSON.

* AJAX introduces more complexity but the benefit is an improved user experience.

* AJAX allows you to keep the user in their current context.

* There are JS libraries that make using AJAX a lot easier (i.e. JQuery)

---

## **The Steps of AJAX**

- To Recap: **`Fetch`** is used to make HTTP Requests, it uses Promises to handle the async nature of HTTP requests and responses.
- **`GET`** : Request used to retrieve information from the server.

```js
fetch("https://jservice.xyz/api/games")
  .then(function (res) {
    console.log("response: ", res);
    return res.json();
  })
  .then(function (data) {
    console.log("data:", data);
  });
```

- The second optional argument of a fetch request is the `options` argument, which can be used to add additional header information.
- **`POST`** : Used to create data on the server.

```js
fetch("https://jservice.xyz/api/categories", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "ACTORS & THEIR FILMS",
  }),
})
  .then(function (res) {
    console.log(res);
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
```

- IMPORTANT! Fetch API will not reject HTTP status codes between 400 & 600 - it will only reject on errors like network errors.
  - Instead, Fetch REQUIRES you to check the `ok` key inside of the Response Object, and if the key is false then the fetch can properly handle the error.
  - Tl;DR Don't forget to check the `ok` key and place a catch error handler at the end of the promise chain.

**AJAX Broken Down**

![AJAX diagram](https://assets.aaonline.io/Module-Web/ajax/ajax.svg)

```js
<button class="want-to-read">Want to Read</button>

<script>
  document.querySelector(".want-to-read").addEventListener("click", function() {
    fetch(`https://api.goodreads.com/books/${BOOK_ID}/update-status`, {
      method: "PATCH", // using PATCH since we'll just be modifying the book's status
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        status: "Want to Read"
      })
    })
      .then(function(res) {
        if (!res.ok) {
          throw Error(res.statusText); // handle any potential server errors
        }
        return res.json(); // extract JSON from the response
      })
      .then(function(data) {
        document.querySelector(".want-to-read").innerHTML = "✓ Want To Read";
      })
      .catch(function(error) {
        const errorMessage = document.createElement("p");
        errorMessage.appendChild(
          document.createTextNode("Something went wrong. Please try again!")
        );

        // This example appends an error message to the body for simplicity's sake.
        // Please do not copy this kind of DOM manipulation in your own projects:
        document.querySelector("body").appendChild(errorMessage);
      });
  });
</script>
```

1. When we first send out the event listener and fetch with filled out options this is ths segment where we are conducting the `Javascript Call`.

2. When the request is sent out it is the arrow leading from the AJAX engine to the Web Server.

3. The arrow from the Web Server back to the AJAX engine is the response from the Server in either XML or JSON format.

4. The response is handled within the AJAX engine and returns the new HTML & CSS for the UI.

- Always rememer to check to see if the `ok` response is received so that potentials errors can be handled correctly.

---
