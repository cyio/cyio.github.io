# CSS布局

## table 结构化内容
* html 同样有表格标签，但不建议用，使用 css table 可以只使用需要的特性，灵活
* flex 也能实现，table 兼容性更好
* seo、性能有问题？
* 最常用场景，动态高度下，实现垂直居中。通过声明`table-cell`，使`vertical-align`可用
```css
.box {
  display:table-cell;
  vertical-align: middle;
  text-align: center;
}

.box {
  display: table;
  margin: auto;
}
```
* 媒体查询，利用 table 属性，调整排序
```
/* 768px */
@media only screen and (max-width:48em) {
   .boxes { 
      display:table;
      width:100%;
   }
   .box {
      display:block;
      width:100%;
   }
   .three { display:table-caption; }
   .four { display:table-header-group; }
   .one { display:table-footer-group; }
}
```
[The Anti-hero of CSS Layout - "display:table" | Colin Toh](https://colintoh.com/blog/display-table-anti-hero)
[Solved by Flexbox — Cleaner, hack-free CSS](https://philipwalton.github.io/solved-by-flexbox/)

## 列表水平排列带 gap wrap
```css
.list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item {
  width: calc(25% - 0.02rem);
}
```
