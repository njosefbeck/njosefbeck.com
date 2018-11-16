---
title: "All About PostgreSQL Numeric Types"
description: "Learn all about the numeric types supported in PostgreSQL"
slug: "/2018/11/postgresql-numeric-types"
date: "Nov. 16, 2018"
num_date: "2018-11-16"
template: "post"
image: ""
---

In my [last post](https://www.njosefbeck.com/post/postgresql-create-table), I briefly went over the syntax used to create a table in PostgreSQL. When specifying the columns for your table, you need to specify the data type that can go in each column. But, what are all these data types, and how do you decide which one to use? This series of posts will explore the different data types supported in PostgreSQL. This post is all about numeric types.

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

`integer` can also be shorted to `int`.

### Check your understanding

It can be important, when learning a new subject, to review and check your understanding often. This helps get the information from your short term into your long-term memory. Here are a couple of comprehension questions to help.

1. What are the three integer types in PostgreSQL?
2. Which integer type is the most commonly used?
3. Say you're storing the following pieces of data. Which integer data type would be appropriate?
    * People's ages
    * Country populations
    * Number of likes on a Facebook post



