# **Notes**

## **All about Testing**

- _The general idea across all testing frameworks is to allow developers to write code that would specify the behavior of a function or module or class._

- Tesing one function at a time is vulnerable to false negatives and false positives.

- Why do we test?

  - To make sure everything works.
  - Increase flexibility & reduce fear of code.

- **Automated Tests** are known as **Specs**, they:
  - Make collaboration easier.
  - Produce Documentation.

**How We Test**

- **Testing Framework** : Runs the tests and presents them to a user.
- **Assertion Libraries** : Backbone of written tests, the code that we use to write our tests.

- **Mocha** : JS testing framwork which is highly flexible; supports a variety of assertion libraries.
- **Domain Specific Language** : Refers to a computer language specialized for a particular purpose

**What do we Test?**

- The public interface:
  - Ask yourself, "What is the public interface of the module or class I'm writing?"
  - When in doubt, make sure that you at least have the most important and/or complex parts of that interface working as intended.

![testing pyr](https://2.bp.blogspot.com/-YTzv_O4TnkA/VTgexlumP1I/AAAAAAAAAJ8/57-rnwyvP6g/s1600/image02.png)

> The Testing Pyramid

- **Unit Tests** : The smallest unit of testing.

  - Used to test smallest pieces in isolation before putting everything together.
  - Tests ONE THING.

- **Integration Tests** : Test the interactions between two pieces of your application.

- **End to End** : Closest automated tests come to testing the actual user experience of your application.

**Reading Tests**

- Most important thing about a test is that it is **readable** and **understandable**

```js
describe("avgValue()", function () {
  it("should return the average of an array of numbers", function () {
    assert.equal(avgValue([10, 20]), 15);
  });
});
```

- avgValue() => The function we will be testing.
- it("string") => describes the desired output.

---

## **Test-Driven Development**

- TDD is a quick repetitive cycle that revolves around first determining what a piece of code should do and writing tests for that behavior _before actually writing any code_.

**Motivations for TDD**
