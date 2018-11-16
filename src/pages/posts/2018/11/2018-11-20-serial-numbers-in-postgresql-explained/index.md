---
title: "Serial Numbers In PostgreSQL Explained"
description: "Learn all about PostgreSQL serial numbers"
slug: "/2018/11/serial-numbers-in-postgresql-explained"
date: "Nov. 20, 2018"
num_date: "2018-11-20"
template: "post"
image: ""
---

This post is part of [a series](/2018/11/postgresql-numeric-types) on the numeric data types found in PostgreSQL. Read on to learn all about defining arbitrary precision numbers in PostgreSQL. Write a comment if you have any questions or corrections!

## Serial Numbers

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Storage size</th>
      <th>Range</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>smallserial</td>
      <td>2 bytes</td>
      <td>1 - 32,767</td>
    </tr>
    <tr>
      <td>serial</td>
      <td>4 bytes</td>
      <td>1 - 2,147,483,647</td>
    </tr>
    <tr>
      <td>bigserial</td>
      <td>8 bytes</td>
      <td>1 - 9,223,372,036,854,775,807</td>
    </tr>
  </tbody>
</table>

The `serial` data type is PostgreSQL's way of specifying an autoincrementing numeric column. In this sense, it is not a true type. It's pretty convenient though. Specifying:

```sql
CREATE TABLE books (
  id SERIAL
);
```

is equivalent to this:

```sql
CREATE SEQUENCE books_id_seq;
CREATE TABLE books (
    id INTEGER NOT NULL DEFAULT nextval('books_id_seq')
);
ALTER SEQUENCE books_id_seq OWNED BY books.id;
```

Definitely the first option is much less verbose! Typically you see the `serial` type used with the `UNIQUE` or `PRIMARY KEY` constraints. Also, you'll notice that a `serial` data type has the `NOT NULL` constraint applied to it automatically, to ensure that a null value can't be inserted.

The `serial` types are equivalent to the `integer` types as far as their positive range goes.

* smallserial (range: 1 - 32,767) = positive smallint range (1 - 32,767)
* serial = int
* bigserial = bigint

## More Numeric Types

Learn about the other numeric data types in one of the following posts:

* [Integer Type](/2018/11/postgresql-integer-type-explained)
* [Arbitrary Precision Numbers](/2018/11/postgresql-arbitrary-precision-numbers-explained)
* [Floating-Point Numbers](/2018/11/all-about-floating-point-types-in-postgresql)
