# Grid
[[toc]]

## 基础

- grid-gap 是 column-gap 和 row-gap 的缩写
- grid-column 是 grid-column-start 和 grid-column-end 的缩写，注意不包括 end

新单位 fr - A flexible length 可变长度，一份

grid-column-end: -2; 计数是按边算

grid-column-end: span 2; 相对值，占用两格

grid-column: 4 / 6 缩写语法

只指定头或尾时，只占一格

grid-area: 1/2/4/6 区域简写，row / col

不规则区域，可定义多个 grid-area 解决

## 实现常见布局

- 左右等分，适用商品列表展示

```css
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 18px;
}
```

- 左右固定，中间自适应

```css
.container {
  display: grid;
  grid-template-columns: 100px auto 200px;
}
```

- 三七分，栅格布局
  `grid-column`不包括 end

```css
.container {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
}

.column-3 {
  grid-column: 1 / 4;
}

.column-7 {
  grid-column: 4 / 11;
}
```

[Grid by Example - Usage examples of CSS Grid Layout](https://gridbyexample.com/examples/)

[CSS Grid Generator](https://cssgrid-generator.netlify.com/)

[My Favorite CSS Guides, Cheatsheets and Tools by Olivia Ng on CodePen](https://codepen.io/oliviale/post/css-guides)

[CSS Grid and Grid Inspector in Firefox — Mozilla](https://www.mozilla.org/en-US/developer/css-grid/)

[Ten modern layouts in one line of CSS](https://web.dev/one-line-layouts/#05.-classic-holy-grail-layout:-grid-template:-auto-1fr-auto-auto-1fr-auto)

[Deep Dive into CSS Grid ― Scotch.io](https://scotch.io/tutorials/deep-dive-into-css-grid-2)

