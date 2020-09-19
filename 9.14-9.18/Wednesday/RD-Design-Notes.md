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
