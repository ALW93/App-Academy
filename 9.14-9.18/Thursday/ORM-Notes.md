# **Notes**

## **Installing and Using Sequelize**

- **`Sequelize`** : A Javascript Library that is used to access data stored in a SQL database.

- **`ORM`** : Object Relational Mapping is a tool used to allow a JS Programmer to fetch and store data in a SQL database using JS functions instead of directly writing SQL.

**What is an ORM?**

- Object Relational Mapping is a library that allows you to access data stored in a SQL database through object-oriented, non-SQL code.
- To add Sequelize to a project, use `npm init` before you install:
  ```
  npm install sequelize@^5.0.0
  npm install sequelize-cli@^5.0.0
  npm install pg@^8.0.0
  ```

**How to Initialize Sequelize**

- Use `npx sequelize init` to automatically mirgrate the directory structure into your project.
- Inside the directory you will find different sections, referred to an `environments`.
- The Development section is where we do our dev work, it will look something like this with some basic modifications:

```js
{
  "development": {
    "username": "catsdbuser",
    "password": "catsdbpassword",
    "database": "catsdb",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

**Verifying that Sequelize can connect to the Database**

```js
// ./index.js

const { sequelize } = require("./models");

async function main() {
  try {
    await sequelize.authenticate();
  } catch (e) {
    console.log("Database connection failure.");
    console.log(e);
    return;
  }

  console.log("Database connection success!");
  console.log("Sequelize is ready to use!");

  // Close database connection when done with it.
  await sequelize.close();
}

main();

// Prints:
//
// Executing (default): SELECT 1+1 AS result
// Database connection success!
// Sequelize is ready to use!
```

- .authenticate() returns a promise.
- use `sequelize.close()` to close a connetion to the database.

**Using Sequelize to Generate the Model File**

```shell
npx sequelize model:generate --name Cat --attributes "firstName:string,specialSkill:string"
```

- This command will generate two files:
  - A _model_ file and a _migration_ file.

**Examining (And Modifying) A Sequelize Model File**

```js
// ./models/cat.js

"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cat = sequelize.define(
    "Cat",
    {
      firstName: DataTypes.STRING,
      specialSkill: DataTypes.STRING,
    },
    {}
  );
  Cat.associate = function (models) {
    // associations can be defined here
  };
  return Cat;
};
```

- This is how our generated cat model will look like - this code is exporting a function that defines a 'Cat' class.

- the .define() method creates a class.
- The first argument of define() is the name of our class and the second is an object containing information of the columns we want in our Cats table.

**Using The Cat Model To Fetch And Update SQL Data**

```js
const { sequelize, Cat } = require("./models");

async function main() {
  try {
    await sequelize.authenticate();
  } catch (e) {
    console.log("Database connection failure.");
    console.log(e);
    return;
  }

  console.log("Database connection success!");
  console.log("Sequelize is ready to use!");

  const cat = await Cat.findByPk(1);
  console.log(cat.toJSON());

  await sequelize.close();
}

main();

// This code prints:
//
// Executing (default): SELECT "id", "firstName", "specialSkill", "age", "createdAt", "updatedAt" FROM "Cats" AS "Cat" WHERE "Cat"."id" = 1;
// {
//   id: 1,
//   firstName: 'Markov',
//   specialSkill: 'sleeping',
//   age: 5,
//   createdAt: 2020-02-03T21:32:28.960Z,
//   updatedAt: 2020-02-03T21:32:28.960Z
// }
```

- The .findByPK() static class method is used to fetch a single cat with the id of 1.

**Reading And Changing Record Attributes**

```js
async function main() {
  // Sequelize authentication code from above...

  const cat = await Cat.findByPk(1);
  console.log(`${cat.firstName} has been assigned id #${cat.id}.`);
  console.log(`They are ${cat.age} years old.`);
  console.log(`Their special skill is ${cat.specialSkill}.`);

  await sequelize.close();
}

main();

// This code prints:
//
// Executing (default): SELECT "id", "firstName", "specialSkill", "age", "createdAt", "updatedAt" FROM "Cats" AS "Cat" WHERE "Cat"."id" = 1;
// Markov has been assigned id #1.
// They are 5 years old.
// Their special skill is sleeping.
```

- The easiest way to access individual column values is to directly access those attributes from the Cat object instance itself.

- Because access data via an object like this works the same way as accessing any other JS class, we can also change values in a database in a similar fashion:

```js
async function main() {
  // Sequelize authentication code from above...

  // Fetch existing cat from database.
  const cat = await Cat.findByPk(1);
  // Change cat's attributes.
  cat.firstName = "Curie";
  cat.specialSkill = "jumping";
  cat.age = 123;

  // Save the new name to the database.
  await cat.save();

  await sequelize.close();
}

// Prints:
//
// Executing (default): SELECT "id", "firstName", "specialSkill", "age", "createdAt", "updatedAt" FROM "Cats" AS "Cat" WHERE "Cat"."id" = 1;
// Executing (default): UPDATE "Cats" SET "firstName"=$1,"specialSkill"=$2,"age"=$3,"updatedAt"=$4 WHERE "id" = $5

main();
```

- You must use the .save() method otherwise your function will have **no effect** on the database.

---

## **Database Migrations**
