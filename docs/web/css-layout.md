# CSS 布局
[[toc]]

[CSS layout - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)

## 左侧定宽，右侧自适应

[flex 左侧定宽，右侧自适应](https://codepen.io/cyio/pen/mdrXQor)
```
	flex-grow: 1;
```
[position 左侧定宽，右侧自适应](https://codepen.io/cyio/pen/wvzyQLr)
```
	width: calc(100vw - 200px)
```
[grid 左侧定宽，右侧自适应](https://codepen.io/cyio/pen/KKgQbPB)
```
	grid-template-columns: 200px 1fr;
```

## table 结构化内容

- html 同样有表格标签，但不建议用，使用 css table 可以只使用需要的特性，灵活
- flex 也能实现，table 兼容性更好
- seo、性能有问题？
- 最常用场景，动态高度下，实现垂直居中。通过声明`table-cell`，使`vertical-align`可用

```css
.box {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.box {
  display: table;
  margin: auto;
}
```

- 媒体查询，利用 table 属性，调整排序

```css
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

## Grid VS Flexbox

> Flexbox 非常适合一维布局，但是对于其它一切，我只会使用使用 Flexbox 如果不能用 Grid 的话。

> Flexbox 是内容驱动的。 渐进式渲染会在发现盒子时，给你提供不稳定的布局。 Grid 允许你预先定义布局，因此渐进式渲染可以保持稳定。

Grid 现在除了 IE，都有很好兼容性

[Don't use flexbox for overall page layout - JakeArchibald.com](https://jakearchibald.com/2014/dont-use-flexbox-for-page-layout/)

