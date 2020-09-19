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
