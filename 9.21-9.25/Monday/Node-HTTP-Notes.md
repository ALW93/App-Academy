# **Notes**

## **Regular Expressions**

- Regular Expression is a Pattern-Matching Machine

## **URLS**

- **URL** : Uniform Resource Locator.
- There are two important acronyms to understanding how the internet works: IETF & RFC.
- **IETF** : Internet Engineering Task Force.
  - Open standards organization that creates voluntary standards to maintain and improve the usability and interoperability of the Internet.
- **RFC** : Request for Comments.
  - Document created by programmers, engineers, and scientists in the form of a memorandum.
  - When enough people have reviewed the RFC, the IETF will change it's status to 'Internet Standard' which means that everyone should comply with if they decide to implement the standard.

**What is this "resource" thing?**

- The term resource is always used in a general sense for whatever might be identified by a URI.
  - Common examples include an electronic document, an aimge or a source of information with a consistnet purpose.

**The components of a URL**
![pic](https://gyazo.com/2a8d2d4dba6c6ffd21543fc74ff1e473)

- **The Scheme**

  - Used to be called the 'protocol'.
  - The protocol the browser uses to locate the resource using a Uniform Resource Locator.

- **Things between the scheme and authority**

  - The characters '://' must exist between the scheme and the authority.
  - Thanks to Sir Tim Berners-Lee.

- **The Authority**

  - Contains the domain name of the resource that has the resource that you're trying to access.
  - Sometimes also includes a port number.

- **The Path**

  - First part of an HTTP request.
  - If a path is omitted from a URl, it is assumed to be '/'.

- **The Query**

  - Extra information sent to the browser meant for the processing of a request.
  - URL encoded key-value pairs with an equal sign between them.
  - Entries are concatenated with ampersand symbol.
  - If a value is not correct is becomes URL encoded with it's hexadecimal ASCII Code.

- **The Fragment**
  - Never sent to the server.
  - Tells the browser to access a specific section of the page after it loads.

**Reading RFCs**

- RFC's are basically unappealing and technical, not fun to read at all.

---
