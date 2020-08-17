# **Objectives**

**Javascript Classes**

**1. Define a constructor function using ES5 syntax.**

```js
function Email(sender, text) {
  this.sender = sender;
  this.text = text;
}
```

**2. Define a method on the prototype of a constructor function.**

```js
function Email(sender, text) {
  this.sender = sender;
  this.text = text;
}

Email.prototype.getTextAndSender = function () {
  return `${this.sender}: ${this.text}`;
};
```

**3. Declare a class using ES6 syntax.**

```js
class Email {
  constructor(sender, subject, text) {
    this.sender = sender;
    this.subject = subject;
    this.text = text;
  }
}
```

**4. Define an instance method on a class (ES6).**

```js
class Email {
  constructor(sender, subject, text) {
    this.sender = sender;
    this.subject = subject;
    this.text = text;
  }

  getStuff() {
    return `${this.sender} : ${this.text}`;
  }
}
```

**5. Define a static method on a class (ES6).**

```js
class Email {
  constructor(sender, subject, text) {
    this.sender = sender;
    this.subject = subject;
    this.text = text;
  }

  static getStuff() {}
}
```

**6. Instantiate an instance of a class using the new keyword.**

```js
const verizon = new ServiceProvider("Verizon");
```

**7. Implement inheritance using the ES6 extends syntax for an ES6 class.**

```js
class Email {
  constructor(sender, subject, text) {
    this.sender = sender;
    this.subject = subject;
    this.text = text;
  }
}
```

```js
class DangerousEmail extends Email {
    constructor(sender, subject, text, malware) {
        super(sender, subject, text) {
            this.malware = new Malware;
        }
    }
}
```

**8. Utilize the super keyword in a child class to inherit from a parent class.**

```js
class DangerousEmail extends Email {
    constructor(sender, subject, text, malware) {
        super(sender, subject, text) {
            this.malware = new Malware;
        }
    }
}
```

**9. Utilize module.exports and require to import and export functions and class from one file to another.**

```js
module.exports = {
  One: One,
  Two: Two,
  Three: Three,
};
```

```js
const fs = require("fs");
const lodash = require("lodash");
const something = require("./something.js");
```

---
