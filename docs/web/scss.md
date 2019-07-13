# SCSS

[scss play](https://codepen.io/cyio/pen/KrzwYv)
## 关键点
* vue scoped 不能使用全局 mixin ?

## extend
* 实现DRY

```scss
// css 方式，需要新建类
.message-shared

// 避免创建多个类
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.message {
  @extend .message-;
  @extend %message-shared;
}
```

## mixin
属性名表达：`#{$name}`
```scss
@mixin color($name, $value) {
	#{$name}: $value;
}
h1 {
	// @extend .red;
	@include color(color, blue)
}

.red {
	color: red
}
```
[mixins | Element源码分析](http://athena0304.cn/element-analysis/packages/theme-chalk/src/mixins/mixins.html#mixin-scss)
[sass揭秘之@mixin，%，@function_Preprocessor, Sass, SCSS, sass揭秘 教程_w3cplus](https://www.w3cplus.com/preprocessor/sass-mixins-function-placeholder.html)

## 变量
- calc 中使用
    ```css
    height: calc(100vh - #{$--header-h});
    ```
    [css3 - Sass Variable in CSS calc() function - Stack Overflow](https://stackoverflow.com/questions/17982111/sass-variable-in-css-calc-function)
