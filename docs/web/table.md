# table

```pug
table.table
  tbody
    tr.table-head
      th 题目序号
      th 题目类型
      th 难度
      th 题目总分
      th 我的得分
    - for (var x= 0; x<10 ;x++)
      tr.table-body-item
        td 1
        td 选择题
        td 3级
        td 5
        td 3
```

```css
table {
  border-collapse: collapse;
  border: none;
}
```

[table demo](https://codepen.io/cyio/pen/vvYrVL)
[CSS Styling Tables](https://www.w3schools.com/css/css_table.asp)
