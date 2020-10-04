# **Notes**

## **Secure Password Hashing**

**Using Bcrypt to Hash Passwords**

- We use `password hashes` instead of actual passwords when storing our User's access credentials in our databases incase of hackers trying to inject SQL queries.

**What is Cryptography?**

- **`Cryptography`** : Way to use algorithms and secret keys to keep information secure.
  - Synonymous with **`Encryption`**.
- **`Adversaries`** : Third-parties attempting to steal user identities.

**What is encryption?**

- Process of translating something that's readable into something that is NOT readable and thenback.
  - I.E. The Caesar Ciper

**How does encryption work?**

- The two kinds of encryption are **`symmetric`** and **`asymmetric`**.
- **`Symmetric`**

  - Use one value to determine how to encrypt data.
  - If you know the value you will be able to reconstitute the data.

- **`Asymmetric`**

  - Use two pieces of information: A Public and Private Key.
  - **`Public Key`** : Shared with anyone wanting to encrypt a message for the recipient.
  - **`Private Key`** : Used to decrypt the message.

- An example of an asymmetric encryption would be establshing an HTTPs connection.
  - It would look something like this:
    1. Server passes a public key to encrypt data along with an SSL certificate.
    2. Client takes the public key to encrypt a value, and generates a private key.
    3. Client sends encrypted value & private key to the server.
    4. Private key is used to decrypt the message.
    5. Server sends the encrypted data to the client using the client's public key.
    6. Browser decrypts the data from the server and renders the decrypted message.

**When is it appropriate to use encryption?**

- Use it to secure wired communication between a client & server (HTTPs or TLS/SSL).
- Also can be used on data stored in a database (like credit card numbers, passwords

**What is hashing?**

- **`Hashing`** : The process of converting a message of any length into a short fixed-length string.

  - They cannot be translated back to their original values.
  - They are deterministic (every time you hash the same input, you receive the same output)

- We will be using **BCrypt** library which utilizes the **Blowfish Cipher**
- A process called **`salting`** can be used to deal with different users using the same password.
  - A salt is a small, random string of bits that is appended to any passord before hashing, making non-unique user passwords unique.

**When is it appropriate to use hashing?**

- Hashing is a popular way of storing passwords.
- **`Password Digest`** : Common term to refer to a hashed password.

**Using Bcrypt to hash user passwords**

- First install `bcryptjs`
- `npm install bcryptjs`

- Require it into your application.
- `const bcrypt = require('bcryptjs');`

- Await your hash method to generate a hashed value.

```js
const saltRounds = 10;
const hash = await bcrypt.hash(password, saltRounds);
```

- Hash method takes in the user password, and # of rounds for salt.

- Log in a user by comparing password and hash value.

```js
const isPassword = await bcrypt.compare(password, hash);
```

- Misc. Notes on Bcrypt

  - Can be used async or sync.
  - If a callback is omitted, bcryptjs will be used asynchronously.

- Example of a full async implementation:

```js
const bcrypt = require("bcryptjs");

async function getHash(password, saltRounds) {
  const hash = await bcrypt.hash(password, saltRounds);
  console.log(hash);
  return hash;
}

async function isPassword(password, hash) {
  const isPassword = await bcrypt.compare(password, hash);
  console.log(isPassword);
  return isPassword;
}

(async () => {
  const hashedPassword = await getHash("P@ssw0rd", 10);
  const passwordIsMatch = await isPassword("P@ssw0rd", hashedPassword);
})();
```

- To use bcrypt synchronously, use the hashSync() method:

```js
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync("B4c0//", salt);

bcrypt.compareSync("B4c0//", hash); // true
bcrypt.compareSync("not_bacon", hash); // false
```

---
