---
layout: post
title: Understanding SQL JOINS
tags: ['sql', 'database']
image: img/understanding-sql-joins.jpg
imageCredit: Photo by [JJ Ying](https://unsplash.com/@jjying)
date: 2021-05-05
draft: false
---
_JOIN_, one of the key components of SQL, without which collecting data from multiple tables, in a single query, in a structured format would nearly be impossible.

> A _JOIN_ clause is used to combine rows from two or more tables, based on a related column between them. - w3schools

Simple right? Let's start with an example, suppose you got 2 tables _fees_ and _students_

fees table:

<center>

| feeId | studentId | paidDate |
| :------------: | :------------: | :------------: |
|   145236   |   27   |   2021-05-03   |
|   145237   |   9    |   2021-05-03   |
|   145238   |   63   |   2021-04-30   |
|   145239   |   11   |   2021-05-04   |

</center>

students table:

<center>

| studentId | name |
| :------------: | :------------: |
|   9   |   Allison   |
|   10   |   Dan   |
|   11   |   Kent   |

</center>

Notice that both tables have _studentId_ as a common column. Now we have chance to create the type of relationship (_JOIN_) we want between 2 tables. The blog post assumes here on out that you know how to query data using _WHERE_ clause. 


>Be aware that same column name doesn't always mean they are the ones to create a JOIN on. In most cases, students table would have id as column name for studentId column. Clearly, column name has nothing to do with creating relationship. You must know that yeah that studentId from fees table is id/studentId column in students table.

We're going to create an INNER JOIN (I'll explain what it means below, so keep reading) on _studentId_ column and let's say we query for _feeId - 145237_.

The SQL statment would look like,
```sql
SELECT fees.FeeId, students.name, fees.paidDate 
FROM fees INNER JOIN students 
ON students.studentId=fees.studentId 
WHERE feeId='145237';
```
There may be a question arrising in your mind. Is selecting columns necessary? No, Instead of this selection if I had used *, the result would have 5 column with 2 studentId columns. Using * returns all columns of both tables. 

The query result looks like this,

<center>

| feeId | name | paidDate |
| :------------: | :------------: | :------------: |
|   145237   |   Allison   |   2021-05-03   |

</center>

So, now you've got the basic idea how JOIN works, time to dive deep. I will be using only 2 tables for explaining everything but I'm pretty sure, same concepts are applicable to any number of tables.

There are 5 basic _JOINs_,
1. INNER JOIN
1. LEFT JOIN
3. RIGHT JOIN
4. FULL JOIN
5. CROSS JOIN

## Inner Join

The INNER JOIN selects record that have matching values in both tables. The venn diagram below shows it in the most simplest form.

![Inner Join](img/inner-join.png)

The syntax for creating an _Inner Join_ would look like this, 
```sql
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;
```
Now you already know, what values to subtitute as we have already used _Inner Join_ in the example of _students_ and _fees_. Lets see what happens if we remove the _WHERE_ clause, simple. It will return all the rows with matching column (_studentId_) values.

<center>

| feeId | name | paidDate |
| :------------: | :------------: | :------------: |
|   145237   |   Allison   |   2021-05-03   |
|   145239   |   Kent   |   2021-05-04   |

</center>

> We can also write JOIN instead of INNER JOIN. JOIN is same as INNER JOIN.

## Left Join

Consider the following venn diagram - 

![Left Join](img/left-join.png)

It is clear that LEFT JOIN selects all the records from table 1 (the one that we are creating a join on) and matching records from table 2.

> Now table 1 and table 2 are confusing terms, How I mentally remember this is, LEFT JOIN will select all the records of the table that we specify after the FROM clause and matching records from the other table.  

The query for Left join would look like this,
```sql
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;
```

Now if you subtitute appropriate values in this query and make it run for our _students_ and _fees_ table, the result would look something like this.

<center>

| feeId | name | paidDate |
| :------------: | :------------: | :------------: |
|   145237   |   Allison   |   2021-05-03   |
|   145239   |   Kent   |   2021-05-04   |
|   145236   |      |   2021-05-03   |
|   145238   |      |   2021-04-30   |

</center>

## Right Join

You guessed it right! RIGHT JOIN is quite the opposite of LEFT JOIN. RIGHT JOIN selects all the records from table 2 and matching records from table 1.

> If you find table 1/2 a confusing terminology then I'd suggest use the way, how I try to remember this. I would say select only matching records from the table specified after FROM clause and all the records from the joined table.

Here is how RIGHT JOINs venn diagram would look,

![Right Join](img/right-join.png)

The query for Right Join would have this structure,
```sql
SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;
```

Now if we substitute appropriate values like we did for LEFT JOIN for _students_ and _fees_ table, the result would be this.

<center>

| feeId | name | paidDate |
| :------------: | :------------: | :------------: |
|   145237   |   Allison   |   2021-05-03   |
|   145239   |   Kent   |   2021-05-04   |
|      |   Dan   |      |

</center>

## Full Join

The FULL JOIN (also referred to as FULL OUTER JOIN) returns all the records whether they are matched or not.

![Full Join](img/full-join.png)

The query for full join would look like this,

```sql
SELECT column_name(s)
FROM table1
FULL JOIN table2
ON table1.column_name = table2.column_name;
```

Now if we substitute appropriate values like we did for other queries the result would look something like this,

<center>

| feeId | name | paidDate |
| :------------: | :------------: | :------------: |
|   145236   |      |   2021-05-03   |
|   145237   |      |   2021-05-03   |
|   145238   |      |   2021-04-30   |
|   145239   |      |   2021-05-04   |
|      |   Allison   |      |
|      |   Dan   |      |
|      |   Kent   |      |

</center>

> Please note that Mysql doesn't support FULL JOIN but there are ways we can simulate it. Now I can write a whole article on it but I'd rather suggest to read this [blog post](https://www.xaprb.com/blog/2006/05/26/how-to-write-full-outer-join-in-mysql/).

## Cross Join

The CROSS JOIN returns all the records from both tables. Putting it simply, _cross join_ would result in joining every row of one table to every row of other table. To make sense, let's use it with _students_ and _fees_ table.

The query would look like this,

```sql
SELECT *
FROM fees
CROSS JOIN students
```
Running this query would result in following data,

<center>

| feeId | studentId | paidDate | studentId | name |
| :------------: | :------------: | :------------: | :------------: | :------------: |
|   145236   |   27   |   2021-05-03   |   9   |  Allison  |
|   145236   |   27   |   2021-05-03   |   10   |  Dan  |
|   145236   |   27   |   2021-05-03   |   11   |  Kent  |
|   145237   |   9   |   2021-05-03   |   9   |  Allison  |
|   145237   |   9   |   2021-05-03   |   10   |  Dan  |
|   145237   |   9   |   2021-05-03   |   11   |  Kent  |
|   145238   |   63   |   2021-04-30   |   9   |  Allison  |
|   145238   |   63   |   2021-04-30   |   10   |  Dan  |
|   145238   |   63   |   2021-04-30   |   11   |  Kent  |
|   145238   |   11   |   2021-05-04   |   9   |  Allison  |
|   145238   |   11   |   2021-05-04   |   10   |  Dan  |
|   145238   |   11   |   2021-05-04   |   11   |  Kent  |

</center>

Probably not what you expected, Right?

> CROSS JOIN can potentially return very large result-sets! If you add a WHERE clause with CROSS JOIN, it would return same result as an INNER JOIN query.

## Conclusion

JOINS are awesome for collecting data from multiple tables, all at once. They eases your life as a developer and would also make you look super smart with all the JOINs in a single query (I mean, who worries about the next guy touching this code).

We saw that there 5 basic Joins, INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN and CROSS JOIN and how to implement them.

Good luck!
