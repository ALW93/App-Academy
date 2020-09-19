# **Notes**

## **Using Select**

**What is a Query?**

- **`Query`** : A question we're asking a database, aiming to get a response back.

- `psql -U postgres`
  - Let's us access the postgres server as the user 'postgres'
  - `-U` stands for 'user'.
  - `\q` is used to quit postgres at any time.

```sql
create table puppies (
  name VARCHAR(100),
  age_yrs NUMERIC(2,1),
  breed VARCHAR(100),
  weight_lbs INT,
  microchipped BOOLEAN
);

insert into puppies
values
('Cooper', 1, 'Miniature Schnauzer', 18, 'yes');

insert into puppies
values
('Indie', 0.5, 'Yorkshire Terrier', 13, 'yes'),
('Kota', 0.7, 'Australian Shepherd', 26, 'no'),
('Zoe', 0.8, 'Korean Jindo', 32, 'yes'),
('Charley', 1.5, 'Basset Hound', 25, 'no'),
('Ladybird', 0.6, 'Labradoodle', 20, 'yes'),
('Callie', 0.9, 'Corgi', 16, 'no'),
('Jaxson', 0.4, 'Beagle', 19, 'yes'),
('Leinni', 1, 'Miniature Schnauzer', 25, 'yes' ),
('Max', 1.6, 'German Shepherd', 65, 'no');
```

- SQL Data Types listed here:
  - **`varchar(n)`** : variable length char, n represents the limit.
  - **`numeric(p, s)`** : floating point number, with _p_ digits and _s_ number of places after the decimal point.
  - **`int`** : 4 byte integer.
  - **`boolean`** : regular boolean value.

* **`SELECT Query`** : Query used to get results back from a table.
  - Syntax `SELECT [columns] FROM [table]`.
  - You can use `SELECT *` to get all rows back in a given table.
  - To select multiple columns you could use:
    ```sql
    SELECT name
        , age_yrs
        , weight_lbs
    FROM puppies;
    ```
  - It is recommended to perform queries with multi-line formatting because column selection can become very long.
  - Also if you format it like this you can easily comment out certain columns with double dash.

---

## **USING WHERE**

**Using SELECT and WHERE**

- We can filter our information from our SELECT queries by using WHERE.

**WHERE clause for a single value**

```sql
SELECT name, breed FROM puppies
  WHERE breed = 'Corgi';
```

- Note that the string must use single quotation marks because PostgreSQL will convert all names to lowercase unless DOUBLE quoted.

**WHERE clause for a list of values**

```sql
SELECT name, breed FROM puppies
  WHERE breed IN ('Corgi', 'Beagle', 'Yorkshire Terrier');
```

- Use the structure WHERE [col] IN ('val', 'val2'...)

**WHERE clause for a range of values**

```sql
SELECT name, breed, age_yrs FROM puppies
  WHERE age_yrs BETWEEN 0 AND 0.6;
```

**ORDER BY**

- You can use `Order By` to get back your data in a specified way.

```sql
SELECT name, breed
FROM puppies
ORDER BY age_yrs DESC;
```

**LIMIT and OFFSET**

- You can limit the amount of rows returned by using the LIMIT keyword.

```sql
SELECT name, breed
FROM puppies
ORDER BY age_yrs
LIMIT 100 OFFSET 100;
```

- You can on the OFFSET keyword after LIMIT to retrieve the next 100 after the LIMIT clause.

**SQL operators**
![ops](https://i.gyazo.com/518d4c03adb94c682e849531fadd9b64.png)

```sql
SELECT name, breed FROM puppies
  WHERE breed NOT IN ('Miniature Schnauzer', 'Basset Hound', 'Labradoodle')
    AND breed NOT LIKE '%Shepherd';
```

- Example of a query with a WHERE clause using several logical operators.
- The % is a wildcard.
  ![math](https://i.gyazo.com/faa67eadb851f326ef8847162dccb9c6.png)
- You can also use mathematical operators in WHERE clauses.

```sql
SELECT name, breed, age_yrs FROM puppies
  WHERE age_yrs * 10 = 6;
```

![comp](https://i.gyazo.com/46ce9306ea72228a79f9c27a9666c3e9.png)

- You can also use comparison operators.

```sql
SELECT name, breed, weight_lbs FROM puppies
  WHERE weight_lbs > 50;
```

---

## **Using INSERT**
