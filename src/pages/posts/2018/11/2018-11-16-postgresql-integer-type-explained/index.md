---
title: "PostgreSQL Integer Type Explained"
description: "Learn all about the PostgreSQL integer data type"
slug: "/2018/11/postgresql-integer-type-explained"
date: "Nov. 16, 2018"
num_date: "2018-11-16"
template: "post"
image: ""
---

This post is part of [a series](/2018/11/postgresql-numeric-types) on the numeric data types found in PostgreSQL. Read on to learn all about the integer type. Write a comment if you have any questions or corrections!

## Integer Types

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
      <td>smallint</td>
      <td>2 bytes</td>
      <td>-32,768 to 32,767</td>
    </tr>
    <tr>
      <td>integer</td>
      <td>4 bytes</td>
      <td>-2,147,483,648 to 2,147,483,647</td>
    </tr>
    <tr>
      <td>bigint</td>
      <td>8 bytes</td>
      <td>-9,223,372,036,854,775,808 to +9,223,372,036,854,775,807</td>
    </tr>
  </tbody>
</table>

The `integer` type is used to store **whole numbers**, i.e. numbers without decimals or fractions after them. Examples: 1, 3,305, or 100,242. Each integer type has a range of possible values, as specified in the above table. If you attempt to store a value outside of that range, PostgreSQL will throw an error.

The `integer` type is the most common choice. According to the [PostgreSQL docs](https://www.postgresql.org/docs/current/datatype-numeric.html), this is because it "offers the best balance between range, storage size, and performance". `smallint` is used mostly when disk space is a concern, and `bigint` is recommended whenever the `integer` range isn't large enough. I would also add that, if you know a number will stay within the `smallint` range, I don't see a reason not to use it. Save on those storage bytes!

`integer` can also be shortened to `int`.

## More Numeric Types

Learn about the other numeric data types in one of the following posts:

* [Arbitrary Precision Numbers](/2018/11/postgresql-arbitrary-precision-numbers-explained)
* [Floating-Point Numbers](/2018/11/all-about-floating-point-types-in-postgresql)
* [Serial Numbers](/2018/11/serial-numbers-in-postgresql-explained)
