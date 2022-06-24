# SQL
[toc]

## 去重，两种写法

    where word=‘apple’
    where word like ‘%apple%'

## 范围

    where age between 20 and 23

## 排除

    WHERE university NOT IN ('复旦大学’)

## 肯定否定

    WHERE age IS NOT NULL

## 逻辑运算 AND OR

    WHERE gender = 'male' AND gpa > 3.5

## some 判断

    where university in ('北京大学', '复旦大学', '山东大学’)

## 操作符混用

    where
      university = '山东大学'
      and gpa > 3.5
      or university = '复旦大学'
      and gpa > 3.8

## 字符匹配

一般形式为：
列名 [NOT ] LIKE
匹配串中可包含如下四种通配符：

    _：匹配任意一个字符；

    %：匹配0个或多个字符；

    [ ]：匹配[ ]中的任意一个字符(若要比较的字符是连续的，则可以用连字符“-”表 达 )；

    [^ ]：不匹配[ ]中的任意一个字符。

## 求最大值

    select max(count)

## 排序，取1个

    order by count desc limit 1

## 计数

    select count(gender)

## 取均值

保留 1 位小数（浮点数，小数位多）

    round(avg(gpa), 1)

## 分组 group by

    select
        gender,university,
        count(device_id) as user_num,
        avg(active_days_within_30) as avg_active_day,
        avg(question_cnt) as avg_question_cnt
    from user_profile
    group by gender,university

## 按计算条件取出

where 不支持

    having avg_question_cnt<5 or avg_answer_cnt<20

## 关联表
表A inner join 表B on 条件

join 分类，left 表示左表全部+匹配
[SQL Joins](https://www.w3schools.com/sql/sql_join.asp)

关键字可用大写或小写，有语法高亮时，不重要。尽量换行，提升可读性

练习 https://www.nowcoder.com/exam/oj?tab=SQL%E7%AF%87&topicId=199&fromPut=pc_newmedia_zhihu_kol_rocky

