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
