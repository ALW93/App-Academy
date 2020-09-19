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
