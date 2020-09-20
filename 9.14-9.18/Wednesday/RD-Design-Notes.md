# **Notes**

## **Relational Database Design**

## **Creating a Schema For Relational Database Design**

- Schemas allow us to easily visualize database tables and their relationships to one another.

**What is Relational Database Design?**

- **RDD** : Relational Database Design differs from other Databases because data is organized into tables and all types of data access are carried out via controlled transactions.
  - Remember: Tables = Entities, Rows = Records, Columns = Fields.

**Stages of Relational Database Design**

1. **`Define the purpose & entitites of the Relational DB.`**

   - Why is the database being created?
   - What problem is it solving?
   - What is the data used for?

2. **`Identify the Primary keys.`**
   - Identify the PK of each table.
3. **`Establish Table Relationships.`**
   - There are theee types of relational database table relationships:
     - 1. **One-To-One**
       - One record in a table is associated with only one record in another table.
       - The least common type of table relationship.
     - 2. **One-To-Many**
       - Each record in a table is associated with multiple records in another table.
     - 3. **Many-To-Many**
       - Multiple records in one table are associated with multiple records in another table.
       - Usually we would create a third table for this relationship called a **`join table`**
4. **`Apply Normalization Rules.`**
   - **`Normalization`** : Process of optimizing the database structure so that redundancy and confusion are eliminated.
   - Rules are called 'normal forms'
     - 1. First normal form.
       - Eliminate repeating groups in tables.
       - Create sep. table for each set of related data.
       - ID each set of related data with a primary key.
     - 2. Second normal form.
       - Create sep. tables for sets of values that apply to multiple records.
       - Related these tables with a foreign key.
     - 3. Third normal form.
       - Eliminate fields that do not depend on the table's key.
     - 4. Boyce-Codd normal form.
     - 5. Fifth normal form.
   - The first three are widely used in practice and the fourth/fifth less so.

---

## **Transactions**

- Using Transactions allow us to make changes to a SQL database in a consistent and durable way, and it is considered best practice to use them regularly.

- **`Transaction`** : Single unit of work, which can contain multiple operations, performed on a database.
  - Bundles multiple steps into a single, all-or-nothing operation.

**Implicit vs. explicit transactions**

- Technically every SQL statement is a transaction.

```sql
INSERT INTO hobbits(name,purpose)
  VALUES('Frodo','Destroy the One Ring of power.');
```

- This statement would be a **`implicit`** transaction.
- On the flip side **`explicit`** transactions will allow us to create save points and roll back to whatever point in time we choose.

**PostgreSQL transactional commands**

- **`BEGIN`** : Initiates a transaction block. All Statements after a BEGIN command will be executed in a single transaction until COMMIT or ROLLBACK is called.

```sql
BEGIN;
  INSERT INTO hobbits(name,purpose)
    VALUES('Frodo','Destroy the One Ring of power.');
```

- **`COMMIT`** : Commits a current transaction, all changes made by this transaction become visible to others and are guaranteed to be durable if a crash occurs.

```sql
BEGIN;
  INSERT INTO hobbits(name,purpose)
    VALUES('Frodo','Destroy the One Ring of power.');
COMMIT;
```

- **`ROLLBACK`** : Rolls back current transaction and removes all updates made by the transaction.

```sql
BEGIN;
  INSERT INTO hobbits(name,purpose)
    VALUES('Frodo','Destroy the One Ring of power.');
ROLLBACK;
```

- **`SAVEPOINT`** : Establishes a new save point within the current transaction.

```sql
BEGIN;
  DELETE FROM fellowship
    WHERE age > 100;
  SAVEPOINT first_savepoint;
  DELETE FROM fellowship
    WHERE age > 80;
  DELETE FROM fellowship
    WHERE age >= 40;
  ROLLBACK TO first_savepoint;
COMMIT;
```

- **`SET TRANSACTION`** : Sets the characteristics of the current transaction.

```sql
BEGIN;
  SET TRANSACTION READ ONLY;
  ...
COMMIT;
```

**When to use transactions and why**

- Good to use when making any updates, insertions, or deletions to a database.

- Help us deal with crashes, failures, data consistency, and error handling.

- **`Atomicity`** is another feature that is a benefit of transactions.

**Transaction properties: ACID**

- A SQL transaction has four properties known collectively as **`ACID`** (Atomic, Consistent, Isolated, and Durable)
- **`Atomicity`** : All changes to data are performed as if they are a single operation.
  - You can also refer to the A as 'Abortability'
  - I.E. if an app transfers funds from one account to another, the atomic nature of transactions will ensure that if a debt is successfully made, the credit will be properly transferred.
- **`Consistency`** : Data is in a consistent start when a transaction starts and ends.
  - I.E. if a transfer is scheduled, this prop ensures total value of funds in both accounts is the same at the start and end of a transaction.
- **`Isolation`** : Intermediate state of a transaction is invisible to othe rtransactioned, they appear to be serialized.
  - I.E. continuing our money transfer example, when a transfer occurs this prop ensures that transactions can see funds in one account or the other BUT NOT both NOR neither.
- **`Durable`** : After a transaction successfully completes, changes to data persists and are not undone even in system failure.
  - I.E. this prop ensures our transaction will success and cannot be reversed in the event of a failure.

**Banking transaction example**

```sql
BEGIN;
  UPDATE accounts SET balance = balance - 100.00
      WHERE name = 'Alice';
  UPDATE branches SET balance = balance - 100.00
      WHERE name = (SELECT branch_name FROM accounts WHERE name = 'Alice');
  UPDATE accounts SET balance = balance + 100.00
      WHERE name = 'Bob';
  UPDATE branches SET balance = balance + 100.00
      WHERE name = (SELECT branch_name FROM accounts WHERE name = 'Bob');
COMMIT;
```

---

## **Subqueries and JOINs**

**Joins vs. Subqueries**
**What is a JOIN?**

- JOIN allows us to retrieve rows from multiple tables.
  ![inner](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-SQL/assets/inner-join-venn-diagram.png)

```sql
SELECT * FROM puppies
INNER JOIN breeds ON (puppies.breed_id = breeds.id);
```

- There are a few different types of JOIN operations:
  - **`Inner Join`** : Returns results containing rows in the left table that match rows in the right table.
  - **`Left Join`** : Returns a set of results containing all rows from the left table with the matching rows from the right table. If there is no match, the right side will have null values.
  - **`Right Join`** : Returns a set of results containing all rows from the right table with the matching rows from the left table. If there is no match, the left side will have null values.
  - **`Full Outer Join`** : Returns a set of results containing all rows from both the left and right tables, with matching rows from both sides where avail. If there is no match the missing side contains null values.
  - **`Self-Join`** : Query in which a table is joined to itslef, useful for comparing values in a column of rows within the same table.

**What is a subquery?**

- A SELECT statement nested inside another SELECT statement.

```
postgres=# SELECT * FROM puppies;
 id |   name   | age_yrs | breed_id | weight_lbs | microchipped
----+----------+---------+----------+------------+--------------
  1 | Cooper   |     1.0 |        8 |         18 | t
  2 | Indie    |     0.5 |        9 |         13 | t
  3 | Kota     |     0.7 |        1 |         26 | f
  4 | Zoe      |     0.8 |        6 |         32 | t
  5 | Charley  |     1.5 |        2 |         25 | f
  6 | Ladybird |     0.6 |        7 |         20 | t
  7 | Callie   |     0.9 |        4 |         16 | f
  8 | Jaxson   |     0.4 |        3 |         19 | t
  9 | Leinni   |     1.0 |        8 |         25 | t
 10 | Max      |     1.6 |        5 |         65 | f
(10 rows)
```

```sql
SELECT
  puppies.name,
  age_yrs,
  breeds.name
FROM
  puppies
INNER JOIN
  breeds ON (breeds.id = puppies.breed_id)
WHERE
  age_yrs > (
    SELECT
      AVG (age_yrs)
    FROM
      puppies
  );
```

**Multiple-row subquery**

```sql
SELECT *
FROM friends
WHERE
  puppy_id IN (
    SELECT puppy_id
    FROM puppies
    WHERE
      age_yrs < 0.6
  );
```

- We can also use a JOIN operation instead of the WHERE clause like in the above example.

```sql
SELECT *
FROM friends
INNER JOIN puppies ON (puppies.puppy_id = friends.puppy_id)
WHERE
  puppies.age_yrs < 0.6;
```

**Should I use a JOIN or a subquery?**

- Joins are better when you want to combine rows from one or more tables based on a match condition.

- Subqueries work great when you're only returning a single value.

- When returning multiple rows, you could go with either subQ's or joins.

---

## **Indexes and Performance Analysis**

- **`PostgreSQL Index`** : Works similarly like an index in the back of a book, they provide special lookup tables to let us make faster database queries.

- The Syntax for creating index is as follows:

```sql
CREATE INDEX index_name ON table_name (column_name);

CREATE INDEX addresses_phone_index ON addresses (phone_number);

DROP INDEX addresses_phone_index;
```

**Types of indexes**

There are several types of indexes use in Postgres: B-tree, Hash, GiST, and GIN.

- **`Single-Column Indexes`** Uses only one table column.
  - `CREATE INDEX addresses_phone_index ON addresses (phone_number);`
- **`Multiple-Column Indexes`** Uses more than one table column.
  - `CREATE INDEX idx_addresses_city_post_code ON table_name (city_id, postal_code);`
- **`Partial Indexes`** Uses subset of a table defined by a conditional expression.
  - `CREATE INDEX addresses_phone_index ON addresses (phone_number) WHERE (city_id = 2);`

**When to use an index**

- Overall DB indexes are known to enhance performance when performing queries, however there are certain situations where it is not recommended:

  - When working with small tables.
  - When table has large batch updates or insert operations.
  - When working with columns that have many NULL values.
  - When working with columns that are frequently manipulated.

- Using EXPLAIN and ANALYZE keywords can give us performance data of our queries.

```js
EXPLAIN ANALYZE SELECT *
FROM tenk1 t1, tenk2 t2
WHERE t1.unique1 < 100 AND t1.unique2 = t2.unique2;

                                                            QUERY PLAN
----------------------------------------------------------------------------------------------------------------------------------
 Nested Loop  (cost=2.37..553.11 rows=106 width=488) (actual time=1.392..12.700 rows=100 loops=1)
   ->  Bitmap Heap Scan on tenk1 t1  (cost=2.37..232.35 rows=106 width=244) (actual time=0.878..2.367 rows=100 loops=1)
         Recheck Cond: (unique1 < 100)
         ->  Bitmap Index Scan on tenk1_unique1  (cost=0.00..2.37 rows=106 width=0) (actual time=0.546..0.546 rows=100 loops=1)
               Index Cond: (unique1 < 100)
   ->  Index Scan using tenk2_unique2 on tenk2 t2  (cost=0.00..3.01 rows=1 width=244) (actual time=0.067..0.078 rows=1 loops=100)
         Index Cond: (unique2 = t1.unique2)
 Total runtime: 14.452 ms
```

---

## **Accessing Data from Node.js**

**Node-Postgres And Prepared Statements**

- The **node-postgres** library is the library used for node apps to connect to postgres applications.

**Connecting**

- Use a POOL of client objects to connect to the database.
  ![pool](https://i.gyazo.com/fdf1e1dca599f64d1b78315e3344a865.png)

```js
const { Pool } = require("pg");

const pool = new Pool({
  user: "application_user",
  password: "iy7qTEcZ",
});

const results = await pool.query(`
  SELECT id, name, age_yrs
  FROM puppies;
`);

console.log(results);
```

**Prepared Statement**

- Prepared Statements are SQL statements that parameters in them that you can substitute values.

```js
in inside an array.

await pool.query(`
  INSERT INTO puppies (name, age_yrs, breed, weight_lbs, microchipped)
  VALUES ($1, $2, $3, $4, $5);
`, [name, age, breedName, weight, isMicrochipped]);
```

```js
const { Pool } = require("pg");

const allPuppiesSql = `
  SELECT id, name, age_yrs, breed, weight_lbs, microchipped
  FROM puppies;
`;

const pool = new Pool({
  database: "«database name»",
});

async function selectAllPuppies() {
  const results = await pool.query(allPuppiesSql);
  console.log(results.rows);
  pool.end();
}

const id = Number.parseInt(process.argv[2]);
selectOnePuppy(id);
```

---
