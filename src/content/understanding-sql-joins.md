---
layout: post
title: Understanding SQL JOINS
tags: ['sql']
image: img/understanding-sql-joins.jpg
imageCredit: Photo by [JJ Ying](https://unsplash.com/@jjying)
date: '2021-05-03T12:06:01.752Z'
draft: false
---
JOIN, one of the key components of SQL, without which collecting data from different tables, in a single query, in a structured format would nearly be impossible. Inshort it eases the life of a developer.

> A `JOIN` clause is used to combine rows from two or more tables, based on a related column between them. - w3schools

Simple right? Let's start with an example, suppose you got 2 tables `fees` and `students`

fees table:

| feeId | studentId | paidDate |
| :------------: | :------------: | :------------: |
|   145236   |   27   |   2021-05-03   |
|   145237   |   9   |   2021-05-03   |
|   145238   |   63   |   2021-04-30   |

students table:

| studentId | name |
| :------------: | :------------: |
|   9   |   Allison   |
|   10   |   Dan   |
|   11   |   Kent   |

Notice that both tables have `studentId` as a common column. Now we have chance to create the type relationship (_JOIN_) we want between 2 tables. The blog post assumes here on out that you know how to query using _WHERE_ clause. 

>Be aware that same column name doesn't always mean they are ones to create a JOIN on. In most cases students table would have id as column name for studentId column. To be clear column name has nothing to do with creating relationship. You must know that yeah that studentId from fees table is id/studentId column in students table.

We're going to create an INNER JOIN (I'll explain what it means below, so keep reading) on `studentId` column and let's say we query for `feeId` _145237_.

The SQL statment would look like,
```sql
SELECT fees.FeeId, students.name, fees.paidDate FROM fees INNER JOIN students ON students.studentId=fees.studentId WHERE feeId='145237';
```
There is only one question that may arrise in your mind. Is selecting columns necessary? No, Instead of this selection if I had used *, the result would have 5 column with 2 studentId columns. Using * returns all columns of both tables. 

The query result looks like this,

| feeId | name | paidDate |
| :------------: | :------------: | :------------: |
|   145237   |   Allison   |   2021-05-03   |

So, now you've got the idea how JOIN works, time to dive deep.

There are 4 types of _JOIN_,
1. INNER JOIN
1. LEFT JOIN
3. RIGHT JOIN
4. FULL JOIN
