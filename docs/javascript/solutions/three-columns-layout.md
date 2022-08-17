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

`flex: 1`是缩写，相当于 flex-grow

3 个值缩写，第一个值固定为 grow

第二个值，无单位为 shrink，有单位为 basis
