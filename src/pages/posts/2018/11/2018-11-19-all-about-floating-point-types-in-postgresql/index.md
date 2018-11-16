---
title: "All About Floating-Point Types In PostgreSQL"
description: "Learn all about PostgreSQL floating-point types"
slug: "/2018/11/all-about-floating-point-types-in-postgresql"
date: "Nov. 19, 2018"
num_date: "2018-11-19"
template: "post"
image: ""
---

This post is part of [a series](/2018/11/postgresql-numeric-types) on the numeric data types found in PostgreSQL. Read on to learn all about defining arbitrary precision numbers in PostgreSQL. Write a comment if you have any questions or corrections!

## Floating-Point Numbers

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
      <td>real</td>
      <td>4 bytes</td>
      <td>6 digits precision</td>
    </tr>
    <tr>
      <td>double precision</td>
      <td>8 bytes</td>
      <td>15 digits precision</td>
    </tr>
  </tbody>
</table>

Floating-point numbers are numbers that contain 'floating' decimal points. Examples: 5.5, 0.001, -2,345.3910.

The data types `real` and `double precision` are used to store floating-point numbers. They are inexact, variable-precision numeric types. Inexact means that some values are stored as approximations, so storing a number and then retrieving that value might reveal slight differences.

Knowing this, if you require exact storage and calculations (for monetary information, for example), use `numeric` instead. Additionally, if you want to do complicated calculations with these types, using a more precise type might be preferred. And, finally, when comparing two floating-point values for equality, it might not evaluate as you would expect.

If the above doesn't apply, then you may consider using a `real` or `double precision` data type, as they are faster than `numeric`.

Let's see some examples to understand better how `real` and `double precision` types work.

```sql
-- Table definition
CREATE TABLE moar_num_tests (
  numbah REAL,
  precise_numbah DOUBLE PRECISION
);

/*
  Both numbers will be stored just as entered.
  The real data value is below 6 digits, and
  the double precision value is below 15 digits
  So when you retrieve them, they will still be
  32.021 and 2340.203.
*/
INSERT INTO moar_num_tests VALUES(32.021, 2340.203);

/*
  Both numbers will be stored just as entered.
  The real data value is at 6 digits, and
  the double precision value is at 15 digits
  So when you retrieve them, they will still be
  the same as when entered.
*/
INSERT INTO moar_num_tests VALUES(221.243, 302.103959025367);

/*
  Both numbers will be rounded. So the real becomes 50.306 and
  the double precision becomes 7856864.89745456. Note that in the
  second case, it doesn't round to 7 as you might expect, instead
  it rounds to the nearest even number.
*/
INSERT INTO moar_num_tests VALUES(50.3059832, 7856864.8974545649);

/*
  Inserting a whole number outside of the data type's range puts
  it in exponential notation (5.04033e+11, 7.85686423468975e+20)
*/
INSERT INTO moar_num_tests VALUES(504033059832, 785686423468974545649);
```

Aside from numeric values, floating-point types like `real` and `double precision` also support the values `Infinity`, `-Infinity`, and `NaN`. You must put quotes around them.

PostgreSQL also supports the SQL-standard notations of `FLOAT` and `FLOAT(p)`. P represents the minimum acceptable precision in ***binary*** digits. So:

* `FLOAT(1)` to `FLOAT(24)` represents the `real` type
* `FLOAT, FLOAT(25)` to `FLOAT(53)` represents the `double precision` type

## More Numeric Types

Learn about the other numeric data types in one of the following posts:

* [Integer Type](/2018/11/postgresql-integer-type-explained)
* [Arbitrary Precision Numbers](/2018/11/postgresql-arbitrary-precision-numbers-explained)
* [Serial Numbers](/2018/11/serial-numbers-in-postgresql-explained)