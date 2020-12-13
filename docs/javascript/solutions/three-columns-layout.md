# 三列布局

```pug
.main
	.left left
	.center center
	.right right
```

```css
.main {
	display: flex;
	min-height: 100vh; // notice 2
}
.left, .right {
	width: 200px;
	background: gray;
}
.center {
	flex-grow: 1; // notice 1
}
```
[three column layout - flex](https://codepen.io/cyio/pen/wvzzzdQ)
