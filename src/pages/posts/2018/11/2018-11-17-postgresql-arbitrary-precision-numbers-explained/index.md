---
title: "PostgreSQL Arbitrary Precision Numbers Explained"
description: "Learn all about defining arbitrary precision numbers in PostgreSQL"
slug: "/2018/11/postgresql-arbitrary-precision-numbers-explained"
date: "Nov. 17, 2018"
num_date: "2018-11-17"
template: "post"
image: ""
---

This post is part of [a series](/2018/11/postgresql-numeric-types) on the numeric data types found in PostgreSQL. Read on to learn all about defining arbitrary precision numbers in PostgreSQL. Write a comment if you have any questions or corrections!

## Arbitrary Precision Numbers

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
      <td>numeric</td>
      <td>variable</td>
      <td>up to 131,072 digits before the decimal; up to 16,383 digits after the decimal</td>
    </tr>
    <tr>
      <td>decimal</td>
      <td>variable</td>
      <td>same as numeric</td>
    </tr>
  </tbody>
</table>

Use `numeric` or `decimal` (they are interchangeable) to store monetary amounts and other quantities where exactness is required. Calculations on `numeric` or `decimal` values are slower than those performed on `integer` and `floating-point` types, but yield more exact results.

When defining a `numeric` or `decimal` type, you need to specify the amount of **precision** and **scale** that you want.

* Precision is the total count of digits on both sides of the decimal. For example, a number like `237.56` has a precision of 5. `130023.303` has a precision of 9. The precision must be positive.
* Scale is count of decimal digits (i.e. the amount of digits to the right of the decimal). For example, `921.240` has a scale of 3. `3490.12` has a scale of 2. Integers have a scale of zero. The scale must be zero or positive.

When defining a `numeric` or `decimal` column type the syntax is:

```sql
NUMERIC(precision, scale);
DECIMAL(precision, scale);
```

Examples:

```sql
NUMERIC(5, 2) -- Stores numbers up to 999.99
```

Let's imagine I've created a table called `num_tests` and I have one column called `numbah` with a data type of `NUMERIC(5, 2)`. This means that `numbah` will have a precision of 5 and a scale of 2. It will store numbers up to 999.99.

Now let's explore what happens when we try to store different values into this column.

```sql
-- Table definition
CREATE TABLE num_tests (
  numbah NUMERIC(5, 2)
);

/*
  Stores 2.32 as that number is in
  the precision and scale range defined.
*/
INSERT INTO num_tests VALUES(2.32);

/*
  Stores 3.40. Rounds any digits that
  come after the scale defined. Since our
  scale is 2, but we're inserting .402
  that gets rounded to .40
*/
INSERT INTO num_tests VALUES(3.402);

/*
  Stores 3.00. Adds the two zeros to satisfy
  our scale condition of 2.
*/
INSERT INTO num_tests VALUES(3);

/*
  Errors out with error: numeric field overflow
  This happens because the number is greater
  than the precision specified.
*/
INSERT INTO num_tests VALUES(3023.23);
```

Alternatively, we can define the `numeric` or `decimal` type by leaving off the scale or the precision AND scale.

```sql
DECIMAL(precision);
DECIMAL;
```

With no scale defined, the scale defaults to zero. When you don't specify any precision or scale, this creates a column where any precision and scale can be stored, up to the range as defined in the table above. Best practice seems to be to always define your precision and scale.

The maximum allowed precision when explicitly defined as a type (`NUMERIC(5, 2)`) is 1000.

Besides numeric values, you can also store `NaN` ("not-a-number") values in the `numeric` or `decimal` type.

```sql
INSERT INTO num_tests VALUES('NaN');
```

When PostgreSQL rounds a `numeric` or `decimal` value like `-2.5` it will round up to `-3`. This behaves slightly differently from `real` and `double precision` rounding, which rounds to the nearest **even** number. For example:

```sql
  x   |  numeric  |  double
------+-----------+-----------
 -3.5 |        -4 |        -4
 -2.5 |        -3 |        -2
 -1.5 |        -2 |        -2
 -0.5 |        -1 |        -0
  0.5 |         1 |         0
  1.5 |         2 |         2
  2.5 |         3 |         2
  3.5 |         4 |         4
```

## More Numeric Types

Learn about the other numeric data types in one of the following posts:

* [Integer Type](/2018/11/postgresql-integer-type-explained)
* [Floating-Point Numbers](/2018/11/all-about-floating-point-types-in-postgresql)
* [Serial Numbers](/2018/11/serial-numbers-in-postgresql-explained)