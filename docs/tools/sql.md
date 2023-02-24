# SQL
[[toc]]

## 去重，两种写法

```sql
where word=‘apple’
where word like ‘%apple%'
```

## 范围

```sql
where age between 20 and 23
```

## 排除

```sql
WHERE university NOT IN ('复旦大学’)
```

## 肯定否定

```sql
WHERE age IS NOT NULL
```

## 逻辑运算 AND OR

```sql
WHERE gender = 'male' AND gpa > 3.5
```

## some 判断

```sql
where university in ('北京大学', '复旦大学', '山东大学’)
```

## 操作符混用

```sql
where
  university = '山东大学'
  and gpa > 3.5
  or university = '复旦大学'
  and gpa > 3.8
```

## 字符匹配

一般形式为：
列名 [NOT ] LIKE
匹配串中可包含如下四种通配符：

```
  _：匹配任意一个字符；

  %：匹配0个或多个字符；

  [ ]：匹配[ ]中的任意一个字符(若要比较的字符是连续的，则可以用连字符“-”表 达 )；

  [^ ]：不匹配[ ]中的任意一个字符。
```

## 求最大值

```sql
select max(count)
```

## 排序，取1个

```sql
order by count desc limit 1
```

## 计数

```sql
select count(gender)
```

## 取均值

保留 1 位小数（浮点数，小数位多）

```sql
round(avg(gpa), 1)
```

## 分组 group by

```sql
select
    gender,university,
    count(device_id) as user_num,
    avg(active_days_within_30) as avg_active_day,
    avg(question_cnt) as avg_question_cnt
from user_profile
group by gender,university
```

## 按计算条件取出

where 不支持

```sql
having avg_question_cnt<5 or avg_answer_cnt<20
```

## 关联表

表A inner join 表B on 条件

join 分类，left 表示左表全部+匹配
[SQL Joins](https://www.w3schools.com/sql/sql_join.asp)

关键字可用大写或小写，有语法高亮时，不重要。尽量换行，提升可读性

练习 https://www.nowcoder.com/exam/oj?tab=SQL%E7%AF%87&topicId=199&fromPut=pc_newmedia_zhihu_kol_rocky


## select 嵌套语句怎么理解

在嵌套语句中，内部的 SELECT 语句通常作为子查询来生成一个虚拟表，然后外部的 SELECT 语句使用这个虚拟表来进行进一步的查询或操作。

嵌套语句通常用于需要在查询结果中进行进一步筛选或计算的情况，或者需要将一个查询的结果作为另一个查询的输入的情况。例如，以下 SQL 语句使用了嵌套语句来计算一个员工的平均薪资，并且只返回高于平均薪资的员工：

```sql
SELECT emp_name, salary
FROM employee
WHERE salary > (
  SELECT AVG(salary)
  FROM employee
);

```

在这个 SQL 语句中，内部的 SELECT 语句计算了所有员工的平均薪资，并将这个值作为条件用于筛选出高于平均薪资的员工。外部的 SELECT 语句则将符合条件的员工的 emp_name 和 salary 列作为结果返回。

需要注意的是，在使用嵌套语句时，内部的 SELECT 语句必须返回一个结果集，否则外部的 SELECT 语句将无法使用它。另外，由于嵌套语句可能会增加查询的复杂性，因此在实际使用时需要仔细考虑其效率和可维护性。