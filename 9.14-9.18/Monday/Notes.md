# **Notes**

## **Make it Pretty**

- Keep in mind the actual engineers will not be looking at your projects first, the non-technical recruiters will be doing so (so make your projects beautiful and well designed!)
- What recruiters are looking for:
  - Professionalism & Good Design.
  - [Examples of Web Dev Interview Q's](https://www.toptal.com/designers/web/interview-questions)

**Attributes of Great Looking Websites**

- Every element should have padding and a margin.
- Sibling elements should not touch or overlap.
- Have balanced whitespace.

**Additional Requirements**

- **`Seed Data`**
- **`Favicon`**
- **`Demo Login`**
- **`Console Output`**
- **`Personal Links`**
- **`Scorecard`**

**Avoid These Things**

- Fonts that look like handwriting.
- Over using accent colors.
- Themes that relate to specific holidays.
- Dead Links.
- Linking to the actual site you are cloning.
- Neon, bright, or crazy colors.
- Having too many different colors in your app.

---

## **For the Love of Data**

- Databases power our internet and our applications.
- **`Relational Database Management Systems`**
  - When we install a RDBMS our our PC, our PC becomes a Database System.
    - Some popular RDBMS: Oracle, MySQL, MS SQLServer, Postgres SQL...
- **`Users`**
  - Software Apps connect to Databases so that the users of those apps can access data.
  - **Types of Users**:
    - **Normal Users**: Those who can just access data.
    - **Super Users**: Can create and manipulate aspects of your database.
      - Keep as little Super Users as possible.
- **`Databases`**
  - Place where we store data.
  - Data is stored in tables, tables are inter-related with one another (this is why it is called Relational Database)
- **`Tables`**
  - Contains an ID column (that provides a unique IQ for every row of the table)
  - Contains a Type column that indicates the data type that is being stored.
  - Every row is a record in the database.

## **Creating Database Entities**

1. Log into PSQL
   `psql`
2. Create a Super User named Berber
   `create user berber with superuser password 'good-cat';`
3. Quit SQL
   `\q`
4. Log-in as your Super User
   `psql -U berber postgres`
   `good-cat`
5. See who you are
   `select current_user`
6. Create a normal user
   `user alycia with password 'good-cat-mom';`
7. Quit and log-in with your normal user
   `\q`
   `psql -U alycia postgres`
   - Normal Users cannot create databases, they can only view, select and insert data.
8. Log back in as yourself, and drop normal user and super user.
   `psql` (default user is a super)
   `drop user alycia`
   `drop user berber`
9. Create a database
   `create database cat_database`
10. View all databases in your RDBMS
    `\list`
11. Create database for a normal user as your super user.
    `create database berber_db with owner berber;`.
    - The normal user will have full control over this granted DB.
    - Can't create duplicate usernames.
12. Get rid of database
    `drop database`
13. See all the users in your database
    `\du`
14. See all tables in your database
    `\dt`
15. Create a table in your database

    ```sql
    create table people (
      first_name varchar(50),
      last_name varchar(50),
      age smallint
    );
    ```

16. Lookup definition of a specific table
    `\d people`
17. Delete your people table and remake it
    `drop table people`
18. Remake people
    ```sql
    create table people (
      id serial,
      first_name varchar(50),
      last_name varchar(50),
      primary key (id)
    );
    ```
19. Create Pet Table w/ references to people table
    ```sql
    create table pets (
      id serial,
      name varchar(255),
      age smallint,
      person_id integer,
      primary key (id),
      foreign key (person_id) references people (id)
    );
    ```

- **Data Types**: Text (unlimited) VARCHAR(limit), always user VC if there can be a character limit.

- Always pick the smallest value type in your database.

- End all SQL commands with a semi-colon.

- **Serial** datatype creates a unique serial number.

- Primary Key indicates the most significant way to identify each row of data.

- References keep our database clean, using foreign keys maintains our database integrity.

## **Database Lingo**

- **`RDBMS`** : Software application that you can run so that your programs can connect and store, modify, and retrieve data. (We will be using PostgreSQL)
- **`Database or Relational Database`** : Collection of structures data that the RDBMS manages for you. (One RDBMS can have hundreds of Databases!)
- **`SQL`** : Structured Query Language, which is a declarative programming language.

  - SQL works on _sets_ of records.
  - Using SQL takes two steps:
    - Connect to an RDBMS with a user acccess.
    - Issue SQL Statements to alter structure of DB or data inside those DB's.

- Some popular RDBMS include: Informix, Microsoft Access, Microsoft SQL Server, MySQL, Oracle DB, SQLite.

---
