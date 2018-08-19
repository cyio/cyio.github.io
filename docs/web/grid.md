# Grid

## 实现常见布局

* 左右等分，适用商品列表展示
```css
.container {
  grid-template-columns:repeat(2, 1fr);
  grid-gap:18rpx;
  padding:18rpx;
}
```

* 左右固定，中间自适应
```css
.container {
	display: grid;
	grid-template-columns: 100px auto 200px;
}
```

* 三七分，栅格布局
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
