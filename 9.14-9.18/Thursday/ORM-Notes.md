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

**Using Database Migrations**

- **`Migration`** : File that includes code to create, modify, or drop SQL tables.

**Sequelize Migration Files**

- As a recap, to generate a Cat Model file we can use:
- `npx sequelize model:generate --name Cat --attributes "firstName:string,specialSkill:string"`
- This is how the auto-generated Migration File will look like:

```js
// ./migrations/20200203211508-create-cat.js

"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Cats", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      specialSkill: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Cats");
  },
};
```

- Two Functions will be exported: `up` and `down`.
- `UP`: Tells Sequelize how to create our Cat's Table.
- `DOWN`: Tells Sequelize how to 'undo' our up function, or helps us drop the Cats table.

**Running A Migration**

- Now that our migration code is set after using model:generate we need to run it to actually create our table, we can do so using:
  `npx sequelize db:migrate`
- It will create something like this:

```
catsdb=> \d "Cats";
                                         Table "public.Cats"
    Column    |           Type           | Collation | Nullable
--------------+--------------------------+-----------+----------
 id           | integer                  |           | not null
 firstName    | character varying(255)   |           |
 specialSkill | character varying(255)   |           |
 createdAt    | timestamp with time zone |           | not null
 updatedAt    | timestamp with time zone |           | not null
Indexes:
    "Cats_pkey" PRIMARY KEY, btree (id)
```

**Rolling Back A Migration**

- Sometimes we may make a mistake in our migration file, to fix this we can undo the migration, make the necessary changes, and then re-run db:migrate.
  `npx sequelize db:migrate:undo`
- When we run this command we are using the 'down' function in our migration page.

* up And down are Asynchronous

**Writing A down Method**

```js
module.exports = {
  // ...
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Cats");
  },
};

// OR, async/await way:
module.exports = {
  // ...
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Cats");
  },
};
```

- If we left the down method empty, then when we use rollback on a table nothing would happen!
- NEVER manually drop a table on a production database.

**Advantages Of Migrations**

- Written in JS, which may be simpler than writing purely in SQL.
- Migration files that sore SQL schema code change permanently.
- Easier for collaboraters to clone your code.
- Easier to rolleback database changes to fix bugs.

- IMPORTANT: Never rolleback migrations that have been run on a production server.

---

## **CRUD Operations with Sequelize**

- There are four general ways to interact with a database: Creating Data, Reading Data, Updating Data, and Destroying Data.

**Creating A New Record**

```js
const { sequelize, Cat } = require("./models");

async function main() {
  // Constructs an instance of the JavaScript `Cat` class. **Does not
  // save anything to the database yet**. Attributes are passed in as a
  // POJO.
  const cat = Cat.build({
    firstName: "Markov",
    specialSkill: "sleeping",
    age: 5,
  });

  // This actually creates a new `Cats` record in the database. We must
  // wait for this asynchronous operation to succeed.
  await cat.save();

  console.log(cat.toJSON());

  await sequelize.close();
}

main();
```

- To create a new record in one step you can also use the create() method.

```js
const { sequelize, Cat } = require("./models");

async function main() {
  const cat = await Cat.create({
    firstName: "Curie",
    specialSkill: "jumping",
    age: 4,
  });

  console.log(cat.toJSON());

  await sequelize.close();
}

main();
```

**Reading A Record By Primary Key**

```js
const { sequelize, Cat } = require("./models");

async function main() {
  // Fetch the cat with id #1.
  const cat = await Cat.findByPk(1);
  console.log(cat.toJSON());

  await sequelize.close();
}

main();
```

**Updating A Record**

```js
const { sequelize, Cat } = require("./models");

async function main() {
  const cat = await Cat.findByPk(1);

  console.log("Old Markov: ");
  console.log(cat.toJSON());

  // The Cat object is modified, but the corresponding record in the
  // database is *not* yet changed at all.
  cat.specialSkill = "super deep sleeping";
  // Only by calling `save` will the data be saved.
  await cat.save();

  console.log("New Markov: ");
  console.log(cat.toJSON());

  await sequelize.close();
}

main();
```

- You must call the save() method if you actually want to change any data.

**Destroying A Record**

```js
const process = require("process");

const { sequelize, Cat } = require("./models");

async function main() {
  const cat = await Cat.findByPk(1);
  // Remove the Markov record.
  await cat.destroy();

  await sequelize.close();
}

main();
```

- We can also destroy a record in one step like so:

```js
async function main() {
  // Destroy the Cat record with id #3.
  await Cat.destroy({ where: { id: 3 } });

  await sequelize.close();
}

main();
```

---

## **Querying Using Sequelize**

**Basic Usage Of findAll To Retrieve Multiple Records**

```js
const { sequelize, Cat } = require("./models");

async function main() {
  // `findAll` asks to retrieve _ALL_ THE CATS!!  An array of `Cat`
  // objects will be returned.
  const cats = await Cat.findAll();

  // Log the fetched cats.
  console.log(JSON.stringify(cats, null, 2));

  await sequelize.close();
}

main();
```

- The third argument we're passing in '2' will print the result with nice spacing, null is passed into skipt the second arg.

- Since we typically don't want to fetch every single record, we can issue a WHERE clause to do this.

```js
const { sequelize, Cat } = require("./models");

async function main() {
  // Fetch all cats named Markov.
  const cats = await Cat.findAll({
    where: {
      firstName: "Markov",
    },
  });
  console.log(JSON.stringify(cats, null, 2));

  await sequelize.close();
}

main();
```

- Retrieves all cat who's name is 'Markov'

```js
const { sequelize, Cat } = require("./models");

async function main() {
  // Fetch all cats named either Markov or Curie.
  const cats = await Cat.findAll({
    where: {
      firstName: ["Markov", "Curie"],
    },
  });
  console.log(JSON.stringify(cats, null, 2));

  await sequelize.close();
}

main();
```

- Retrieves all cats who's name is either Markov or Curie

**Using findAll To Find Objects Not Matching A Criterion**

```js
const { Op } = require("sequelize");
const { sequelize, Cat } = require("./db/models");

async function main() {
  const cats = await Cat.findAll({
    where: {
      firstName: {
        // Op.ne means the "not equal" operator.
        [Op.ne]: "Markov",
      },
    },
  });
  console.log(JSON.stringify(cats, null, 2));

  await sequelize.close();
}

main();
```

- Using the [Op.ne] property helps filter out 'ne' or not equal. Op has many other methods, refer to the documentation.
- The bracket performs key interpolation.

**Combining Criteria with Op.and**

```js
const { Op } = require("sequelize");
const { sequelize, Cat } = require("./models");

async function main() {
  // fetch cats with name != Markov AND age = 4.
  const cats = await Cat.findAll({
    where: {
      firstName: {
        [Op.ne]: "Markov",
      },
      age: 4,
    },
  });
  console.log(JSON.stringify(cats, null, 2));

  await sequelize.close();
}

main();
```

- Alt way

```js
const { Op } = require("sequelize");
const { sequelize, Cat } = require("./models");

async function main() {
  const cats = await db.Cat.findAll({
    where: {
      [Op.and]: [{ firstName: { [Op.ne]: "Markov" } }, { age: 4 }],
    },
  });
  console.log(JSON.stringify(cats, null, 2));

  await sequelize.close();
}

main();
```

- The first query was an OR operation, since it mapped a column to an array of values.
- This one is an AND operation since it's passing two requirements.

**Combining Criteria with Op.or**

```js
const { Op } = require("sequelize");
const { sequelize, Cat } = require("./models");

async function main() {
  // fetch cats with name == Markov OR age = 4.
  const cats = await Cat.findAll({
    where: {
      [Op.or]: [{ firstName: "Markov" }, { age: 4 }],
    },
  });
  console.log(JSON.stringify(cats, null, 2));

  await sequelize.close();
}

main();
```

**Querying With Comparisons**

```js
const { Op } = require("sequelize");
const { sequelize, Cat } = require("./models");

async function main() {
  // Fetch all cats whose age is > 4.
  const cats = await Cat.findAll({
    where: {
      age: { [Op.gt]: 4 },
    },
  });
  console.log(JSON.stringify(cats, null, 2));

  await sequelize.close();
}

main();
```

- 'gt' greater than | 'lt' less than.

**Ordering Results**

```js
const { sequelize, Cat } db = require("./models");

async function main() {
  const cats = await Cat.findAll({
    order: [["age", "DESC"]],
  });
  console.log(JSON.stringify(cats, null, 2));

  await sequelize.close();
}

main();
```

- We can specify sort-order with a doubly-nested array.

**Limiting Results and findOne**

```js
const { sequelize, Cat } = require("./models");

async function main() {
  const cats = await Cat.findAll({
    order: [["age", "DESC"]],
    limit: 1,
  });
  console.log(JSON.stringify(cats, null, 2));

  await sequelize.close();
}

main();
```

- Limiting 1 result on a decremented result query will provide you with the oldest cat in this particular query.

- Since findAll returns an array and we're just looking for one value, using findOne() may be a more suitable method than findAll()

```js
const { sequelize, Cat } = require("./models");

async function main() {
  const cat = await Cat.findOne({
    order: [["age", "DESC"]],
  });
  console.log(JSON.stringify(cat, null, 2));

  await sequelize.close();
}

main();
```

- In the case there is no record matching our call with findOne, we will get 'null' returned as a result.

---

## **Validations With Sequelize**

- **Validation** is code JS code that makes sure that data is valid.

**Validating That An Attribute Is Not NULL**

- On our model files:

```js
// ./models/cat.js
"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cat = sequelize.define(
    "Cat",
    {
      firstName: DataTypes.STRING,
      specialSkill: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {}
  );
  Cat.associate = function (models) {
    // associations can be defined here
  };
  return Cat;
};
```

- To ensure that none of these parameters pass us null for our data rows we can edit it to look like this:

```js
// ./models/cat.js
"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cat = sequelize.define(
    "Cat",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "firstName must not be null",
          },
        },
      },
      specialSkill: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "specialSkill must not be null",
          },
        },
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "age must not be null",
          },
        },
      },
    },
    {}
  );
  Cat.associate = function (models) {
    // associations can be defined here
  };
  return Cat;
};
```

**The notEmpty Validation**

- Because setting a name to an empty string would avoid the null output, we can also add a validation to prevent empty strings.

```js
// ./models/cat.js
"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cat = sequelize.define(
    "Cat",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "firstName must not be null",
          },
          notEmpty: {
            msg: "firstName must not be empty",
          },
        },
      },
      specialSkill: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "specialSkill must not be null",
          },
          notEmpty: {
            msg: "specialSkill must not be empty",
          },
        },
      },
      // ...
    },
    {}
  );
  Cat.associate = function (models) {
    // associations can be defined here
  };
  return Cat;
};
```

**Forbidding Long String Values**

- We can also use 'len' to create a character limit validation.

```js
// ./models/cat.js
"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cat = sequelize.define(
    "Cat",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "firstName must not be null",
          },
          notEmpty: {
            msg: "firstName must not be empty",
          },
          len: {
            args: [0, 8],
            msg: "firstName must not be more than eight letters long",
          },
        },
      },
      // ...
    },
    {}
  );
  Cat.associate = function (models) {
    // associations can be defined here
  };
  return Cat;
};
```

**Validating That A Numeric Value Is Within A Specified Range**

- We can also pass in validations to check a max and min to specify a range.

```js
// ./models/cat.js
"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cat = sequelize.define(
    "Cat",
    {
      // ...
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "age must not be null",
          },
          min: {
            args: [0],
            msg: "age must not be less than zero",
          },
          max: {
            args: [99],
            msg: "age must not be greater than 99",
          },
        },
      },
    },
    {}
  );
  Cat.associate = function (models) {
    // associations can be defined here
  };
  return Cat;
};
```

**Validating That An Attribute Is Among A Finite Set Of Values**

- We can use isIn validation to verify that an input value is included in a pre-defined data array.

```js
// ./models/cat.js
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cat = sequelize.define('Cat', {
    // ...
    specialSkill: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "specialSkill must not be null",
        },
        notEmpty: {
          msg: "specialSkill must not be empty",
        },
        isIn: {
          args: [["jumping", "sleeping", "purring"]],
          msg: "specialSkill must be either jumping, sleeping, or purring",
        },
      },
    },
    // ...
  }, {});
  Cat.associate = function(models) {
    // associations can be defined here
  };
  return Cat;
```

- Note that the array is doubly nested because want to pass in one argument.

---

## **Transactions With Sequelize**

**The Problem: Database Updates Can Fail**
Database updates can fail for a large number of reasons:

1. Command get's sent but the DB has been shut down by the database administrator.
2. Bug in the database cases the system to crash.
3. Power loss to the machine powering the DB.
4. Internet connection disruption.
5. Update asks the database to violate a pre-defined constraint.

**The Solution: Database Transactions**
**The BankAccounts Schema**

```js
// ./models/bank_account.js
"use strict";
module.exports = (sequelize, DataTypes) => {
  // Define BankAccount model.
  const BankAccount = sequelize.define(
    "BankAccount",
    {
      // Define clientName attribute.
      clientName: {
        type: DataTypes.STRING,
        allowNull: false,
        // Define validations on clientName.
        validate: {
          // clientName must not be null.
          notNull: {
            msg: "clientName must not be NULL",
          },
          // clientName must not be empty.
          notEmpty: {
            msg: "clientName must not be empty",
          },
        },
      },

      // Define balance attribute.
      balance: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // Define validations on balance.
        validate: {
          // balance must not be less than zero.
          min: {
            args: [0],
            msg: "balance must not be less than zero",
          },
        },
      },
    },
    {}
  );

  return BankAccount;
};
```

**Example: An Update Fails Because Of Validation Failure**

```js
// ./index.js
const { sequelize, BankAccount } = require("./models");

// This code will try to transfer $7,500 from Markov to Curie.
async function main() {
  // Fetch Markov and Curie's accounts.
  const markovAccount = await BankAccount.findByPk(1);
  const curieAccount = await BankAccount.findByPk(2);

  try {
    // Increment Curie's balance by $7,500.
    curieAccount.balance += 7500;
    await curieAccount.save();

    // Decrement Markov's balance by $7,500.
    markovAccount.balance -= 7500;
    await markovAccount.save();
  } catch (err) {
    // Report if anything goes wrong.
    console.log("Error!");

    for (const e of err.errors) {
      console.log(`${e.instance.clientName}: ${e.message}`);
    }
  }

  await sequelize.close();
}

main();
```

- This will fail because the validation we stt for the balance to never be less than zero.

**Incorrect Solutions**

- For our code to be resilient to unavoidable failures, there is no other choice but to use a database transaction.

**Using A Database Transaction With Sequelize**

```js
// ./index.js
const { sequelize, BankAccount } = require("./models");

async function main() {
  // Fetch Markov and Curie's accounts.
  const markovAccount = await BankAccount.findByPk(1);
  const curieAccount = await BankAccount.findByPk(2);

  try {
    await sequelize.transaction(async (tx) => {
      // Increment Curie's balance by $7,500.
      curieAccount.balance += 7500;
      await curieAccount.save({ transaction: tx });

      // Decrement Markov's balance by $7,500.
      markovAccount.balance -= 7500;
      await markovAccount.save({ transaction: tx });
    });
  } catch (err) {
    // Report if anything goes wrong.
    console.log("Error!");

    for (const e of err.errors) {
      console.log(`${e.instance.clientName}: ${e.message}`);
    }
  }

  await sequelize.close();
}

main();
```

**Aside: What Is The Transaction Object?**

- TX is just a unique generated ID to pair with our transaction.

**Transactions Prevent Race Conditions**

- Sometimes race conditions happen, for example if our program races between reading the account balances and also updating those balances, we create a race condition.

---
