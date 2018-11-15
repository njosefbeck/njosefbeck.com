---
title: "How to create a table in PostgreSQL"
description: "A brief post sharing the basic syntax for creating a table in PostgreSQL"
slug: "/post/postgresql-create-table"
date: "Nov. 15, 2018"
template: "post"
image: ""
---

So I've been learning PostgreSQL (and SQL in general) over this past month, and as a way of solidifying what I'm learning, I'll be posting about it here on my blog. First up, let's look at the syntax involved in creating a very simple PostgreSQL table.

```sql
CREATE TABLE products (
    product_no integer,
    name text,
    price numeric DEFAULT 9.99
);
```

The above SQL command will create a table called products, with three columns. Each column name is defined following the same pattern: column name, the column's data type, and any constraints or additional options. The three columns are:

* product_no, which is an integer
* name, which is text
* price, which is a numeral and has a default of 9.99

And that's it! Stay tuned for future posts where I go into greater detail about creating tables in PostgreSQL.