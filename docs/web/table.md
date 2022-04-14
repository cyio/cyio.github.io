# table

表格布局，默认由内容决定
设为 fixed ，指定宽度，往往同时要设定 overflow: hidden 防止溢出
table-layout 

边框类型，默认是分开 seprate
设为 collapse，塌陷合并
border-collapse

相邻单元格的边框间的距离（仅用于“边框分离”模式）
border-spacing: 10px
所以如果是合并模式，设为0可能是没有意义的

## 模板

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

